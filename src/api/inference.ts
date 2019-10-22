import { D2CategorySchema } from "./../schemas/models";
import { FieldPreset } from "./../schemas/base";

/* Generic Helpers */

type If<Condition, Then, Else> = Condition extends true ? Then : Else;

type IsLiteral<T> = T extends object ? false : true;

type RejectByValue<Base, Value> = { [Key in keyof Base]: Base[Key] extends Value ? never : Key };

type RejectedKeys<Base, Value> = RejectByValue<Base, Value>[keyof Base];

type OmitByValue<Base, Value> = Pick<Base, RejectedKeys<Base, Value>>;

export type OmitNever<T> = OmitByValue<T, never>;

/* Selector helpers */

// https://docs.dhis2.org/2.30/en/developer/html/dhis2_developer_manual_full.html#webapi_field_transformers

/*
type SelectorValue =
    | boolean
    | { fn: "size" }
    | { fn: "isEmpty" }
    | { fn: "isNotEmpty" }
    | { fn: "rename"; name: string }
    | { fn: "paging"; page: number; perPage: number }
    | { fn: "pluck"; name: string };
*/

// https://docs.dhis2.org/2.30/en/developer/html/dhis2_developer_manual_full.html#webapi_metadata_field_filter

export type Selector<ModelSchema extends ModelSchemaBase> = {
    [Key in keyof ModelSchema["fields"]]?:
        | boolean
        | If<
              IsLiteral<ModelSchema["fields"][Key]>,
              boolean, // TODO: functions
              ModelSchema["fields"][Key] extends Array<infer T>
                  ? (
                        | boolean
                        | (T extends ModelSchemaBase ? Selector<T> : never)) /* | functions | */
                  : ModelSchema["fields"][Key] extends ModelSchemaBase
                  ? Selector<ModelSchema["fields"][Key]>
                  : ModelSchema["fields"][Key]
          >;
} &
    {
        [K in FieldPreset]?: boolean;
    };

export type ValidateSameKeys<SM, ModelSelector> = Exclude<
    keyof SM,
    keyof ModelSelector
> extends never
    ? ModelSelector
    : { error: "Unknown keys in selector"; keys: Exclude<keyof SM, keyof ModelSelector> };

export type SelectedPickValidated<Model extends ModelSchemaBase, SM> = SM extends ValidateSameKeys<
    SM,
    Selector<Model>
>
    ? SelectedPick<Model, SM>
    : never;

interface ModelSchemaBase {
    fields: { [s: string]: any };
    fieldPresets: {
        [FieldPresetK in FieldPreset]: { [s: string]: any };
    };
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((
    k: infer I
) => void)
    ? I
    : never;

export type SelectedPick<
    Model extends ModelSchemaBase,
    ModelSelector extends Selector<Model>
> = UnionToIntersection<Model["fieldPresets"][keyof ModelSelector & FieldPreset]> &
    SelectedPickSimple<Model, ModelSelector>;

export type Result1 = SelectedPick<D2CategorySchema, { id: true; $identifiable: true }>;
export type Result2 = D2CategorySchema["fieldPresets"];

export type SelectedPickSimple<
    Model extends ModelSchemaBase,
    ModelSelector extends Selector<Model>
> = OmitNever<
    {
        [Key in keyof ModelSelector & keyof Model["fields"]]: ModelSelector[Key] extends object
            ? Model["fields"][Key] extends Array<infer T>
                ? T extends ModelSchemaBase
                    ? SelectedPickValidated<T, ModelSelector[Key]>[]
                    : T
                : (Model["fields"][Key] extends ModelSchemaBase
                      ? SelectedPickValidated<Model["fields"][Key], ModelSelector[Key]>
                      : Model["fields"][Key])
            : ModelSelector[Key] extends true
            ? (IsLiteral<Model["fields"][Key]> extends true
                  ? Model["fields"][Key]
                  : (Model["fields"] extends { id: string } ? { id: string } : never))
            : never;
    }
>;

export type Get<Obj, Key> = Key extends keyof Obj ? Obj[Key] : never;

export type GetFields<Obj> = Get<Obj, "fields">;
