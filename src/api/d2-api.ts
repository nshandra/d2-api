import Axios, { AxiosInstance, AxiosBasicCredentials, AxiosRequestConfig } from "axios";
import _ from "lodash";

import { Model, D2Models } from "./../schemas/models";
import { joinPath, prepareConnection } from "../utils/connection";
import D2ApiMetadata from "./metadata";
import D2ApiModel from "./models";

import { Params, D2ApiResponse } from "./common";

export { D2ApiResponse };

export interface D2ApiOptions {
    baseUrl?: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

type Models = { [ModelName in keyof D2Models]: D2ApiModel<ModelName> };

export default class D2Api {
    private apiPath: string;

    public connection: AxiosInstance;
    public metadata: D2ApiMetadata;
    public models: Models;

    public constructor(options?: D2ApiOptions) {
        const { baseUrl = "http://localhost:8080", apiVersion, auth } = options || {};
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
        this.metadata = new D2ApiMetadata(this);
        this.models = _(Object.keys(Model))
            .map((modelName: keyof D2Models) => [modelName, new D2ApiModel(this, modelName)])
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
