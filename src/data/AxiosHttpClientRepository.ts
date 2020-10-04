import MockAdapter from "axios-mock-adapter";
import axios, { AxiosInstance } from "axios";
import {
    HttpClientRepository,
    Credentials,
    HttpRequest,
    HttpResponse,
} from "../repositories/HttpClientRepository";
import qs from "qs";
import { CancelableResponse } from "../repositories/CancelableResponse";
import { cache } from "../utils/cache";

export class AxiosHttpClientRepository implements HttpClientRepository {
    private instance: AxiosInstance;

    constructor(baseUrl: string, auth?: Credentials) {
        this.instance = this.getAxiosInstance(baseUrl, auth);
    }

    request<Data>(options: HttpRequest): CancelableResponse<Data> {
        const { token: cancelToken, cancel } = axios.CancelToken.source();
        const axiosResponse = this.instance({ cancelToken, ...options });
        const response: Promise<HttpResponse<Data>> = axiosResponse.then(response_ => ({
            status: response_.status,
            data: response_.data as Data,
            headers: response_.headers,
        }));

        return CancelableResponse.build({ cancel, response: response });
    }

    @cache()
    getMockAdapter(): MockAdapter {
        return new MockAdapter(this.instance);
    }

    private getAxiosInstance(baseUrl: string, auth?: Credentials) {
        return axios.create({
            baseURL: baseUrl,
            auth,
            withCredentials: !auth,
            paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
            validateStatus: status => status >= 200 && status < 300, // default
        });
    }
}

// TODO: Wrap errors with HttpError (like backend fetch does)
