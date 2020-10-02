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
    private mockAdapter: MockAdapter;

    constructor(baseUrl: string, auth?: NetworkCredentials) {
        this.instance = this.getAxiosInstance(baseUrl, auth);
        this.mockAdapter = new MockAdapter(this.instance);
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

    getMockAdapter(): MockAdapter {
        return this.mockAdapter;
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
