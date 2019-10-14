type Id = string;

export interface D2IdentifiableObject {
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

export interface D2AttributeValue {
    attribute: D2IdentifiableObject;
    created: Date;
    lastUpdated: Date;
    value: string;
}

export interface D2UserAuthorityGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    authorities: (string)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Attribute {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    indicatorAttribute: boolean;
    indicatorGroupAttribute: boolean;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSetAttribute: boolean;
    mandatory: boolean;
    name: string;
    optionAttribute: boolean;
    optionSet: D2IdentifiableObject;
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
    translations: (D2Translation)[];
    undefined: boolean;
    unique: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userAttribute: boolean;
    userGroupAccesses: (D2UserGroupAccess)[];
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

export interface D2User {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    avatar: D2IdentifiableObject;
    birthday: Date;
    code: Id;
    created: Date;
    dataViewOrganisationUnits: (D2IdentifiableObject)[];
    displayName: string;
    education: string;
    email: string;
    employer: string;
    externalAccess: boolean;
    facebookMessenger: string;
    favorites: (string)[];
    firstName: string;
    gender: string;
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    interests: string;
    introduction: string;
    jobTitle: string;
    languages: string;
    lastCheckedInterpretations: Date;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    nationality: string;
    organisationUnits: (D2IdentifiableObject)[];
    phoneNumber: string;
    publicAccess: string;
    skype: string;
    surname: string;
    teiSearchOrganisationUnits: (D2IdentifiableObject)[];
    telegram: string;
    translations: (D2Translation)[];
    twitter: string;
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userCredentials: D2IdentifiableObject;
    userGroupAccesses: (D2UserGroupAccess)[];
    welcomeMessage: string;
    whatsApp: string;
}

export interface D2UserGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    managedByGroups: (D2IdentifiableObject)[];
    managedGroups: (D2IdentifiableObject)[];
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ExternalFileResource {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2SqlView {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    sqlQuery: string;
    translations: (D2Translation)[];
    type: "VIEW" | "MATERIALIZED_VIEW" | "QUERY";
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Constant {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    value: number;
}

export interface D2OAuth2Client {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    cid: Id;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    grantTypes: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    redirectUris: (string)[];
    secret: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Option {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: string;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    optionSet: D2IdentifiableObject;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2JobConfiguration {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    continuousExecution: boolean;
    created: Date;
    cronExpression: string;
    displayName: string;
    enabled: boolean;
    externalAccess: boolean;
    favorites: (string)[];
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
    lastUpdatedBy: D2IdentifiableObject;
    leaderOnlyJob: boolean;
    name: string;
    nextExecutionTime: Date;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userUid: string;
}

export interface D2OptionSet {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    options: (D2IdentifiableObject)[];
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    filter: string;
    href: string;
    id: Id;
    items: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSet: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    optionSet: D2IdentifiableObject;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    members: (D2IdentifiableObject)[];
    name: string;
    optionSet: D2IdentifiableObject;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ColorSet {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    colors: (D2IdentifiableObject)[];
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2LegendSet {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legends: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    symbolizer: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    children: (D2IdentifiableObject)[];
    closedDate: Date;
    code: Id;
    comment: string;
    contactPerson: string;
    created: Date;
    dataSets: (D2IdentifiableObject)[];
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
    favorites: (string)[];
    geometry: D2Geometry;
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    memberCount: number;
    name: string;
    openingDate: Date;
    parent: D2IdentifiableObject;
    path: string;
    phoneNumber: string;
    programs: (D2IdentifiableObject)[];
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    type: string;
    undefined: D2IdentifiableObject;
    url: string;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    users: (D2IdentifiableObject)[];
}

export interface D2OrganisationUnitLevel {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    level: number;
    name: string;
    offlineLevels: number;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    geometry: D2Geometry;
    groupSets: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    symbol: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    filter: string;
    href: string;
    id: Id;
    includeSubhierarchyInAnalytics: boolean;
    items: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSet: D2IdentifiableObject;
    name: string;
    organisationUnitGroups: (D2IdentifiableObject)[];
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    categories: (D2IdentifiableObject)[];
    categoryOptionCombos: (D2IdentifiableObject)[];
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
    favorites: (string)[];
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    organisationUnits: (D2IdentifiableObject)[];
    publicAccess: string;
    shortName: string;
    startDate: Date;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    groupSets: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    filter: string;
    href: string;
    id: Id;
    items: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSet: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    categoryCombos: (D2IdentifiableObject)[];
    categoryOptions: (D2IdentifiableObject)[];
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
    favorites: (string)[];
    filter: string;
    href: string;
    id: Id;
    items: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSet: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2CategoryCombo {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    categories: (D2IdentifiableObject)[];
    code: Id;
    created: Date;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    optionCombos: (D2IdentifiableObject)[];
    publicAccess: string;
    skipTotal: boolean;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    categoryCombo: D2IdentifiableObject;
    categoryOptions: (D2IdentifiableObject)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    ignoreApproval: boolean;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataElement {
    access: D2Access;
    aggregationLevels: (number)[];
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
    attributeValues: (D2AttributeValue)[];
    categoryCombo: D2IdentifiableObject;
    code: Id;
    commentOptionSet: D2IdentifiableObject;
    created: Date;
    dataSetElements: (D2DataSetElement)[];
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
    favorites: (string)[];
    fieldMask: string;
    formName: string;
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    optionSet: D2IdentifiableObject;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    groupSets: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    filter: string;
    href: string;
    id: Id;
    items: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSet: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2IndicatorType {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    factor: number;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    number: boolean;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataSets: (D2IdentifiableObject)[];
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
    favorites: (string)[];
    formName: string;
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    indicatorType: D2IdentifiableObject;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    numerator: string;
    numeratorDescription: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2IndicatorGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    groupSet: D2IdentifiableObject;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2IndicatorGroupSet {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    compulsory: boolean;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataEntryForm {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    format: number;
    href: string;
    htmlCode: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    style: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    categoryCombo: D2IdentifiableObject;
    code: Id;
    compulsoryDataElementOperands: (D2IdentifiableObject)[];
    compulsoryFieldsCompleteOnly: boolean;
    created: Date;
    dataElementDecoration: boolean;
    dataEntryForm: D2IdentifiableObject;
    dataInputPeriods: (D2DataInputPeriod)[];
    dataSetElements: (D2DataSetElement)[];
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
    favorites: (string)[];
    fieldCombinationRequired: boolean;
    formName: string;
    href: string;
    id: Id;
    indicators: (D2IdentifiableObject)[];
    interpretations: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    mobile: boolean;
    name: string;
    noValueRequiresComment: boolean;
    notificationRecipients: D2IdentifiableObject;
    notifyCompletingUser: boolean;
    openFuturePeriods: number;
    periodType: string;
    publicAccess: string;
    renderAsTabs: boolean;
    renderHorizontally: boolean;
    sections: (D2IdentifiableObject)[];
    shortName: string;
    skipOffline: boolean;
    sources: (D2IdentifiableObject)[];
    style: D2Style;
    timelyDays: number;
    translations: (D2Translation)[];
    undefined: D2IdentifiableObject;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    validCompleteOnly: boolean;
    version: number;
    workflow: D2IdentifiableObject;
}

export interface D2DataSetNotificationTemplate {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataSetNotificationTrigger: "DATA_SET_COMPLETION" | "SCHEDULED_DAYS";
    dataSets: (D2IdentifiableObject)[];
    deliveryChannels: (never)[];
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    messageTemplate: string;
    name: string;
    notificationRecipient: "ORGANISATION_UNIT_CONTACT" | "USER_GROUP";
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroup: D2IdentifiableObject;
    relativeScheduledDays: number;
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Section {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElements: (D2IdentifiableObject)[];
    dataSet: D2IdentifiableObject;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    greyedFields: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    indicators: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    showColumnTotals: boolean;
    showRowTotals: boolean;
    sortOrder: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataApprovalLevel {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    categoryOptionGroupSet: D2IdentifiableObject;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    level: number;
    name: string;
    orgUnitLevel: number;
    orgUnitLevelName: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataApprovalWorkflow {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    categoryCombo: D2IdentifiableObject;
    code: Id;
    created: Date;
    dataSets: (D2IdentifiableObject)[];
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    levels: (D2IdentifiableObject)[];
    name: string;
    periodType: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    importance: "HIGH" | "MEDIUM" | "LOW";
    instruction: string;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    leftSide: D2Expression;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    notificationTemplates: (D2IdentifiableObject)[];
    operator:
        | "equal_to"
        | "not_equal_to"
        | "greater_than"
        | "greater_than_or_equal_to"
        | "less_than"
        | "less_than_or_equal_to"
        | "compulsory_pair"
        | "exclusive_pair";
    organisationUnitLevels: (number)[];
    periodType: string;
    publicAccess: string;
    rightSide: D2Expression;
    shortName: string;
    skipFormValidation: boolean;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ValidationRuleGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ValidationNotificationTemplate {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    messageTemplate: string;
    name: string;
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroups: (D2IdentifiableObject)[];
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    validationRules: (D2IdentifiableObject)[];
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    fieldMask: string;
    formName: string;
    generated: boolean;
    href: string;
    id: Id;
    inherit: boolean;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    optionSet: D2IdentifiableObject;
    orgunitScope: boolean;
    pattern: string;
    programScope: boolean;
    publicAccess: string;
    shortName: string;
    skipSynchronization: boolean;
    sortOrderInListNoProgram: number;
    sortOrderInVisitSchedule: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    unique: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: (string)[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    trackedEntityTypeAttributes: (D2IdentifiableObject)[];
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2TrackedEntityTypeAttribute {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayInList: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    mandatory: boolean;
    name: string;
    publicAccess: string;
    searchable: boolean;
    trackedEntityAttribute: D2IdentifiableObject;
    trackedEntityType: D2IdentifiableObject;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramTrackedEntityAttributeGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    attributes: (D2IdentifiableObject)[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    uniqunessType: "NONE" | "STRICT" | "VALIDATION";
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramStageSection {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElements: (D2IdentifiableObject)[];
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    programIndicators: (D2IdentifiableObject)[];
    programStage: D2IdentifiableObject;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramNotificationTemplate {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    deliveryChannels: (never)[];
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
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
    recipientDataElement: D2IdentifiableObject;
    recipientProgramAttribute: D2IdentifiableObject;
    recipientUserGroup: D2IdentifiableObject;
    relativeScheduledDays: number;
    subjectTemplate: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramStage {
    access: D2Access;
    allowGenerateNextVisit: boolean;
    attributeValues: (D2AttributeValue)[];
    autoGenerateEvent: boolean;
    blockEntryForm: boolean;
    code: Id;
    created: Date;
    dataEntryForm: D2IdentifiableObject;
    description: string;
    displayDescription: string;
    displayGenerateEventBox: boolean;
    displayName: string;
    dueDateLabel: string;
    enableUserAssignment: boolean;
    executionDateLabel: string;
    externalAccess: boolean;
    favorites: (string)[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    generatedByEnrollmentDate: boolean;
    hideDueDate: boolean;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    minDaysFromStart: number;
    name: string;
    notificationTemplates: (D2IdentifiableObject)[];
    openAfterEnrollment: boolean;
    periodType: string;
    preGenerateUID: boolean;
    program: D2IdentifiableObject;
    programStageDataElements: (D2IdentifiableObject)[];
    programStageSections: (D2IdentifiableObject)[];
    publicAccess: string;
    remindCompleted: boolean;
    repeatable: boolean;
    reportDateToUse: string;
    sortOrder: number;
    standardInterval: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    validationStrategy: "ON_COMPLETE" | "ON_UPDATE_AND_INSERT";
}

export interface D2SMSCommand {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    codeValueSeparator: string;
    codes: (any)[];
    completenessMethod: "ALL_DATAVALUE" | "AT_LEAST_ONE_DATAVALUE" | "DO_NOT_MARK_COMPLETE";
    created: Date;
    currentPeriodUsedForReporting: boolean;
    dataset: D2IdentifiableObject;
    defaultMessage: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
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
    program: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    publicAccess: string;
    receivedMessage: string;
    separator: string;
    specialCharacters: (any)[];
    successMessage: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroup: D2IdentifiableObject;
    userGroupAccesses: (D2UserGroupAccess)[];
    wrongFormatMessage: string;
}

export interface D2Program {
    access: D2Access;
    accessLevel: "OPEN" | "AUDITED" | "PROTECTED" | "CLOSED";
    attributeValues: (D2AttributeValue)[];
    categoryCombo: D2IdentifiableObject;
    code: Id;
    completeEventsExpiryDays: number;
    created: Date;
    dataEntryForm: D2IdentifiableObject;
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
    favorites: (string)[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    href: string;
    id: Id;
    ignoreOverdueEvents: boolean;
    incidentDateLabel: string;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    notificationTemplates: (D2IdentifiableObject)[];
    onlyEnrollOnce: boolean;
    organisationUnits: (D2IdentifiableObject)[];
    programAttributes: (D2IdentifiableObject)[];
    programIndicators: (D2IdentifiableObject)[];
    programRuleVariables: (D2IdentifiableObject)[];
    programSections: (D2IdentifiableObject)[];
    programStages: (D2IdentifiableObject)[];
    programType: "WITH_REGISTRATION" | "WITHOUT_REGISTRATION";
    publicAccess: string;
    relatedProgram: D2IdentifiableObject;
    selectEnrollmentDatesInFuture: boolean;
    selectIncidentDatesInFuture: boolean;
    shortName: string;
    skipOffline: boolean;
    style: D2Style;
    trackedEntityType: D2IdentifiableObject;
    translations: (D2Translation)[];
    undefined: boolean;
    useFirstStageDuringRegistration: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userRoles: (D2IdentifiableObject)[];
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
    attributeDimensions: (any)[];
    attributeValueDimension: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    baseLineLabel: string;
    baseLineValue: number;
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    collapseDataDimensions: boolean;
    colorSet: D2IdentifiableObject;
    columnDimensions: (string)[];
    columns: (D2IdentifiableObject)[];
    completedOnly: boolean;
    created: Date;
    cumulativeValues: boolean;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
    dataElementValueDimension: D2IdentifiableObject;
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    domainAxisLabel: string;
    endDate: Date;
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    externalAccess: boolean;
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (D2IdentifiableObject)[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (D2IdentifiableObject)[];
    itemOrganisationUnitGroups: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: D2IdentifiableObject;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (D2IdentifiableObject)[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: object;
    percentStackedValues: boolean;
    periods: (D2IdentifiableObject)[];
    program: D2IdentifiableObject;
    programIndicatorDimensions: (any)[];
    programStage: D2IdentifiableObject;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    rangeAxisDecimals: number;
    rangeAxisLabel: string;
    rangeAxisMaxValue: number;
    rangeAxisMinValue: number;
    rangeAxisSteps: number;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    relatives: any;
    rowDimensions: (string)[];
    rows: (D2IdentifiableObject)[];
    shortName: string;
    showData: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: (string)[];
    subtitle: string;
    targetLineLabel: string;
    targetLineValue: number;
    timeField: string;
    title: string;
    topLimit: number;
    translations: (D2Translation)[];
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
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: D2IdentifiableObject;
    yearlySeries: (string)[];
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
    attributeDimensions: (any)[];
    attributeValueDimension: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    collapseDataDimensions: boolean;
    columnDimensions: (string)[];
    columns: (D2IdentifiableObject)[];
    completedOnly: boolean;
    created: Date;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
    dataElementValueDimension: D2IdentifiableObject;
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
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (D2IdentifiableObject)[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyRows: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (D2IdentifiableObject)[];
    itemOrganisationUnitGroups: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (D2IdentifiableObject)[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: object;
    periods: (D2IdentifiableObject)[];
    program: D2IdentifiableObject;
    programIndicatorDimensions: (any)[];
    programStage: D2IdentifiableObject;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    relatives: any;
    rowDimensions: (string)[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: (D2IdentifiableObject)[];
    shortName: string;
    showDimensionLabels: boolean;
    showHierarchy: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: (string)[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: D2IdentifiableObject;
}

export interface D2ProgramSection {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    attributes: (D2IdentifiableObject)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    program: D2IdentifiableObject;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    analyticsPeriodBoundaries: (D2IdentifiableObject)[];
    analyticsType: "EVENT" | "ENROLLMENT";
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    filter: string;
    formName: string;
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    program: D2IdentifiableObject;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramIndicatorGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2RelationshipType {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    bidirectional: boolean;
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    fromConstraint: any;
    fromToName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    toConstraint: any;
    toFromName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramRuleVariable {
    access: D2Access;
    attribute: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElement: D2IdentifiableObject;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    program: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    publicAccess: string;
    sourceType:
        | "DATAELEMENT_NEWEST_EVENT_PROGRAM_STAGE"
        | "DATAELEMENT_NEWEST_EVENT_PROGRAM"
        | "DATAELEMENT_CURRENT_EVENT"
        | "DATAELEMENT_PREVIOUS_EVENT"
        | "CALCULATED_VALUE"
        | "TEI_ATTRIBUTE";
    translations: (D2Translation)[];
    undefined: boolean;
    useCodeForOptionSet: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramRuleAction {
    access: D2Access;
    attribute: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    content: string;
    created: Date;
    data: string;
    dataElement: D2IdentifiableObject;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    location: string;
    name: string;
    option: D2IdentifiableObject;
    optionGroup: D2IdentifiableObject;
    programIndicator: D2IdentifiableObject;
    programRule: D2IdentifiableObject;
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
    programStage: D2IdentifiableObject;
    programStageSection: D2IdentifiableObject;
    publicAccess: string;
    templateUid: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramRule {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    condition: string;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    priority: number;
    program: D2IdentifiableObject;
    programRuleActions: (D2IdentifiableObject)[];
    programStage: D2IdentifiableObject;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeDimensions: (any)[];
    attributeValues: (D2AttributeValue)[];
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    classes: number;
    code: Id;
    colorHigh: string;
    colorLow: string;
    colorScale: string;
    columnDimensions: (string)[];
    columns: (D2IdentifiableObject)[];
    completedOnly: boolean;
    config: string;
    created: Date;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
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
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (D2IdentifiableObject)[];
    followUp: boolean;
    hidden: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (D2IdentifiableObject)[];
    itemOrganisationUnitGroups: (D2IdentifiableObject)[];
    labelFontColor: string;
    labelFontSize: string;
    labelFontStyle: string;
    labelFontWeight: string;
    labels: boolean;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    layer: string;
    legendSet: D2IdentifiableObject;
    method: number;
    name: string;
    opacity: number;
    orgUnitField: string;
    organisationUnitGroupSet: D2IdentifiableObject;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnitSelectionMode:
        | "SELECTED"
        | "CHILDREN"
        | "DESCENDANTS"
        | "ACCESSIBLE"
        | "CAPTURE"
        | "ALL";
    organisationUnits: (D2IdentifiableObject)[];
    parentGraph: string;
    parentGraphMap: object;
    parentLevel: number;
    periods: (D2IdentifiableObject)[];
    program: D2IdentifiableObject;
    programIndicatorDimensions: (any)[];
    programStage: D2IdentifiableObject;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    radiusHigh: number;
    radiusLow: number;
    relatives: any;
    rows: (D2IdentifiableObject)[];
    shortName: string;
    sortOrder: number;
    startDate: Date;
    styleDataItem: object;
    subscribers: (string)[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    trackedEntityType: D2IdentifiableObject;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
}

export interface D2Report {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    relatives: any;
    reportParams: any;
    reportTable: D2IdentifiableObject;
    translations: (D2Translation)[];
    type: "JASPER_REPORT_TABLE" | "JASPER_JDBC" | "HTML";
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeDimensions: (any)[];
    attributeValues: (D2AttributeValue)[];
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    columnDimensions: (string)[];
    columns: (D2IdentifiableObject)[];
    completedOnly: boolean;
    created: Date;
    cumulative: boolean;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: Date;
    externalAccess: boolean;
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (D2IdentifiableObject)[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyColumns: boolean;
    hideEmptyRows: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (D2IdentifiableObject)[];
    itemOrganisationUnitGroups: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendDisplayStyle: "FILL" | "TEXT";
    legendSet: D2IdentifiableObject;
    measureCriteria: string;
    name: string;
    numberType: "VALUE" | "ROW_PERCENTAGE" | "COLUMN_PERCENTAGE";
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (D2IdentifiableObject)[];
    parentGraphMap: object;
    periods: (D2IdentifiableObject)[];
    programIndicatorDimensions: (any)[];
    publicAccess: string;
    regression: boolean;
    relatives: any;
    reportParams: any;
    rowDimensions: (string)[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: (D2IdentifiableObject)[];
    shortName: string;
    showDimensionLabels: boolean;
    showHierarchy: boolean;
    skipRounding: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: (string)[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
}

export interface D2Document {
    access: D2Access;
    attachment: boolean;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    contentType: string;
    created: Date;
    displayName: string;
    external: boolean;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ValidationResult {
    attributeOptionCombo: D2IdentifiableObject;
    created: Date;
    dayInPeriod: number;
    id: string;
    leftsideValue: number;
    notificationSent: boolean;
    organisationUnit: D2IdentifiableObject;
    period: D2IdentifiableObject;
    rightsideValue: number;
    validationRule: D2IdentifiableObject;
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
    attributeDimensions: (any)[];
    attributeValues: (D2AttributeValue)[];
    baseLineLabel: string;
    baseLineValue: number;
    category: string;
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    colorSet: D2IdentifiableObject;
    columns: (D2IdentifiableObject)[];
    completedOnly: boolean;
    created: Date;
    cumulativeValues: boolean;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    domainAxisLabel: string;
    endDate: Date;
    externalAccess: boolean;
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (D2IdentifiableObject)[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (D2IdentifiableObject)[];
    itemOrganisationUnitGroups: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: D2IdentifiableObject;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (D2IdentifiableObject)[];
    parentGraphMap: object;
    percentStackedValues: boolean;
    periods: (D2IdentifiableObject)[];
    programIndicatorDimensions: (any)[];
    publicAccess: string;
    rangeAxisDecimals: number;
    rangeAxisLabel: string;
    rangeAxisMaxValue: number;
    rangeAxisMinValue: number;
    rangeAxisSteps: number;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    relatives: any;
    rows: (D2IdentifiableObject)[];
    series: string;
    seriesItems: (any)[];
    shortName: string;
    showData: boolean;
    sortOrder: number;
    startDate: Date;
    subscribers: (string)[];
    subtitle: string;
    targetLineLabel: string;
    targetLineValue: number;
    timeField: string;
    title: string;
    topLimit: number;
    translations: (D2Translation)[];
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
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    yearlySeries: (string)[];
}

export interface D2Map {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    basemap: string;
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    interpretations: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    latitude: number;
    longitude: number;
    mapViews: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    subscribers: (string)[];
    title: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    zoom: number;
}

export interface D2ExternalMapLayer {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    attribution: string;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    imageFormat: "PNG" | "JPG";
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    layers: string;
    legendSet: D2IdentifiableObject;
    legendSetUrl: string;
    mapLayerPosition: "BASEMAP" | "OVERLAY";
    mapService: "WMS" | "TMS" | "XYZ";
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Predictor {
    access: D2Access;
    annualSampleCount: number;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: (string)[];
    generator: D2Expression;
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    organisationUnitLevels: (D2IdentifiableObject)[];
    output: D2IdentifiableObject;
    outputCombo: D2IdentifiableObject;
    periodType: string;
    publicAccess: string;
    sampleSkipTest: D2Expression;
    sequentialSampleCount: number;
    sequentialSkipCount: number;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2PredictorGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    members: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DashboardItem {
    access: D2Access;
    appKey: string;
    attributeValues: (D2AttributeValue)[];
    chart: D2IdentifiableObject;
    code: Id;
    created: Date;
    displayName: string;
    eventChart: D2IdentifiableObject;
    eventReport: D2IdentifiableObject;
    externalAccess: boolean;
    favorites: (string)[];
    height: number;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    map: D2IdentifiableObject;
    messages: boolean;
    name: string;
    publicAccess: string;
    reportTable: D2IdentifiableObject;
    reports: (D2IdentifiableObject)[];
    resources: (D2IdentifiableObject)[];
    shape: "NORMAL" | "DOUBLE_WIDTH" | "FULL_WIDTH";
    text: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    users: (D2IdentifiableObject)[];
    width: number;
    x: number;
    y: number;
}

export interface D2Dashboard {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    items: (D2IdentifiableObject)[];
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2PushAnalysis {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dashboard: D2IdentifiableObject;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    message: string;
    name: string;
    publicAccess: string;
    recipientUserGroups: (D2IdentifiableObject)[];
    title: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2KeyJsonValue {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    key: string;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    namespace: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    value: string;
}

export interface D2CategoryOptionGroupSetDimension {
    dimension: D2IdentifiableObject;
    items: (D2IdentifiableObject)[];
}

export interface D2UserCredentials {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    catDimensionConstraints: (D2IdentifiableObject)[];
    code: Id;
    cogsDimensionConstraints: (D2IdentifiableObject)[];
    created: Date;
    disabled: boolean;
    displayName: string;
    externalAccess: boolean;
    externalAuth: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    invitation: boolean;
    lastLogin: Date;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    ldapId: string;
    name: string;
    openId: string;
    password: string;
    passwordLastUpdated: Date;
    publicAccess: string;
    selfRegistered: boolean;
    translations: (D2Translation)[];
    twoFA: boolean;
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userAuthorityGroups: (D2IdentifiableObject)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userInfo: D2IdentifiableObject;
    username: string;
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
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataSet: D2IdentifiableObject;
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    metric:
        | "REPORTING_RATE"
        | "REPORTING_RATE_ON_TIME"
        | "ACTUAL_REPORTS"
        | "ACTUAL_REPORTS_ON_TIME"
        | "EXPECTED_REPORTS";
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2TrackedEntityInstanceFilter {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    enrollmentCreatedPeriod: any;
    enrollmentStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    eventFilters: (any)[];
    externalAccess: boolean;
    favorites: (string)[];
    followup: boolean;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    program: D2IdentifiableObject;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2TrackedEntityProgramIndicatorDimension {
    filter: string;
    legendSet: D2IdentifiableObject;
    programIndicator: D2IdentifiableObject;
}

export interface D2TrackedEntityDataElementDimension {
    dataElement: D2IdentifiableObject;
    filter: string;
    legendSet: D2IdentifiableObject;
}

export interface D2InterpretationComment {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    mentions: (any)[];
    name: string;
    publicAccess: string;
    text: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2MessageConversation {
    access: D2Access;
    assignee: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    followUp: boolean;
    href: string;
    id: Id;
    lastMessage: Date;
    lastSender: D2IdentifiableObject;
    lastSenderFirstname: string;
    lastSenderSurname: string;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    messageCount: number;
    messageType: "PRIVATE" | "SYSTEM" | "VALIDATION_RESULT" | "TICKET";
    messages: (D2IdentifiableObject)[];
    name: string;
    priority: "NONE" | "LOW" | "MEDIUM" | "HIGH";
    publicAccess: string;
    read: boolean;
    status: "NONE" | "OPEN" | "PENDING" | "INVALID" | "SOLVED";
    subject: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userFirstname: string;
    userGroupAccesses: (D2UserGroupAccess)[];
    userMessages: (any)[];
    userSurname: string;
}

export interface D2MinMaxDataElement {
    dataElement: D2IdentifiableObject;
    generated: boolean;
    max: number;
    min: number;
    optionCombo: D2IdentifiableObject;
    source: D2IdentifiableObject;
}

export interface D2Legend {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    color: string;
    created: Date;
    displayName: string;
    endValue: number;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    image: string;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    startValue: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataInputPeriod {
    closingDate: Date;
    openingDate: Date;
    period: D2IdentifiableObject;
}

export interface D2ProgramInstance {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    comments: (D2IdentifiableObject)[];
    created: Date;
    createdAtClient: Date;
    deleted: boolean;
    displayName: string;
    endDate: Date;
    enrollmentDate: Date;
    entityInstance: D2IdentifiableObject;
    externalAccess: boolean;
    favorites: (string)[];
    followup: boolean;
    href: string;
    id: Id;
    incidentDate: Date;
    lastUpdated: Date;
    lastUpdatedAtClient: Date;
    lastUpdatedBy: D2IdentifiableObject;
    messageConversations: (D2IdentifiableObject)[];
    name: string;
    organisationUnit: D2IdentifiableObject;
    program: D2IdentifiableObject;
    programStageInstances: (D2IdentifiableObject)[];
    publicAccess: string;
    relationshipItems: (any)[];
    status: "ACTIVE" | "COMPLETED" | "CANCELLED";
    storedBy: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2FileResource {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    contentLength: string;
    contentMd5: string;
    contentType: string;
    created: Date;
    displayName: string;
    domain: "DATA_VALUE" | "PUSH_ANALYSIS" | "DOCUMENT" | "MESSAGE_ATTACHMENT" | "USER_AVATAR";
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    storageStatus: "NONE" | "PENDING" | "FAILED" | "STORED";
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Icon {}

export interface D2OrganisationUnitGroupSetDimension {
    dimension: D2IdentifiableObject;
    items: (D2IdentifiableObject)[];
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
    attribute: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    program: D2IdentifiableObject;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramStageDataElement {
    access: D2Access;
    allowFutureDate: boolean;
    allowProvidedElsewhere: boolean;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    compulsory: boolean;
    created: Date;
    dataElement: D2IdentifiableObject;
    displayInReports: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    programStage: D2IdentifiableObject;
    publicAccess: string;
    renderOptionsAsRadio: boolean;
    renderType: any;
    skipSynchronization: boolean;
    sortOrder: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataElementGroupSetDimension {
    dimension: D2IdentifiableObject;
    items: (D2IdentifiableObject)[];
}

export interface D2MetadataVersion {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    hashCode: string;
    href: string;
    id: Id;
    importDate: Date;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    type: "BEST_EFFORT" | "ATOMIC";
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Color {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    color: string;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2UserAccess {
    access: string;
    id: string;
    undefined: string;
}

export interface D2TrackedEntityInstance {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    createdAtClient: Date;
    deleted: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    geometry: D2Geometry;
    href: string;
    id: Id;
    inactive: boolean;
    lastUpdated: Date;
    lastUpdatedAtClient: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    organisationUnit: D2IdentifiableObject;
    programInstances: (D2IdentifiableObject)[];
    programOwners: (any)[];
    publicAccess: string;
    relationshipItems: (any)[];
    trackedEntityAttributeValues: (any)[];
    trackedEntityType: D2IdentifiableObject;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataSetElement {
    categoryCombo: D2IdentifiableObject;
    dataElement: D2IdentifiableObject;
    dataSet: D2IdentifiableObject;
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
    attributeOptionCombo: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    categoryOptionCombo: D2IdentifiableObject;
    code: Id;
    created: Date;
    dataElement: D2IdentifiableObject;
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2CategoryDimension {
    dimension: D2IdentifiableObject;
    items: (D2IdentifiableObject)[];
}

export interface D2ProgramTrackedEntityAttribute {
    access: D2Access;
    allowFutureDate: boolean;
    attribute: D2IdentifiableObject;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayInList: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    groups: (D2IdentifiableObject)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    mandatory: boolean;
    name: string;
    program: D2IdentifiableObject;
    publicAccess: string;
    renderOptionsAsRadio: boolean;
    renderType: any;
    searchable: boolean;
    sortOrder: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2AnalyticsPeriodBoundary {
    access: D2Access;
    analyticsPeriodBoundaryType:
        | "BEFORE_START_OF_REPORTING_PERIOD"
        | "BEFORE_END_OF_REPORTING_PERIOD"
        | "AFTER_START_OF_REPORTING_PERIOD"
        | "AFTER_END_OF_REPORTING_PERIOD";
    attributeValues: (D2AttributeValue)[];
    boundaryTarget: string;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    offsetPeriodType: string;
    offsetPeriods: number;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramStageInstance {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Relationship {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    formName: string;
    from: any;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    publicAccess: string;
    relationshipType: D2IdentifiableObject;
    style: D2Style;
    to: any;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Interpretation {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    chart: D2IdentifiableObject;
    code: Id;
    comments: (D2IdentifiableObject)[];
    created: Date;
    dataSet: D2IdentifiableObject;
    displayName: string;
    eventChart: D2IdentifiableObject;
    eventReport: D2IdentifiableObject;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    likedBy: (D2IdentifiableObject)[];
    likes: number;
    map: D2IdentifiableObject;
    mentions: (any)[];
    name: string;
    organisationUnit: D2IdentifiableObject;
    period: D2IdentifiableObject;
    publicAccess: string;
    reportTable: D2IdentifiableObject;
    text: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2UserGroupAccess {
    access: string;
    id: string;
    undefined: string;
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
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElement: D2IdentifiableObject;
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    legendSets: (D2IdentifiableObject)[];
    name: string;
    program: D2IdentifiableObject;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramStageInstanceFilter {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    description: string;
    displayName: string;
    eventQueryCriteria: any;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    name: string;
    program: Id;
    programStage: Id;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: D2IdentifiableObject;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export enum Model {
    userRoles = "userRoles",
    attributes = "attributes",
    users = "users",
    userGroups = "userGroups",
    externalFileResources = "externalFileResources",
    sqlViews = "sqlViews",
    constants = "constants",
    oAuth2Clients = "oAuth2Clients",
    options = "options",
    jobConfigurations = "jobConfigurations",
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
    analyticsTableHooks = "analyticsTableHooks",
    indicatorTypes = "indicatorTypes",
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
    programStages = "programStages",
    smsCommands = "smsCommands",
    programs = "programs",
    eventCharts = "eventCharts",
    eventReports = "eventReports",
    programSections = "programSections",
    programIndicators = "programIndicators",
    programIndicatorGroups = "programIndicatorGroups",
    relationshipTypes = "relationshipTypes",
    programRuleVariables = "programRuleVariables",
    programRuleActions = "programRuleActions",
    programRules = "programRules",
    mapViews = "mapViews",
    reports = "reports",
    reportTables = "reportTables",
    documents = "documents",
    charts = "charts",
    maps = "maps",
    externalMapLayers = "externalMapLayers",
    predictors = "predictors",
    predictorGroups = "predictorGroups",
    dashboards = "dashboards",
    pushAnalysis = "pushAnalysis",
    trackedEntityInstanceFilters = "trackedEntityInstanceFilters",
    eventFilters = "eventFilters",
}

export type ModelName = keyof typeof Model;
