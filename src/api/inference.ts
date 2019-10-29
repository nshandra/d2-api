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

export type Selector<ModelSchema extends ModelInfoBase> = {
    [Key in keyof ModelSchema["fields"]]?:
        | boolean
        | If<
              IsLiteral<ModelSchema["fields"][Key]>,
              boolean, // TODO: functions
              ModelSchema["fields"][Key] extends Array<infer T>
                  ? (boolean | (T extends ModelInfoBase ? Selector<T> : never)) /* | functions | */
                  : ModelSchema["fields"][Key] extends ModelInfoBase
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

export type SelectedPickValidated<Model extends ModelInfoBase, SM> = SM extends ValidateSameKeys<
    SM,
    Selector<Model>
>
    ? SelectedPick<Model, SM>
    : never;

interface ModelInfoBase {
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
    Schema extends ModelInfoBase,
    SchemaSelector extends Selector<Schema>
> = UnionToIntersection<Schema["fieldPresets"][keyof SchemaSelector & FieldPreset]> &
    SelectedPickFields<Schema, SchemaSelector>;

export type SelectedPickFields<
    Model extends ModelInfoBase,
    ModelSelector extends Selector<Model>
> = OmitNever<
    {
        [Key in keyof ModelSelector & keyof Model["fields"]]: ModelSelector[Key] extends object
            ? Model["fields"][Key] extends Array<infer T>
                ? T extends ModelInfoBase
                    ? SelectedPickValidated<T, ModelSelector[Key]>[]
                    : T
                : (Model["fields"][Key] extends ModelInfoBase
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
