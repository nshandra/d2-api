import _ from "lodash";
import D2Api, { Params } from "./d2-api";
import { GetOptionValue, getParams } from "./common";

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

export interface ErrorReport {
    message: string;
    mainKlass: string;
    errorKlass: string;
    errorProperty: string;
    errorCode: string;
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

    get(options: GetOptions) {
        const metadataOptions = _(options)
            .map((modelOptions, modelName) => getParams(modelOptions, modelName))
            .reduce(_.merge, {});
        return this.d2Api.get("/metadata", metadataOptions);
    }

    post(payload: object, options?: PostOptions) {
        return this.d2Api.post("/metadata", (options || {}) as Params, payload);
    }
}
