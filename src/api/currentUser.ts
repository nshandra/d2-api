import { SelectedPick, D2ModelSchemaBase } from "./inference";
import {
    D2ApiResponse,
    processFieldsFilterParams,
    D2ModelSchemasBase,
    D2ApiDefinitionBase,
} from "./common";
import { D2ApiGeneric } from "./d2Api";
import { Selector } from "./inference";

interface Schemas {
    user: D2ModelSchemaBase;
    extra: Record<string, D2ModelSchemaBase>;
}

export interface SchemasBase<D2ModelSchemas extends D2ModelSchemasBase> {
    user: D2ModelSchemas["users"];
    extra: {
        dataSet: D2ModelSchemas["dataSets"];
        program: D2ModelSchemas["programs"];
    };
}

type ExtraModelAttributes<SchemasE extends Schemas> = {
    authorities: string[];
    settings: Settings;
} & { [K in keyof SchemasE["extra"]]: Array<SchemasE["extra"][K]> };

type ExtraProperties = keyof ExtraModelAttributes<Schemas>;
type RemovedProperties = "href";

export interface Settings {
    keyMessageSmsNotification: boolean;
    keyDbLocale: string;
    keyStyle: string;
    keyUiLocale: string;
    keyAnalysisDisplayProperty: string;
    keyMessageEmailNotification: boolean;
}

interface MeSchema<SchemasE extends Schemas> {
    name: "me";
    model: Omit<SchemasE["user"]["model"], RemovedProperties> & ExtraModelAttributes<SchemasE>;
    fields: Omit<SchemasE["user"]["fields"], RemovedProperties> & ExtraModelAttributes<SchemasE>;
    fieldPresets: {
        $all: SchemasE["user"]["fieldPresets"]["$all"] & ExtraProperties;
        $identifiable: SchemasE["user"]["fieldPresets"]["$identifiable"] & ExtraProperties;
        $nameable: SchemasE["user"]["fieldPresets"]["$nameable"] & ExtraProperties;
        $persisted: SchemasE["user"]["fieldPresets"]["$persisted"] & ExtraProperties;
        $owner: SchemasE["user"]["fieldPresets"]["$owner"] & ExtraProperties;
    };
}

interface GetOptions<SchemasE extends Schemas> {
    fields: Selector<MeSchema<SchemasE>>;
}

export class CurrentUser<
    D2ApiDefinition extends D2ApiDefinitionBase,
    SchemasE extends Schemas = SchemasBase<D2ApiDefinition["schemas"]>
> {
    constructor(private api: D2ApiGeneric) {
        this.api = api;
    }

    get<
        Options extends GetOptions<SchemasE>,
        User = SelectedPick<MeSchema<SchemasE>, Options["fields"]>
    >(options: Options): D2ApiResponse<User> {
        const params = processFieldsFilterParams(options as any);
        return this.api.get<User>("/me", params);
    }
}
