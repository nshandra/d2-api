import MockAdapter from "axios-mock-adapter";
import btoa from "btoa";
import _ from "lodash";
import qs from "qs";

import {
    NetworkRepository,
    NetworkCredentials,
    NetworkRequest,
    NetworkResponse,
    NetworkError,
    NetworkErrorOptions,
} from "../repositories/NetworkRepository";
import { CancelableResponse } from "../repositories/NetworkResponse";
import { joinPath } from "../utils/connection";

export class FetchNetworkRepository implements NetworkRepository {
    constructor(private baseUrl: string, private auth?: NetworkCredentials) {}

    request<Data>(options: NetworkRequest): CancelableResponse<Data> {
        const controller = new AbortController();
        const { baseUrl, auth } = this;
        const { method, url, params, data, validateStatus = validateStatus2xx } = options;

        const baseHeaders: Record<string, string> = {
            Accept: "application/json, text/plain",
            ...(data ? { "Content-Type": "application/json;charset=UTF-8" } : {}),
        };

        const authHeaders: Record<string, string> = auth
            ? { Authorization: "Basic " + btoa(auth.username + ":" + auth.password) }
            : {};

        const fetchOptions: RequestInit = {
            method,
            signal: controller.signal,
            body: JSON.stringify(data),
            headers: { ...baseHeaders, ...authHeaders },
            credentials: auth ? ("omit" as const) : ("include" as const),
        };

        const fullUrl = joinPath(baseUrl, url) + getQueryStrings(params);

        const fetchResponse = fetch(fullUrl, fetchOptions);

        const response: Promise<NetworkResponse<Data>> = fetchResponse.then(async res => {
            const dataIsJson = (res.headers.get("content-type") || "").includes("json");
            const data = (await (dataIsJson ? res.json() : res.text())) as Data;
            if (!validateStatus(res.status)) raiseNetworkError(options, res, data);
            return { status: res.status, data: data, headers: getHeadersRecord(res.headers) };
        });

        return CancelableResponse.build({
            cancel: () => controller.abort(),
            response: response,
        });
    }

    getMockAdapter(): MockAdapter {
        throw new Error("Not implemented");
    }
}

type Value = string | number | boolean | undefined;

function getQueryStrings(params: Record<string, Value | Value[]> | undefined): string {
    if (_.isEmpty(params)) {
        return "";
    } else {
        return "?" + qs.stringify(params, { arrayFormat: "repeat" });
    }
}

function validateStatus2xx(status: number) {
    return status >= 200 && status < 300;
}

function raiseNetworkError(
    request: NetworkRequest,
    response: Response,
    body: unknown
): Promise<void> {
    const options: NetworkErrorOptions = {
        request: request,
        response: {
            status: response.status,
            headers: getHeadersRecord(response.headers),
            data: body,
        },
    };

    throw new NetworkError(response.statusText, options);
}

function getHeadersRecord(headers: Headers) {
    return headers ? _.fromPairs(Array.from(headers.entries())) : {};
}
