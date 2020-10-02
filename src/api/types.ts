import { NetworkRequest } from "./../repositories/NetworkRepository";
import { D2ApiDefinitionBase } from "./common";
import { Model } from ".";

export interface D2ApiOptions {
    baseUrl?: string;
    apiVersion?: number;
    auth?: { username: string; password: string };
    backend?: "axios" | "fetch";
}

export type IndexedModels<D2ApiDefinition extends D2ApiDefinitionBase> = {
    [ModelKey in keyof D2ApiDefinition["schemas"]]: Model<
        D2ApiDefinition,
        D2ApiDefinition["schemas"][ModelKey]
    >;
};

export interface D2ApiRequest extends NetworkRequest {
    skipApiPrefix?: boolean;
}
