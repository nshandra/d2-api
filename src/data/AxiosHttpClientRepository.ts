import MockAdapter from "axios-mock-adapter";
import axios, { AxiosInstance } from "axios";
import qs from "qs";

import {
    HttpClientRepository,
    HttpRequest,
    HttpResponse,
    ConstructorOptions,
} from "../repositories/HttpClientRepository";
import { CancelableResponse } from "../repositories/CancelableResponse";

export class AxiosHttpClientRepository implements HttpClientRepository {
    private instance: AxiosInstance;

    constructor(options: ConstructorOptions) {
        this.instance = this.getAxiosInstance(options);
    }

    request<Data>(options: HttpRequest): CancelableResponse<Data> {
        const { token: cancelToken, cancel } = axios.CancelToken.source();
        const axiosResponse = this.instance({ cancelToken, ...options });
        const response: Promise<HttpResponse<Data>> = axiosResponse.then(res => ({
            status: res.status,
            data: res.data as Data,
            headers: res.headers,
        }));

        return CancelableResponse.build({ cancel, response: response });
    }

    getMockAdapter(): MockAdapter {
        return new MockAdapter(this.instance);
    }

    private getAxiosInstance(options: ConstructorOptions) {
        return axios.create({
            baseURL: options.baseUrl,
            auth: options.auth,
            withCredentials: !options.auth,
            paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
            validateStatus: status => status >= 200 && status < 300,
            timeout: options.timeout,
        });
    }
}

// TODO: Wrap errors with HttpError (like backend fetch does)
