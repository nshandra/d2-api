import { D2ApiResponse } from "./common";
import { D2Api } from "./d2-api";

export interface DataValuesSetRequest {
    dataSet?: string;
    completeDate?: string;
    period?: string;
    orgUnit: string;
    attributeOptionCombo?: string;
    dataValues: Array<{
        dataElement: string;
        categoryOptionCombo?: string;
        value: string;
        comment?: string;
    }>;
}

export interface DataValuesSetResponse {
    responseType: "ImportSummary";
    status: "SUCCESS" | "ERROR";
    description: string;
}

export default class DataValues {
    constructor(public d2Api: D2Api) {}

    postSet(request: DataValuesSetRequest): D2ApiResponse<DataValuesSetResponse> {
        return this.d2Api.post<DataValuesSetResponse>("/dataValueSets", {}, request);
    }
}
