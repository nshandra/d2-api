import Axios, { AxiosBasicCredentials, AxiosInstance, AxiosAdapter } from "axios";
import AxiosRetry from "retry-axios";
import { setupCache } from "axios-cache-adapter";

import { FetchError } from "../types/FetchError";

export const joinPath = (...parts: (string | undefined | null)[]): string => {
    const realParts = parts.filter(part => !!part) as string[];
    return realParts.map(part => part.replace(/^\/+|\/+$/g, "")).join("/");
};

const prepareCache = () =>
    setupCache({
        maxAge: 5 * 60 * 1000,
        exclude: {
            paths: [/\/metadata/],
        },
        debug: process.env.NODE_ENV === "development",
    });

export const prepareConnection = (baseURL: string, auth?: AxiosBasicCredentials): AxiosInstance => {
    // Set-up request cache for five minutes based on endpoint and query parameters
    const cache = prepareCache();

    // Create re-usable instance of axios
    const instance = Axios.create({
        baseURL,
        auth,
        withCredentials: !auth,
        adapter: cache.adapter as AxiosAdapter,
    });

    // Retry requests 3 times with exponential back-off time
    AxiosRetry.attach(instance);

    // Intercept errors for response
    instance.interceptors.response.use(
        response => response,
        error => {
            throw new FetchError({
                type: FetchError.ERROR_UNKNOWN,
                message: "Unknown error",
                details: error,
            });
        }
    );

    return instance;
};
