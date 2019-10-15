import _ from "lodash";
import {
    GetOptionValue,
    processFieldsFilterParams,
    Params,
    ErrorReport,
    D2ApiResponse,
    mapD2ApiResponse,
} from "./common";
import D2Api from "./d2-api";

interface GetOptions {
    [model: string]: GetOptionValue;
}

export interface PostOptions {
    importMode: "COMMIT" | "VALIDATE";
    identifier: "UID" | "CODE" | "AUTO";
    importReportMode: "ERRORS" | "FULL" | "DEBUG";
    preheatMode: "REFERENCE" | "ALL" | "NONE";
    importStrategy: "CREATE_AND_UPDATE" | "CREATE" | "UPDATE" | "DELETE";
    atomicMode: "ALL" | "NONE";
    mergeMode: "MERGE" | "REPLACE";
    flushMode: "AUTO" | "OBJECT";
    skipSharing: boolean;
    skipValidation: boolean;
    async: boolean;
    inclusionStrategy: "NON_NULL" | "ALWAYS" | "NON_EMPTY";
    userOverrideMode: "NONE" | "CURRENT" | "SELECTED";
    overrideUser: string;
}

export interface Stats {
    created: number;
    updated: number;
    deleted: number;
    ignored: number;
    total: number;
}

export interface MetadataResponse {
    importParams: PostOptions;
    status: "OK" | "ERROR";
    stats: Stats;
    typeReports: TypeReport[];
}

export interface ObjectReport {
    klass: string;
    index: number;
    uid: string;
    errorReports: ErrorReport[];
}

export interface TypeReport {
    klass: string;
    stats: Stats;
    objectReports: ObjectReport[];
}

export default class D2ApiMetadata {
    d2Api: D2Api;

    constructor(d2Api: D2Api) {
        this.d2Api = d2Api;
    }

    get<T>(options: GetOptions): D2ApiResponse<T> {
        const metadataOptions = _(options)
            .map((modelOptions, modelName) => processFieldsFilterParams(modelOptions, modelName))
            .reduce(_.merge, {});

        function createEmpty(data: T): T {
            return _(options)
                .mapValues(() => [])
                .merge(data)
                .value();
        }

        const apiResponse = this.d2Api.get<T>("/metadata", metadataOptions);
        return mapD2ApiResponse(apiResponse, createEmpty);
    }

    post(data: object, options?: PostOptions): D2ApiResponse<MetadataResponse> {
        return this.d2Api.request({
            method: "post",
            url: "/metadata",
            params: (options || {}) as Params,
            data,
            validateStatus: (status: number) => status >= 200 && status < 300,
        });
    }
}
