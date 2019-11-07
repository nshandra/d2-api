import Axios, { AxiosInstance, AxiosBasicCredentials, AxiosRequestConfig } from "axios";
import _ from "lodash";

import { D2ModelSchemas, D2ModelEnum } from "./../schemas/models";
import { joinPath, prepareConnection } from "../utils/connection";
import D2ApiMetadata from "./metadata";
import D2ApiModel from "./models";

import { Params, D2ApiResponse } from "./common";
import D2ApiCurrentUser from "./current-user";

export interface D2ApiOptions {
    baseUrl?: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

type Models = { [ModelName in keyof D2ModelSchemas]: D2ApiModel<ModelName> };

export class D2ApiDefault {
    public apiPath: string;
    public connection: AxiosInstance;
    public metadata: D2ApiMetadata;
    public models: Models;
    public currrentUser: D2ApiCurrentUser;

    public constructor(options?: D2ApiOptions) {
        const { baseUrl = "http://localhost:8080", apiVersion, auth } = options || {};
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
        this.metadata = new D2ApiMetadata(this);
        this.currrentUser = new D2ApiCurrentUser(this);
        this.models = _(Object.keys(D2ModelEnum))
            .map((modelName: keyof D2ModelSchemas) => [modelName, new D2ApiModel(this, modelName)])
            .fromPairs()
            .value() as Models;
    }

    public request<T>(config: AxiosRequestConfig): D2ApiResponse<T> {
        const { token: cancelToken, cancel } = Axios.CancelToken.source();
        const axiosResponse = this.connection({ cancelToken, ...config });
        const apiResponse = axiosResponse.then(response_ => ({
            status: response_.status,
            data: response_.data as T,
            headers: response_.headers,
        }));

        return {
            cancel,
            response: apiResponse,
            getData: () => apiResponse.then(({ data }) => data),
        };
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

export type D2Api = D2ApiDefault;
