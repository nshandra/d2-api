import _ from "lodash";
import D2Api, { D2ApiResponse, Params } from "./d2-api";
import { GetOptionValue, processFieldsFilterParams } from "./common";
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

export type GetOptions = GetOptionValue & {
    pageSize?: number;
    paging?: boolean;
    order?: string;
};

export interface GetParams {
    fields?: string;
    filter?: string[];
    pageSize?: number;
    paging?: boolean;
    order?: string;
}

export default class D2ApiModel<T> {
    d2Api: D2Api;
    name: string;

    constructor(d2Api: D2Api, name: string) {
        this.d2Api = d2Api;
        this.name = name;
    }

    get<GetOptions_ extends GetOptions>(options: GetOptions_): D2ApiResponse<PaginatedObjects<T>> {
        const paramsFieldsFilter = processFieldsFilterParams(options);
        const params = { ...options, ...paramsFieldsFilter } as GetParams;
        const { cancel, response } = this.d2Api.get<any>(`/${this.name}`, params as Params);
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
