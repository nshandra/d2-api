import { Model, ModelName } from "./../schemas/models";
import Axios, { AxiosInstance, AxiosResponse, Canceler, AxiosBasicCredentials } from "axios";
import _ from "lodash";

import { joinPath, prepareConnection } from "../utils/connection";
import D2ApiMetadata from "./d2-api-metadata";
import D2ApiModel from "./d2-api-models";

export interface D2ApiOptions {
    baseUrl: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

export type D2ApiMethod = "get" | "post" | "put" | "delete";

export type D2ApiRequestParamsValue = string | number | boolean | undefined;

export interface Params {
    [key: string]: D2ApiRequestParamsValue | D2ApiRequestParamsValue[];
}

export interface D2ApiResponse<T> {
    cancel: Canceler;
    response: Promise<AxiosResponse<T>>;
}

export type D2ApiIdentifier = string;

export default class D2Api {
    private apiPath: string;
    private connection: AxiosInstance;
    metadata: D2ApiMetadata;
    models: { [K in ModelName]: D2ApiModel };

    public constructor({ baseUrl, apiVersion, auth }: D2ApiOptions) {
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
        this.metadata = new D2ApiMetadata(this);
        this.models = _(Object.keys(Model))
            .map(modelName => [modelName, new D2ApiModel(this, modelName)])
            .fromPairs()
            .value() as { [K in ModelName]: D2ApiModel };
    }

    public request<T>(
        method: D2ApiMethod,
        url: string,
        params?: Params,
        data?: object
    ): D2ApiResponse<T> {
        const { token: cancelToken, cancel } = Axios.CancelToken.source();
        const response = this.connection({ method, url, cancelToken, params, data });
        return { cancel, response };
    }

    public get<T>(endpoint: string, params?: Params) {
        return this.request<T>("get", endpoint, params);
    }

    public post<T>(endpoint: string, params?: Params, data?: object) {
        return this.request<T>("post", endpoint, params, data);
    }

    public put<T>(endpoint: string, params?: Params, data?: object) {
        return this.request<T>("put", endpoint, params, data);
    }

    public delete<T>(endpoint: string, params?: Params) {
        return this.request<T>("delete", endpoint, params);
    }
}
