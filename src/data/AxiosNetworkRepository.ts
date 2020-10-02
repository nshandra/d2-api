import MockAdapter from "axios-mock-adapter";
import axios, { AxiosInstance } from "axios";
import {
    NetworkRepository,
    NetworkCredentials,
    NetworkRequest,
    NetworkResponse,
} from "../repositories/NetworkRepository";
import qs from "qs";
import { CancelableResponse } from "../repositories/NetworkResponse";
import { cache } from "../utils/cache";

export class AxiosNetworkRepository implements NetworkRepository {
    private instance: AxiosInstance;

    constructor(baseUrl: string, auth?: NetworkCredentials) {
        this.instance = this.getAxiosInstance(baseUrl, auth);
    }

    request<Data>(options: NetworkRequest): CancelableResponse<Data> {
        const { token: cancelToken, cancel } = axios.CancelToken.source();
        const axiosResponse = this.instance({ cancelToken, ...options });
        const response: Promise<NetworkResponse<Data>> = axiosResponse.then(response_ => ({
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

    private getAxiosInstance(baseUrl: string, auth?: NetworkCredentials) {
        return axios.create({
            baseURL: baseUrl,
            auth,
            withCredentials: !auth,
            paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
            validateStatus: status => status >= 200 && status < 300, // default
        });
    }
}

// TODO: Use NetworkError
