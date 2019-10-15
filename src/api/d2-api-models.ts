import _ from "lodash";
import { Ref } from "./../schemas/models";
import D2Api from "./d2-api"
import {
    GetOptionValue,
    processFieldsFilterParams,
    D2ApiResponse,
    Params,
    mapD2ApiResponse,
    GenericResponse,
} from "./common";

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

export type GetOptions = GetOptionValue &
    Partial<{
        pageSize: number;
        paging: boolean;
        order: string;
        rootJunction: "AND" | "OR";
    }>;

export interface UpdateOptions {
    preheatCache: boolean;
    strategy: "CREATE_AND_UPDATE" | "CREATE" | "UPDATE" | "DELETE";
    mergeMode: "REPLACE" | "MERGE";
}

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
        const apiResponse = this.d2Api.get<any>(`/${this.name}`, params as Params);
        const { name } = this;
        function useObjectsProperty(data: any): PaginatedObjects<T> {
            return {
                pager: data.pager,
                objects: data[name],
            };
        }

        return mapD2ApiResponse(apiResponse, useObjectsProperty);
    }

    post(payload: object, options?: UpdateOptions): D2ApiResponse<GenericResponse> {
        return this.d2Api.post(`/${this.name}`, (options || {}) as Params, payload);
    }

    put<T extends Ref>(payload: T, options?: UpdateOptions): D2ApiResponse<GenericResponse> {
        return this.d2Api.put(`/${this.name}/${payload.id}`, (options || {}) as Params, payload);
    }

    delete<T extends Ref>(payload: T): D2ApiResponse<GenericResponse> {
        return this.d2Api.delete(`/${this.name}/${payload.id}`);
    }
}
