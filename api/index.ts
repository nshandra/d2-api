import Axios, { AxiosInstance, AxiosResponse, Canceler, AxiosBasicCredentials } from "axios";

import { joinPath, prepareConnection } from "../utils/connection";

export interface D2ApiInput {
    baseUrl: string;
    minApi: number;
    auth?: AxiosBasicCredentials;
}

export type D2ApiMethod = "get" | "post" | "delete";

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

export default class {
    private apiPath: string;
    private connection: AxiosInstance;

    public constructor({ baseUrl, minApi, auth }: D2ApiInput) {
        this.apiPath = joinPath(baseUrl, "api", String(minApi));
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

    public delete(endpoint: string, params?: D2ApiRequestParams) {
        return this.request("delete", endpoint, params);
    }

    public exportMetadata(ids: D2ApiIdentifier[], params: D2ApiRequestParams = {}) {
        console.log(ids, params);
        /**const requests = chunk(ids, 250).map(ids => this.request('get', '/metadata', {
                ...params,
                filter: [
                    ...(params.filter || []),
                    `id:in:[${ids.join(',')}]`
                ]
        }));

        const cancel = () => requests.forEach(request => request.cancel());
        const response = async () => {

        }

        return {cancel, response};**/
    }

    public importMetadata() {
        // TODO
    }
}
