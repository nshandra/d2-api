import { SelectedPick, GetFields } from "./inference";
import { D2ModelSchemas } from "./../schemas/models";
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

export type GetOptions<ModelKey extends keyof D2ModelSchemas> = GetOptionValue<ModelKey> &
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

export default class D2ApiModel<ModelKey extends keyof D2ModelSchemas> {
    d2Api: D2Api;
    modelName: ModelKey;

    constructor(d2Api: D2Api, modelName: ModelKey) {
        this.d2Api = d2Api;
        this.modelName = modelName;
    }

    get<
        GetOptionsE extends GetOptions<ModelKey>,
        Object = SelectedPick<D2ModelSchemas[ModelKey], GetFields<GetOptionsE>>
    >(options: GetOptionsE): D2ApiResponse<PaginatedObjects<Object>> {
        // TODO: use GetOptions to automatically infer paginated or paginated objects
        const paramsFieldsFilter = processFieldsFilterParams(options as any);
        const params = { ...options, ...paramsFieldsFilter } as any;
        const apiResponse = this.d2Api.get<
            {
                [K in ModelKey]: Object[];
            } & { pager: Pager }
        >(this.modelName as string, params as Params);

        return mapD2ApiResponse(apiResponse, data => ({
            pager: data.pager,
            objects: data[this.modelName] as Object[],
        }));
    }

    post<Payload extends Partial<D2ModelSchemas[ModelKey]["model"]>>(
        payload: Payload,
        options?: UpdateOptions
    ): D2ApiResponse<GenericResponse> {
        return this.d2Api.post(this.modelName, (options || {}) as Params, payload);
    }

    put<Payload extends Partial<D2ModelSchemas[ModelKey]["model"]>>(
        payload: Payload,
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
