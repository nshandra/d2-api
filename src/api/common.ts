import { Filter } from "./common";
import { D2ModelSchemas } from "./../schemas/models";
import _ from "lodash";
import { Canceler, AxiosResponse } from "axios";
import { Selector } from "./inference";

export interface ErrorReport {
    message: string;
    mainKlass: string;
    errorKlass: string;
    errorProperty: string;
    errorCode: string;
}

export interface FieldsSelector {
    [property: string]: boolean | FieldsSelector;
}

export interface GetOptionValue<ModelKey extends keyof D2ModelSchemas> {
    fields: Selector<D2ModelSchemas[ModelKey]>;
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
                return value ? key.replace(/^\$/, ":") : null;
            } else {
                return key + "[" + getFieldsAsString(value) + "]";
            }
        })
        .compact()
        .join(",");
}

export interface GetOptionGeneric {
    fields: FieldsSelector;
    filter: Filter | Filter[];
}

export function processFieldsFilterParams(
    modelOptions: GetOptionGeneric,
    modelName?: string
): _.Dictionary<any> {
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

export interface D2ApiResponse<T> {
    cancel: Canceler;
    response: Promise<AxiosResponse<T>>;
}

export function mapD2ApiResponse<R, T>(
    apiResponse: D2ApiResponse<R>,
    mapper: (apiResponse: R) => T
): D2ApiResponse<T> {
    const { cancel, response } = apiResponse;
    const mappedResponse = response.then(response_ => ({
        ...response_,
        data: mapper(response_.data),
    }));
    return { cancel, response: mappedResponse };
}

export type D2ApiRequestParamsValue = string | number | boolean | undefined;

export interface Params {
    [key: string]: D2ApiRequestParamsValue | D2ApiRequestParamsValue[];
}

export interface GenericResponse {
    httpStatus: "OK" | "Conflict";
    httpStatusCode: number;
    status: "OK" | "ERROR";
    message?: string;
    response?: {
        responseType: "ObjectReport";
        uid: string;
        klass: string;
        errorReports?: ErrorReport[];
    };
}
