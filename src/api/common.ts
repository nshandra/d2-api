import { Filter } from "./common";
import { D2ModelSchemas } from "./../schemas/models";
import _ from "lodash";
import { Canceler } from "axios";
import { Selector } from "./inference";

export interface ErrorReport {
    message: string;
    mainKlass: string;
    errorKlass: string;
    errorProperty: string;
    errorCode: string;
}

export interface GetOptionValue<ModelKey extends keyof D2ModelSchemas> {
    fields: Selector<D2ModelSchemas[ModelKey]>;
    filter?: Filter;
}

type FieldsSelector = object;

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

function applyFieldTransformers(key: string, value: any) {
    if (value.hasOwnProperty("$fn")) {
        switch (value["$fn"]["name"]) {
            case "rename":
                return {
                    key: `${key}~rename(${value["$fn"]["to"]})`,
                    value: _.omit(value, ["$fn"]),
                };
            default:
                return { key, value };
        }
    } else {
        return { key, value };
    }
}

function getFieldsAsString(modelFields: FieldsSelector): string {
    return _(modelFields)
        .map((value0, key0: string) => {
            const { key, value } = applyFieldTransformers(key0, value0);

            if (typeof value === "boolean" || _.isEqual(value, {})) {
                return value ? key.replace(/^\$/, ":") : null;
            } else {
                return key + "[" + getFieldsAsString(value) + "]";
            }
        })
        .compact()
        .sortBy()
        .join(",");
}

export interface GetOptionGeneric {
    fields: FieldsSelector;
    filter: Filter;
}

function isEmptyFilterValue(val: any): boolean {
    return val === undefined || val === null || val === "" || _.isEqual(val, []);
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
            _.sortBy(
                _.flatMap(modelOptions.filter || {}, (filter: Filter, field) =>
                    _.compact(
                        _.map(filter, (value, op) =>
                            isEmptyFilterValue(value)
                                ? null
                                : op === "in" || op === "!in"
                                ? `${field}:${op}:[${(value as string[]).join(",")}]`
                                : `${field}:${op}:${value}`
                        )
                    )
                )
            ),
    });
}

export interface D2Response<Data> {
    status: number;
    data: Data;
    headers: _.Dictionary<string>;
}

export interface D2ApiResponse<Data> {
    cancel: Canceler;
    response: Promise<D2Response<Data>>;
    getData: () => Promise<Data>;
}

export function mapD2ApiResponse<Data, MappedData>(
    apiResponse: D2ApiResponse<Data>,
    mapper: (apiResponse: Data) => MappedData
): D2ApiResponse<MappedData> {
    const { cancel, response } = apiResponse;
    const mappedResponse = response.then(response_ => ({
        ...response_,
        data: mapper(response_.data),
    }));

    return {
        cancel,
        getData: () => mappedResponse.then(({ data }) => data),
        response: mappedResponse,
    };
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
