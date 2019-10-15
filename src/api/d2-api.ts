import Axios, { AxiosInstance, AxiosBasicCredentials, AxiosRequestConfig } from "axios";
import _ from "lodash";

import { Model, D2Models } from "./../schemas/models";
import { joinPath, prepareConnection } from "../utils/connection";
import D2ApiMetadata from "./d2-api-metadata";
import D2ApiModel from "./d2-api-models";

import { Params, D2ApiResponse } from "./common";

export interface D2ApiOptions {
    baseUrl: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

type Models = { [MN in keyof D2Models]: D2ApiModel<D2Models[MN]> };

export default class D2Api {
    private apiPath: string;
    private connection: AxiosInstance;
    metadata: D2ApiMetadata;
    models: Models;

    public constructor({ baseUrl, apiVersion, auth }: D2ApiOptions) {
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
        this.metadata = new D2ApiMetadata(this);
        this.models = _(Object.keys(Model))
            .map(modelName => [modelName, new D2ApiModel(this, modelName)])
            .fromPairs()
            .value() as Models;
    }

    public request<T>(config: AxiosRequestConfig): D2ApiResponse<T> {
        const { token: cancelToken, cancel } = Axios.CancelToken.source();
        const response = this.connection({ cancelToken, ...config });
        return { cancel, response };
    }

    public get<T>(url: string, params?: Params) {
        return this.request<T>({ method: "get", url, params });
    }

    public post<T>(url: string, params?: Params, data?: object) {
        return this.request<T>({ method: "post", url, params, data });
    }

    public put<T>(url: string, params?: Params, data?: object) {
        return this.request<T>({ method: "put", url, params, data });
    }

    public delete<T>(url: string, params?: Params) {
        return this.request<T>({ method: "delete", url, params });
    }
}
