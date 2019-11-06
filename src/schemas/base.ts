import { OmitNever } from "../api/inference";

export type Id = string;

export interface Ref {
    id: Id;
}

export interface D2Access {
    read: boolean;
    update: boolean;
    externalize: boolean;
    delete: boolean;
    write: boolean;
    manage: boolean;
}

type GetDefaultSchema<Model> = {
    fields: Model;
    fieldPresets: {
        $all: keyof Model;
        $identifiable: FieldPresets["identifiable"];
        $nameable: FieldPresets["nameable"];
        $persisted: keyof Model;
        $owner: keyof Model;
    };
};

export interface D2Translation {
    property: string;
    locale: string;
    value: string;
}

/*
export interface D2UserGroupAccess {
    access: string;
    userGroupUid: Id;
    displayName: string;
    id: Id;
}

export interface D2UserAccess {
    access: string;
    userUid: Id;
    displayName: string;
    id: Id;
}
*/

export interface D2Style {
    color: string;
    icon: string;
}

export interface D2DimensionalKeywords {
    key: string;
    uid: Id;
    name: string;
    code: string;
}

export type D2Geometry =
    | { type: "Point"; coordinates: [number, number] }
    | { type: "Polygon"; coordinates: Array<Array<[number, number]>> };

export interface D2Expression {
    expression: string;
    description: string;
    missingValueStrategy: "NEVER_SKIP" | "SKIP_IF_ANY_VALUE_MISSING" | "SKIP_IF_ALL_VALUES_MISSING";
    slidingWindow: boolean;
}

export type D2AccessSchema = GetDefaultSchema<D2Access>;
export type D2TranslationSchema = GetDefaultSchema<D2Translation>;
export type D2StyleSchema = GetDefaultSchema<D2Style>;
export type D2DimensionalKeywordsSchema = GetDefaultSchema<D2DimensionalKeywords>;
export type D2GeometrySchema = GetDefaultSchema<D2Geometry>;
export type D2ExpressionSchema = GetDefaultSchema<D2Expression>;

export interface D2Sharing {
    publicAccess: string;
    externalAccess: boolean;
    userAccesses: D2Access[];
    userGroupAccesses: D2Access[];
}

export interface MessageDestination {
    users?: Ref[];
    userGroups?: Ref[];
    organisationUnits?: Ref[];
}

export interface Message extends MessageDestination {
    subject: string;
    text?: string;
}

export type FieldPreset = "$all" | "$identifiable" | "$nameable" | "$persisted" | "$owner";

export interface FieldPresets {
    identifiable: "id" | "name" | "code" | "created" | "lastUpdated";
    nameable: "id" | "name" | "shortName" | "code" | "description" | "created" | "lastUpdated";
}

export type Preset<Model, Properties> = OmitNever<
    {
        [K in Properties & keyof Model]: Model[K] extends Ref
            ? Ref
            : Model[K] extends Array<Ref>
            ? Ref[]
            : Model[K];
    }
>;
