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

interface NamedSelectors {
    $all: boolean;
    $identifiable: boolean;
    $nameable: boolean;
    $persisted: boolean;
    $owner: boolean;
}

export type Selector<Model> = {
    [Key in keyof Model]?: If<
        IsLiteral<Model[Key]>,
        boolean, // boolean | {"fn": "size"} | {"fn": "rename", name: "myid"} | ...
        Model[Key] extends Array<infer T>
            ? (boolean | /* | functions | */ Selector<T>)
            : Selector<Model[Key]>
    >;
} &
    Partial<NamedSelectors>;

export type ValidateSameKeys<SM, ModelSelector> = Exclude<
    keyof SM,
    keyof ModelSelector
> extends never
    ? ModelSelector
    : { error: "Unknown keys in selector"; keys: Exclude<keyof SM, keyof ModelSelector> };

export type SelectedPickValidated<Model, SM> = SM extends ValidateSameKeys<SM, Selector<Model>>
    ? SelectedPick<Model, SM>
    : never;

export type SelectedPick<Model, ModelSelector extends Selector<Model>> = OmitNever<
    {
        [Key in keyof ModelSelector & keyof Model]: ModelSelector[Key] extends object
            ? Model[Key] extends Array<infer T>
                ? SelectedPickValidated<T, ModelSelector[Key]>[]
                : SelectedPickValidated<Model[Key], ModelSelector[Key]>
            : ModelSelector[Key] extends true
            ? (IsLiteral<Model[Key]> extends true
                  ? Model[Key]
                  : (Model extends { id: string } ? { id: string } : never))
            : never;
    }
>;
