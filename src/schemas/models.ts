type Id = string;

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

export interface D2AttributeValue {
    attribute: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    translations: (D2Translation)[];
    undefined: boolean;
    unique: boolean;
    user: Ref;
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
    avatar: Ref;
    birthday: Date;
    code: Id;
    created: Date;
    dataViewOrganisationUnits: (Ref)[];
    displayName: string;
    education: string;
    email: string;
    employer: string;
    externalAccess: boolean;
    facebookMessenger: string;
    favorites: (string)[];
    firstName: string;
    gender: string;
    groups: (Ref)[];
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
    organisationUnits: (Ref)[];
    phoneNumber: string;
    publicAccess: string;
    skype: string;
    surname: string;
    teiSearchOrganisationUnits: (Ref)[];
    telegram: string;
    translations: (D2Translation)[];
    twitter: string;
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userCredentials: Ref;
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
    lastUpdatedBy: Ref;
    managedByGroups: (Ref)[];
    managedGroups: (Ref)[];
    members: (Ref)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    sqlQuery: string;
    translations: (D2Translation)[];
    type: "VIEW" | "MATERIALIZED_VIEW" | "QUERY";
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    redirectUris: (string)[];
    secret: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    optionSet: Ref;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    leaderOnlyJob: boolean;
    name: string;
    nextExecutionTime: Date;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    options: (Ref)[];
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    items: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    members: (Ref)[];
    name: string;
    optionSet: Ref;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    members: (Ref)[];
    name: string;
    optionSet: Ref;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ColorSet {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    colors: (Ref)[];
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    legends: (Ref)[];
    name: string;
    publicAccess: string;
    symbolizer: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    children: (Ref)[];
    closedDate: Date;
    code: Id;
    comment: string;
    contactPerson: string;
    created: Date;
    dataSets: (Ref)[];
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
    groups: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    memberCount: number;
    name: string;
    openingDate: Date;
    parent: Ref;
    path: string;
    phoneNumber: string;
    programs: (Ref)[];
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    type: string;
    undefined: Ref;
    url: string;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    users: (Ref)[];
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
    lastUpdatedBy: Ref;
    level: number;
    name: string;
    offlineLevels: number;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    groupSets: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    members: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    symbol: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    items: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    name: string;
    organisationUnitGroups: (Ref)[];
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    categories: (Ref)[];
    categoryOptionCombos: (Ref)[];
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
    groups: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    organisationUnits: (Ref)[];
    publicAccess: string;
    shortName: string;
    startDate: Date;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    groupSets: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    members: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    items: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    categoryCombos: (Ref)[];
    categoryOptions: (Ref)[];
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
    items: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2CategoryCombo {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    categories: (Ref)[];
    code: Id;
    created: Date;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    optionCombos: (Ref)[];
    publicAccess: string;
    skipTotal: boolean;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    categoryCombo: Ref;
    categoryOptions: (Ref)[];
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
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    categoryCombo: Ref;
    code: Id;
    commentOptionSet: Ref;
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
    groups: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    optionSet: Ref;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: Ref;
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
    groupSets: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    members: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    items: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSet: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    number: boolean;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    dataSets: (Ref)[];
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
    groups: (Ref)[];
    href: string;
    id: Id;
    indicatorType: Ref;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    numerator: string;
    numeratorDescription: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: Ref;
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
    groupSet: Ref;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    style: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    categoryCombo: Ref;
    code: Id;
    compulsoryDataElementOperands: (Ref)[];
    compulsoryFieldsCompleteOnly: boolean;
    created: Date;
    dataElementDecoration: boolean;
    dataEntryForm: Ref;
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
    indicators: (Ref)[];
    interpretations: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
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
    sections: (Ref)[];
    shortName: string;
    skipOffline: boolean;
    sources: (Ref)[];
    style: D2Style;
    timelyDays: number;
    translations: (D2Translation)[];
    undefined: Ref;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    validCompleteOnly: boolean;
    version: number;
    workflow: Ref;
}

export interface D2DataSetNotificationTemplate {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataSetNotificationTrigger: "DATA_SET_COMPLETION" | "SCHEDULED_DAYS";
    dataSets: (Ref)[];
    deliveryChannels: (never)[];
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Section {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElements: (Ref)[];
    dataSet: Ref;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    greyedFields: (Ref)[];
    href: string;
    id: Id;
    indicators: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    showColumnTotals: boolean;
    showRowTotals: boolean;
    sortOrder: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataApprovalLevel {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    categoryOptionGroupSet: Ref;
    code: Id;
    created: Date;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    level: number;
    name: string;
    orgUnitLevel: number;
    orgUnitLevelName: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataApprovalWorkflow {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    categoryCombo: Ref;
    code: Id;
    created: Date;
    dataSets: (Ref)[];
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    levels: (Ref)[];
    name: string;
    periodType: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    groups: (Ref)[];
    href: string;
    id: Id;
    importance: "HIGH" | "MEDIUM" | "LOW";
    instruction: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    leftSide: D2Expression;
    legendSets: (Ref)[];
    name: string;
    notificationTemplates: (Ref)[];
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
    user: Ref;
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
    lastUpdatedBy: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    messageTemplate: string;
    name: string;
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroups: (Ref)[];
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    validationRules: (Ref)[];
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
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
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
    translations: (D2Translation)[];
    undefined: boolean;
    unique: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    trackedEntityTypeAttributes: (Ref)[];
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    mandatory: boolean;
    name: string;
    publicAccess: string;
    searchable: boolean;
    trackedEntityAttribute: Ref;
    trackedEntityType: Ref;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramTrackedEntityAttributeGroup {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    attributes: (Ref)[];
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    uniqunessType: "NONE" | "STRICT" | "VALIDATION";
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramStageSection {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElements: (Ref)[];
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    programIndicators: (Ref)[];
    programStage: Ref;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    dataEntryForm: Ref;
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
    lastUpdatedBy: Ref;
    minDaysFromStart: number;
    name: string;
    notificationTemplates: (Ref)[];
    openAfterEnrollment: boolean;
    periodType: string;
    preGenerateUID: boolean;
    program: Ref;
    programStageDataElements: (Ref)[];
    programStageSections: (Ref)[];
    publicAccess: string;
    remindCompleted: boolean;
    repeatable: boolean;
    reportDateToUse: string;
    sortOrder: number;
    standardInterval: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    dataset: Ref;
    defaultMessage: string;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
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
    specialCharacters: (any)[];
    successMessage: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroup: Ref;
    userGroupAccesses: (D2UserGroupAccess)[];
    wrongFormatMessage: string;
}

export interface D2Program {
    access: D2Access;
    accessLevel: "OPEN" | "AUDITED" | "PROTECTED" | "CLOSED";
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
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
    notificationTemplates: (Ref)[];
    onlyEnrollOnce: boolean;
    organisationUnits: (Ref)[];
    programAttributes: (Ref)[];
    programIndicators: (Ref)[];
    programRuleVariables: (Ref)[];
    programSections: (Ref)[];
    programStages: (Ref)[];
    programType: "WITH_REGISTRATION" | "WITHOUT_REGISTRATION";
    publicAccess: string;
    relatedProgram: Ref;
    selectEnrollmentDatesInFuture: boolean;
    selectIncidentDatesInFuture: boolean;
    shortName: string;
    skipOffline: boolean;
    style: D2Style;
    trackedEntityType: Ref;
    translations: (D2Translation)[];
    undefined: boolean;
    useFirstStageDuringRegistration: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userRoles: (Ref)[];
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
    attributeValueDimension: Ref;
    attributeValues: (D2AttributeValue)[];
    baseLineLabel: string;
    baseLineValue: number;
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    collapseDataDimensions: boolean;
    colorSet: Ref;
    columnDimensions: (string)[];
    columns: (Ref)[];
    completedOnly: boolean;
    created: Date;
    cumulativeValues: boolean;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
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
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (Ref)[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (Ref)[];
    itemOrganisationUnitGroups: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: Ref;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (Ref)[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: object;
    percentStackedValues: boolean;
    periods: (Ref)[];
    program: Ref;
    programIndicatorDimensions: (any)[];
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
    rowDimensions: (string)[];
    rows: (Ref)[];
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
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: Ref;
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
    attributeValueDimension: Ref;
    attributeValues: (D2AttributeValue)[];
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    collapseDataDimensions: boolean;
    columnDimensions: (string)[];
    columns: (Ref)[];
    completedOnly: boolean;
    created: Date;
    dataDimensionItems: (any)[];
    dataElementDimensions: (any)[];
    dataElementGroupSetDimensions: (any)[];
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
    favorites: (string)[];
    filterDimensions: (string)[];
    filters: (Ref)[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyRows: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (Ref)[];
    itemOrganisationUnitGroups: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (Ref)[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: object;
    periods: (Ref)[];
    program: Ref;
    programIndicatorDimensions: (any)[];
    programStage: Ref;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    relatives: any;
    rowDimensions: (string)[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: (Ref)[];
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
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: Ref;
}

export interface D2ProgramSection {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    attributes: (Ref)[];
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
    lastUpdatedBy: Ref;
    name: string;
    program: Ref;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    analyticsPeriodBoundaries: (Ref)[];
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
    groups: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    program: Ref;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    toConstraint: any;
    toFromName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramRuleVariable {
    access: D2Access;
    attribute: Ref;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dataElement: Ref;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
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
    translations: (D2Translation)[];
    undefined: boolean;
    useCodeForOptionSet: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2ProgramRuleAction {
    access: D2Access;
    attribute: Ref;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    content: string;
    created: Date;
    data: string;
    dataElement: Ref;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    priority: number;
    program: Ref;
    programRuleActions: (Ref)[];
    programStage: Ref;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    columns: (Ref)[];
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
    filters: (Ref)[];
    followUp: boolean;
    hidden: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (Ref)[];
    itemOrganisationUnitGroups: (Ref)[];
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
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnitSelectionMode:
        | "SELECTED"
        | "CHILDREN"
        | "DESCENDANTS"
        | "ACCESSIBLE"
        | "CAPTURE"
        | "ALL";
    organisationUnits: (Ref)[];
    parentGraph: string;
    parentGraphMap: object;
    parentLevel: number;
    periods: (Ref)[];
    program: Ref;
    programIndicatorDimensions: (any)[];
    programStage: Ref;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    radiusHigh: number;
    radiusLow: number;
    relatives: any;
    rows: (Ref)[];
    shortName: string;
    sortOrder: number;
    startDate: Date;
    styleDataItem: object;
    subscribers: (string)[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    trackedEntityType: Ref;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    relatives: any;
    reportParams: any;
    reportTable: Ref;
    translations: (D2Translation)[];
    type: "JASPER_REPORT_TABLE" | "JASPER_JDBC" | "HTML";
    undefined: boolean;
    user: Ref;
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
    columns: (Ref)[];
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
    filters: (Ref)[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyColumns: boolean;
    hideEmptyRows: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (Ref)[];
    itemOrganisationUnitGroups: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendDisplayStyle: "FILL" | "TEXT";
    legendSet: Ref;
    measureCriteria: string;
    name: string;
    numberType: "VALUE" | "ROW_PERCENTAGE" | "COLUMN_PERCENTAGE";
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (Ref)[];
    parentGraphMap: object;
    periods: (Ref)[];
    programIndicatorDimensions: (any)[];
    publicAccess: string;
    regression: boolean;
    relatives: any;
    reportParams: any;
    rowDimensions: (string)[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: (Ref)[];
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
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
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
    attributeDimensions: (any)[];
    attributeValues: (D2AttributeValue)[];
    baseLineLabel: string;
    baseLineValue: number;
    category: string;
    categoryDimensions: (D2CategoryDimension)[];
    categoryOptionGroupSetDimensions: (any)[];
    code: Id;
    colorSet: Ref;
    columns: (Ref)[];
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
    filters: (Ref)[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: (Ref)[];
    itemOrganisationUnitGroups: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: Ref;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: (any)[];
    organisationUnitLevels: (number)[];
    organisationUnits: (Ref)[];
    parentGraphMap: object;
    percentStackedValues: boolean;
    periods: (Ref)[];
    programIndicatorDimensions: (any)[];
    publicAccess: string;
    rangeAxisDecimals: number;
    rangeAxisLabel: string;
    rangeAxisMaxValue: number;
    rangeAxisMinValue: number;
    rangeAxisSteps: number;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    relatives: any;
    rows: (Ref)[];
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
    user: Ref;
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
    interpretations: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    latitude: number;
    longitude: number;
    mapViews: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    subscribers: (string)[];
    title: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    layers: string;
    legendSet: Ref;
    legendSetUrl: string;
    mapLayerPosition: "BASEMAP" | "OVERLAY";
    mapService: "WMS" | "TMS" | "XYZ";
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    url: string;
    user: Ref;
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
    groups: (Ref)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    organisationUnitLevels: (Ref)[];
    output: Ref;
    outputCombo: Ref;
    periodType: string;
    publicAccess: string;
    sampleSkipTest: D2Expression;
    sequentialSampleCount: number;
    sequentialSkipCount: number;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    members: (Ref)[];
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DashboardItem {
    access: D2Access;
    appKey: string;
    attributeValues: (D2AttributeValue)[];
    chart: Ref;
    code: Id;
    created: Date;
    displayName: string;
    eventChart: Ref;
    eventReport: Ref;
    externalAccess: boolean;
    favorites: (string)[];
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
    reports: (Ref)[];
    resources: (Ref)[];
    shape: "NORMAL" | "DOUBLE_WIDTH" | "FULL_WIDTH";
    text: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    users: (Ref)[];
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
    items: (Ref)[];
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2PushAnalysis {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    dashboard: Ref;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    message: string;
    name: string;
    publicAccess: string;
    recipientUserGroups: (Ref)[];
    title: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    namespace: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    value: string;
}

export interface D2CategoryOptionGroupSetDimension {
    dimension: Ref;
    items: (Ref)[];
}

export interface D2UserCredentials {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    catDimensionConstraints: (Ref)[];
    code: Id;
    cogsDimensionConstraints: (Ref)[];
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
    lastUpdatedBy: Ref;
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
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userAuthorityGroups: (Ref)[];
    userGroupAccesses: (D2UserGroupAccess)[];
    userInfo: Ref;
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
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
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    program: Ref;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2TrackedEntityProgramIndicatorDimension {
    filter: string;
    legendSet: Ref;
    programIndicator: Ref;
}

export interface D2TrackedEntityDataElementDimension {
    dataElement: Ref;
    filter: string;
    legendSet: Ref;
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
    lastUpdatedBy: Ref;
    mentions: (any)[];
    name: string;
    publicAccess: string;
    text: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2MessageConversation {
    access: D2Access;
    assignee: Ref;
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
    lastSender: Ref;
    lastSenderFirstname: string;
    lastSenderSurname: string;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    messageCount: number;
    messageType: "PRIVATE" | "SYSTEM" | "VALIDATION_RESULT" | "TICKET";
    messages: (Ref)[];
    name: string;
    priority: "NONE" | "LOW" | "MEDIUM" | "HIGH";
    publicAccess: string;
    read: boolean;
    status: "NONE" | "OPEN" | "PENDING" | "INVALID" | "SOLVED";
    subject: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userFirstname: string;
    userGroupAccesses: (D2UserGroupAccess)[];
    userMessages: (any)[];
    userSurname: string;
}

export interface D2MinMaxDataElement {
    dataElement: Ref;
    generated: boolean;
    max: number;
    min: number;
    optionCombo: Ref;
    source: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    startValue: number;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataInputPeriod {
    closingDate: Date;
    openingDate: Date;
    period: Ref;
}

export interface D2ProgramInstance {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    comments: (Ref)[];
    created: Date;
    createdAtClient: Date;
    deleted: boolean;
    displayName: string;
    endDate: Date;
    enrollmentDate: Date;
    entityInstance: Ref;
    externalAccess: boolean;
    favorites: (string)[];
    followup: boolean;
    href: string;
    id: Id;
    incidentDate: Date;
    lastUpdated: Date;
    lastUpdatedAtClient: Date;
    lastUpdatedBy: Ref;
    messageConversations: (Ref)[];
    name: string;
    organisationUnit: Ref;
    program: Ref;
    programStageInstances: (Ref)[];
    publicAccess: string;
    relationshipItems: (any)[];
    status: "ACTIVE" | "COMPLETED" | "CANCELLED";
    storedBy: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    storageStatus: "NONE" | "PENDING" | "FAILED" | "STORED";
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Icon {}

export interface D2OrganisationUnitGroupSetDimension {
    dimension: Ref;
    items: (Ref)[];
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
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    program: Ref;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    dataElement: Ref;
    displayInReports: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataElementGroupSetDimension {
    dimension: Ref;
    items: (Ref)[];
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    type: "BEST_EFFORT" | "ATOMIC";
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    organisationUnit: Ref;
    programInstances: (Ref)[];
    programOwners: (any)[];
    publicAccess: string;
    relationshipItems: (any)[];
    trackedEntityAttributeValues: (any)[];
    trackedEntityType: Ref;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2DataSetElement {
    categoryCombo: Ref;
    dataElement: Ref;
    dataSet: Ref;
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
    attributeValues: (D2AttributeValue)[];
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2CategoryDimension {
    dimension: Ref;
    items: (Ref)[];
}

export interface D2ProgramTrackedEntityAttribute {
    access: D2Access;
    allowFutureDate: boolean;
    attribute: Ref;
    attributeValues: (D2AttributeValue)[];
    code: Id;
    created: Date;
    displayInList: boolean;
    displayName: string;
    externalAccess: boolean;
    favorites: (string)[];
    groups: (Ref)[];
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
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    offsetPeriodType: string;
    offsetPeriods: number;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    publicAccess: string;
    relationshipType: Ref;
    style: D2Style;
    to: any;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
    userAccesses: (D2UserAccess)[];
    userGroupAccesses: (D2UserGroupAccess)[];
}

export interface D2Interpretation {
    access: D2Access;
    attributeValues: (D2AttributeValue)[];
    chart: Ref;
    code: Id;
    comments: (Ref)[];
    created: Date;
    dataSet: Ref;
    displayName: string;
    eventChart: Ref;
    eventReport: Ref;
    externalAccess: boolean;
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    likedBy: (Ref)[];
    likes: number;
    map: Ref;
    mentions: (any)[];
    name: string;
    organisationUnit: Ref;
    period: Ref;
    publicAccess: string;
    reportTable: Ref;
    text: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    favorites: (string)[];
    href: string;
    id: Id;
    lastUpdated: Date;
    lastUpdatedBy: Ref;
    legendSets: (Ref)[];
    name: string;
    program: Ref;
    publicAccess: string;
    shortName: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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
    lastUpdatedBy: Ref;
    name: string;
    program: Id;
    programStage: Id;
    publicAccess: string;
    translations: (D2Translation)[];
    undefined: boolean;
    user: Ref;
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

export type D2Models = {
    userRoles: D2UserAuthorityGroup;
    attributes: D2Attribute;
    users: D2User;
    userGroups: D2UserGroup;
    externalFileResources: D2ExternalFileResource;
    sqlViews: D2SqlView;
    constants: D2Constant;
    oAuth2Clients: D2OAuth2Client;
    options: D2Option;
    jobConfigurations: D2JobConfiguration;
    optionSets: D2OptionSet;
    optionGroupSets: D2OptionGroupSet;
    optionGroups: D2OptionGroup;
    colorSets: D2ColorSet;
    legendSets: D2LegendSet;
    organisationUnits: D2OrganisationUnit;
    organisationUnitLevels: D2OrganisationUnitLevel;
    organisationUnitGroups: D2OrganisationUnitGroup;
    organisationUnitGroupSets: D2OrganisationUnitGroupSet;
    categoryOptions: D2CategoryOption;
    categoryOptionGroups: D2CategoryOptionGroup;
    categoryOptionGroupSets: D2CategoryOptionGroupSet;
    categories: D2Category;
    categoryCombos: D2CategoryCombo;
    categoryOptionCombos: D2CategoryOptionCombo;
    dataElements: D2DataElement;
    dataElementGroups: D2DataElementGroup;
    dataElementGroupSets: D2DataElementGroupSet;
    analyticsTableHooks: D2AnalyticsTableHook;
    indicatorTypes: D2IndicatorType;
    indicators: D2Indicator;
    indicatorGroups: D2IndicatorGroup;
    indicatorGroupSets: D2IndicatorGroupSet;
    dataEntryForms: D2DataEntryForm;
    dataSets: D2DataSet;
    dataSetNotificationTemplates: D2DataSetNotificationTemplate;
    sections: D2Section;
    dataApprovalLevels: D2DataApprovalLevel;
    dataApprovalWorkflows: D2DataApprovalWorkflow;
    validationRules: D2ValidationRule;
    validationRuleGroups: D2ValidationRuleGroup;
    validationNotificationTemplates: D2ValidationNotificationTemplate;
    trackedEntityAttributes: D2TrackedEntityAttribute;
    trackedEntityTypes: D2TrackedEntityType;
    programTrackedEntityAttributeGroups: D2ProgramTrackedEntityAttributeGroup;
    programStageSections: D2ProgramStageSection;
    programNotificationTemplates: D2ProgramNotificationTemplate;
    programStages: D2ProgramStage;
    smsCommands: D2SMSCommand;
    programs: D2Program;
    eventCharts: D2EventChart;
    eventReports: D2EventReport;
    programSections: D2ProgramSection;
    programIndicators: D2ProgramIndicator;
    programIndicatorGroups: D2ProgramIndicatorGroup;
    relationshipTypes: D2RelationshipType;
    programRuleVariables: D2ProgramRuleVariable;
    programRuleActions: D2ProgramRuleAction;
    programRules: D2ProgramRule;
    mapViews: D2MapView;
    reports: D2Report;
    reportTables: D2ReportTable;
    documents: D2Document;
    charts: D2Chart;
    maps: D2Map;
    externalMapLayers: D2ExternalMapLayer;
    predictors: D2Predictor;
    predictorGroups: D2PredictorGroup;
    dashboards: D2Dashboard;
    pushAnalysis: D2PushAnalysis;
    trackedEntityInstanceFilters: D2TrackedEntityInstanceFilter;
    eventFilters: D2ProgramStageInstanceFilter;
};

export type D2Model = D2Models[keyof D2Models];
