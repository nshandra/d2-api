import { FieldPreset, Ref } from "./../schemas/base";

/* Generic Helpers */

type If<Condition, Then, Else> = Condition extends true ? Then : Else;

type IsLiteral<T> = T extends object ? false : true;

type RejectByValue<Base, Value> = { [Key in keyof Base]: Base[Key] extends Value ? never : Key };

type RejectedKeys<Base, Value> = RejectByValue<Base, Value>[keyof Base];

type OmitByValue<Base, Value> = Pick<Base, RejectedKeys<Base, Value>>;

export type OmitNever<T> = OmitByValue<T, never>;

/* Selector helpers */

// https://docs.dhis2.org/2.30/en/developer/html/dhis2_developer_manual_full.html#webapi_field_transformers

// https://docs.dhis2.org/2.30/en/developer/html/dhis2_developer_manual_full.html#webapi_metadata_field_filter

export type Selector<ModelSchema extends ModelInfoBase> = {
    [Key in keyof ModelSchema["fields"]]?:
        | boolean
        | {}
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

//ModelSelector[Key] extends FunctionFieldSelector
// {[K in Key]:

type GetValues<T> = UnionToIntersection<T[keyof T]>;

//type DefaultSelector<S> = S extends true ? true : keyof S extends never ? true : false;

type SelectorKey<
    Model extends ModelInfoBase,
    ModelSelector,
    K extends keyof ModelSelector & keyof Model["fields"]
> = ModelSelector[K] extends object
    ? Model["fields"][K] extends Array<infer T>
        ? T extends ModelInfoBase
            ? SelectedPickValidated<T, ModelSelector[K]>[]
            : T
        : (Model["fields"][K] extends ModelInfoBase
              ? SelectedPickValidated<Model["fields"][K], ModelSelector[K]>
              : Model["fields"][K])
    : ModelSelector[K] extends true
    ? (IsLiteral<Model["fields"][K]> extends true
          ? Model["fields"][K]
          : GetTrueSelectionOnNonLiteral<Model["fields"][K]>)
    : never;

type GetTrueSelectionOnNonLiteral<SchemaValue> = SchemaValue extends Array<infer T>
    ? (T extends { fieldPresets: any } ? Ref[] : T[])
    : SchemaValue extends { fieldPresets: any }
    ? Ref
    : SchemaValue;

export type SelectedPickFields<
    Model extends ModelInfoBase,
    ModelSelector extends Selector<Model>
> = GetValues<
    {
        [Key in keyof ModelSelector & keyof Model["fields"]]: ModelSelector[Key] extends {
            $fn: { name: "rename"; to: string };
        }
            ? {
                  [K in ModelSelector[Key]["$fn"]["to"]]: SelectorKey<Model, ModelSelector, Key>;
              }
            : {
                  [K in Key]: SelectorKey<Model, ModelSelector, K>;
              };
    }
>;

export type Get<Obj, Key> = Key extends keyof Obj ? Obj[Key] : never;

export type GetFields<Obj> = Get<Obj, "fields">;
