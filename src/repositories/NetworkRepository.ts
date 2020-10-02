import { NetworkRequest } from "./NetworkRepository";
import MockAdapter from "axios-mock-adapter";
import { CancelableResponse } from "./NetworkResponse";

export interface NetworkRepository {
    request<Data>(options: NetworkRequest): CancelableResponse<Data>;
    getMockAdapter(): MockAdapter;
}

export type Method = "get" | "post" | "put" | "delete";

export type ParamValue = string | number | boolean | undefined;

export interface NetworkRequest {
    method: Method;
    url: string;
    params?: Record<string, ParamValue | ParamValue[]>;
    data?: unknown;
    validateStatus?(status: number): boolean;
}

export interface NetworkResponse<Data> {
    status: number;
    data: Data;
    headers: Record<string, string>;
}

export interface NetworkCredentials {
    username: string;
    password: string;
}

export interface NetworkErrorOptions {
    request: NetworkRequest;
    response: NetworkResponse<unknown>;
}

export class NetworkError extends Error implements NetworkErrorOptions {
    request: NetworkRequest;
    response: NetworkResponse<unknown>;

    constructor(message: string, obj: NetworkErrorOptions) {
        super(message);
        this.request = obj.request;
        this.response = obj.response;
    }
}
