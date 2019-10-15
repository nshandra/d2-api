import "axios-debug-log";
import axios, { AxiosBasicCredentials, AxiosInstance } from "axios";
import _ from "lodash";
//import { stringify } from "querystring";
import qs from "qs";

export const joinPath = (...parts: (string | undefined | null)[]): string => {
    return _(parts)
        .map(part => (part ? part.replace(/^\/+|\/+$/g, "") : null))
        .compact()
        .join("/");
};

export const prepareConnection = (baseURL: string, auth?: AxiosBasicCredentials): AxiosInstance => {
    const instance = axios.create({
        baseURL,
        auth,
        withCredentials: !auth,
        paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
        validateStatus: status => status >= 200 && status < 300, // default
    });

    return instance;
};
