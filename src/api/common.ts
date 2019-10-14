import _ from "lodash";

export interface FieldsSelector {
    [property: string]: boolean | FieldsSelector;
}

export interface GetOptionValue {
    fields?: FieldsSelector;
    filter?: Filter | Filter[];
}

type FilterSingleOperator =
    | "eq"
    | "!eq"
    | "ne"
    | "like"
    | "!like"
    | "$like"
    | "!$like"
    | "like$"
    | "!like$"
    | "ilike"
    | "ilike"
    | "$ilike"
    | "!$ilike"
    | "ilike$"
    | "!ilike$"
    | "gt"
    | "ge"
    | "lt"
    | "le"
    | "null"
    | "!null"
    | "empty"
    | "token"
    | "!token";

type FilterCollectionOperator = "in" | "!in";

export interface Filter {
    [property: string]: {
        [K in FilterSingleOperator]?: string;
    } &
        {
            [K in FilterCollectionOperator]?: string[];
        };
}

function getFieldsAsString(modelFields: FieldsSelector): string {
    return _(modelFields)
        .map((value, key) => {
            if (typeof value === "boolean") {
                return value ? key : null;
            } else {
                return key + "[" + getFieldsAsString(value) + "]";
            }
        })
        .compact()
        .join(",");
}

export function getParams(modelOptions: GetOptionValue, modelName?: string): _.Dictionary<any> {
    const join = (s: string) => _.compact([modelName, s]).join(":");
    return _.pickBy({
        [join("fields")]: modelOptions.fields && getFieldsAsString(modelOptions.fields),
        [join("filter")]:
            modelOptions.filter &&
            _.map(modelOptions.filter || [], (filter: Filter, field) =>
                _.map(filter, (value, op) =>
                    op === "in" || op === "!in"
                        ? `${field}:${op}:[${(value as string[]).join(",")}]`
                        : `${field}:${op}:${value}`
                )
            ),
    });
}
