import _ from "lodash";
import D2Api, { D2ApiResponse } from "./d2-api";
import { GetOptionValue, getParams } from "./common";
import { AxiosResponse } from "axios";

export interface Pager {
    page: number;
    pageCount: number;
    total: number;
    pageSize: number;
}

export interface PaginatedObjects<T> {
    pager: Pager;
    objects: T[];
}

export interface GetParams {
    pageSize?: number;
    paging?: boolean;
    filter?: string[];
    fields?: string;
}

export default class D2ApiModel<T> {
    d2Api: D2Api;
    name: T;

    constructor(d2Api: D2Api, name: T) {
        this.d2Api = d2Api;
        this.name = name;
    }

    get<T>(options: GetOptionValue): D2ApiResponse<PaginatedObjects<T>> {
        const params = getParams(options);
        const { cancel, response } = this.d2Api.get<any>(`/${this.name}`, params);
        const responseWithObjects = response.then(response_ => ({
            ...response_,
            data: {
                pager: response_.data.pager,
                objects: response_.data[this.name],
            },
        })) as Promise<AxiosResponse<PaginatedObjects<T>>>;
        return { cancel, response: responseWithObjects };
    }
}
