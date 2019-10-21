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

export interface D2Translation {
    property: string;
    locale: string;
    value: string;
}

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

export interface D2AttributeValue {
    attribute: Ref;
    created: Date;
    lastUpdated: Date;
    value: string;
}

export interface D2Attribute {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryAttribute: boolean;
    categoryOptionAttribute: boolean;
    categoryOptionComboAttribute: boolean;
    categoryOptionGroupAttribute: boolean;
    categoryOptionGroupSetAttribute: boolean;
    code: Id;
    constantAttribute: boolean;
    created: Date;
    dataElementAttribute: boolean;
    dataElementGroupAttribute: boolean;
    dataElementGroupSetAttribute: boolean;
    dataSetAttribute: boolean;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    documentAttribute: boolean;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    indicatorAttribute: boolean;
    indicatorGroupAttribute: boolean;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSetAttribute: boolean;
    mandatory: boolean;
    name: string;
    optionAttribute: boolean;
    optionSet: Ref;
    optionSetAttribute: boolean;
    organisationUnitAttribute: boolean;
    organisationUnitGroupAttribute: boolean;
    organisationUnitGroupSetAttribute: boolean;
    programAttribute: boolean;
    programIndicatorAttribute: boolean;
    programStageAttribute: boolean;
    publicAccess: string;
    sectionAttribute: boolean;
    shortName: string;
    sortOrder: number;
    sqlViewAttribute: boolean;
    trackedEntityAttributeAttribute: boolean;
    trackedEntityTypeAttribute: boolean;
    translations: D2Translation[];
    undefined: boolean;
    unique: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userAttribute: boolean;
    userGroupAccesses: D2UserGroupAccess[];
    userGroupAttribute: boolean;
    validationRuleAttribute: boolean;
    validationRuleGroupAttribute: boolean;
    valueType:
        | "TEXT"
        | "LONG_TEXT"
        | "LETTER"
        | "PHONE_NUMBER"
        | "EMAIL"
        | "BOOLEAN"
        | "TRUE_ONLY"
        | "DATE"
        | "DATETIME"
        | "TIME"
        | "NUMBER"
        | "UNIT_INTERVAL"
        | "PERCENTAGE"
        | "INTEGER"
        | "INTEGER_POSITIVE"
        | "INTEGER_NEGATIVE"
        | "INTEGER_ZERO_OR_POSITIVE"
        | "TRACKER_ASSOCIATE"
        | "USERNAME"
        | "COORDINATE"
        | "ORGANISATION_UNIT"
        | "AGE"
        | "URL"
        | "FILE_RESOURCE"
        | "IMAGE";
}

export interface D2UserAuthorityGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    authorities: string[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2User {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    avatar: Ref;
    birthday: Date;
    code: Id;
    created: Date;
    dataViewOrganisationUnits: Ref[];
    displayName: string;
    education: string;
    email: string;
    employer: string;
    externalAccess: boolean;
    facebookMessenger: string;
    favorites: string[];
    firstName: string;
    gender: string;
    groups: Ref[];
    href: string;
    id: Id;
    interests: string;
    introduction: string;
    jobTitle: string;
    languages: string;
    lastCheckedInterpretations: Date;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    nationality: string;
    organisationUnits: Ref[];
    phoneNumber: string;
    publicAccess: string;
    skype: string;
    surname: string;
    teiSearchOrganisationUnits: Ref[];
    telegram: string;
    translations: D2Translation[];
    twitter: string;
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userCredentials: Ref;
    userGroupAccesses: D2UserGroupAccess[];
    welcomeMessage: string;
    whatsApp: string;
}

export interface D2UserGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    managedByGroups: Ref[];
    managedGroups: Ref[];
    members: Ref[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ExternalFileResource {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2SqlView {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    cacheStrategy:
        | "NO_CACHE"
        | "CACHE_15_MINUTES"
        | "CACHE_30_MINUTES"
        | "CACHE_1_HOUR"
        | "CACHE_6AM_TOMORROW"
        | "CACHE_TWO_WEEKS"
        | "RESPECT_SYSTEM_SETTING";
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    sqlQuery: string;
    translations: D2Translation[];
    type: "VIEW" | "MATERIALIZED_VIEW" | "QUERY";
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OAuth2Client {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    cid: Id;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    grantTypes: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    redirectUris: string[];
    secret: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Constant {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    value: number;
}

export interface D2JobConfiguration {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    continuousExecution: boolean;
    created: Date;
    cronExpression: string;
    displayName: string;
    enabled: boolean;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    jobParameters: string;
    jobStatus: "RUNNING" | "COMPLETED" | "STOPPED" | "SCHEDULED" | "DISABLED" | "FAILED";
    jobType:
        | "DATA_STATISTICS"
        | "DATA_INTEGRITY"
        | "RESOURCE_TABLE"
        | "ANALYTICS_TABLE"
        | "DATA_SYNC"
        | "PROGRAM_DATA_SYNC"
        | "FILE_RESOURCE_CLEANUP"
        | "META_DATA_SYNC"
        | "SMS_SEND"
        | "SEND_SCHEDULED_MESSAGE"
        | "PROGRAM_NOTIFICATIONS"
        | "VALIDATION_RESULTS_NOTIFICATION"
        | "CREDENTIALS_EXPIRY_ALERT"
        | "MONITORING"
        | "PUSH_ANALYSIS"
        | "PREDICTOR"
        | "DATA_SET_NOTIFICATION"
        | "REMOVE_EXPIRED_RESERVED_VALUES"
        | "MOCK"
        | "DATAVALUE_IMPORT"
        | "ANALYTICSTABLE_UPDATE"
        | "METADATA_IMPORT"
        | "GML_IMPORT"
        | "DATAVALUE_IMPORT_INTERNAL"
        | "EVENT_IMPORT"
        | "ENROLLMENT_IMPORT"
        | "TEI_IMPORT"
        | "LEADER_ELECTION"
        | "LEADER_RENEWAL"
        | "COMPLETE_DATA_SET_REGISTRATION_IMPORT";
    lastExecuted: Date;
    lastExecutedStatus: "RUNNING" | "COMPLETED" | "STOPPED" | "SCHEDULED" | "DISABLED" | "FAILED";
    lastRuntimeExecution: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    leaderOnlyJob: boolean;
    name: string;
    nextExecutionTime: Date;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userUid: string;
}

export interface D2Option {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: string;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    optionSet: Ref;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OptionSet {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    options: Ref[];
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    valueType:
        | "TEXT"
        | "LONG_TEXT"
        | "LETTER"
        | "PHONE_NUMBER"
        | "EMAIL"
        | "BOOLEAN"
        | "TRUE_ONLY"
        | "DATE"
        | "DATETIME"
        | "TIME"
        | "NUMBER"
        | "UNIT_INTERVAL"
        | "PERCENTAGE"
        | "INTEGER"
        | "INTEGER_POSITIVE"
        | "INTEGER_NEGATIVE"
        | "INTEGER_ZERO_OR_POSITIVE"
        | "TRACKER_ASSOCIATE"
        | "USERNAME"
        | "COORDINATE"
        | "ORGANISATION_UNIT"
        | "AGE"
        | "URL"
        | "FILE_RESOURCE"
        | "IMAGE";
    version: number;
}

export interface D2OptionGroupSet {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    allItems: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionType:
        | "DATA_X"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "DATA_COLLAPSED"
        | "CATEGORY_OPTION_COMBO"
        | "ATTRIBUTE_OPTION_COMBO"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION_GROUP_SET"
        | "DATA_ELEMENT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY"
        | "OPTION_GROUP_SET"
        | "VALIDATION_RULE"
        | "STATIC"
        | "ORGANISATION_UNIT_LEVEL";
    dimensionalKeywords: D2DimensionalKeywords;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    members: Ref[];
    name: string;
    optionSet: Ref;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OptionGroup {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    members: Ref[];
    name: string;
    optionSet: Ref;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ColorSet {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    colors: Ref[];
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2LegendSet {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legends: Ref[];
    name: string;
    publicAccess: string;
    symbolizer: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OrganisationUnit {
    access: D2Access;
    address: string;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    children: Ref[];
    closedDate: Date;
    code: Id;
    comment: string;
    contactPerson: string;
    created: Date;
    dataSets: Ref[];
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    email: string;
    externalAccess: boolean;
    favorites: string[];
    geometry: D2Geometry;
    groups: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    memberCount: number;
    name: string;
    openingDate: Date;
    parent: Ref;
    path: string;
    phoneNumber: string;
    programs: Ref[];
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    type: string;
    undefined: Ref;
    url: string;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    users: Ref[];
}

export interface D2OrganisationUnitLevel {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    level: number;
    name: string;
    offlineLevels: number;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OrganisationUnitGroup {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    color: string;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    geometry: D2Geometry;
    groupSets: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    members: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    symbol: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OrganisationUnitGroupSet {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    allItems: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    compulsory: boolean;
    created: Date;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionType:
        | "DATA_X"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "DATA_COLLAPSED"
        | "CATEGORY_OPTION_COMBO"
        | "ATTRIBUTE_OPTION_COMBO"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION_GROUP_SET"
        | "DATA_ELEMENT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY"
        | "OPTION_GROUP_SET"
        | "VALIDATION_RULE"
        | "STATIC"
        | "ORGANISATION_UNIT_LEVEL";
    dimensionalKeywords: D2DimensionalKeywords;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    includeSubhierarchyInAnalytics: boolean;
    items: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    name: string;
    organisationUnitGroups: Ref[];
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2CategoryOption {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    categories: Ref[];
    categoryOptionCombos: Ref[];
    code: Id;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: Date;
    externalAccess: boolean;
    favorites: string[];
    groups: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    organisationUnits: Ref[];
    publicAccess: string;
    shortName: string;
    startDate: Date;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2CategoryOptionGroup {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    groupSets: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    members: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2CategoryOptionGroupSet {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    allItems: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionType:
        | "DATA_X"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "DATA_COLLAPSED"
        | "CATEGORY_OPTION_COMBO"
        | "ATTRIBUTE_OPTION_COMBO"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION_GROUP_SET"
        | "DATA_ELEMENT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY"
        | "OPTION_GROUP_SET"
        | "VALIDATION_RULE"
        | "STATIC"
        | "ORGANISATION_UNIT_LEVEL";
    dimensionalKeywords: D2DimensionalKeywords;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Category {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    allItems: boolean;
    attributeValues: D2AttributeValue[];
    categoryCombos: Ref[];
    categoryOptions: Ref[];
    code: Id;
    created: Date;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionType:
        | "DATA_X"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "DATA_COLLAPSED"
        | "CATEGORY_OPTION_COMBO"
        | "ATTRIBUTE_OPTION_COMBO"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION_GROUP_SET"
        | "DATA_ELEMENT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY"
        | "OPTION_GROUP_SET"
        | "VALIDATION_RULE"
        | "STATIC"
        | "ORGANISATION_UNIT_LEVEL";
    dimensionalKeywords: D2DimensionalKeywords;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2CategoryCombo {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categories: Ref[];
    code: Id;
    created: Date;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    optionCombos: Ref[];
    publicAccess: string;
    skipTotal: boolean;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2CategoryOptionCombo {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    categoryCombo: Ref;
    categoryOptions: Ref[];
    code: Id;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    ignoreApproval: boolean;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataElement {
    access: D2Access;
    aggregationLevels: number[];
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    categoryCombo: Ref;
    code: Id;
    commentOptionSet: Ref;
    created: Date;
    dataSetElements: D2DataSetElement[];
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayFormName: string;
    displayName: string;
    displayShortName: string;
    domainType: "AGGREGATE" | "TRACKER";
    externalAccess: boolean;
    favorites: string[];
    fieldMask: string;
    formName: string;
    groups: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    optionSet: Ref;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    url: string;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    valueType:
        | "TEXT"
        | "LONG_TEXT"
        | "LETTER"
        | "PHONE_NUMBER"
        | "EMAIL"
        | "BOOLEAN"
        | "TRUE_ONLY"
        | "DATE"
        | "DATETIME"
        | "TIME"
        | "NUMBER"
        | "UNIT_INTERVAL"
        | "PERCENTAGE"
        | "INTEGER"
        | "INTEGER_POSITIVE"
        | "INTEGER_NEGATIVE"
        | "INTEGER_ZERO_OR_POSITIVE"
        | "TRACKER_ASSOCIATE"
        | "USERNAME"
        | "COORDINATE"
        | "ORGANISATION_UNIT"
        | "AGE"
        | "URL"
        | "FILE_RESOURCE"
        | "IMAGE";
    zeroIsSignificant: boolean;
}

export interface D2DataElementGroup {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    groupSets: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    members: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataElementGroupSet {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    allItems: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    compulsory: boolean;
    created: Date;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionType:
        | "DATA_X"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "DATA_COLLAPSED"
        | "CATEGORY_OPTION_COMBO"
        | "ATTRIBUTE_OPTION_COMBO"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION_GROUP_SET"
        | "DATA_ELEMENT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP_SET"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY"
        | "OPTION_GROUP_SET"
        | "VALIDATION_RULE"
        | "STATIC"
        | "ORGANISATION_UNIT_LEVEL";
    dimensionalKeywords: D2DimensionalKeywords;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2IndicatorType {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    factor: number;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    number: boolean;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2AnalyticsTableHook {
    access: D2Access;
    analyticsTableType:
        | "DATA_VALUE"
        | "COMPLETENESS"
        | "COMPLETENESS_TARGET"
        | "ORG_UNIT_TARGET"
        | "EVENT"
        | "ENROLLMENT"
        | "VALIDATION_RESULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    phase: "RESOURCE_TABLE_POPULATED" | "ANALYTICS_TABLE_POPULATED";
    publicAccess: string;
    resourceTableType:
        | "ORG_UNIT_STRUCTURE"
        | "DATA_SET_ORG_UNIT_CATEGORY"
        | "CATEGORY_OPTION_COMBO_NAME"
        | "DATA_ELEMENT_GROUP_SET_STRUCTURE"
        | "INDICATOR_GROUP_SET_STRUCTURE"
        | "ORG_UNIT_GROUP_SET_STRUCTURE"
        | "CATEGORY_STRUCTURE"
        | "DATA_ELEMENT_STRUCTURE"
        | "PERIOD_STRUCTURE"
        | "DATE_PERIOD_STRUCTURE"
        | "DATA_ELEMENT_CATEGORY_OPTION_COMBO"
        | "DATA_APPROVAL_REMAP_LEVEL"
        | "DATA_APPROVAL_MIN_LEVEL";
    sql: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Indicator {
    access: D2Access;
    aggregateExportAttributeOptionCombo: string;
    aggregateExportCategoryOptionCombo: string;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    annualized: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataSets: Ref[];
    decimals: number;
    denominator: string;
    denominatorDescription: string;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    formName: string;
    groups: Ref[];
    href: string;
    id: Id;
    indicatorType: Ref;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    numerator: string;
    numeratorDescription: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    url: string;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2IndicatorGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    groupSet: Ref;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2IndicatorGroupSet {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    compulsory: boolean;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataEntryForm {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    format: number;
    href: string;
    htmlCode: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    style: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataSet {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    categoryCombo: Ref;
    code: Id;
    compulsoryDataElementOperands: Ref[];
    compulsoryFieldsCompleteOnly: boolean;
    created: Date;
    dataElementDecoration: boolean;
    dataEntryForm: Ref;
    dataInputPeriods: D2DataInputPeriod[];
    dataSetElements: D2DataSetElement[];
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    expiryDays: number;
    externalAccess: boolean;
    favorites: string[];
    fieldCombinationRequired: boolean;
    formName: string;
    href: string;
    id: Id;
    indicators: Ref[];
    interpretations: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    mobile: boolean;
    name: string;
    noValueRequiresComment: boolean;
    notificationRecipients: Ref;
    notifyCompletingUser: boolean;
    openFuturePeriods: number;
    periodType: string;
    publicAccess: string;
    renderAsTabs: boolean;
    renderHorizontally: boolean;
    sections: Ref[];
    shortName: string;
    skipOffline: boolean;
    sources: Ref[];
    style: D2Style;
    timelyDays: number;
    translations: D2Translation[];
    undefined: Ref;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validCompleteOnly: boolean;
    version: number;
    workflow: Ref;
}

export interface D2DataSetNotificationTemplate {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataSetNotificationTrigger: "DATA_SET_COMPLETION" | "SCHEDULED_DAYS";
    dataSets: Ref[];
    deliveryChannels: never[];
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    messageTemplate: string;
    name: string;
    notificationRecipient: "ORGANISATION_UNIT_CONTACT" | "USER_GROUP";
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroup: Ref;
    relativeScheduledDays: number;
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Section {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataElements: Ref[];
    dataSet: Ref;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    greyedFields: Ref[];
    href: string;
    id: Id;
    indicators: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    showColumnTotals: boolean;
    showRowTotals: boolean;
    sortOrder: number;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataApprovalLevel {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryOptionGroupSet: Ref;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    level: number;
    name: string;
    orgUnitLevel: number;
    orgUnitLevelName: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataApprovalWorkflow {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryCombo: Ref;
    code: Id;
    created: Date;
    dataSets: Ref[];
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    levels: Ref[];
    name: string;
    periodType: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ValidationRule {
    access: D2Access;
    aggregateExportAttributeOptionCombo: string;
    aggregateExportCategoryOptionCombo: string;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    groups: Ref[];
    href: string;
    id: Id;
    importance: "HIGH" | "MEDIUM" | "LOW";
    instruction: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    leftSide: D2Expression;
    legendSets: Ref[];
    name: string;
    notificationTemplates: Ref[];
    operator:
        | "equal_to"
        | "not_equal_to"
        | "greater_than"
        | "greater_than_or_equal_to"
        | "less_than"
        | "less_than_or_equal_to"
        | "compulsory_pair"
        | "exclusive_pair";
    organisationUnitLevels: number[];
    periodType: string;
    publicAccess: string;
    rightSide: D2Expression;
    shortName: string;
    skipFormValidation: boolean;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ValidationRuleGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ValidationNotificationTemplate {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    messageTemplate: string;
    name: string;
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroups: Ref[];
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validationRules: Ref[];
}

export interface D2TrackedEntityAttribute {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    confidential: boolean;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayInListNoProgram: boolean;
    displayName: string;
    displayOnVisitSchedule: boolean;
    displayShortName: string;
    expression: string;
    externalAccess: boolean;
    favorites: string[];
    fieldMask: string;
    formName: string;
    generated: boolean;
    href: string;
    id: Id;
    inherit: boolean;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    optionSet: Ref;
    orgunitScope: boolean;
    pattern: string;
    programScope: boolean;
    publicAccess: string;
    shortName: string;
    skipSynchronization: boolean;
    sortOrderInListNoProgram: number;
    sortOrderInVisitSchedule: number;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    unique: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    valueType:
        | "TEXT"
        | "LONG_TEXT"
        | "LETTER"
        | "PHONE_NUMBER"
        | "EMAIL"
        | "BOOLEAN"
        | "TRUE_ONLY"
        | "DATE"
        | "DATETIME"
        | "TIME"
        | "NUMBER"
        | "UNIT_INTERVAL"
        | "PERCENTAGE"
        | "INTEGER"
        | "INTEGER_POSITIVE"
        | "INTEGER_NEGATIVE"
        | "INTEGER_ZERO_OR_POSITIVE"
        | "TRACKER_ASSOCIATE"
        | "USERNAME"
        | "COORDINATE"
        | "ORGANISATION_UNIT"
        | "AGE"
        | "URL"
        | "FILE_RESOURCE"
        | "IMAGE";
}

export interface D2TrackedEntityType {
    access: D2Access;
    allowAuditLog: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    trackedEntityTypeAttributes: Ref[];
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2TrackedEntityTypeAttribute {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayInList: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    mandatory: boolean;
    name: string;
    publicAccess: string;
    searchable: boolean;
    trackedEntityAttribute: Ref;
    trackedEntityType: Ref;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramTrackedEntityAttributeGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    attributes: Ref[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    uniqunessType: "NONE" | "STRICT" | "VALIDATION";
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramStageSection {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataElements: Ref[];
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    programIndicators: Ref[];
    programStage: Ref;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramNotificationTemplate {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    deliveryChannels: never[];
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    messageTemplate: string;
    name: string;
    notificationRecipient:
        | "TRACKED_ENTITY_INSTANCE"
        | "ORGANISATION_UNIT_CONTACT"
        | "USERS_AT_ORGANISATION_UNIT"
        | "USER_GROUP"
        | "PROGRAM_ATTRIBUTE"
        | "DATA_ELEMENT";
    notificationTrigger:
        | "ENROLLMENT"
        | "COMPLETION"
        | "PROGRAM_RULE"
        | "SCHEDULED_DAYS_DUE_DATE"
        | "SCHEDULED_DAYS_INCIDENT_DATE"
        | "SCHEDULED_DAYS_ENROLLMENT_DATE";
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientDataElement: Ref;
    recipientProgramAttribute: Ref;
    recipientUserGroup: Ref;
    relativeScheduledDays: number;
    subjectTemplate: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2SMSCommand {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    codeValueSeparator: string;
    codes: any[];
    completenessMethod: "ALL_DATAVALUE" | "AT_LEAST_ONE_DATAVALUE" | "DO_NOT_MARK_COMPLETE";
    created: Date;
    currentPeriodUsedForReporting: boolean;
    dataset: Ref;
    defaultMessage: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    moreThanOneOrgUnitMessage: string;
    name: string;
    noUserMessage: string;
    parserType:
        | "KEY_VALUE_PARSER"
        | "J2ME_PARSER"
        | "ALERT_PARSER"
        | "UNREGISTERED_PARSER"
        | "TRACKED_ENTITY_REGISTRATION_PARSER"
        | "PROGRAM_STAGE_DATAENTRY_PARSER"
        | "EVENT_REGISTRATION_PARSER";
    program: Ref;
    programStage: Ref;
    publicAccess: string;
    receivedMessage: string;
    separator: string;
    specialCharacters: any[];
    successMessage: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroup: Ref;
    userGroupAccesses: D2UserGroupAccess[];
    wrongFormatMessage: string;
}

export interface D2ProgramStage {
    access: D2Access;
    allowGenerateNextVisit: boolean;
    attributeValues: D2AttributeValue[];
    autoGenerateEvent: boolean;
    blockEntryForm: boolean;
    code: Id;
    created: Date;
    dataEntryForm: Ref;
    description: string;
    displayDescription: string;
    displayGenerateEventBox: boolean;
    displayName: string;
    dueDateLabel: string;
    enableUserAssignment: boolean;
    executionDateLabel: string;
    externalAccess: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    generatedByEnrollmentDate: boolean;
    hideDueDate: boolean;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    minDaysFromStart: number;
    name: string;
    notificationTemplates: Ref[];
    openAfterEnrollment: boolean;
    periodType: string;
    preGenerateUID: boolean;
    program: Ref;
    programStageDataElements: Ref[];
    programStageSections: Ref[];
    publicAccess: string;
    remindCompleted: boolean;
    repeatable: boolean;
    reportDateToUse: string;
    sortOrder: number;
    standardInterval: number;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validationStrategy: "ON_COMPLETE" | "ON_UPDATE_AND_INSERT";
}

export interface D2Program {
    access: D2Access;
    accessLevel: "OPEN" | "AUDITED" | "PROTECTED" | "CLOSED";
    attributeValues: D2AttributeValue[];
    categoryCombo: Ref;
    code: Id;
    completeEventsExpiryDays: number;
    created: Date;
    dataEntryForm: Ref;
    description: string;
    displayDescription: string;
    displayFrontPageList: boolean;
    displayIncidentDate: boolean;
    displayName: string;
    displayShortName: string;
    enrollmentDateLabel: string;
    expiryDays: number;
    expiryPeriodType: string;
    externalAccess: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    href: string;
    id: Id;
    ignoreOverdueEvents: boolean;
    incidentDateLabel: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    notificationTemplates: Ref[];
    onlyEnrollOnce: boolean;
    organisationUnits: Ref[];
    programAttributes: Ref[];
    programIndicators: Ref[];
    programRuleVariables: Ref[];
    programSections: Ref[];
    programStages: Ref[];
    programType: "WITH_REGISTRATION" | "WITHOUT_REGISTRATION";
    publicAccess: string;
    relatedProgram: Ref;
    selectEnrollmentDatesInFuture: boolean;
    selectIncidentDatesInFuture: boolean;
    shortName: string;
    skipOffline: boolean;
    style: D2Style;
    trackedEntityType: Ref;
    translations: D2Translation[];
    undefined: boolean;
    useFirstStageDuringRegistration: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userRoles: Ref[];
    version: number;
}

export interface D2EventChart {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeDimensions: any[];
    attributeValueDimension: Ref;
    attributeValues: D2AttributeValue[];
    baseLineLabel: string;
    baseLineValue: number;
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: any[];
    code: Id;
    collapseDataDimensions: boolean;
    colorSet: Ref;
    columnDimensions: string[];
    columns: Ref[];
    completedOnly: boolean;
    created: Date;
    cumulativeValues: boolean;
    dataDimensionItems: any[];
    dataElementDimensions: any[];
    dataElementGroupSetDimensions: any[];
    dataElementValueDimension: Ref;
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    domainAxisLabel: string;
    endDate: Date;
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    externalAccess: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: Ref[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: Ref[];
    itemOrganisationUnitGroups: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: Ref;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: any[];
    organisationUnitLevels: number[];
    organisationUnits: Ref[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: object;
    percentStackedValues: boolean;
    periods: Ref[];
    program: Ref;
    programIndicatorDimensions: any[];
    programStage: Ref;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    rangeAxisDecimals: number;
    rangeAxisLabel: string;
    rangeAxisMaxValue: number;
    rangeAxisMinValue: number;
    rangeAxisSteps: number;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    relatives: any;
    rowDimensions: string[];
    rows: Ref[];
    shortName: string;
    showData: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: string[];
    subtitle: string;
    targetLineLabel: string;
    targetLineValue: number;
    timeField: string;
    title: string;
    topLimit: number;
    translations: D2Translation[];
    type:
        | "COLUMN"
        | "STACKED_COLUMN"
        | "BAR"
        | "STACKED_BAR"
        | "LINE"
        | "AREA"
        | "PIE"
        | "RADAR"
        | "GAUGE"
        | "YEAR_OVER_YEAR_LINE"
        | "YEAR_OVER_YEAR_COLUMN";
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: Ref;
    yearlySeries: string[];
}

export interface D2EventReport {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeDimensions: any[];
    attributeValueDimension: Ref;
    attributeValues: D2AttributeValue[];
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: any[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    collapseDataDimensions: boolean;
    columnDimensions: string[];
    columns: Ref[];
    completedOnly: boolean;
    created: Date;
    dataDimensionItems: any[];
    dataElementDimensions: any[];
    dataElementGroupSetDimensions: any[];
    dataElementValueDimension: Ref;
    dataType: "AGGREGATED_VALUES" | "EVENTS";
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: Date;
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    externalAccess: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: Ref[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyRows: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: Ref[];
    itemOrganisationUnitGroups: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: any[];
    organisationUnitLevels: number[];
    organisationUnits: Ref[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: object;
    periods: Ref[];
    program: Ref;
    programIndicatorDimensions: any[];
    programStage: Ref;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    relatives: any;
    rowDimensions: string[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: Ref[];
    shortName: string;
    showDimensionLabels: boolean;
    showHierarchy: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: string[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: Ref;
}

export interface D2ProgramSection {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    attributes: Ref[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    program: Ref;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramIndicator {
    access: D2Access;
    aggregateExportAttributeOptionCombo: string;
    aggregateExportCategoryOptionCombo: string;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    analyticsPeriodBoundaries: Ref[];
    analyticsType: "EVENT" | "ENROLLMENT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    decimals: number;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayInForm: boolean;
    displayName: string;
    displayShortName: string;
    expression: string;
    externalAccess: boolean;
    favorites: string[];
    filter: string;
    formName: string;
    groups: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    program: Ref;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramIndicatorGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramRuleVariable {
    access: D2Access;
    attribute: Ref;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataElement: Ref;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    program: Ref;
    programStage: Ref;
    publicAccess: string;
    sourceType:
        | "DATAELEMENT_NEWEST_EVENT_PROGRAM_STAGE"
        | "DATAELEMENT_NEWEST_EVENT_PROGRAM"
        | "DATAELEMENT_CURRENT_EVENT"
        | "DATAELEMENT_PREVIOUS_EVENT"
        | "CALCULATED_VALUE"
        | "TEI_ATTRIBUTE";
    translations: D2Translation[];
    undefined: boolean;
    useCodeForOptionSet: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2RelationshipType {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    bidirectional: boolean;
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    fromConstraint: any;
    fromToName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    toConstraint: any;
    toFromName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramRuleAction {
    access: D2Access;
    attribute: Ref;
    attributeValues: D2AttributeValue[];
    code: Id;
    content: string;
    created: Date;
    data: string;
    dataElement: Ref;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    location: string;
    name: string;
    option: Ref;
    optionGroup: Ref;
    programIndicator: Ref;
    programRule: Ref;
    programRuleActionType:
        | "DISPLAYTEXT"
        | "DISPLAYKEYVALUEPAIR"
        | "HIDEFIELD"
        | "HIDESECTION"
        | "HIDEPROGRAMSTAGE"
        | "ASSIGN"
        | "SHOWWARNING"
        | "WARNINGONCOMPLETE"
        | "SHOWERROR"
        | "ERRORONCOMPLETE"
        | "CREATEEVENT"
        | "SETMANDATORYFIELD"
        | "SENDMESSAGE"
        | "SCHEDULEMESSAGE"
        | "HIDEOPTION"
        | "SHOWOPTIONGROUP"
        | "HIDEOPTIONGROUP";
    programStage: Ref;
    programStageSection: Ref;
    publicAccess: string;
    templateUid: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramRule {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    condition: string;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    priority: number;
    program: Ref;
    programRuleActions: Ref[];
    programStage: Ref;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2MapView {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    areaRadius: number;
    attributeDimensions: any[];
    attributeValues: D2AttributeValue[];
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: any[];
    classes: number;
    code: Id;
    colorHigh: string;
    colorLow: string;
    colorScale: string;
    columnDimensions: string[];
    columns: Ref[];
    completedOnly: boolean;
    config: string;
    created: Date;
    dataDimensionItems: any[];
    dataElementDimensions: any[];
    dataElementGroupSetDimensions: any[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: Date;
    eventClustering: boolean;
    eventCoordinateField: string;
    eventPointColor: string;
    eventPointRadius: number;
    externalAccess: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: Ref[];
    followUp: boolean;
    hidden: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: Ref[];
    itemOrganisationUnitGroups: Ref[];
    labelFontColor: string;
    labelFontSize: string;
    labelFontStyle: string;
    labelFontWeight: string;
    labels: boolean;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    layer: string;
    legendSet: Ref;
    method: number;
    name: string;
    opacity: number;
    orgUnitField: string;
    organisationUnitGroupSet: Ref;
    organisationUnitGroupSetDimensions: any[];
    organisationUnitLevels: number[];
    organisationUnitSelectionMode:
        | "SELECTED"
        | "CHILDREN"
        | "DESCENDANTS"
        | "ACCESSIBLE"
        | "CAPTURE"
        | "ALL";
    organisationUnits: Ref[];
    parentGraph: string;
    parentGraphMap: object;
    parentLevel: number;
    periods: Ref[];
    program: Ref;
    programIndicatorDimensions: any[];
    programStage: Ref;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    radiusHigh: number;
    radiusLow: number;
    relatives: any;
    rows: Ref[];
    shortName: string;
    sortOrder: number;
    startDate: Date;
    styleDataItem: object;
    subscribers: string[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    trackedEntityType: Ref;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
}

export interface D2Report {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    cacheStrategy:
        | "NO_CACHE"
        | "CACHE_15_MINUTES"
        | "CACHE_30_MINUTES"
        | "CACHE_1_HOUR"
        | "CACHE_6AM_TOMORROW"
        | "CACHE_TWO_WEEKS"
        | "RESPECT_SYSTEM_SETTING";
    code: Id;
    created: Date;
    designContent: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    relatives: any;
    reportParams: any;
    reportTable: Ref;
    translations: D2Translation[];
    type: "JASPER_REPORT_TABLE" | "JASPER_JDBC" | "HTML";
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ReportTable {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeDimensions: any[];
    attributeValues: D2AttributeValue[];
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: any[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    columnDimensions: string[];
    columns: Ref[];
    completedOnly: boolean;
    created: Date;
    cumulative: boolean;
    dataDimensionItems: any[];
    dataElementDimensions: any[];
    dataElementGroupSetDimensions: any[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: Date;
    externalAccess: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: Ref[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyColumns: boolean;
    hideEmptyRows: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: Ref[];
    itemOrganisationUnitGroups: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendDisplayStyle: "FILL" | "TEXT";
    legendSet: Ref;
    measureCriteria: string;
    name: string;
    numberType: "VALUE" | "ROW_PERCENTAGE" | "COLUMN_PERCENTAGE";
    orgUnitField: string;
    organisationUnitGroupSetDimensions: any[];
    organisationUnitLevels: number[];
    organisationUnits: Ref[];
    parentGraphMap: object;
    periods: Ref[];
    programIndicatorDimensions: any[];
    publicAccess: string;
    regression: boolean;
    relatives: any;
    reportParams: any;
    rowDimensions: string[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: Ref[];
    shortName: string;
    showDimensionLabels: boolean;
    showHierarchy: boolean;
    skipRounding: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: string[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
}

export interface D2Map {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    basemap: string;
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    interpretations: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    latitude: number;
    longitude: number;
    mapViews: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    subscribers: string[];
    title: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    zoom: number;
}

export interface D2ExternalMapLayer {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    attribution: string;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    imageFormat: "PNG" | "JPG";
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    layers: string;
    legendSet: Ref;
    legendSetUrl: string;
    mapLayerPosition: "BASEMAP" | "OVERLAY";
    mapService: "WMS" | "TMS" | "XYZ";
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    url: string;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Document {
    access: D2Access;
    attachment: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    contentType: string;
    created: Date;
    displayName: string;
    external: boolean;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    url: string;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ValidationResult {
    attributeOptionCombo: Ref;
    created: Date;
    dayInPeriod: number;
    id: string;
    leftsideValue: number;
    notificationSent: boolean;
    organisationUnit: Ref;
    period: Ref;
    rightsideValue: number;
    validationRule: Ref;
}

export interface D2Chart {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeDimensions: any[];
    attributeValues: D2AttributeValue[];
    baseLineLabel: string;
    baseLineValue: number;
    category: string;
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: any[];
    code: Id;
    colorSet: Ref;
    columns: Ref[];
    completedOnly: boolean;
    created: Date;
    cumulativeValues: boolean;
    dataDimensionItems: any[];
    dataElementDimensions: any[];
    dataElementGroupSetDimensions: any[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    domainAxisLabel: string;
    endDate: Date;
    externalAccess: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: Ref[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: Ref[];
    itemOrganisationUnitGroups: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: Ref;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: any[];
    organisationUnitLevels: number[];
    organisationUnits: Ref[];
    parentGraphMap: object;
    percentStackedValues: boolean;
    periods: Ref[];
    programIndicatorDimensions: any[];
    publicAccess: string;
    rangeAxisDecimals: number;
    rangeAxisLabel: string;
    rangeAxisMaxValue: number;
    rangeAxisMinValue: number;
    rangeAxisSteps: number;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    relatives: any;
    rows: Ref[];
    series: string;
    seriesItems: any[];
    shortName: string;
    showData: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: string[];
    subtitle: string;
    targetLineLabel: string;
    targetLineValue: number;
    timeField: string;
    title: string;
    topLimit: number;
    translations: D2Translation[];
    type:
        | "COLUMN"
        | "STACKED_COLUMN"
        | "BAR"
        | "STACKED_BAR"
        | "LINE"
        | "AREA"
        | "PIE"
        | "RADAR"
        | "GAUGE"
        | "YEAR_OVER_YEAR_LINE"
        | "YEAR_OVER_YEAR_COLUMN";
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    yearlySeries: string[];
}

export interface D2Predictor {
    access: D2Access;
    annualSampleCount: number;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    generator: D2Expression;
    groups: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    organisationUnitLevels: Ref[];
    output: Ref;
    outputCombo: Ref;
    periodType: string;
    publicAccess: string;
    sampleSkipTest: D2Expression;
    sequentialSampleCount: number;
    sequentialSkipCount: number;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2PredictorGroup {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    members: Ref[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DashboardItem {
    access: D2Access;
    appKey: string;
    attributeValues: D2AttributeValue[];
    chart: Ref;
    code: Id;
    created: Date;
    displayName: string;
    eventChart: Ref;
    eventReport: Ref;
    externalAccess: boolean;
    favorites: string[];
    height: number;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    map: Ref;
    messages: boolean;
    name: string;
    publicAccess: string;
    reportTable: Ref;
    reports: Ref[];
    resources: Ref[];
    shape: "NORMAL" | "DOUBLE_WIDTH" | "FULL_WIDTH";
    text: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    users: Ref[];
    width: number;
    x: number;
    y: number;
}

export interface D2Dashboard {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    items: Ref[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2PushAnalysis {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dashboard: Ref;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    message: string;
    name: string;
    publicAccess: string;
    recipientUserGroups: Ref[];
    title: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2KeyJsonValue {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    key: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    namespace: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    value: string;
}

export interface D2TrackedEntityDataElementDimension {
    dataElement: Ref;
    filter: string;
    legendSet: Ref;
}

export interface D2ProgramTrackedEntityAttributeDimensionItem {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attribute: Ref;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    program: Ref;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Legend {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    color: string;
    created: Date;
    displayName: string;
    endValue: number;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    image: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    startValue: number;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2TrackedEntityProgramIndicatorDimension {
    filter: string;
    legendSet: Ref;
    programIndicator: Ref;
}

export interface D2Relationship {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    formName: string;
    from: any;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    relationshipType: Ref;
    style: D2Style;
    to: any;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataInputPeriod {
    closingDate: Date;
    openingDate: Date;
    period: Ref;
}

export interface D2TrackedEntityInstance {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    createdAtClient: Date;
    deleted: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    geometry: D2Geometry;
    href: string;
    id: Id;
    inactive: boolean;
    lastUpdated: Date;
    lastUpdatedAtClient: Date;
    lastUpdatedBy: Ref;
    name: string;
    organisationUnit: Ref;
    programInstances: Ref[];
    programOwners: any[];
    publicAccess: string;
    relationshipItems: any[];
    trackedEntityAttributeValues: any[];
    trackedEntityType: Ref;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ReportingRate {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataSet: Ref;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    metric:
        | "REPORTING_RATE"
        | "REPORTING_RATE_ON_TIME"
        | "ACTUAL_REPORTS"
        | "ACTUAL_REPORTS_ON_TIME"
        | "EXPECTED_REPORTS";
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2UserCredentials {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    catDimensionConstraints: Ref[];
    code: Id;
    cogsDimensionConstraints: Ref[];
    created: Date;
    disabled: boolean;
    displayName: string;
    externalAccess: boolean;
    externalAuth: boolean;
    favorites: string[];
    href: string;
    id: Id;
    invitation: boolean;
    lastLogin: Date;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    ldapId: string;
    name: string;
    openId: string;
    password: string;
    passwordLastUpdated: Date;
    publicAccess: string;
    selfRegistered: boolean;
    translations: D2Translation[];
    twoFA: boolean;
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userAuthorityGroups: Ref[];
    userGroupAccesses: D2UserGroupAccess[];
    userInfo: Ref;
    username: string;
}

export interface D2CategoryDimension {
    dimension: Ref;
    items: Ref[];
}

export interface D2UserAccess {
    access: string;
    id: string;
    undefined: string;
}

export interface D2MessageConversation {
    access: D2Access;
    assignee: Ref;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    followUp: boolean;
    href: string;
    id: Id;
    lastMessage: Date;
    lastSender: Ref;
    lastSenderFirstname: string;
    lastSenderSurname: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    messageCount: number;
    messageType: "PRIVATE" | "SYSTEM" | "VALIDATION_RESULT" | "TICKET";
    messages: Ref[];
    name: string;
    priority: "NONE" | "LOW" | "MEDIUM" | "HIGH";
    publicAccess: string;
    read: boolean;
    status: "NONE" | "OPEN" | "PENDING" | "INVALID" | "SOLVED";
    subject: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userFirstname: string;
    userGroupAccesses: D2UserGroupAccess[];
    userMessages: any[];
    userSurname: string;
}

export interface D2ProgramInstance {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    comments: Ref[];
    created: Date;
    createdAtClient: Date;
    deleted: boolean;
    displayName: string;
    endDate: Date;
    enrollmentDate: Date;
    entityInstance: Ref;
    externalAccess: boolean;
    favorites: string[];
    followup: boolean;
    href: string;
    id: Id;
    incidentDate: Date;
    lastUpdated: Date;
    lastUpdatedAtClient: Date;
    lastUpdatedBy: Ref;
    messageConversations: Ref[];
    name: string;
    organisationUnit: Ref;
    program: Ref;
    programStageInstances: Ref[];
    publicAccess: string;
    relationshipItems: any[];
    status: "ACTIVE" | "COMPLETED" | "CANCELLED";
    storedBy: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataElementOperand {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeOptionCombo: Ref;
    attributeValues: D2AttributeValue[];
    categoryOptionCombo: Ref;
    code: Id;
    created: Date;
    dataElement: Ref;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2UserGroupAccess {
    access: string;
    id: string;
    undefined: string;
}

export interface D2DataSetElement {
    categoryCombo: Ref;
    dataElement: Ref;
    dataSet: Ref;
}

export interface D2FileResource {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    contentLength: string;
    contentMd5: string;
    contentType: string;
    created: Date;
    displayName: string;
    domain: "DATA_VALUE" | "PUSH_ANALYSIS" | "DOCUMENT" | "MESSAGE_ATTACHMENT" | "USER_AVATAR";
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    storageStatus: "NONE" | "PENDING" | "FAILED" | "STORED";
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2InterpretationComment {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    mentions: any[];
    name: string;
    publicAccess: string;
    text: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2DataElementGroupSetDimension {
    dimension: Ref;
    items: Ref[];
}

export interface D2ProgramTrackedEntityAttribute {
    access: D2Access;
    allowFutureDate: boolean;
    attribute: Ref;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayInList: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    groups: Ref[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    mandatory: boolean;
    name: string;
    program: Ref;
    publicAccess: string;
    renderOptionsAsRadio: boolean;
    renderType: any;
    searchable: boolean;
    sortOrder: number;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2CategoryOptionGroupSetDimension {
    dimension: Ref;
    items: Ref[];
}

export interface D2ProgramStageDataElement {
    access: D2Access;
    allowFutureDate: boolean;
    allowProvidedElsewhere: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    compulsory: boolean;
    created: Date;
    dataElement: Ref;
    displayInReports: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    programStage: Ref;
    publicAccess: string;
    renderOptionsAsRadio: boolean;
    renderType: any;
    skipSynchronization: boolean;
    sortOrder: number;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramStageInstance {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramStageInstanceFilter {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    eventQueryCriteria: any;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    program: Id;
    programStage: Id;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2MinMaxDataElement {
    dataElement: Ref;
    generated: boolean;
    max: number;
    min: number;
    optionCombo: Ref;
    source: Ref;
}

export interface D2TrackedEntityInstanceFilter {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    enrollmentCreatedPeriod: any;
    enrollmentStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    eventFilters: any[];
    externalAccess: boolean;
    favorites: string[];
    followup: boolean;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    program: Ref;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Icon {}

export interface D2Interpretation {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    chart: Ref;
    code: Id;
    comments: Ref[];
    created: Date;
    dataSet: Ref;
    displayName: string;
    eventChart: Ref;
    eventReport: Ref;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    likedBy: Ref[];
    likes: number;
    map: Ref;
    mentions: any[];
    name: string;
    organisationUnit: Ref;
    period: Ref;
    publicAccess: string;
    reportTable: Ref;
    text: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2AnalyticsPeriodBoundary {
    access: D2Access;
    analyticsPeriodBoundaryType:
        | "BEFORE_START_OF_REPORTING_PERIOD"
        | "BEFORE_END_OF_REPORTING_PERIOD"
        | "AFTER_START_OF_REPORTING_PERIOD"
        | "AFTER_END_OF_REPORTING_PERIOD";
    attributeValues: D2AttributeValue[];
    boundaryTarget: string;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    offsetPeriodType: string;
    offsetPeriods: number;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2MetadataVersion {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    hashCode: string;
    href: string;
    id: Id;
    importDate: Date;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    type: "BEST_EFFORT" | "ATOMIC";
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2Color {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    color: string;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2ProgramDataElementDimensionItem {
    access: D2Access;
    aggregationType:
        | "SUM"
        | "AVERAGE"
        | "AVERAGE_SUM_ORG_UNIT"
        | "LAST"
        | "LAST_AVERAGE_ORG_UNIT"
        | "COUNT"
        | "STDDEV"
        | "VARIANCE"
        | "MIN"
        | "MAX"
        | "NONE"
        | "CUSTOM"
        | "DEFAULT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: Date;
    dataElement: Ref;
    description: string;
    dimensionItemType:
        | "DATA_ELEMENT"
        | "DATA_ELEMENT_OPERAND"
        | "INDICATOR"
        | "REPORTING_RATE"
        | "PROGRAM_DATA_ELEMENT"
        | "PROGRAM_ATTRIBUTE"
        | "PROGRAM_INDICATOR"
        | "PERIOD"
        | "ORGANISATION_UNIT"
        | "CATEGORY_OPTION"
        | "OPTION_GROUP"
        | "DATA_ELEMENT_GROUP"
        | "ORGANISATION_UNIT_GROUP"
        | "CATEGORY_OPTION_GROUP";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: Ref[];
    name: string;
    program: Ref;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    undefined: boolean;
    user: Ref;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
}

export interface D2OrganisationUnitGroupSetDimension {
    dimension: Ref;
    items: Ref[];
}

export type D2Model =
    | D2Attribute
    | D2UserAuthorityGroup
    | D2User
    | D2UserGroup
    | D2ExternalFileResource
    | D2SqlView
    | D2OAuth2Client
    | D2Constant
    | D2JobConfiguration
    | D2Option
    | D2OptionSet
    | D2OptionGroupSet
    | D2OptionGroup
    | D2ColorSet
    | D2LegendSet
    | D2OrganisationUnit
    | D2OrganisationUnitLevel
    | D2OrganisationUnitGroup
    | D2OrganisationUnitGroupSet
    | D2CategoryOption
    | D2CategoryOptionGroup
    | D2CategoryOptionGroupSet
    | D2Category
    | D2CategoryCombo
    | D2CategoryOptionCombo
    | D2DataElement
    | D2DataElementGroup
    | D2DataElementGroupSet
    | D2IndicatorType
    | D2AnalyticsTableHook
    | D2Indicator
    | D2IndicatorGroup
    | D2IndicatorGroupSet
    | D2DataEntryForm
    | D2DataSet
    | D2DataSetNotificationTemplate
    | D2Section
    | D2DataApprovalLevel
    | D2DataApprovalWorkflow
    | D2ValidationRule
    | D2ValidationRuleGroup
    | D2ValidationNotificationTemplate
    | D2TrackedEntityAttribute
    | D2TrackedEntityType
    | D2ProgramTrackedEntityAttributeGroup
    | D2ProgramStageSection
    | D2ProgramNotificationTemplate
    | D2SMSCommand
    | D2ProgramStage
    | D2Program
    | D2EventChart
    | D2EventReport
    | D2ProgramSection
    | D2ProgramIndicator
    | D2ProgramIndicatorGroup
    | D2ProgramRuleVariable
    | D2RelationshipType
    | D2ProgramRuleAction
    | D2ProgramRule
    | D2MapView
    | D2Report
    | D2ReportTable
    | D2Map
    | D2ExternalMapLayer
    | D2Document
    | D2Chart
    | D2Predictor
    | D2PredictorGroup
    | D2Dashboard
    | D2PushAnalysis
    | D2ProgramStageInstanceFilter
    | D2TrackedEntityInstanceFilter;

export enum D2ModelEnum {
    attributes = "attributes",
    userRoles = "userRoles",
    users = "users",
    userGroups = "userGroups",
    externalFileResources = "externalFileResources",
    sqlViews = "sqlViews",
    oAuth2Clients = "oAuth2Clients",
    constants = "constants",
    jobConfigurations = "jobConfigurations",
    options = "options",
    optionSets = "optionSets",
    optionGroupSets = "optionGroupSets",
    optionGroups = "optionGroups",
    colorSets = "colorSets",
    legendSets = "legendSets",
    organisationUnits = "organisationUnits",
    organisationUnitLevels = "organisationUnitLevels",
    organisationUnitGroups = "organisationUnitGroups",
    organisationUnitGroupSets = "organisationUnitGroupSets",
    categoryOptions = "categoryOptions",
    categoryOptionGroups = "categoryOptionGroups",
    categoryOptionGroupSets = "categoryOptionGroupSets",
    categories = "categories",
    categoryCombos = "categoryCombos",
    categoryOptionCombos = "categoryOptionCombos",
    dataElements = "dataElements",
    dataElementGroups = "dataElementGroups",
    dataElementGroupSets = "dataElementGroupSets",
    indicatorTypes = "indicatorTypes",
    analyticsTableHooks = "analyticsTableHooks",
    indicators = "indicators",
    indicatorGroups = "indicatorGroups",
    indicatorGroupSets = "indicatorGroupSets",
    dataEntryForms = "dataEntryForms",
    dataSets = "dataSets",
    dataSetNotificationTemplates = "dataSetNotificationTemplates",
    sections = "sections",
    dataApprovalLevels = "dataApprovalLevels",
    dataApprovalWorkflows = "dataApprovalWorkflows",
    validationRules = "validationRules",
    validationRuleGroups = "validationRuleGroups",
    validationNotificationTemplates = "validationNotificationTemplates",
    trackedEntityAttributes = "trackedEntityAttributes",
    trackedEntityTypes = "trackedEntityTypes",
    programTrackedEntityAttributeGroups = "programTrackedEntityAttributeGroups",
    programStageSections = "programStageSections",
    programNotificationTemplates = "programNotificationTemplates",
    smsCommands = "smsCommands",
    programStages = "programStages",
    programs = "programs",
    eventCharts = "eventCharts",
    eventReports = "eventReports",
    programSections = "programSections",
    programIndicators = "programIndicators",
    programIndicatorGroups = "programIndicatorGroups",
    programRuleVariables = "programRuleVariables",
    relationshipTypes = "relationshipTypes",
    programRuleActions = "programRuleActions",
    programRules = "programRules",
    mapViews = "mapViews",
    reports = "reports",
    reportTables = "reportTables",
    maps = "maps",
    externalMapLayers = "externalMapLayers",
    documents = "documents",
    charts = "charts",
    predictors = "predictors",
    predictorGroups = "predictorGroups",
    dashboards = "dashboards",
    pushAnalysis = "pushAnalysis",
    eventFilters = "eventFilters",
    trackedEntityInstanceFilters = "trackedEntityInstanceFilters",
}

export type D2ModelsInfoI = {
    [K in D2ModelEnum]: {
        model: D2Model;
        fieldPresets: {
            [K in FieldPreset]: string;
        };
    };
};

export interface D2ModelsInfo extends D2ModelsInfoI {
    attributes: {
        model: D2Attribute;
        fieldPresets: {
            $all: keyof D2Attribute;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "indicatorAttribute"
                | "indicatorGroupAttribute"
                | "publicAccess"
                | "userGroupAttribute"
                | "dataElementAttribute"
                | "lastUpdated"
                | "constantAttribute"
                | "translations"
                | "valueType"
                | "categoryOptionAttribute"
                | "uid"
                | "optionSetAttribute"
                | "lastUpdatedBy"
                | "sqlViewAttribute"
                | "userGroupAccesses"
                | "created"
                | "legendSetAttribute"
                | "trackedEntityAttributeAttribute"
                | "organisationUnitAttribute"
                | "dataSetAttribute"
                | "documentAttribute"
                | "unique"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "validationRuleGroupAttribute"
                | "shortName"
                | "dataElementGroupAttribute"
                | "sectionAttribute"
                | "trackedEntityTypeAttribute"
                | "code"
                | "userAttribute"
                | "description"
                | "mandatory"
                | "categoryOptionGroupAttribute"
                | "programStageAttribute"
                | "programAttribute"
                | "optionSet"
                | "categoryAttribute"
                | "categoryOptionComboAttribute"
                | "categoryOptionGroupSetAttribute"
                | "validationRuleAttribute"
                | "programIndicatorAttribute"
                | "organisationUnitGroupAttribute"
                | "dataElementGroupSetAttribute"
                | "organisationUnitGroupSetAttribute"
                | "user"
                | "optionAttribute";
            $owner:
                | "indicatorAttribute"
                | "indicatorGroupAttribute"
                | "publicAccess"
                | "userGroupAttribute"
                | "dataElementAttribute"
                | "lastUpdated"
                | "constantAttribute"
                | "translations"
                | "valueType"
                | "categoryOptionAttribute"
                | "uid"
                | "optionSetAttribute"
                | "lastUpdatedBy"
                | "sqlViewAttribute"
                | "userGroupAccesses"
                | "created"
                | "legendSetAttribute"
                | "trackedEntityAttributeAttribute"
                | "organisationUnitAttribute"
                | "dataSetAttribute"
                | "documentAttribute"
                | "unique"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "validationRuleGroupAttribute"
                | "shortName"
                | "dataElementGroupAttribute"
                | "sectionAttribute"
                | "trackedEntityTypeAttribute"
                | "code"
                | "userAttribute"
                | "description"
                | "mandatory"
                | "categoryOptionGroupAttribute"
                | "programStageAttribute"
                | "programAttribute"
                | "optionSet"
                | "categoryAttribute"
                | "categoryOptionComboAttribute"
                | "categoryOptionGroupSetAttribute"
                | "validationRuleAttribute"
                | "programIndicatorAttribute"
                | "organisationUnitGroupAttribute"
                | "dataElementGroupSetAttribute"
                | "organisationUnitGroupSetAttribute"
                | "user"
                | "optionAttribute";
        };
    };
    userRoles: {
        model: D2UserAuthorityGroup;
        fieldPresets: {
            $all: keyof D2UserAuthorityGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "description"
                | "authorities"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "description"
                | "authorities"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    users: {
        model: D2User;
        fieldPresets: {
            $all: keyof D2User;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "birthday"
                | "code"
                | "education"
                | "gender"
                | "jobTitle"
                | "skype"
                | "lastUpdated"
                | "teiSearchOrganisationUnits"
                | "twitter"
                | "surname"
                | "employer"
                | "uid"
                | "organisationUnits"
                | "facebookMessenger"
                | "introduction"
                | "email"
                | "dataViewOrganisationUnits"
                | "whatsApp"
                | "languages"
                | "created"
                | "welcomeMessage"
                | "userCredentials"
                | "attributeValues"
                | "telegram"
                | "avatar"
                | "lastCheckedInterpretations"
                | "groups"
                | "firstName"
                | "phoneNumber"
                | "nationality"
                | "interests";
            $owner:
                | "birthday"
                | "code"
                | "education"
                | "gender"
                | "jobTitle"
                | "skype"
                | "lastUpdated"
                | "teiSearchOrganisationUnits"
                | "twitter"
                | "surname"
                | "employer"
                | "uid"
                | "organisationUnits"
                | "facebookMessenger"
                | "introduction"
                | "email"
                | "dataViewOrganisationUnits"
                | "whatsApp"
                | "languages"
                | "created"
                | "welcomeMessage"
                | "userCredentials"
                | "attributeValues"
                | "telegram"
                | "avatar"
                | "lastCheckedInterpretations"
                | "firstName"
                | "phoneNumber"
                | "nationality"
                | "interests";
        };
    };
    userGroups: {
        model: D2UserGroup;
        fieldPresets: {
            $all: keyof D2UserGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "managedByGroups"
                | "attributeValues"
                | "members"
                | "managedGroups"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "members"
                | "managedGroups"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    externalFileResources: {
        model: D2ExternalFileResource;
        fieldPresets: {
            $all: keyof D2ExternalFileResource;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted: "lastUpdatedBy" | "code" | "created" | "lastUpdated" | "uid";
            $owner: "lastUpdatedBy" | "code" | "created" | "lastUpdated" | "uid";
        };
    };
    sqlViews: {
        model: D2SqlView;
        fieldPresets: {
            $all: keyof D2SqlView;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "sqlQuery"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "description"
                | "type"
                | "externalAccess"
                | "lastUpdated"
                | "userAccesses"
                | "name"
                | "cacheStrategy"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "sqlQuery"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "description"
                | "type"
                | "externalAccess"
                | "lastUpdated"
                | "userAccesses"
                | "name"
                | "cacheStrategy"
                | "uid"
                | "user";
        };
    };
    oAuth2Clients: {
        model: D2OAuth2Client;
        fieldPresets: {
            $all: keyof D2OAuth2Client;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "secret"
                | "redirectUris"
                | "lastUpdated"
                | "grantTypes"
                | "name"
                | "uid"
                | "cid";
            $owner:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "secret"
                | "redirectUris"
                | "lastUpdated"
                | "grantTypes"
                | "name"
                | "uid"
                | "cid";
        };
    };
    constants: {
        model: D2Constant;
        fieldPresets: {
            $all: keyof D2Constant;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "value"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "value"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
        };
    };
    jobConfigurations: {
        model: D2JobConfiguration;
        fieldPresets: {
            $all: keyof D2JobConfiguration;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "jobStatus"
                | "code"
                | "enabled"
                | "leaderOnlyJob"
                | "lastUpdated"
                | "continuousExecution"
                | "uid"
                | "jobType"
                | "lastUpdatedBy"
                | "nextExecutionTime"
                | "created"
                | "cronExpression"
                | "lastRuntimeExecution"
                | "lastExecutedStatus"
                | "name"
                | "jobParameters"
                | "lastExecuted";
            $owner:
                | "jobStatus"
                | "code"
                | "enabled"
                | "leaderOnlyJob"
                | "lastUpdated"
                | "continuousExecution"
                | "uid"
                | "jobType"
                | "lastUpdatedBy"
                | "nextExecutionTime"
                | "created"
                | "cronExpression"
                | "lastRuntimeExecution"
                | "lastExecutedStatus"
                | "name"
                | "jobParameters"
                | "lastExecuted";
        };
    };
    options: {
        model: D2Option;
        fieldPresets: {
            $all: keyof D2Option;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "description"
                | "lastUpdated"
                | "optionSet"
                | "translations"
                | "formName"
                | "uid"
                | "created"
                | "attributeValues"
                | "sortOrder"
                | "name"
                | "style";
            $owner:
                | "code"
                | "description"
                | "lastUpdated"
                | "optionSet"
                | "translations"
                | "formName"
                | "uid"
                | "created"
                | "attributeValues"
                | "sortOrder"
                | "name"
                | "style";
        };
    };
    optionSets: {
        model: D2OptionSet;
        fieldPresets: {
            $all: keyof D2OptionSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "version"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "valueType"
                | "name"
                | "options"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "version"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "valueType"
                | "name"
                | "options"
                | "uid"
                | "user";
        };
    };
    optionGroupSets: {
        model: D2OptionGroupSet;
        fieldPresets: {
            $all: keyof D2OptionGroupSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "description"
                | "members"
                | "lastUpdated"
                | "optionSet"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "description"
                | "members"
                | "lastUpdated"
                | "optionSet"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
        };
    };
    optionGroups: {
        model: D2OptionGroup;
        fieldPresets: {
            $all: keyof D2OptionGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "optionSet"
                | "translations"
                | "members"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "optionSet"
                | "translations"
                | "members"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
        };
    };
    colorSets: {
        model: D2ColorSet;
        fieldPresets: {
            $all: keyof D2ColorSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "colors"
                | "lastUpdated"
                | "translations"
                | "name"
                | "uid";
            $owner:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "colors"
                | "lastUpdated"
                | "translations"
                | "name"
                | "uid";
        };
    };
    legendSets: {
        model: D2LegendSet;
        fieldPresets: {
            $all: keyof D2LegendSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "symbolizer"
                | "lastUpdated"
                | "legends"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "symbolizer"
                | "lastUpdated"
                | "legends"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    organisationUnits: {
        model: D2OrganisationUnit;
        fieldPresets: {
            $all: keyof D2OrganisationUnit;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "parent"
                | "path"
                | "lastUpdated"
                | "children"
                | "translations"
                | "uid"
                | "groups"
                | "lastUpdatedBy"
                | "created"
                | "attributeValues"
                | "users"
                | "phoneNumber"
                | "name"
                | "dataSets"
                | "programs"
                | "shortName"
                | "code"
                | "description"
                | "contactPerson"
                | "openingDate"
                | "email"
                | "address"
                | "url"
                | "closedDate"
                | "geometry"
                | "comment"
                | "user";
            $owner:
                | "parent"
                | "path"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "created"
                | "attributeValues"
                | "phoneNumber"
                | "name"
                | "shortName"
                | "code"
                | "description"
                | "contactPerson"
                | "openingDate"
                | "email"
                | "address"
                | "url"
                | "closedDate"
                | "geometry"
                | "comment"
                | "user";
        };
    };
    organisationUnitLevels: {
        model: D2OrganisationUnitLevel;
        fieldPresets: {
            $all: keyof D2OrganisationUnitLevel;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "offlineLevels"
                | "code"
                | "level"
                | "created"
                | "lastUpdated"
                | "translations"
                | "name"
                | "uid";
            $owner:
                | "lastUpdatedBy"
                | "offlineLevels"
                | "code"
                | "level"
                | "created"
                | "lastUpdated"
                | "translations"
                | "name"
                | "uid";
        };
    };
    organisationUnitGroups: {
        model: D2OrganisationUnitGroup;
        fieldPresets: {
            $all: keyof D2OrganisationUnitGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "symbol"
                | "code"
                | "color"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "groupSets"
                | "userAccesses"
                | "name"
                | "geometry"
                | "shortName"
                | "user";
            $owner:
                | "symbol"
                | "code"
                | "color"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "geometry"
                | "shortName"
                | "user";
        };
    };
    organisationUnitGroupSets: {
        model: D2OrganisationUnitGroupSet;
        fieldPresets: {
            $all: keyof D2OrganisationUnitGroupSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "organisationUnitGroups"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "compulsory"
                | "includeSubhierarchyInAnalytics"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "organisationUnitGroups"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "compulsory"
                | "includeSubhierarchyInAnalytics"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
        };
    };
    categoryOptions: {
        model: D2CategoryOption;
        fieldPresets: {
            $all: keyof D2CategoryOption;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "endDate"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "categories"
                | "organisationUnits"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "categoryOptionCombos"
                | "groups"
                | "userAccesses"
                | "name"
                | "style"
                | "shortName"
                | "user"
                | "startDate";
            $owner:
                | "code"
                | "endDate"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "organisationUnits"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "style"
                | "shortName"
                | "user"
                | "startDate";
        };
    };
    categoryOptionGroups: {
        model: D2CategoryOptionGroup;
        fieldPresets: {
            $all: keyof D2CategoryOptionGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "groupSets"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
            $owner:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
        };
    };
    categoryOptionGroupSets: {
        model: D2CategoryOptionGroupSet;
        fieldPresets: {
            $all: keyof D2CategoryOptionGroupSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "members"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
            $owner:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "members"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
        };
    };
    categories: {
        model: D2Category;
        fieldPresets: {
            $all: keyof D2Category;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "categoryCombos"
                | "uid"
                | "categoryOptions"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
            $owner:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "categoryOptions"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
        };
    };
    categoryCombos: {
        model: D2CategoryCombo;
        fieldPresets: {
            $all: keyof D2CategoryCombo;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "categories"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "optionCombos"
                | "userAccesses"
                | "name"
                | "skipTotal"
                | "user";
            $owner:
                | "dataDimensionType"
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "categories"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "userAccesses"
                | "name"
                | "skipTotal"
                | "user";
        };
    };
    categoryOptionCombos: {
        model: D2CategoryOptionCombo;
        fieldPresets: {
            $all: keyof D2CategoryOptionCombo;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "lastUpdated"
                | "ignoreApproval"
                | "categoryCombo"
                | "translations"
                | "uid"
                | "categoryOptions"
                | "lastUpdatedBy"
                | "created"
                | "attributeValues"
                | "name";
            $owner:
                | "code"
                | "lastUpdated"
                | "ignoreApproval"
                | "categoryCombo"
                | "translations"
                | "uid"
                | "categoryOptions"
                | "lastUpdatedBy"
                | "created"
                | "attributeValues"
                | "name";
        };
    };
    dataElements: {
        model: D2DataElement;
        fieldPresets: {
            $all: keyof D2DataElement;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "aggregationType"
                | "code"
                | "domainType"
                | "dataSetElements"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "optionSet"
                | "categoryCombo"
                | "translations"
                | "valueType"
                | "formName"
                | "commentOptionSet"
                | "uid"
                | "fieldMask"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "groups"
                | "attributeValues"
                | "zeroIsSignificant"
                | "url"
                | "userAccesses"
                | "name"
                | "legendSets"
                | "aggregationLevels"
                | "style"
                | "shortName"
                | "user";
            $owner:
                | "aggregationType"
                | "code"
                | "domainType"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "optionSet"
                | "categoryCombo"
                | "translations"
                | "valueType"
                | "formName"
                | "commentOptionSet"
                | "uid"
                | "fieldMask"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "zeroIsSignificant"
                | "url"
                | "userAccesses"
                | "name"
                | "legendSets"
                | "aggregationLevels"
                | "style"
                | "shortName"
                | "user";
        };
    };
    dataElementGroups: {
        model: D2DataElementGroup;
        fieldPresets: {
            $all: keyof D2DataElementGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "groupSets"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "userAccesses"
                | "name"
                | "shortName"
                | "user";
        };
    };
    dataElementGroupSets: {
        model: D2DataElementGroupSet;
        fieldPresets: {
            $all: keyof D2DataElementGroupSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "members"
                | "compulsory"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "members"
                | "compulsory"
                | "userAccesses"
                | "name"
                | "dataDimension"
                | "user";
        };
    };
    indicatorTypes: {
        model: D2IndicatorType;
        fieldPresets: {
            $all: keyof D2IndicatorType;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "lastUpdated"
                | "number"
                | "translations"
                | "name"
                | "uid"
                | "factor";
            $owner:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "lastUpdated"
                | "number"
                | "translations"
                | "name"
                | "uid"
                | "factor";
        };
    };
    analyticsTableHooks: {
        model: D2AnalyticsTableHook;
        fieldPresets: {
            $all: keyof D2AnalyticsTableHook;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "phase"
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "analyticsTableType"
                | "sql"
                | "lastUpdated"
                | "name"
                | "resourceTableType"
                | "uid";
            $owner:
                | "phase"
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "analyticsTableType"
                | "sql"
                | "lastUpdated"
                | "name"
                | "resourceTableType"
                | "uid";
        };
    };
    indicators: {
        model: D2Indicator;
        fieldPresets: {
            $all: keyof D2Indicator;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "aggregateExportCategoryOptionCombo"
                | "description"
                | "lastUpdated"
                | "denominatorDescription"
                | "indicatorType"
                | "translations"
                | "formName"
                | "uid"
                | "numeratorDescription"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "groups"
                | "url"
                | "numerator"
                | "denominator"
                | "annualized"
                | "userAccesses"
                | "decimals"
                | "name"
                | "dataSets"
                | "legendSets"
                | "style"
                | "shortName"
                | "user"
                | "aggregateExportAttributeOptionCombo";
            $owner:
                | "code"
                | "publicAccess"
                | "aggregateExportCategoryOptionCombo"
                | "description"
                | "lastUpdated"
                | "denominatorDescription"
                | "indicatorType"
                | "translations"
                | "formName"
                | "uid"
                | "numeratorDescription"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "url"
                | "numerator"
                | "denominator"
                | "annualized"
                | "userAccesses"
                | "decimals"
                | "name"
                | "legendSets"
                | "style"
                | "shortName"
                | "user"
                | "aggregateExportAttributeOptionCombo";
        };
    };
    indicatorGroups: {
        model: D2IndicatorGroup;
        fieldPresets: {
            $all: keyof D2IndicatorGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "members"
                | "groupSet"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "members"
                | "groupSet"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    indicatorGroupSets: {
        model: D2IndicatorGroupSet;
        fieldPresets: {
            $all: keyof D2IndicatorGroupSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "description"
                | "members"
                | "lastUpdated"
                | "compulsory"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "description"
                | "members"
                | "lastUpdated"
                | "compulsory"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    dataEntryForms: {
        model: D2DataEntryForm;
        fieldPresets: {
            $all: keyof D2DataEntryForm;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "htmlCode"
                | "format"
                | "lastUpdated"
                | "translations"
                | "name"
                | "style"
                | "uid";
            $owner:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "htmlCode"
                | "format"
                | "lastUpdated"
                | "translations"
                | "name"
                | "style"
                | "uid";
        };
    };
    dataSets: {
        model: D2DataSet;
        fieldPresets: {
            $all: keyof D2DataSet;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataEntryForm"
                | "validCompleteOnly"
                | "dataSetElements"
                | "publicAccess"
                | "skipOffline"
                | "compulsoryFieldsCompleteOnly"
                | "lastUpdated"
                | "categoryCombo"
                | "translations"
                | "dataInputPeriods"
                | "uid"
                | "interpretations"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "workflow"
                | "created"
                | "attributeValues"
                | "indicators"
                | "version"
                | "sections"
                | "timelyDays"
                | "userAccesses"
                | "name"
                | "legendSets"
                | "style"
                | "notificationRecipients"
                | "shortName"
                | "code"
                | "dataElementDecoration"
                | "notifyCompletingUser"
                | "noValueRequiresComment"
                | "compulsoryDataElementOperands"
                | "description"
                | "fieldCombinationRequired"
                | "formName"
                | "sources"
                | "renderHorizontally"
                | "renderAsTabs"
                | "mobile"
                | "periodType"
                | "openFuturePeriods"
                | "expiryDays"
                | "user";
            $owner:
                | "dataEntryForm"
                | "validCompleteOnly"
                | "dataSetElements"
                | "publicAccess"
                | "skipOffline"
                | "compulsoryFieldsCompleteOnly"
                | "lastUpdated"
                | "categoryCombo"
                | "translations"
                | "dataInputPeriods"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "workflow"
                | "created"
                | "attributeValues"
                | "indicators"
                | "version"
                | "timelyDays"
                | "userAccesses"
                | "name"
                | "legendSets"
                | "style"
                | "notificationRecipients"
                | "shortName"
                | "code"
                | "dataElementDecoration"
                | "notifyCompletingUser"
                | "noValueRequiresComment"
                | "compulsoryDataElementOperands"
                | "description"
                | "fieldCombinationRequired"
                | "formName"
                | "sources"
                | "renderHorizontally"
                | "renderAsTabs"
                | "mobile"
                | "periodType"
                | "openFuturePeriods"
                | "expiryDays"
                | "user";
        };
    };
    dataSetNotificationTemplates: {
        model: D2DataSetNotificationTemplate;
        fieldPresets: {
            $all: keyof D2DataSetNotificationTemplate;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "lastUpdated"
                | "relativeScheduledDays"
                | "uid"
                | "subjectTemplate"
                | "dataSetNotificationTrigger"
                | "sendStrategy"
                | "lastUpdatedBy"
                | "deliveryChannels"
                | "created"
                | "notifyUsersInHierarchyOnly"
                | "notificationRecipient"
                | "notifyParentOrganisationUnitOnly"
                | "name"
                | "dataSets"
                | "recipientUserGroup"
                | "messageTemplate";
            $owner:
                | "code"
                | "lastUpdated"
                | "relativeScheduledDays"
                | "uid"
                | "subjectTemplate"
                | "dataSetNotificationTrigger"
                | "sendStrategy"
                | "lastUpdatedBy"
                | "deliveryChannels"
                | "created"
                | "notifyUsersInHierarchyOnly"
                | "notificationRecipient"
                | "notifyParentOrganisationUnitOnly"
                | "name"
                | "dataSets"
                | "recipientUserGroup"
                | "messageTemplate";
        };
    };
    sections: {
        model: D2Section;
        fieldPresets: {
            $all: keyof D2Section;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "greyedFields"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "dataSet"
                | "dataElements"
                | "showColumnTotals"
                | "lastUpdatedBy"
                | "created"
                | "attributeValues"
                | "indicators"
                | "sortOrder"
                | "name"
                | "showRowTotals";
            $owner:
                | "code"
                | "greyedFields"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "dataSet"
                | "dataElements"
                | "showColumnTotals"
                | "lastUpdatedBy"
                | "created"
                | "attributeValues"
                | "indicators"
                | "sortOrder"
                | "name"
                | "showRowTotals";
        };
    };
    dataApprovalLevels: {
        model: D2DataApprovalLevel;
        fieldPresets: {
            $all: keyof D2DataApprovalLevel;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "categoryOptionGroupSet"
                | "userGroupAccesses"
                | "code"
                | "level"
                | "created"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "orgUnitLevel"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "categoryOptionGroupSet"
                | "userGroupAccesses"
                | "code"
                | "level"
                | "created"
                | "publicAccess"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "orgUnitLevel"
                | "uid"
                | "user";
        };
    };
    dataApprovalWorkflows: {
        model: D2DataApprovalWorkflow;
        fieldPresets: {
            $all: keyof D2DataApprovalWorkflow;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "levels"
                | "lastUpdated"
                | "periodType"
                | "categoryCombo"
                | "translations"
                | "userAccesses"
                | "name"
                | "dataSets"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "levels"
                | "lastUpdated"
                | "periodType"
                | "categoryCombo"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    validationRules: {
        model: D2ValidationRule;
        fieldPresets: {
            $all: keyof D2ValidationRule;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "groups"
                | "code"
                | "importance"
                | "publicAccess"
                | "description"
                | "operator"
                | "organisationUnitLevels"
                | "lastUpdated"
                | "leftSide"
                | "notificationTemplates"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "rightSide"
                | "periodType"
                | "instruction"
                | "userAccesses"
                | "name"
                | "skipFormValidation"
                | "user";
            $owner:
                | "code"
                | "importance"
                | "publicAccess"
                | "description"
                | "operator"
                | "organisationUnitLevels"
                | "lastUpdated"
                | "leftSide"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "rightSide"
                | "periodType"
                | "instruction"
                | "userAccesses"
                | "name"
                | "skipFormValidation"
                | "user";
        };
    };
    validationRuleGroups: {
        model: D2ValidationRuleGroup;
        fieldPresets: {
            $all: keyof D2ValidationRuleGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "members"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "description"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "members"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "description"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    validationNotificationTemplates: {
        model: D2ValidationNotificationTemplate;
        fieldPresets: {
            $all: keyof D2ValidationNotificationTemplate;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "recipientUserGroups"
                | "lastUpdated"
                | "subjectTemplate"
                | "uid"
                | "sendStrategy"
                | "lastUpdatedBy"
                | "validationRules"
                | "created"
                | "notifyUsersInHierarchyOnly"
                | "name"
                | "messageTemplate";
            $owner:
                | "code"
                | "recipientUserGroups"
                | "lastUpdated"
                | "subjectTemplate"
                | "uid"
                | "sendStrategy"
                | "lastUpdatedBy"
                | "validationRules"
                | "created"
                | "notifyUsersInHierarchyOnly"
                | "name"
                | "messageTemplate";
        };
    };
    trackedEntityAttributes: {
        model: D2TrackedEntityAttribute;
        fieldPresets: {
            $all: keyof D2TrackedEntityAttribute;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "aggregationType"
                | "programScope"
                | "code"
                | "displayInListNoProgram"
                | "publicAccess"
                | "pattern"
                | "description"
                | "skipSynchronization"
                | "sortOrderInListNoProgram"
                | "lastUpdated"
                | "optionSet"
                | "generated"
                | "displayOnVisitSchedule"
                | "translations"
                | "valueType"
                | "formName"
                | "sortOrderInVisitSchedule"
                | "uid"
                | "orgunitScope"
                | "confidential"
                | "fieldMask"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "expression"
                | "created"
                | "attributeValues"
                | "unique"
                | "userAccesses"
                | "inherit"
                | "name"
                | "legendSets"
                | "style"
                | "shortName"
                | "user";
            $owner:
                | "aggregationType"
                | "programScope"
                | "code"
                | "displayInListNoProgram"
                | "publicAccess"
                | "pattern"
                | "description"
                | "skipSynchronization"
                | "sortOrderInListNoProgram"
                | "lastUpdated"
                | "optionSet"
                | "generated"
                | "displayOnVisitSchedule"
                | "translations"
                | "valueType"
                | "formName"
                | "sortOrderInVisitSchedule"
                | "uid"
                | "orgunitScope"
                | "confidential"
                | "fieldMask"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "expression"
                | "created"
                | "attributeValues"
                | "unique"
                | "userAccesses"
                | "inherit"
                | "name"
                | "legendSets"
                | "style"
                | "shortName"
                | "user";
        };
    };
    trackedEntityTypes: {
        model: D2TrackedEntityType;
        fieldPresets: {
            $all: keyof D2TrackedEntityType;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "publicAccess"
                | "trackedEntityTypeAttributes"
                | "description"
                | "lastUpdated"
                | "allowAuditLog"
                | "translations"
                | "formName"
                | "featureType"
                | "minAttributesRequiredToSearch"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "maxTeiCountToReturn"
                | "userAccesses"
                | "name"
                | "style"
                | "user";
            $owner:
                | "code"
                | "publicAccess"
                | "trackedEntityTypeAttributes"
                | "description"
                | "lastUpdated"
                | "allowAuditLog"
                | "translations"
                | "formName"
                | "featureType"
                | "minAttributesRequiredToSearch"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "maxTeiCountToReturn"
                | "userAccesses"
                | "name"
                | "style"
                | "user";
        };
    };
    programTrackedEntityAttributeGroups: {
        model: D2ProgramTrackedEntityAttributeGroup;
        fieldPresets: {
            $all: keyof D2ProgramTrackedEntityAttributeGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "uniqunessType"
                | "code"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "created"
                | "name"
                | "attributes"
                | "shortName";
            $owner:
                | "uniqunessType"
                | "code"
                | "description"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "created"
                | "name"
                | "shortName";
        };
    };
    programStageSections: {
        model: D2ProgramStageSection;
        fieldPresets: {
            $all: keyof D2ProgramStageSection;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "description"
                | "programIndicators"
                | "lastUpdated"
                | "translations"
                | "formName"
                | "uid"
                | "renderType"
                | "dataElements"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "sortOrder"
                | "name"
                | "style";
            $owner:
                | "code"
                | "description"
                | "programIndicators"
                | "lastUpdated"
                | "translations"
                | "formName"
                | "uid"
                | "renderType"
                | "dataElements"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "sortOrder"
                | "name"
                | "style";
        };
    };
    programNotificationTemplates: {
        model: D2ProgramNotificationTemplate;
        fieldPresets: {
            $all: keyof D2ProgramNotificationTemplate;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "notificationTrigger"
                | "lastUpdated"
                | "relativeScheduledDays"
                | "uid"
                | "subjectTemplate"
                | "lastUpdatedBy"
                | "deliveryChannels"
                | "recipientDataElement"
                | "created"
                | "notifyUsersInHierarchyOnly"
                | "notificationRecipient"
                | "recipientProgramAttribute"
                | "notifyParentOrganisationUnitOnly"
                | "name"
                | "recipientUserGroup"
                | "messageTemplate";
            $owner:
                | "code"
                | "notificationTrigger"
                | "lastUpdated"
                | "relativeScheduledDays"
                | "uid"
                | "subjectTemplate"
                | "lastUpdatedBy"
                | "deliveryChannels"
                | "recipientDataElement"
                | "created"
                | "notifyUsersInHierarchyOnly"
                | "notificationRecipient"
                | "recipientProgramAttribute"
                | "notifyParentOrganisationUnitOnly"
                | "name"
                | "recipientUserGroup"
                | "messageTemplate";
        };
    };
    smsCommands: {
        model: D2SMSCommand;
        fieldPresets: {
            $all: keyof D2SMSCommand;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "moreThanOneOrgUnitMessage"
                | "codes"
                | "specialCharacters"
                | "currentPeriodUsedForReporting"
                | "program"
                | "noUserMessage"
                | "lastUpdated"
                | "receivedMessage"
                | "defaultMessage"
                | "uid"
                | "userGroup"
                | "programStage"
                | "completenessMethod"
                | "created"
                | "wrongFormatMessage"
                | "separator"
                | "successMessage"
                | "codeValueSeparator"
                | "parserType"
                | "name"
                | "dataset";
            $owner:
                | "moreThanOneOrgUnitMessage"
                | "codes"
                | "specialCharacters"
                | "currentPeriodUsedForReporting"
                | "program"
                | "noUserMessage"
                | "lastUpdated"
                | "receivedMessage"
                | "defaultMessage"
                | "uid"
                | "userGroup"
                | "programStage"
                | "completenessMethod"
                | "created"
                | "wrongFormatMessage"
                | "separator"
                | "successMessage"
                | "codeValueSeparator"
                | "parserType"
                | "name"
                | "dataset";
        };
    };
    programStages: {
        model: D2ProgramStage;
        fieldPresets: {
            $all: keyof D2ProgramStage;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "allowGenerateNextVisit"
                | "dataEntryForm"
                | "publicAccess"
                | "reportDateToUse"
                | "program"
                | "lastUpdated"
                | "programStageDataElements"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "generatedByEnrollmentDate"
                | "created"
                | "attributeValues"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "hideDueDate"
                | "enableUserAssignment"
                | "style"
                | "minDaysFromStart"
                | "standardInterval"
                | "dueDateLabel"
                | "executionDateLabel"
                | "code"
                | "preGenerateUID"
                | "description"
                | "notificationTemplates"
                | "openAfterEnrollment"
                | "repeatable"
                | "formName"
                | "featureType"
                | "remindCompleted"
                | "displayGenerateEventBox"
                | "validationStrategy"
                | "autoGenerateEvent"
                | "periodType"
                | "blockEntryForm"
                | "user"
                | "programStageSections";
            $owner:
                | "allowGenerateNextVisit"
                | "dataEntryForm"
                | "publicAccess"
                | "reportDateToUse"
                | "program"
                | "lastUpdated"
                | "programStageDataElements"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "generatedByEnrollmentDate"
                | "created"
                | "attributeValues"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "hideDueDate"
                | "enableUserAssignment"
                | "style"
                | "minDaysFromStart"
                | "standardInterval"
                | "dueDateLabel"
                | "executionDateLabel"
                | "code"
                | "preGenerateUID"
                | "description"
                | "notificationTemplates"
                | "openAfterEnrollment"
                | "repeatable"
                | "formName"
                | "featureType"
                | "remindCompleted"
                | "displayGenerateEventBox"
                | "validationStrategy"
                | "autoGenerateEvent"
                | "periodType"
                | "blockEntryForm"
                | "user"
                | "programStageSections";
        };
    };
    programs: {
        model: D2Program;
        fieldPresets: {
            $all: keyof D2Program;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataEntryForm"
                | "publicAccess"
                | "ignoreOverdueEvents"
                | "skipOffline"
                | "programIndicators"
                | "lastUpdated"
                | "categoryCombo"
                | "translations"
                | "uid"
                | "enrollmentDateLabel"
                | "lastUpdatedBy"
                | "onlyEnrollOnce"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "version"
                | "maxTeiCountToReturn"
                | "selectIncidentDatesInFuture"
                | "incidentDateLabel"
                | "userRoles"
                | "expiryPeriodType"
                | "userAccesses"
                | "name"
                | "selectEnrollmentDatesInFuture"
                | "style"
                | "shortName"
                | "useFirstStageDuringRegistration"
                | "code"
                | "programRuleVariables"
                | "programAttributes"
                | "completeEventsExpiryDays"
                | "description"
                | "relatedProgram"
                | "notificationTemplates"
                | "formName"
                | "featureType"
                | "minAttributesRequiredToSearch"
                | "displayFrontPageList"
                | "organisationUnits"
                | "programType"
                | "accessLevel"
                | "programSections"
                | "programStages"
                | "trackedEntityType"
                | "displayIncidentDate"
                | "expiryDays"
                | "user";
            $owner:
                | "dataEntryForm"
                | "publicAccess"
                | "ignoreOverdueEvents"
                | "skipOffline"
                | "lastUpdated"
                | "categoryCombo"
                | "translations"
                | "uid"
                | "enrollmentDateLabel"
                | "lastUpdatedBy"
                | "onlyEnrollOnce"
                | "userGroupAccesses"
                | "created"
                | "attributeValues"
                | "version"
                | "maxTeiCountToReturn"
                | "selectIncidentDatesInFuture"
                | "incidentDateLabel"
                | "expiryPeriodType"
                | "userAccesses"
                | "name"
                | "selectEnrollmentDatesInFuture"
                | "style"
                | "shortName"
                | "useFirstStageDuringRegistration"
                | "code"
                | "programAttributes"
                | "completeEventsExpiryDays"
                | "description"
                | "relatedProgram"
                | "notificationTemplates"
                | "formName"
                | "featureType"
                | "minAttributesRequiredToSearch"
                | "displayFrontPageList"
                | "organisationUnits"
                | "programType"
                | "accessLevel"
                | "programSections"
                | "programStages"
                | "trackedEntityType"
                | "displayIncidentDate"
                | "expiryDays"
                | "user";
        };
    };
    eventCharts: {
        model: D2EventChart;
        fieldPresets: {
            $all: keyof D2EventChart;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "showData"
                | "orgUnitField"
                | "endDate"
                | "baseLineValue"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "program"
                | "type"
                | "lastUpdated"
                | "attributeDimensions"
                | "translations"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "hideNaData"
                | "interpretations"
                | "itemOrganisationUnitGroups"
                | "attributeValueDimension"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "programIndicatorDimensions"
                | "domainAxisLabel"
                | "created"
                | "subscribers"
                | "rangeAxisLabel"
                | "regressionType"
                | "columnDimensions"
                | "completedOnly"
                | "cumulativeValues"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "rangeAxisDecimals"
                | "startDate"
                | "collapseDataDimensions"
                | "hideEmptyRowItems"
                | "programStatus"
                | "favorites"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "outputType"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "hideLegend"
                | "organisationUnitLevels"
                | "externalAccess"
                | "rangeAxisMinValue"
                | "percentStackedValues"
                | "noSpaceBetweenColumns"
                | "dataElementValueDimension"
                | "relatives"
                | "dataElementDimensions"
                | "rangeAxisSteps"
                | "targetLineLabel"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "programStage"
                | "timeField"
                | "targetLineValue"
                | "baseLineLabel"
                | "hideTitle"
                | "rowDimensions"
                | "eventStatus"
                | "rangeAxisMaxValue"
                | "user";
            $owner:
                | "showData"
                | "orgUnitField"
                | "endDate"
                | "baseLineValue"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "program"
                | "type"
                | "lastUpdated"
                | "attributeDimensions"
                | "translations"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "hideNaData"
                | "itemOrganisationUnitGroups"
                | "attributeValueDimension"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "programIndicatorDimensions"
                | "domainAxisLabel"
                | "created"
                | "subscribers"
                | "rangeAxisLabel"
                | "regressionType"
                | "columnDimensions"
                | "completedOnly"
                | "cumulativeValues"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "rangeAxisDecimals"
                | "startDate"
                | "collapseDataDimensions"
                | "hideEmptyRowItems"
                | "programStatus"
                | "favorites"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "outputType"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "hideLegend"
                | "organisationUnitLevels"
                | "externalAccess"
                | "rangeAxisMinValue"
                | "percentStackedValues"
                | "noSpaceBetweenColumns"
                | "dataElementValueDimension"
                | "relatives"
                | "dataElementDimensions"
                | "rangeAxisSteps"
                | "targetLineLabel"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "programStage"
                | "timeField"
                | "targetLineValue"
                | "baseLineLabel"
                | "hideTitle"
                | "rowDimensions"
                | "eventStatus"
                | "rangeAxisMaxValue"
                | "user";
        };
    };
    eventReports: {
        model: D2EventReport;
        fieldPresets: {
            $all: keyof D2EventReport;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "orgUnitField"
                | "endDate"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "program"
                | "lastUpdated"
                | "hideEmptyRows"
                | "attributeDimensions"
                | "translations"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "rowSubTotals"
                | "hideNaData"
                | "interpretations"
                | "itemOrganisationUnitGroups"
                | "displayDensity"
                | "attributeValueDimension"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "programIndicatorDimensions"
                | "created"
                | "subscribers"
                | "dataType"
                | "columnDimensions"
                | "completedOnly"
                | "colTotals"
                | "showDimensionLabels"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "fontSize"
                | "topLimit"
                | "startDate"
                | "collapseDataDimensions"
                | "programStatus"
                | "favorites"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "outputType"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "organisationUnitLevels"
                | "externalAccess"
                | "colSubTotals"
                | "dataElementValueDimension"
                | "relatives"
                | "dataElementDimensions"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "showHierarchy"
                | "programStage"
                | "rowTotals"
                | "timeField"
                | "digitGroupSeparator"
                | "hideTitle"
                | "rowDimensions"
                | "eventStatus"
                | "user";
            $owner:
                | "orgUnitField"
                | "endDate"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "program"
                | "lastUpdated"
                | "hideEmptyRows"
                | "attributeDimensions"
                | "translations"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "rowSubTotals"
                | "hideNaData"
                | "itemOrganisationUnitGroups"
                | "displayDensity"
                | "attributeValueDimension"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "programIndicatorDimensions"
                | "created"
                | "subscribers"
                | "dataType"
                | "columnDimensions"
                | "completedOnly"
                | "colTotals"
                | "showDimensionLabels"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "fontSize"
                | "topLimit"
                | "startDate"
                | "collapseDataDimensions"
                | "programStatus"
                | "favorites"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "outputType"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "organisationUnitLevels"
                | "externalAccess"
                | "colSubTotals"
                | "dataElementValueDimension"
                | "relatives"
                | "dataElementDimensions"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "showHierarchy"
                | "programStage"
                | "rowTotals"
                | "timeField"
                | "digitGroupSeparator"
                | "hideTitle"
                | "rowDimensions"
                | "eventStatus"
                | "user";
        };
    };
    programSections: {
        model: D2ProgramSection;
        fieldPresets: {
            $all: keyof D2ProgramSection;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "description"
                | "program"
                | "attributes"
                | "lastUpdated"
                | "translations"
                | "formName"
                | "uid"
                | "renderType"
                | "lastUpdatedBy"
                | "created"
                | "sortOrder"
                | "name"
                | "style";
            $owner:
                | "code"
                | "description"
                | "program"
                | "attributes"
                | "lastUpdated"
                | "translations"
                | "formName"
                | "uid"
                | "renderType"
                | "lastUpdatedBy"
                | "created"
                | "sortOrder"
                | "name"
                | "style";
        };
    };
    programIndicators: {
        model: D2ProgramIndicator;
        fieldPresets: {
            $all: keyof D2ProgramIndicator;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "aggregationType"
                | "code"
                | "displayInForm"
                | "publicAccess"
                | "aggregateExportCategoryOptionCombo"
                | "description"
                | "program"
                | "lastUpdated"
                | "translations"
                | "formName"
                | "uid"
                | "groups"
                | "analyticsPeriodBoundaries"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "expression"
                | "created"
                | "attributeValues"
                | "filter"
                | "userAccesses"
                | "decimals"
                | "name"
                | "analyticsType"
                | "legendSets"
                | "style"
                | "shortName"
                | "user"
                | "aggregateExportAttributeOptionCombo";
            $owner:
                | "aggregationType"
                | "code"
                | "displayInForm"
                | "publicAccess"
                | "aggregateExportCategoryOptionCombo"
                | "description"
                | "program"
                | "lastUpdated"
                | "translations"
                | "formName"
                | "uid"
                | "analyticsPeriodBoundaries"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "expression"
                | "created"
                | "attributeValues"
                | "filter"
                | "userAccesses"
                | "decimals"
                | "name"
                | "analyticsType"
                | "legendSets"
                | "style"
                | "shortName"
                | "user"
                | "aggregateExportAttributeOptionCombo";
        };
    };
    programIndicatorGroups: {
        model: D2ProgramIndicatorGroup;
        fieldPresets: {
            $all: keyof D2ProgramIndicatorGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "description"
                | "members"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "description"
                | "members"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    programRuleVariables: {
        model: D2ProgramRuleVariable;
        fieldPresets: {
            $all: keyof D2ProgramRuleVariable;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "sourceType"
                | "program"
                | "attribute"
                | "lastUpdated"
                | "uid"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "useCodeForOptionSet"
                | "dataElement"
                | "name";
            $owner:
                | "code"
                | "sourceType"
                | "program"
                | "attribute"
                | "lastUpdated"
                | "uid"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "useCodeForOptionSet"
                | "dataElement"
                | "name";
        };
    };
    relationshipTypes: {
        model: D2RelationshipType;
        fieldPresets: {
            $all: keyof D2RelationshipType;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "bidirectional"
                | "code"
                | "publicAccess"
                | "description"
                | "fromToName"
                | "lastUpdated"
                | "translations"
                | "toConstraint"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "toFromName"
                | "fromConstraint"
                | "userAccesses"
                | "name"
                | "user";
            $owner:
                | "bidirectional"
                | "code"
                | "publicAccess"
                | "description"
                | "fromToName"
                | "lastUpdated"
                | "translations"
                | "toConstraint"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "toFromName"
                | "fromConstraint"
                | "userAccesses"
                | "name"
                | "user";
        };
    };
    programRuleActions: {
        model: D2ProgramRuleAction;
        fieldPresets: {
            $all: keyof D2ProgramRuleAction;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "data"
                | "optionGroup"
                | "templateUid"
                | "content"
                | "attribute"
                | "lastUpdated"
                | "programIndicator"
                | "uid"
                | "programRule"
                | "programStageSection"
                | "programRuleActionType"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "dataElement"
                | "location"
                | "option";
            $owner:
                | "code"
                | "data"
                | "optionGroup"
                | "templateUid"
                | "content"
                | "attribute"
                | "lastUpdated"
                | "programIndicator"
                | "uid"
                | "programRule"
                | "programStageSection"
                | "programRuleActionType"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "dataElement"
                | "location"
                | "option";
        };
    };
    programRules: {
        model: D2ProgramRule;
        fieldPresets: {
            $all: keyof D2ProgramRule;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "description"
                | "program"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "priority"
                | "condition"
                | "programRuleActions"
                | "name";
            $owner:
                | "code"
                | "description"
                | "program"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "programStage"
                | "created"
                | "priority"
                | "condition"
                | "programRuleActions"
                | "name";
        };
    };
    mapViews: {
        model: D2MapView;
        fieldPresets: {
            $all: keyof D2MapView;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "endDate"
                | "userOrganisationUnitChildren"
                | "colorScale"
                | "program"
                | "lastUpdated"
                | "attributeDimensions"
                | "translations"
                | "eventCoordinateField"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "organisationUnitSelectionMode"
                | "itemOrganisationUnitGroups"
                | "lastUpdatedBy"
                | "method"
                | "labelFontSize"
                | "created"
                | "colorHigh"
                | "columnDimensions"
                | "eventPointRadius"
                | "areaRadius"
                | "labels"
                | "startDate"
                | "programStatus"
                | "dataDimensionItems"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hidden"
                | "classes"
                | "styleDataItem"
                | "description"
                | "labelFontColor"
                | "organisationUnitGroupSetDimensions"
                | "layer"
                | "organisationUnitLevels"
                | "organisationUnitGroupSet"
                | "followUp"
                | "relatives"
                | "dataElementDimensions"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "eventPointColor"
                | "labelFontStyle"
                | "programStage"
                | "labelFontWeight"
                | "radiusLow"
                | "radiusHigh"
                | "eventClustering"
                | "colorLow"
                | "trackedEntityType"
                | "legendSet"
                | "opacity"
                | "config";
            $owner:
                | "endDate"
                | "userOrganisationUnitChildren"
                | "colorScale"
                | "program"
                | "lastUpdated"
                | "attributeDimensions"
                | "translations"
                | "eventCoordinateField"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "organisationUnitSelectionMode"
                | "itemOrganisationUnitGroups"
                | "lastUpdatedBy"
                | "method"
                | "labelFontSize"
                | "created"
                | "colorHigh"
                | "columnDimensions"
                | "eventPointRadius"
                | "areaRadius"
                | "labels"
                | "startDate"
                | "programStatus"
                | "dataDimensionItems"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hidden"
                | "classes"
                | "styleDataItem"
                | "description"
                | "labelFontColor"
                | "organisationUnitGroupSetDimensions"
                | "layer"
                | "organisationUnitLevels"
                | "organisationUnitGroupSet"
                | "followUp"
                | "relatives"
                | "dataElementDimensions"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "eventPointColor"
                | "labelFontStyle"
                | "programStage"
                | "labelFontWeight"
                | "radiusLow"
                | "radiusHigh"
                | "eventClustering"
                | "colorLow"
                | "trackedEntityType"
                | "legendSet"
                | "opacity"
                | "config";
        };
    };
    reports: {
        model: D2Report;
        fieldPresets: {
            $all: keyof D2Report;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "designContent"
                | "code"
                | "publicAccess"
                | "type"
                | "externalAccess"
                | "reportTable"
                | "lastUpdated"
                | "relatives"
                | "reportParams"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "userAccesses"
                | "name"
                | "cacheStrategy"
                | "user";
            $owner:
                | "designContent"
                | "code"
                | "publicAccess"
                | "type"
                | "externalAccess"
                | "reportTable"
                | "lastUpdated"
                | "relatives"
                | "reportParams"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "userAccesses"
                | "name"
                | "cacheStrategy"
                | "user";
        };
    };
    reportTables: {
        model: D2ReportTable;
        fieldPresets: {
            $all: keyof D2ReportTable;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataElementGroupSetDimensions"
                | "numberType"
                | "endDate"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "legendDisplayStyle"
                | "hideEmptyColumns"
                | "measureCriteria"
                | "lastUpdated"
                | "hideEmptyRows"
                | "translations"
                | "reportParams"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "rowSubTotals"
                | "interpretations"
                | "itemOrganisationUnitGroups"
                | "displayDensity"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "subscribers"
                | "columnDimensions"
                | "completedOnly"
                | "colTotals"
                | "showDimensionLabels"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "fontSize"
                | "topLimit"
                | "startDate"
                | "favorites"
                | "dataDimensionItems"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "organisationUnitLevels"
                | "externalAccess"
                | "legendDisplayStrategy"
                | "colSubTotals"
                | "relatives"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "showHierarchy"
                | "rowTotals"
                | "cumulative"
                | "digitGroupSeparator"
                | "hideTitle"
                | "rowDimensions"
                | "regression"
                | "legendSet"
                | "user"
                | "skipRounding";
            $owner:
                | "dataElementGroupSetDimensions"
                | "numberType"
                | "endDate"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "legendDisplayStyle"
                | "hideEmptyColumns"
                | "measureCriteria"
                | "lastUpdated"
                | "hideEmptyRows"
                | "translations"
                | "reportParams"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "rowSubTotals"
                | "itemOrganisationUnitGroups"
                | "displayDensity"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "subscribers"
                | "columnDimensions"
                | "completedOnly"
                | "colTotals"
                | "showDimensionLabels"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "fontSize"
                | "topLimit"
                | "startDate"
                | "favorites"
                | "dataDimensionItems"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "organisationUnitLevels"
                | "externalAccess"
                | "legendDisplayStrategy"
                | "colSubTotals"
                | "relatives"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "showHierarchy"
                | "rowTotals"
                | "cumulative"
                | "digitGroupSeparator"
                | "hideTitle"
                | "rowDimensions"
                | "regression"
                | "legendSet"
                | "user"
                | "skipRounding";
        };
    };
    maps: {
        model: D2Map;
        fieldPresets: {
            $all: keyof D2Map;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "favorites"
                | "code"
                | "publicAccess"
                | "basemap"
                | "latitude"
                | "description"
                | "title"
                | "externalAccess"
                | "lastUpdated"
                | "translations"
                | "mapViews"
                | "uid"
                | "interpretations"
                | "longitude"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "subscribers"
                | "created"
                | "zoom"
                | "userAccesses"
                | "name"
                | "user";
            $owner:
                | "favorites"
                | "code"
                | "publicAccess"
                | "basemap"
                | "latitude"
                | "description"
                | "title"
                | "externalAccess"
                | "lastUpdated"
                | "translations"
                | "mapViews"
                | "uid"
                | "longitude"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "subscribers"
                | "created"
                | "zoom"
                | "userAccesses"
                | "name"
                | "user";
        };
    };
    externalMapLayers: {
        model: D2ExternalMapLayer;
        fieldPresets: {
            $all: keyof D2ExternalMapLayer;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "imageFormat"
                | "code"
                | "publicAccess"
                | "legendSetUrl"
                | "mapService"
                | "lastUpdated"
                | "layers"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "mapLayerPosition"
                | "url"
                | "userAccesses"
                | "name"
                | "legendSet"
                | "attribution"
                | "user";
            $owner:
                | "imageFormat"
                | "code"
                | "publicAccess"
                | "legendSetUrl"
                | "mapService"
                | "lastUpdated"
                | "layers"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "mapLayerPosition"
                | "url"
                | "userAccesses"
                | "name"
                | "legendSet"
                | "attribution"
                | "user";
        };
    };
    documents: {
        model: D2Document;
        fieldPresets: {
            $all: keyof D2Document;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "url"
                | "externalAccess"
                | "lastUpdated"
                | "external"
                | "attachment"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user"
                | "contentType";
            $owner:
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "attributeValues"
                | "url"
                | "externalAccess"
                | "lastUpdated"
                | "external"
                | "attachment"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user"
                | "contentType";
        };
    };
    charts: {
        model: D2Chart;
        fieldPresets: {
            $all: keyof D2Chart;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "dataElementGroupSetDimensions"
                | "showData"
                | "endDate"
                | "baseLineValue"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "type"
                | "lastUpdated"
                | "translations"
                | "yearlySeries"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "interpretations"
                | "itemOrganisationUnitGroups"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "domainAxisLabel"
                | "created"
                | "subscribers"
                | "rangeAxisLabel"
                | "regressionType"
                | "completedOnly"
                | "cumulativeValues"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "rangeAxisDecimals"
                | "startDate"
                | "hideEmptyRowItems"
                | "favorites"
                | "dataDimensionItems"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "hideLegend"
                | "organisationUnitLevels"
                | "externalAccess"
                | "rangeAxisMinValue"
                | "percentStackedValues"
                | "seriesItems"
                | "legendDisplayStrategy"
                | "noSpaceBetweenColumns"
                | "relatives"
                | "rangeAxisSteps"
                | "targetLineLabel"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "targetLineValue"
                | "baseLineLabel"
                | "hideTitle"
                | "series"
                | "legendSet"
                | "rangeAxisMaxValue"
                | "colorSet"
                | "category"
                | "user";
            $owner:
                | "dataElementGroupSetDimensions"
                | "showData"
                | "endDate"
                | "baseLineValue"
                | "publicAccess"
                | "userOrganisationUnitChildren"
                | "type"
                | "lastUpdated"
                | "translations"
                | "yearlySeries"
                | "userOrganisationUnit"
                | "filterDimensions"
                | "uid"
                | "itemOrganisationUnitGroups"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "domainAxisLabel"
                | "created"
                | "subscribers"
                | "rangeAxisLabel"
                | "regressionType"
                | "completedOnly"
                | "cumulativeValues"
                | "subtitle"
                | "sortOrder"
                | "userAccesses"
                | "name"
                | "rangeAxisDecimals"
                | "startDate"
                | "hideEmptyRowItems"
                | "favorites"
                | "dataDimensionItems"
                | "aggregationType"
                | "code"
                | "categoryOptionGroupSetDimensions"
                | "userOrganisationUnitGrandChildren"
                | "hideSubtitle"
                | "description"
                | "organisationUnitGroupSetDimensions"
                | "title"
                | "hideLegend"
                | "organisationUnitLevels"
                | "externalAccess"
                | "rangeAxisMinValue"
                | "percentStackedValues"
                | "seriesItems"
                | "legendDisplayStrategy"
                | "noSpaceBetweenColumns"
                | "relatives"
                | "rangeAxisSteps"
                | "targetLineLabel"
                | "periods"
                | "organisationUnits"
                | "categoryDimensions"
                | "targetLineValue"
                | "baseLineLabel"
                | "hideTitle"
                | "series"
                | "legendSet"
                | "rangeAxisMaxValue"
                | "colorSet"
                | "category"
                | "user";
        };
    };
    predictors: {
        model: D2Predictor;
        fieldPresets: {
            $all: keyof D2Predictor;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "outputCombo"
                | "code"
                | "description"
                | "generator"
                | "organisationUnitLevels"
                | "output"
                | "lastUpdated"
                | "sampleSkipTest"
                | "uid"
                | "sequentialSampleCount"
                | "annualSampleCount"
                | "lastUpdatedBy"
                | "created"
                | "sequentialSkipCount"
                | "groups"
                | "periodType"
                | "name";
            $owner:
                | "outputCombo"
                | "code"
                | "description"
                | "generator"
                | "organisationUnitLevels"
                | "output"
                | "lastUpdated"
                | "sampleSkipTest"
                | "uid"
                | "sequentialSampleCount"
                | "annualSampleCount"
                | "lastUpdatedBy"
                | "created"
                | "sequentialSkipCount"
                | "periodType"
                | "name";
        };
    };
    predictorGroups: {
        model: D2PredictorGroup;
        fieldPresets: {
            $all: keyof D2PredictorGroup;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "members"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "code"
                | "created"
                | "publicAccess"
                | "description"
                | "lastUpdated"
                | "translations"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    dashboards: {
        model: D2Dashboard;
        fieldPresets: {
            $all: keyof D2Dashboard;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "favorites"
                | "code"
                | "publicAccess"
                | "description"
                | "externalAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "items"
                | "userAccesses"
                | "name"
                | "user";
            $owner:
                | "favorites"
                | "code"
                | "publicAccess"
                | "description"
                | "externalAccess"
                | "lastUpdated"
                | "translations"
                | "uid"
                | "lastUpdatedBy"
                | "userGroupAccesses"
                | "created"
                | "items"
                | "userAccesses"
                | "name"
                | "user";
        };
    };
    pushAnalysis: {
        model: D2PushAnalysis;
        fieldPresets: {
            $all: keyof D2PushAnalysis;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "recipientUserGroups"
                | "message"
                | "title"
                | "lastUpdated"
                | "name"
                | "uid"
                | "dashboard";
            $owner:
                | "lastUpdatedBy"
                | "code"
                | "created"
                | "recipientUserGroups"
                | "message"
                | "title"
                | "lastUpdated"
                | "name"
                | "uid"
                | "dashboard";
        };
    };
    eventFilters: {
        model: D2ProgramStageInstanceFilter;
        fieldPresets: {
            $all: keyof D2ProgramStageInstanceFilter;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "lastUpdatedBy"
                | "programStage"
                | "eventQueryCriteria"
                | "userGroupAccesses"
                | "created"
                | "publicAccess"
                | "description"
                | "program"
                | "lastUpdated"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
            $owner:
                | "lastUpdatedBy"
                | "programStage"
                | "eventQueryCriteria"
                | "userGroupAccesses"
                | "created"
                | "publicAccess"
                | "description"
                | "program"
                | "lastUpdated"
                | "userAccesses"
                | "name"
                | "uid"
                | "user";
        };
    };
    trackedEntityInstanceFilters: {
        model: D2TrackedEntityInstanceFilter;
        fieldPresets: {
            $all: keyof D2TrackedEntityInstanceFilter;
            $identifiable: FieldPresets["identifiable"];
            $nameable: FieldPresets["nameable"];
            $persisted:
                | "code"
                | "description"
                | "program"
                | "enrollmentCreatedPeriod"
                | "lastUpdated"
                | "uid"
                | "lastUpdatedBy"
                | "created"
                | "followup"
                | "eventFilters"
                | "enrollmentStatus"
                | "sortOrder"
                | "name"
                | "style";
            $owner:
                | "code"
                | "description"
                | "program"
                | "enrollmentCreatedPeriod"
                | "lastUpdated"
                | "uid"
                | "lastUpdatedBy"
                | "created"
                | "followup"
                | "eventFilters"
                | "enrollmentStatus"
                | "sortOrder"
                | "name"
                | "style";
        };
    };
}

export type D2Models = {
    [K in keyof D2ModelsInfo]: D2ModelsInfo[K]["model"];
};
