import Axios, { AxiosBasicCredentials, AxiosInstance } from "axios";
import _ from "lodash";

export const joinPath = (...parts: (string | undefined | null)[]): string => {
    return _(parts)
        .map(part => (part ? part.replace(/^\/+|\/+$/g, "") : null))
        .compact()
        .join("/");
};

export const prepareConnection = (baseURL: string, auth?: AxiosBasicCredentials): AxiosInstance => {
    return Axios.create({
        baseURL,
        auth,
        withCredentials: !auth
    });
};
