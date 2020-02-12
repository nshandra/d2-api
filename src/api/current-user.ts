import { SelectedPick } from "./inference";
import { D2ApiResponse, processFieldsFilterParams } from "./common";
import { D2Api } from "./d2-api";
import { Selector } from "./inference";
import {
    D2UserSchema,
    D2DataSet,
    D2Program,
    D2DataSetSchema,
    D2ProgramSchema,
} from "./../schemas/models";

interface ExtraModelAttributes {
    authorities: string[];
    dataSets: D2DataSet;
    programs: D2Program;
    settings: Settings;
}

type ExtraProperties = keyof ExtraModelAttributes;
type RemovedProperties = "href";

export interface Settings {
    keyMessageSmsNotification: boolean;
    keyDbLocale: string;
    keyStyle: string;
    keyUiLocale: string;
    keyAnalysisDisplayProperty: string;
    keyMessageEmailNotification: boolean;
}

interface MeSchema {
    model: Omit<D2UserSchema["model"], RemovedProperties> & ExtraModelAttributes;
    fields: Omit<D2UserSchema["fields"], RemovedProperties> & {
        authorities: string[];
        dataSets: D2DataSetSchema;
        programs: D2ProgramSchema;
        settings: Settings;
    };
    fieldPresets: {
        $all: D2UserSchema["fieldPresets"]["$all"] & ExtraProperties;
        $identifiable: D2UserSchema["fieldPresets"]["$identifiable"] & ExtraProperties;
        $nameable: D2UserSchema["fieldPresets"]["$nameable"] & ExtraProperties;
        $persisted: D2UserSchema["fieldPresets"]["$persisted"] & ExtraProperties;
        $owner: D2UserSchema["fieldPresets"]["$owner"] & ExtraProperties;
    };
}

interface GetOptions {
    fields: Selector<MeSchema>;
}

export default class D2ApiCurrentUser {
    constructor(private api: D2Api) {
        this.api = api;
    }

    get<Options extends GetOptions, User = SelectedPick<MeSchema, Options["fields"]>>(
        options: Options
    ): D2ApiResponse<User> {
        const params = processFieldsFilterParams(options as any);
        return this.api.get<User>("/me", params);
    }
}
