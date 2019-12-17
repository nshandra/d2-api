import { D2ApiResponse } from "./common";
import { D2Api } from "./d2-api";

export default class DataStore {
    constructor(public d2Api: D2Api, public namespace: string) {}

    get<T>(key: string): D2ApiResponse<T | undefined> {
        const { d2Api, namespace } = this;

        return d2Api
            .request<T>({
                method: "GET",
                url: `/dataStore/${namespace}/${key}`,
                validateStatus: validate404,
            })
            .map(response => (response.status === 404 ? undefined : response.data));
    }

    save(key: string, value: object): D2ApiResponse<void> {
        const { d2Api, namespace } = this;
        const config = { url: `/dataStore/${namespace}/${key}`, data: value };

        return d2Api
            .request<void>({
                method: "PUT",
                ...config,
                validateStatus: validate404,
            })
            .flatMap(response => {
                if (response.status === 404) {
                    return d2Api.request({ method: "POST", ...config });
                } else {
                    return D2ApiResponse.build({ response: Promise.resolve(response) });
                }
            });
    }
}

function validate404(status: number): boolean {
    return (status >= 200 && status < 300) || status === 404;
}
