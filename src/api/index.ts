import Axios, { AxiosInstance, AxiosResponse, Canceler, AxiosBasicCredentials } from "axios";

import { joinPath, prepareConnection } from "../utils/connection";

export interface D2ApiOptions {
    baseUrl: string;
    apiVersion?: number;
    auth?: AxiosBasicCredentials;
}

export type D2ApiMethod = "get" | "post" | "put" | "delete";

export type D2ApiRequestParamsValue = string | number | boolean | undefined;

export interface D2ApiRequestParams {
    pageSize?: number;
    paging?: boolean;
    filter?: string[];
    [key: string]: D2ApiRequestParamsValue | D2ApiRequestParamsValue[];
}

export interface D2ApiResponse {
    cancel: Canceler;
    response: Promise<AxiosResponse>;
}

export type D2ApiIdentifier = string;

export default class D2Api {
    private apiPath: string;
    private connection: AxiosInstance;

    public constructor({ baseUrl, apiVersion, auth }: D2ApiOptions) {
        this.apiPath = joinPath(baseUrl, "api", apiVersion ? String(apiVersion) : null);
        this.connection = prepareConnection(this.apiPath, auth);
    }

    public request(method: D2ApiMethod, url: string, params?: D2ApiRequestParams, data?: any) {
        const { token: cancelToken, cancel } = Axios.CancelToken.source();
        const response = this.connection({ method, url, cancelToken, params, data });
        return { cancel, response };
    }

    public get(endpoint: string, params?: D2ApiRequestParams) {
        return this.request("get", endpoint, params);
    }

    public post(endpoint: string, params?: D2ApiRequestParams, data?: any) {
        return this.request("post", endpoint, params, data);
    }

    public put(endpoint: string, params?: D2ApiRequestParams, data?: any) {
        return this.request("put", endpoint, params, data);
    }

    public delete(endpoint: string, params?: D2ApiRequestParams) {
        return this.request("delete", endpoint, params);
    }

    public exportMetadata(_ids: D2ApiIdentifier[], _params: D2ApiRequestParams = {}) {
        // TODO
    }

    public importMetadata() {
        // TODO
    }
}
