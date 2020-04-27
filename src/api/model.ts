import { SelectedPick, GetFields, D2ModelSchemaBase } from "./inference";
import { D2ApiBase } from "./d2Api";
import {
    GetOptionValue,
    processFieldsFilterParams,
    D2ApiResponse,
    Params,
    HttpResponse,
    PartialModel,
    PartialPersistedModel,
    ErrorReport,
    D2ApiDefinitionBase,
} from "./common";

type ModelResponse = HttpResponse<{
    responseType: "ObjectReport";
    uid: string;
    klass: string;
    errorReports?: ErrorReport[];
}>;

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

export type GetOptions<
    D2ApiDefinition extends D2ApiDefinitionBase,
    D2ModelSchema extends D2ModelSchemaBase
> = GetOptionValue<D2ApiDefinition, D2ModelSchema> &
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

type GetObject<D2ModelSchema extends D2ModelSchemaBase, Options> = SelectedPick<
    D2ModelSchema,
    GetFields<Options>
>;

export class Model<
    D2ApiDefinition extends D2ApiDefinitionBase,
    D2ModelSchema extends D2ModelSchemaBase
> {
    constructor(private d2Api: D2ApiBase, private modelName: D2ModelSchema["name"]) {}

    get<
        Options extends GetOptions<D2ApiDefinition, D2ModelSchema> & { paging?: true | undefined },
        Obj = GetObject<D2ModelSchema, Options>
    >(options: Options): D2ApiResponse<PaginatedObjects<Obj>>;

    get<
        Options extends GetOptions<D2ApiDefinition, D2ModelSchema> & { paging?: false },
        Obj = GetObject<D2ModelSchema, Options>
    >(options: Options): D2ApiResponse<NonPaginatedObjects<Obj>>;

    get<
        Options extends GetOptions<D2ApiDefinition, D2ModelSchema>,
        Obj = GetObject<D2ModelSchema, Options>
    >(
        options: Options
    ): D2ApiResponse<PaginatedObjects<Obj>> | D2ApiResponse<NonPaginatedObjects<Obj>> {
        const paramsFieldsFilter = processFieldsFilterParams(options as any);
        const params = { ...options, ...paramsFieldsFilter } as any;
        const apiResponse = this.d2Api.get<
            {
                [K in D2ModelSchema["name"]]: Obj[];
            } & { pager: Pager }
        >(this.modelName as string, params as Params);

        return apiResponse.map(({ data }) => {
            return {
                ...(options.paging || options.paging === undefined ? { pager: data.pager } : {}),
                objects: data[this.modelName] as Obj[],
            };
        });
    }

    post(
        payload: PartialModel<D2ModelSchema["model"]>,
        options?: UpdateOptions
    ): D2ApiResponse<ModelResponse> {
        return this.d2Api.post(this.modelName, (options || {}) as Params, payload);
    }

    put(
        payload: PartialPersistedModel<D2ModelSchema["model"]>,
        options?: UpdateOptions
    ): D2ApiResponse<ModelResponse> {
        return this.d2Api.put(
            [this.modelName, payload.id].join("/"),
            (options || {}) as Params,
            payload
        );
    }

    delete(payload: PartialPersistedModel<D2ModelSchema["model"]>): D2ApiResponse<ModelResponse> {
        return this.d2Api.delete(`/${this.modelName}/${payload.id}`);
    }
}
