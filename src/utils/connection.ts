import Axios, { AxiosBasicCredentials, AxiosInstance } from "axios";

export const joinPath = (...parts: (string | undefined | null)[]): string => {
    const realParts = parts.filter(part => !!part) as string[];
    return realParts.map(part => part.replace(/^\/+|\/+$/g, "")).join("/");
};

export const prepareConnection = (baseURL: string, auth?: AxiosBasicCredentials): AxiosInstance => {
    return Axios.create({
        baseURL,
        auth,
        withCredentials: !auth
    });
};
