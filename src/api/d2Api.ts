import _ from "lodash";
import Axios, { AxiosInstance, AxiosBasicCredentials, AxiosRequestConfig } from "axios";

import { joinPath, prepareConnection } from "../utils/connection";
import { Params, D2ApiResponse, D2ApiDefinitionBase } from "./common";

import { Metadata } from "./metadata";
import { Model } from "./model";
import { CurrentUser } from "./currentUser";
import { Analytics } from "./analytics";
import { DataValues } from "./dataValues";
import { DataStore } from "./dataStore";
import { System } from "./system";

export interface D2ApiOptions {
    baseUrl?: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

export type IndexedModels<D2ApiDefinition extends D2ApiDefinitionBase> = {
    [ModelKey in keyof D2ApiDefinition["schemas"]]: Model<
        D2ApiDefinition,
        D2ApiDefinition["schemas"][ModelKey]
    >;
};

export class D2ApiBase {
    public baseUrl: string;
    public apiPath: string;
    public connection: AxiosInstance;
    public baseConnection: AxiosInstance;

    public constructor(options?: D2ApiOptions) {
        const { baseUrl = "http://localhost:8080", apiVersion, auth } = options || {};
        this.baseUrl = baseUrl;
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
        this.baseConnection = prepareConnection(baseUrl, auth);
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

    async getVersion(): Promise<string> {
        const info = await this.get<{ version: string }>("/system/info").getData();
        return info.version;
    }
}

export class D2ApiDefault<D2ApiDefinition extends D2ApiDefinitionBase> extends D2ApiBase {
    public metadata: Metadata<D2ApiDefinition>;
    public models: IndexedModels<D2ApiDefinition>;
    public currentUser: CurrentUser<D2ApiDefinition>;
    public analytics: Analytics;
    public dataValues: DataValues;
    public system: System;

    getIndexedModels(
        modelClass: any,
        modelKeys: Array<keyof D2ApiDefinition["schemas"]>
    ): IndexedModels<D2ApiDefinition> {
        return _(modelKeys)
            .map(modelKey => [modelKey, new modelClass(this, modelKey)])
            .fromPairs()
            .value() as IndexedModels<D2ApiDefinition>;
    }

    dataStore(namespace: string): DataStore {
        return new DataStore(this, namespace);
    }

    public constructor(
        options?: D2ApiOptions,
        modelKeys?: Array<keyof D2ApiDefinition["schemas"]>
    ) {
        super(options);
        // TODO: all these properties should be initialized on-demand
        this.metadata = new Metadata(this);
        this.currentUser = new CurrentUser(this);
        this.analytics = new Analytics(this);
        this.dataValues = new DataValues(this);
        this.models = this.getIndexedModels(Model, modelKeys || []);
        this.system = new System(this);
    }
}
