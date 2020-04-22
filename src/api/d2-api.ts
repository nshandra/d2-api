import Axios, { AxiosInstance, AxiosBasicCredentials, AxiosRequestConfig } from "axios";
import _ from "lodash";

import { D2ModelSchemas, D2ModelEnum } from "./../schemas/models";
import { joinPath, prepareConnection } from "../utils/connection";
import Metadata from "./metadata";
import { Model } from "./model";

import { Params, D2ApiResponse } from "./common";
import CurrentUser from "./current-user";
import DataStore from "./dataStore";
import Analytics from "./analytics";
import DataValues from "./dataValues";
import System from "./system";

export interface D2ApiOptions {
    baseUrl?: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

type IndexedModels = { [ModelName in keyof D2ModelSchemas]: Model<ModelName> };

export class D2ApiDefault {
    public baseUrl: string;
    public apiPath: string;
    public connection: AxiosInstance;
    public baseConnection: AxiosInstance;
    public metadata: Metadata;
    public models: IndexedModels;
    public currentUser: CurrentUser;
    public analytics: Analytics;
    public dataValues: DataValues;
    public system: System;

    public constructor(options?: D2ApiOptions) {
        const { baseUrl = "http://localhost:8080", apiVersion, auth } = options || {};
        this.baseUrl = baseUrl;
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
        this.baseConnection = prepareConnection(baseUrl, auth);
        this.metadata = new Metadata(this);
        this.currentUser = new CurrentUser(this);
        this.analytics = new Analytics(this);
        this.dataValues = new DataValues(this);
        this.system = new System(this);
        this.models = _(Object.keys(D2ModelEnum))
            .map((modelName: keyof D2ModelSchemas) => [modelName, new Model(this, modelName)])
            .fromPairs()
            .value() as IndexedModels;
    }

    dataStore(namespace: string): DataStore {
        return new DataStore(this, namespace);
    }

    public request<T>(config: AxiosRequestConfig): D2ApiResponse<T> {
        const { token: cancelToken, cancel } = Axios.CancelToken.source();
        const axiosResponse = this.connection({ cancelToken, ...config });
        const apiResponse = axiosResponse.then(response_ => ({
            status: response_.status,
            data: response_.data as T,
            headers: response_.headers,
        }));

        return D2ApiResponse.build({ cancel, response: apiResponse });
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
