import { D2ApiResponse, HttpResponse } from "./common";
import { D2Api } from "./d2-api";

type Operator = "EQ" | "GT" | "GE" | "LT" | "LE";

export type AnalyticsOptions = {
    dimension: string[];
    filter?: string[];
    aggregationType?:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX";
    measureCriteria?: Operator;
    preAggregationMeasureCriteria?: Operator;
    startDate?: string;
    endDate?: string;
    skipMeta?: boolean;
    skipData?: boolean;
    skipRounding?: boolean;
    hierarchyMeta?: boolean;
    ignoreLimit?: boolean;
    tableLayout?: boolean;
    hideEmptyRows?: boolean;
    hideEmptyColumns?: boolean;
    showHierarchy?: boolean;
    includeNumDen?: boolean;
    includeMetadataDetails?: boolean;
    displayProperty?: "NAME" | "SHORTNAME";
    outputIdScheme?: string;
    inputIdScheme?: string;
    approvalLevel?: string;
    relativePeriodDate?: string;
    userOrgUnit?: string;
    columns?: string;
    rows?: string;
    order?: "ASC" | "DESC";
    timeField?: string;
    orgUnitField?: string;
};

export type AnalyticsResponse = {
    headers: Array<{
        name: "dx" | "dy";
        column: "Data";
        valueType: "TEXT" | "NUMBER";
        type: "java.lang.String" | "java.lang.Double";
        hidden: boolean;
        meta: boolean;
    }>;

    rows: Array<string[]>;
    width: number;
    height: number;
};

export type RunAnalyticsResponse = HttpResponse<{
    id: string;
    created: string;
    name: "inMemoryAnalyticsJob";
    jobType: "ANALYTICS_TABLE";
    jobStatus: "SCHEDULED";
    jobParameters: {
        skipResourceTables: boolean;
    };
    relativeNotifierEndpoint: string;
}>;

export default class Analytics {
    constructor(public d2Api: D2Api) {}

    get(options: AnalyticsOptions): D2ApiResponse<AnalyticsResponse> {
        return this.d2Api.get<AnalyticsResponse>("/analytics", options);
    }

    run(): D2ApiResponse<RunAnalyticsResponse> {
        return this.d2Api.post<RunAnalyticsResponse>("/resourceTables/analytics");
    }
}
