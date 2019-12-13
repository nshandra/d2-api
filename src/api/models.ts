import _ from "lodash";

import { D2ModelSchemas } from "./../schemas/models";
import { SelectedPick, GetFields } from "./inference";
import { Ref } from "../schemas/base";
import { D2Api } from "./d2-api";
import {
    GetOptionValue,
    processFieldsFilterParams,
    D2ApiResponse,
    Params,
    GenericResponse,
    PartialModel,
} from "./common";

export interface Pager {
    page: number;
    pageCount: number;
    total: number;
    pageSize: number;
}

export interface NonPaginatedObjects<T> {
    objects: T[];
}

export interface PaginatedObjects<T> extends NonPaginatedObjects<T> {
    pager: Pager;
}

export type GetOptions<ModelKey extends keyof D2ModelSchemas> = GetOptionValue<ModelKey> &
    Partial<{
        page: number;
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

type GetObject<ModelKey extends keyof D2ModelSchemas, Options> = SelectedPick<
    D2ModelSchemas[ModelKey],
    GetFields<Options>
>;

export default class D2ApiModel<ModelKey extends keyof D2ModelSchemas> {
    d2Api: D2Api;
    modelName: ModelKey;

    constructor(d2Api: D2Api, modelName: ModelKey) {
        this.d2Api = d2Api;
        this.modelName = modelName;
    }

    get<
        Options extends GetOptions<ModelKey> & { paging?: true | undefined },
        Object = GetObject<ModelKey, Options>
    >(options: Options): D2ApiResponse<PaginatedObjects<Object>>;

    get<
        Options extends GetOptions<ModelKey> & { paging?: false },
        Object = GetObject<ModelKey, Options>
    >(options: Options): D2ApiResponse<NonPaginatedObjects<Object>>;

    get<Options extends GetOptions<ModelKey>, Object = GetObject<ModelKey, Options>>(
        options: Options
    ): D2ApiResponse<PaginatedObjects<Object>> | D2ApiResponse<NonPaginatedObjects<Object>> {
        const paramsFieldsFilter = processFieldsFilterParams(options as any);
        const params = { ...options, ...paramsFieldsFilter } as any;
        const apiResponse = this.d2Api.get<
            {
                [K in ModelKey]: Object[];
            } & { pager: Pager }
        >(this.modelName as string, params as Params);

        return apiResponse.map(({ data }) => {
            return {
                ...(options.paging || options.paging === undefined ? { pager: data.pager } : {}),
                objects: data[this.modelName] as Object[],
            };
        });
    }

    post(
        payload: PartialModel<D2ModelSchemas[ModelKey]["model"]>,
        options?: UpdateOptions
    ): D2ApiResponse<GenericResponse> {
        return this.d2Api.post(this.modelName, (options || {}) as Params, payload);
    }

    put(
        payload: Ref & PartialModel<D2ModelSchemas[ModelKey]["model"]>,
        options?: UpdateOptions
    ): D2ApiResponse<GenericResponse> {
        return this.d2Api.put(
            [this.modelName, payload.id].join("/"),
            (options || {}) as Params,
            payload
        );
    }

    delete<Object extends Ref>(payload: Object): D2ApiResponse<GenericResponse> {
        return this.d2Api.delete(`/${this.modelName}/${payload.id}`);
    }
}
