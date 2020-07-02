import Axios, { AxiosBasicCredentials, AxiosInstance, AxiosRequestConfig } from "axios";
import { cache, defineLazyCachedProperty } from "../utils/cache";
import { joinPath, prepareConnection } from "../utils/connection";
import { Analytics } from "./analytics";
import { D2ApiDefinitionBase, D2ApiResponse, Params } from "./common";
import { CurrentUser } from "./currentUser";
import { DataStore } from "./dataStore";
import { DataValues } from "./dataValues";
import { Metadata } from "./metadata";
import { Model } from "./model";
import { System } from "./system";
import { Email } from "./email";
import { MessageConversations } from "./messageConversations";

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

export class D2ApiGeneric {
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

export abstract class D2ApiVersioned<
    D2ApiDefinition extends D2ApiDefinitionBase
> extends D2ApiGeneric {
    getIndexedModels(
        modelClass: any,
        modelKeys: Array<keyof D2ApiDefinition["schemas"]>
    ): IndexedModels<D2ApiDefinition> {
        let indexedModels: Partial<IndexedModels<D2ApiDefinition>> = {};
        modelKeys.forEach(key => {
            defineLazyCachedProperty(indexedModels, key, () => new modelClass(this, key));
        });
        return indexedModels as IndexedModels<D2ApiDefinition>;
    }

    dataStore(namespace: string): DataStore {
        return new DataStore(this, namespace);
    }

    constructor(options?: D2ApiOptions, private modelKeys?: (keyof D2ApiDefinition["schemas"])[]) {
        super(options);
    }

    @cache()
    get metadata(): Metadata<D2ApiDefinition> {
        return new Metadata(this);
    }

    @cache()
    get models(): IndexedModels<D2ApiDefinition> {
        return this.getIndexedModels(Model, this.modelKeys || []);
    }

    @cache()
    get currentUser(): CurrentUser<D2ApiDefinition> {
        return new CurrentUser(this);
    }

    @cache()
    get analytics() {
        return new Analytics(this);
    }

    @cache()
    get dataValues() {
        return new DataValues(this);
    }

    @cache()
    get system() {
        return new System(this);
    }

    @cache()
    get messageConversations() {
        return new MessageConversations(this);
    }

    @cache()
    get email() {
        return new Email(this);
    }
}
