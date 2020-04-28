import { D2ModelSchemas, modelKeys } from "./schemas";
import { MetadataPickBase, MetadataPayloadBase } from "../api/metadata";
import { D2ApiDefinitionBase, FilterBase } from "../api/common";
import { D2ApiDefault, D2ApiOptions } from "../api/d2Api";

export interface D2ApiDefinition extends D2ApiDefinitionBase {
    schemas: D2ModelSchemas;
    filter: FilterBase;
}

export type MetadataPick<RootSelector> = MetadataPickBase<D2ApiDefinition, RootSelector>;
export type MetadataPayload = MetadataPayloadBase<D2ModelSchemas>;

export * from "../api/index";
export * from "./schemas";

export class D2Api extends D2ApiDefault<D2ApiDefinition> {
    public constructor(options?: D2ApiOptions) {
        super(options, modelKeys);
    }
}
