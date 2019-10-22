import { D2ModelSchemas } from "./../schemas/models";
import { Pager } from "./../../build/api/models.d";
import _ from "lodash";
import { Ref } from "../schemas/base";
import D2Api from "./d2-api";
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

export default class D2ApiModel<ModelName extends keyof D2ModelSchemas> {
    d2Api: D2Api;
    modelName: ModelName;

    constructor(d2Api: D2Api, modelName: ModelName) {
        this.d2Api = d2Api;
        this.modelName = modelName;
    }

    get(options: GetOptions): D2ApiResponse<PaginatedObjects<D2ModelSchemas[ModelName]>> {
        // TODO: use GetOptions to automatically infer paginated or paginated objects
        const paramsFieldsFilter = processFieldsFilterParams(options);
        const params = { ...options, ...paramsFieldsFilter } as GetParams;
        const apiResponse = this.d2Api.get<
            { [K in ModelName]: D2ModelSchemas[ModelName][] } & { pager: Pager }
        >(this.modelName as string, params as Params);
        return mapD2ApiResponse(apiResponse, data => ({
            pager: data.pager,
            objects: data[this.modelName] as D2ModelSchemas[ModelName][],
        }));
    }

    post(payload: object, options?: UpdateOptions): D2ApiResponse<GenericResponse> {
        return this.d2Api.post(this.modelName, (options || {}) as Params, payload);
    }

    put<T extends Ref>(payload: T, options?: UpdateOptions): D2ApiResponse<GenericResponse> {
        return this.d2Api.put(
            `/${this.modelName}/${payload.id}`,
            (options || {}) as Params,
            payload
        );
    }

    delete<T extends Ref>(payload: T): D2ApiResponse<GenericResponse> {
        return this.d2Api.delete(`/${this.modelName}/${payload.id}`);
    }
}
