import { D2ApiResponse } from "./common";
import { D2ApiGeneric } from "./d2Api";

export class DataStore {
    private endpoint: string;

    constructor(public d2Api: D2ApiGeneric, type: DataStoreType, public namespace: string) {
        this.endpoint = type === "user" ? "userDataStore" : "dataStore";
    }

    getKeys(): D2ApiResponse<string[]> {
        const { d2Api, namespace } = this;

        return d2Api
            .request<string[]>({
                method: "get",
                url: `/${this.endpoint}/${namespace}`,
                validateStatus: validate404,
            })
            .map(response => (response.status === 404 ? [] : response.data));
    }

    get<T>(key: string): D2ApiResponse<T | undefined> {
        const { d2Api, namespace } = this;

        return d2Api
            .request<T>({
                method: "get",
                url: `/${this.endpoint}/${namespace}/${key}`,
                validateStatus: validate404,
            })
            .map(response => (response.status === 404 ? undefined : response.data));
    }

    save(key: string, value: object): D2ApiResponse<void> {
        const { d2Api, namespace } = this;
        const config = { url: `/${this.endpoint}/${namespace}/${key}`, data: value };

        return d2Api
            .request<void>({
                method: "put",
                ...config,
                validateStatus: validate404,
            })
            .flatMap(response => {
                if (response.status === 404) {
                    return d2Api.request({ method: "post", ...config });
                } else {
                    return D2ApiResponse.build({ response: Promise.resolve(response) });
                }
            });
    }

    delete(key: string): D2ApiResponse<boolean> {
        const { d2Api, namespace } = this;

        return d2Api
            .request({
                method: "delete",
                url: `/${this.endpoint}/${namespace}/${key}`,
                validateStatus: validate404,
            })
            .map(response => (response.status === 404 ? false : true));
    }
}

function validate404(status: number): boolean {
    return (status >= 200 && status < 300) || status === 404;
}

export type DataStoreType = "global" | "user";
