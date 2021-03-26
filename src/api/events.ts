import { RequireAtLeastOne } from "../utils/types";
import { AsyncPostResponse, D2ApiResponse, HttpResponse } from "./common";
import { D2ApiGeneric } from "./d2Api";
import { Pager } from "./model";

export interface EventsPostRequest {
    events: Array<{
        event?: string;
        orgUnit: string;
        program: string;
        status: string;
        eventDate: string;
        coordinate?: {
            latitude: string;
            longitude: string;
        };
        attributeOptionCombo?: string;
        trackedEntityInstance?: string;
        programStage?: string;
        dataValues: Array<{
            dataElement: string;
            value: string | number | boolean;
        }>;
    }>;
}

export type EventsPostParams = Partial<{
    idScheme: IdScheme;
    dataElementIdScheme: IdScheme;
    orgUnitIdScheme: IdScheme;
    eventIdScheme: IdScheme;
    preheatCache: boolean;
    skipExistingCheck: boolean;
    payloadFormat: "json" | "xml" | "csv";
    async: boolean;
    dryRun: boolean;
}>;

export type IdScheme = string;

export interface EventsPostResponse {
    responseType: "ImportSummaries";
    status: "ERROR" | "SUCCESS";
    imported: number;
    updated: number;
    deleted: number;
    ignored: number;
    total: number;
    importOptions: object;
    importSummaries?: Array<
        | {
              responseType: "ImportSummary";
              status: "ERROR";
              reference?: string;
              description: string;
              importOptions: object;
              conflicts: Array<{
                  object: string;
                  value: string;
              }>;
              importCount: {
                  imported: number;
                  updated: number;
                  ignored: number;
                  deleted: number;
              };
          }
        | {
              responseType: "ImportSummary";
              status: "SUCCESS";
              reference: string;
              href: string;
              importOptions: object;
              importCount: {
                  imported: number;
                  updated: number;
                  ignored: number;
                  deleted: number;
              };
          }
    >;
}

export type EventsGetRequest = RequireAtLeastOne<
    EventsGetRequestFilters,
    "orgUnit" | "program" | "trackedEntityInstance" | "event"
>;

export interface EventsGetRequestFilters {
    program?: string;
    orgUnit?: string;
    event?: string;
    programStage?: string;
    programStatus?: "ACTIVE" | "COMPLETED" | "CANCELLED";
    followUp?: boolean;
    trackedEntityInstance?: string;
    ouMode?: "SELECTED" | "CHILDREN" | "DESCENDANTS";
    startDate?: string;
    endDate?: string;
    status?: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULED" | "OVERDUE" | "SKIPPED";
    lastUpdated?: string;
    lastUpdatedStartDate?: string;
    lastUpdatedEndDate?: string;
    lastUpdatedDuration?: string;
    skipMeta?: boolean;
    page?: number;
    pageSize?: number;
    totalPages?: boolean;
    skipPaging?: boolean;
    dataElementIdScheme?: IdScheme;
    categoryOptionComboIdScheme?: IdScheme;
    orgUnitIdScheme?: IdScheme;
    programIdScheme?: IdScheme;
    programStageIdScheme?: IdScheme;
    idScheme?: IdScheme;
    order?: string;
    skipEventId?: boolean;
    attributeCc?: string;
    attributeCos?: string;
    async?: boolean;
    includeDeleted?: boolean;
    assignedUserMode?: boolean;
    assignedUser?: string;
}

export interface EventsGetResponse {
    events: Array<Event>;
}

export interface PaginatedEventsGetResponse extends EventsGetResponse {
    pager: Pager;
}

export interface Event {
    storedBy: string;
    dueDate: string;
    program: string;
    href: string;
    event: string;
    programStage: string;
    orgUnit: string;
    status: string;
    orgUnitName: string;
    eventDate: string;
    attributeCategoryOptions: string;
    lastUpdated: string;
    created: string;
    deleted: boolean;
    attributeOptionCombo: string;
    coordinate?: {
        latitude: string;
        longitude: string;
    };
    dataValues: Array<{
        lastUpdated: string;
        storedBy: string;
        created: string;
        dataElement: string;
        value: string;
        providedElsewhere: boolean;
    }>;
}

export class Events {
    constructor(public d2Api: D2ApiGeneric) {}

    get(params: EventsGetRequest): D2ApiResponse<PaginatedEventsGetResponse> {
        return this.d2Api.get<PaginatedEventsGetResponse>("/events", {
            ...params,
            paging: true,
        });
    }

    getAll(params: EventsGetRequest): D2ApiResponse<EventsGetResponse> {
        return this.d2Api.get<EventsGetResponse>("/events", {
            ...params,
            paging: false,
            page: undefined,
            pageSize: undefined,
        });
    }

    post(
        params: EventsPostParams,
        request: EventsPostRequest
    ): D2ApiResponse<HttpResponse<EventsPostResponse>> {
        return this.d2Api.post<HttpResponse<EventsPostResponse>>(
            "/events",
            { ...params, async: false },
            request
        );
    }

    postAsync(
        params: EventsPostParams,
        request: EventsPostRequest
    ): D2ApiResponse<AsyncPostResponse<"EVENT_IMPORT">> {
        return this.d2Api.post<AsyncPostResponse<"EVENT_IMPORT">>(
            "/events",
            { ...params, async: true },
            request
        );
    }
}
