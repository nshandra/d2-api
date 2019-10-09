type Identifier = string;

interface D2IdentifiableObject {
    id: Identifier;
}

interface D2AttributeValue extends D2IdentifiableObject {
    lastUpdated: Date;
    attribute: D2IdentifiableObject;
    value: string;
    created: Date;
}

interface D2Attribute extends D2IdentifiableObject {
    indicatorAttribute: boolean;
    indicatorGroupAttribute: boolean;
    publicAccess: string;
    userGroupAttribute: boolean;
    dataElementAttribute: boolean;
    lastUpdated: Date;
    constantAttribute: boolean;
    translations: D2IdentifiableObject[];
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
    categoryOptionAttribute: boolean;
    id: Identifier;
    optionSetAttribute: boolean;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    sqlViewAttribute: boolean;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    legendSetAttribute: boolean;
    attributeValues: D2IdentifiableObject[];
    trackedEntityAttributeAttribute: boolean;
    organisationUnitAttribute: boolean;
    dataSetAttribute: boolean;
    documentAttribute: boolean;
    unique: boolean;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    validationRuleGroupAttribute: boolean;
    shortName: string;
    dataElementGroupAttribute: boolean;
    sectionAttribute: boolean;
    favorites: string[];
    trackedEntityTypeAttribute: boolean;
    code: Identifier;
    access: any;
    userAttribute: boolean;
    displayName: string;
    description: string;
    mandatory: boolean;
    categoryOptionGroupAttribute: boolean;
    displayShortName: string;
    externalAccess: boolean;
    programStageAttribute: boolean;
    programAttribute: boolean;
    optionSet: D2IdentifiableObject;
    categoryAttribute: boolean;
    categoryOptionComboAttribute: boolean;
    categoryOptionGroupSetAttribute: boolean;
    validationRuleAttribute: boolean;
    programIndicatorAttribute: boolean;
    organisationUnitGroupAttribute: boolean;
    dataElementGroupSetAttribute: boolean;
    organisationUnitGroupSetAttribute: boolean;
    user: D2IdentifiableObject;
    optionAttribute: boolean;
}

interface D2UserAuthorityGroup extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    authorities: string[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2User extends D2IdentifiableObject {
    birthday: Date;
    favorites: string[];
    code: Identifier;
    access: any;
    education: string;
    gender: string;
    displayName: string;
    publicAccess: string;
    jobTitle: string;
    externalAccess: boolean;
    skype: string;
    lastUpdated: Date;
    teiSearchOrganisationUnits: D2IdentifiableObject[];
    twitter: string;
    translations: D2IdentifiableObject[];
    surname: string;
    employer: string;
    id: Identifier;
    organisationUnits: D2IdentifiableObject[];
    href: string;
    facebookMessenger: string;
    introduction: string;
    email: string;
    dataViewOrganisationUnits: D2IdentifiableObject[];
    lastUpdatedBy: D2IdentifiableObject;
    whatsApp: string;
    userGroupAccesses: D2IdentifiableObject[];
    languages: string;
    created: Date;
    welcomeMessage: string;
    userCredentials: D2IdentifiableObject;
    attributeValues: D2IdentifiableObject[];
    telegram: string;
    avatar: D2IdentifiableObject;
    lastCheckedInterpretations: Date;
    groups: D2IdentifiableObject[];
    firstName: string;
    phoneNumber: string;
    nationality: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    interests: string;
    user: D2IdentifiableObject;
}

interface D2UserGroup extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    managedByGroups: D2IdentifiableObject[];
    attributeValues: D2IdentifiableObject[];
    members: D2IdentifiableObject[];
    externalAccess: boolean;
    managedGroups: D2IdentifiableObject[];
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2ExternalFileResource extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2SqlView extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    sqlQuery: string;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    type: "VIEW" | "MATERIALIZED_VIEW" | "QUERY";
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    cacheStrategy:
    | "NO_CACHE"
    | "CACHE_15_MINUTES"
    | "CACHE_30_MINUTES"
    | "CACHE_1_HOUR"
    | "CACHE_6AM_TOMORROW"
    | "CACHE_TWO_WEEKS"
    | "RESPECT_SYSTEM_SETTING";
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2Constant extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    value: number;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    shortName: string;
    user: D2IdentifiableObject;
}

interface D2OAuth2Client extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    secret: string;
    redirectUris: string[];
    externalAccess: boolean;
    lastUpdated: Date;
    grantTypes: string[];
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
    cid: Identifier;
}

interface D2Option extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: string;
    displayName: string;
    publicAccess: string;
    description: string;
    externalAccess: boolean;
    lastUpdated: Date;
    optionSet: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    formName: string;
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: any;
    user: D2IdentifiableObject;
}

interface D2JobConfiguration extends D2IdentifiableObject {
    favorites: string[];
    jobStatus: "RUNNING" | "COMPLETED" | "STOPPED" | "SCHEDULED" | "DISABLED" | "FAILED";
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    enabled: boolean;
    leaderOnlyJob: boolean;
    externalAccess: boolean;
    lastUpdated: Date;
    continuousExecution: boolean;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
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
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    nextExecutionTime: Date;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    cronExpression: string;
    lastRuntimeExecution: string;
    userAccesses: D2IdentifiableObject[];
    lastExecutedStatus: "RUNNING" | "COMPLETED" | "STOPPED" | "SCHEDULED" | "DISABLED" | "FAILED";
    name: string;
    jobParameters: string;
    lastExecuted: Date;
    user: D2IdentifiableObject;
    userUid: string;
}

interface D2OptionSet extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    version: number;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
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
    name: string;
    options: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2OptionGroupSet extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    members: D2IdentifiableObject[];
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    optionSet: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    allItems: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dimensionalKeywords: any;
    filter: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSet: D2IdentifiableObject;
    dataDimension: boolean;
    shortName: string;
    user: D2IdentifiableObject;
    items: D2IdentifiableObject[];
}

interface D2OptionGroup extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    optionSet: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    members: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2ColorSet extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    colors: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2LegendSet extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    symbolizer: string;
    lastUpdated: Date;
    legends: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2OrganisationUnit extends D2IdentifiableObject {
    parent: D2IdentifiableObject;
    publicAccess: string;
    type: string;
    path: string;
    lastUpdated: Date;
    children: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    groups: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    users: D2IdentifiableObject[];
    phoneNumber: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    dataSets: D2IdentifiableObject[];
    legendSets: D2IdentifiableObject[];
    programs: D2IdentifiableObject[];
    shortName: string;
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
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    description: string;
    contactPerson: string;
    displayShortName: string;
    externalAccess: boolean;
    openingDate: Date;
    email: string;
    address: string;
    memberCount: number;
    url: string;
    closedDate: Date;
    geometry: any;
    comment: string;
    user: D2IdentifiableObject;
}

interface D2OrganisationUnitLevel extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    offlineLevels: number;
    code: Identifier;
    level: number;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2OrganisationUnitGroup extends D2IdentifiableObject {
    favorites: string[];
    symbol: string;
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
    code: Identifier;
    access: any;
    color: string;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    members: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    groupSets: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    geometry: any;
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2OrganisationUnitGroupSet extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    organisationUnitGroups: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    allItems: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dimensionalKeywords: any;
    filter: string;
    compulsory: boolean;
    includeSubhierarchyInAnalytics: boolean;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSet: D2IdentifiableObject;
    dataDimension: boolean;
    shortName: string;
    user: D2IdentifiableObject;
    items: D2IdentifiableObject[];
}

interface D2CategoryOption extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    endDate: Date;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    categories: D2IdentifiableObject[];
    organisationUnits: D2IdentifiableObject[];
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    categoryOptionCombos: D2IdentifiableObject[];
    groups: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    style: any;
    shortName: string;
    user: D2IdentifiableObject;
    startDate: Date;
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
}

interface D2CategoryOptionGroup extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    members: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    groupSets: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2CategoryOptionGroupSet extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    allItems: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dimensionalKeywords: any;
    filter: string;
    members: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSet: D2IdentifiableObject;
    dataDimension: boolean;
    shortName: string;
    user: D2IdentifiableObject;
    items: D2IdentifiableObject[];
}

interface D2Category extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    categoryCombos: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    categoryOptions: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    allItems: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dimensionalKeywords: any;
    filter: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSet: D2IdentifiableObject;
    dataDimension: boolean;
    shortName: string;
    user: D2IdentifiableObject;
    items: D2IdentifiableObject[];
}

interface D2CategoryCombo extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    categories: D2IdentifiableObject[];
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    optionCombos: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    skipTotal: boolean;
    user: D2IdentifiableObject;
}

interface D2CategoryOptionCombo extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    ignoreApproval: boolean;
    categoryCombo: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    categoryOptions: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2DataElement extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    domainType: "AGGREGATE" | "TRACKER";
    dataSetElements: D2IdentifiableObject[];
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    optionSet: D2IdentifiableObject;
    categoryCombo: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
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
    formName: string;
    commentOptionSet: D2IdentifiableObject;
    id: Identifier;
    href: string;
    fieldMask: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    groups: D2IdentifiableObject[];
    attributeValues: D2IdentifiableObject[];
    displayFormName: string;
    zeroIsSignificant: boolean;
    url: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    aggregationLevels: number[];
    style: any;
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2DataElementGroup extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    members: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    groupSets: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2DataElementGroupSet extends D2IdentifiableObject {
    favorites: string[];
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    allItems: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    members: D2IdentifiableObject[];
    dimensionalKeywords: any;
    filter: string;
    compulsory: boolean;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSet: D2IdentifiableObject;
    dataDimension: boolean;
    shortName: string;
    user: D2IdentifiableObject;
    items: D2IdentifiableObject[];
}

interface D2AnalyticsTableHook extends D2IdentifiableObject {
    favorites: string[];
    phase: "RESOURCE_TABLE_POPULATED" | "ANALYTICS_TABLE_POPULATED";
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    analyticsTableType:
    | "DATA_VALUE"
    | "COMPLETENESS"
    | "COMPLETENESS_TARGET"
    | "ORG_UNIT_TARGET"
    | "EVENT"
    | "ENROLLMENT"
    | "VALIDATION_RESULT";
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    sql: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
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
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2IndicatorType extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    number: boolean;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    factor: number;
    user: D2IdentifiableObject;
}

interface D2Indicator extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    aggregateExportCategoryOptionCombo: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    denominatorDescription: string;
    indicatorType: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    formName: string;
    id: Identifier;
    href: string;
    numeratorDescription: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    groups: D2IdentifiableObject[];
    url: string;
    numerator: string;
    denominator: string;
    annualized: boolean;
    userAccesses: D2IdentifiableObject[];
    decimals: number;
    name: string;
    dataSets: D2IdentifiableObject[];
    legendSets: D2IdentifiableObject[];
    style: any;
    shortName: string;
    user: D2IdentifiableObject;
    aggregateExportAttributeOptionCombo: string;
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
}

interface D2IndicatorGroup extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    members: D2IdentifiableObject[];
    groupSet: D2IdentifiableObject;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2IndicatorGroupSet extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    members: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    compulsory: boolean;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2DataEntryForm extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    htmlCode: string;
    attributeValues: D2IdentifiableObject[];
    format: number;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2DataSet extends D2IdentifiableObject {
    dataEntryForm: D2IdentifiableObject;
    validCompleteOnly: boolean;
    dataSetElements: D2IdentifiableObject[];
    publicAccess: string;
    skipOffline: boolean;
    compulsoryFieldsCompleteOnly: boolean;
    lastUpdated: Date;
    categoryCombo: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    dataInputPeriods: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    interpretations: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    workflow: D2IdentifiableObject;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    indicators: D2IdentifiableObject[];
    version: number;
    sections: D2IdentifiableObject[];
    timelyDays: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    style: any;
    notificationRecipients: D2IdentifiableObject;
    shortName: string;
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
    favorites: string[];
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
    code: Identifier;
    access: any;
    dataElementDecoration: boolean;
    displayName: string;
    notifyCompletingUser: boolean;
    noValueRequiresComment: boolean;
    compulsoryDataElementOperands: D2IdentifiableObject[];
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    fieldCombinationRequired: boolean;
    formName: string;
    sources: D2IdentifiableObject[];
    renderHorizontally: boolean;
    renderAsTabs: boolean;
    mobile: boolean;
    periodType: string;
    openFuturePeriods: number;
    expiryDays: number;
    user: D2IdentifiableObject;
}

interface D2DataSetNotificationTemplate extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    relativeScheduledDays: number;
    id: Identifier;
    href: string;
    subjectTemplate: string;
    dataSetNotificationTrigger: "DATA_SET_COMPLETION" | "SCHEDULED_DAYS";
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    deliveryChannels: D2IdentifiableObject[];
    created: Date;
    notifyUsersInHierarchyOnly: boolean;
    attributeValues: D2IdentifiableObject[];
    notificationRecipient: "ORGANISATION_UNIT_CONTACT" | "USER_GROUP";
    notifyParentOrganisationUnitOnly: boolean;
    userAccesses: D2IdentifiableObject[];
    name: string;
    dataSets: D2IdentifiableObject[];
    user: D2IdentifiableObject;
    recipientUserGroup: D2IdentifiableObject;
    messageTemplate: string;
}

interface D2Section extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    greyedFields: D2IdentifiableObject[];
    displayName: string;
    publicAccess: string;
    description: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    dataSet: D2IdentifiableObject;
    dataElements: D2IdentifiableObject[];
    showColumnTotals: boolean;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    indicators: D2IdentifiableObject[];
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
    showRowTotals: boolean;
}

interface D2DataApprovalLevel extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    categoryOptionGroupSet: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    level: number;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    orgUnitLevelName: string;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    orgUnitLevel: number;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2DataApprovalWorkflow extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    levels: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    periodType: string;
    categoryCombo: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    dataSets: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2ValidationRule extends D2IdentifiableObject {
    groups: D2IdentifiableObject[];
    favorites: string[];
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
    code: Identifier;
    access: any;
    importance: "HIGH" | "MEDIUM" | "LOW";
    displayName: string;
    publicAccess: string;
    aggregateExportCategoryOptionCombo: string;
    description: string;
    displayShortName: string;
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
    externalAccess: boolean;
    lastUpdated: Date;
    leftSide: any;
    notificationTemplates: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    rightSide: any;
    periodType: string;
    instruction: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    skipFormValidation: boolean;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
    aggregateExportAttributeOptionCombo: string;
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
}

interface D2ValidationRuleGroup extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    members: D2IdentifiableObject[];
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2ValidationNotificationTemplate extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    recipientUserGroups: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    subjectTemplate: string;
    id: Identifier;
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    validationRules: D2IdentifiableObject[];
    created: Date;
    notifyUsersInHierarchyOnly: boolean;
    attributeValues: D2IdentifiableObject[];
    notifyParentOrganisationUnitOnly: boolean;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
    messageTemplate: string;
}

interface D2TrackedEntityAttribute extends D2IdentifiableObject {
    favorites: string[];
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
    programScope: boolean;
    code: Identifier;
    access: any;
    displayInListNoProgram: boolean;
    displayName: string;
    publicAccess: string;
    pattern: string;
    description: string;
    skipSynchronization: boolean;
    displayShortName: string;
    externalAccess: boolean;
    sortOrderInListNoProgram: number;
    lastUpdated: Date;
    optionSet: D2IdentifiableObject;
    generated: boolean;
    displayOnVisitSchedule: boolean;
    translations: D2IdentifiableObject[];
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
    formName: string;
    sortOrderInVisitSchedule: number;
    id: Identifier;
    href: string;
    orgunitScope: boolean;
    confidential: boolean;
    fieldMask: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    expression: string;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    unique: boolean;
    userAccesses: D2IdentifiableObject[];
    inherit: boolean;
    name: string;
    legendSets: D2IdentifiableObject[];
    style: any;
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2TrackedEntityType extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    trackedEntityTypeAttributes: D2IdentifiableObject[];
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    allowAuditLog: boolean;
    translations: D2IdentifiableObject[];
    formName: string;
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    minAttributesRequiredToSearch: number;
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    maxTeiCountToReturn: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: any;
    shortName: string;
    user: D2IdentifiableObject;
}

interface D2ProgramTrackedEntityAttributeGroup extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    uniqunessType: "NONE" | "STRICT" | "VALIDATION";
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    attributes: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
}

interface D2TrackedEntityTypeAttribute extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    mandatory: boolean;
    trackedEntityAttribute: D2IdentifiableObject;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    searchable: boolean;
    displayInList: boolean;
    trackedEntityType: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
}

interface D2ProgramNotificationTemplate extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    externalAccess: boolean;
    notificationTrigger:
    | "ENROLLMENT"
    | "COMPLETION"
    | "PROGRAM_RULE"
    | "SCHEDULED_DAYS_DUE_DATE"
    | "SCHEDULED_DAYS_INCIDENT_DATE"
    | "SCHEDULED_DAYS_ENROLLMENT_DATE";
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    relativeScheduledDays: number;
    id: Identifier;
    href: string;
    subjectTemplate: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    deliveryChannels: D2IdentifiableObject[];
    recipientDataElement: D2IdentifiableObject;
    created: Date;
    notifyUsersInHierarchyOnly: boolean;
    attributeValues: D2IdentifiableObject[];
    notificationRecipient:
    | "TRACKED_ENTITY_INSTANCE"
    | "ORGANISATION_UNIT_CONTACT"
    | "USERS_AT_ORGANISATION_UNIT"
    | "USER_GROUP"
    | "PROGRAM_ATTRIBUTE"
    | "DATA_ELEMENT";
    recipientProgramAttribute: D2IdentifiableObject;
    notifyParentOrganisationUnitOnly: boolean;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
    recipientUserGroup: D2IdentifiableObject;
    messageTemplate: string;
}

interface D2ProgramStageSection extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    externalAccess: boolean;
    programIndicators: D2IdentifiableObject[];
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    formName: string;
    id: Identifier;
    href: string;
    renderType: any;
    dataElements: D2IdentifiableObject[];
    lastUpdatedBy: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: any;
    user: D2IdentifiableObject;
}

interface D2SMSCommand extends D2IdentifiableObject {
    favorites: string[];
    moreThanOneOrgUnitMessage: string;
    codes: D2IdentifiableObject[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    specialCharacters: D2IdentifiableObject[];
    currentPeriodUsedForReporting: boolean;
    program: D2IdentifiableObject;
    externalAccess: boolean;
    noUserMessage: string;
    lastUpdated: Date;
    receivedMessage: string;
    translations: D2IdentifiableObject[];
    defaultMessage: string;
    id: Identifier;
    href: string;
    userGroup: D2IdentifiableObject;
    lastUpdatedBy: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    completenessMethod: "ALL_DATAVALUE" | "AT_LEAST_ONE_DATAVALUE" | "DO_NOT_MARK_COMPLETE";
    created: Date;
    attributeValues: D2IdentifiableObject[];
    wrongFormatMessage: string;
    separator: string;
    successMessage: string;
    codeValueSeparator: string;
    parserType:
    | "KEY_VALUE_PARSER"
    | "J2ME_PARSER"
    | "ALERT_PARSER"
    | "UNREGISTERED_PARSER"
    | "TRACKED_ENTITY_REGISTRATION_PARSER"
    | "PROGRAM_STAGE_DATAENTRY_PARSER"
    | "EVENT_REGISTRATION_PARSER";
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
    dataset: D2IdentifiableObject;
}

interface D2ProgramStage extends D2IdentifiableObject {
    allowGenerateNextVisit: boolean;
    dataEntryForm: D2IdentifiableObject;
    publicAccess: string;
    reportDateToUse: string;
    program: D2IdentifiableObject;
    lastUpdated: Date;
    programStageDataElements: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    generatedByEnrollmentDate: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    hideDueDate: boolean;
    enableUserAssignment: boolean;
    style: any;
    minDaysFromStart: number;
    standardInterval: number;
    dueDateLabel: string;
    favorites: string[];
    executionDateLabel: string;
    code: Identifier;
    access: any;
    preGenerateUID: boolean;
    displayName: string;
    description: string;
    externalAccess: boolean;
    notificationTemplates: D2IdentifiableObject[];
    openAfterEnrollment: boolean;
    repeatable: boolean;
    formName: string;
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    remindCompleted: boolean;
    displayGenerateEventBox: boolean;
    validationStrategy: "ON_COMPLETE" | "ON_UPDATE_AND_INSERT";
    autoGenerateEvent: boolean;
    periodType: string;
    blockEntryForm: boolean;
    user: D2IdentifiableObject;
    programStageSections: D2IdentifiableObject[];
}

interface D2Program extends D2IdentifiableObject {
    dataEntryForm: D2IdentifiableObject;
    publicAccess: string;
    ignoreOverdueEvents: boolean;
    skipOffline: boolean;
    programIndicators: D2IdentifiableObject[];
    lastUpdated: Date;
    categoryCombo: D2IdentifiableObject;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    enrollmentDateLabel: string;
    lastUpdatedBy: D2IdentifiableObject;
    onlyEnrollOnce: boolean;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    version: number;
    maxTeiCountToReturn: number;
    selectIncidentDatesInFuture: boolean;
    incidentDateLabel: string;
    userRoles: D2IdentifiableObject[];
    expiryPeriodType: any;
    userAccesses: D2IdentifiableObject[];
    name: string;
    selectEnrollmentDatesInFuture: boolean;
    style: any;
    shortName: string;
    useFirstStageDuringRegistration: boolean;
    favorites: string[];
    code: Identifier;
    access: any;
    programRuleVariables: D2IdentifiableObject[];
    displayName: string;
    programAttributes: D2IdentifiableObject[];
    completeEventsExpiryDays: number;
    description: string;
    relatedProgram: D2IdentifiableObject;
    displayShortName: string;
    externalAccess: boolean;
    notificationTemplates: D2IdentifiableObject[];
    formName: string;
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    minAttributesRequiredToSearch: number;
    displayFrontPageList: boolean;
    organisationUnits: D2IdentifiableObject[];
    programType: "WITH_REGISTRATION" | "WITHOUT_REGISTRATION";
    accessLevel: "OPEN" | "AUDITED" | "PROTECTED" | "CLOSED";
    programSections: D2IdentifiableObject[];
    programStages: D2IdentifiableObject[];
    trackedEntityType: D2IdentifiableObject;
    displayIncidentDate: boolean;
    expiryDays: number;
    user: D2IdentifiableObject;
}

interface D2EventReport extends D2IdentifiableObject {
    dataElementGroupSetDimensions: D2IdentifiableObject[];
    orgUnitField: string;
    endDate: Date;
    publicAccess: string;
    userOrganisationUnitChildren: boolean;
    program: D2IdentifiableObject;
    lastUpdated: Date;
    hideEmptyRows: boolean;
    attributeDimensions: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    parentGraphMap: any;
    userOrganisationUnit: boolean;
    filterDimensions: string[];
    id: Identifier;
    href: string;
    rowSubTotals: boolean;
    hideNaData: boolean;
    interpretations: D2IdentifiableObject[];
    itemOrganisationUnitGroups: D2IdentifiableObject[];
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    attributeValueDimension: D2IdentifiableObject;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    programIndicatorDimensions: D2IdentifiableObject[];
    created: Date;
    subscribers: string[];
    dataType: "AGGREGATED_VALUES" | "EVENTS";
    attributeValues: D2IdentifiableObject[];
    columnDimensions: string[];
    completedOnly: boolean;
    colTotals: boolean;
    showDimensionLabels: boolean;
    subtitle: string;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    shortName: string;
    topLimit: number;
    startDate: Date;
    collapseDataDimensions: boolean;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    favorites: string[];
    dataDimensionItems: D2IdentifiableObject[];
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
    code: Identifier;
    categoryOptionGroupSetDimensions: D2IdentifiableObject[];
    access: any;
    userOrganisationUnitGrandChildren: boolean;
    displayName: string;
    columns: D2IdentifiableObject[];
    hideSubtitle: boolean;
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    description: string;
    organisationUnitGroupSetDimensions: D2IdentifiableObject[];
    title: string;
    displayShortName: string;
    organisationUnitLevels: number[];
    externalAccess: boolean;
    colSubTotals: boolean;
    dataElementValueDimension: D2IdentifiableObject;
    relatives: any;
    dataElementDimensions: D2IdentifiableObject[];
    periods: D2IdentifiableObject[];
    organisationUnits: D2IdentifiableObject[];
    value: D2IdentifiableObject;
    categoryDimensions: D2IdentifiableObject[];
    showHierarchy: boolean;
    programStage: D2IdentifiableObject;
    rowTotals: boolean;
    timeField: string;
    filters: D2IdentifiableObject[];
    rows: D2IdentifiableObject[];
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    hideTitle: boolean;
    rowDimensions: string[];
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    user: D2IdentifiableObject;
}

interface D2EventChart extends D2IdentifiableObject {
    dataElementGroupSetDimensions: D2IdentifiableObject[];
    showData: boolean;
    orgUnitField: string;
    endDate: Date;
    baseLineValue: number;
    publicAccess: string;
    userOrganisationUnitChildren: boolean;
    program: D2IdentifiableObject;
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
    lastUpdated: Date;
    attributeDimensions: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    yearlySeries: string[];
    parentGraphMap: any;
    userOrganisationUnit: boolean;
    filterDimensions: string[];
    id: Identifier;
    href: string;
    hideNaData: boolean;
    interpretations: D2IdentifiableObject[];
    itemOrganisationUnitGroups: D2IdentifiableObject[];
    displayDescription: string;
    attributeValueDimension: D2IdentifiableObject;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    programIndicatorDimensions: D2IdentifiableObject[];
    domainAxisLabel: string;
    created: Date;
    subscribers: string[];
    rangeAxisLabel: string;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    attributeValues: D2IdentifiableObject[];
    columnDimensions: string[];
    completedOnly: boolean;
    cumulativeValues: boolean;
    subtitle: string;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    rangeAxisDecimals: number;
    shortName: string;
    topLimit: number;
    startDate: Date;
    collapseDataDimensions: boolean;
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    favorites: string[];
    dataDimensionItems: D2IdentifiableObject[];
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
    code: Identifier;
    categoryOptionGroupSetDimensions: D2IdentifiableObject[];
    access: any;
    userOrganisationUnitGrandChildren: boolean;
    displayName: string;
    columns: D2IdentifiableObject[];
    hideSubtitle: boolean;
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    description: string;
    organisationUnitGroupSetDimensions: D2IdentifiableObject[];
    title: string;
    hideLegend: boolean;
    displayShortName: string;
    organisationUnitLevels: number[];
    externalAccess: boolean;
    rangeAxisMinValue: number;
    percentStackedValues: boolean;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    noSpaceBetweenColumns: boolean;
    dataElementValueDimension: D2IdentifiableObject;
    relatives: any;
    dataElementDimensions: D2IdentifiableObject[];
    rangeAxisSteps: number;
    targetLineLabel: string;
    periods: D2IdentifiableObject[];
    organisationUnits: D2IdentifiableObject[];
    value: D2IdentifiableObject;
    categoryDimensions: D2IdentifiableObject[];
    programStage: D2IdentifiableObject;
    timeField: string;
    targetLineValue: number;
    filters: D2IdentifiableObject[];
    rows: D2IdentifiableObject[];
    baseLineLabel: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    hideTitle: boolean;
    rowDimensions: string[];
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    legendSet: D2IdentifiableObject;
    rangeAxisMaxValue: number;
    colorSet: D2IdentifiableObject;
    user: D2IdentifiableObject;
}

interface D2ProgramSection extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    program: D2IdentifiableObject;
    externalAccess: boolean;
    attributes: D2IdentifiableObject[];
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    formName: string;
    href: string;
    id: Identifier;
    renderType: any;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: any;
    user: D2IdentifiableObject;
}

interface D2ProgramIndicator extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    displayInForm: boolean;
    publicAccess: string;
    aggregateExportCategoryOptionCombo: string;
    description: string;
    program: D2IdentifiableObject;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    formName: string;
    id: Identifier;
    href: string;
    groups: D2IdentifiableObject[];
    analyticsPeriodBoundaries: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    expression: string;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    filter: string;
    userAccesses: D2IdentifiableObject[];
    decimals: number;
    name: string;
    analyticsType: "EVENT" | "ENROLLMENT";
    legendSets: D2IdentifiableObject[];
    style: any;
    shortName: string;
    user: D2IdentifiableObject;
    aggregateExportAttributeOptionCombo: string;
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
}

interface D2ProgramRuleVariable extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    sourceType:
    | "DATAELEMENT_NEWEST_EVENT_PROGRAM_STAGE"
    | "DATAELEMENT_NEWEST_EVENT_PROGRAM"
    | "DATAELEMENT_CURRENT_EVENT"
    | "DATAELEMENT_PREVIOUS_EVENT"
    | "CALCULATED_VALUE"
    | "TEI_ATTRIBUTE";
    program: D2IdentifiableObject;
    attribute: D2IdentifiableObject;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    useCodeForOptionSet: boolean;
    dataElement: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
}

interface D2ProgramIndicatorGroup extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    externalAccess: boolean;
    members: D2IdentifiableObject[];
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2RelationshipType extends D2IdentifiableObject {
    favorites: string[];
    bidirectional: boolean;
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    fromToName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    toConstraint: any;
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    toFromName: string;
    fromConstraint: any;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
}

interface D2ProgramRuleAction extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    data: string;
    optionGroup: D2IdentifiableObject;
    displayName: string;
    publicAccess: string;
    templateUid: string;
    content: string;
    attribute: D2IdentifiableObject;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    programIndicator: D2IdentifiableObject;
    id: Identifier;
    href: string;
    programRule: D2IdentifiableObject;
    programStageSection: D2IdentifiableObject;
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
    lastUpdatedBy: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dataElement: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    name: string;
    location: string;
    user: D2IdentifiableObject;
    option: D2IdentifiableObject;
}

interface D2ProgramRule extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    program: D2IdentifiableObject;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    priority: number;
    condition: string;
    programRuleActions: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
}

interface D2MapView extends D2IdentifiableObject {
    dataElementGroupSetDimensions: D2IdentifiableObject[];
    orgUnitField: string;
    endDate: Date;
    publicAccess: string;
    userOrganisationUnitChildren: boolean;
    colorScale: string;
    parentLevel: number;
    program: D2IdentifiableObject;
    lastUpdated: Date;
    attributeDimensions: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    parentGraphMap: any;
    eventCoordinateField: string;
    userOrganisationUnit: boolean;
    filterDimensions: string[];
    id: Identifier;
    href: string;
    organisationUnitSelectionMode:
    | "SELECTED"
    | "CHILDREN"
    | "DESCENDANTS"
    | "ACCESSIBLE"
    | "CAPTURE"
    | "ALL";
    interpretations: D2IdentifiableObject[];
    itemOrganisationUnitGroups: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    programIndicatorDimensions: D2IdentifiableObject[];
    method: number;
    labelFontSize: string;
    created: Date;
    subscribers: string[];
    colorHigh: string;
    attributeValues: D2IdentifiableObject[];
    columnDimensions: string[];
    completedOnly: boolean;
    eventPointRadius: number;
    areaRadius: number;
    labels: boolean;
    subtitle: string;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    shortName: string;
    topLimit: number;
    startDate: Date;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    favorites: string[];
    dataDimensionItems: D2IdentifiableObject[];
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
    code: Identifier;
    categoryOptionGroupSetDimensions: D2IdentifiableObject[];
    access: any;
    userOrganisationUnitGrandChildren: boolean;
    hidden: boolean;
    displayName: string;
    columns: D2IdentifiableObject[];
    classes: number;
    hideSubtitle: boolean;
    styleDataItem: any;
    description: string;
    labelFontColor: string;
    organisationUnitGroupSetDimensions: D2IdentifiableObject[];
    title: string;
    layer: string;
    displayShortName: string;
    organisationUnitLevels: number[];
    externalAccess: boolean;
    organisationUnitGroupSet: D2IdentifiableObject;
    followUp: boolean;
    relatives: any;
    dataElementDimensions: D2IdentifiableObject[];
    periods: D2IdentifiableObject[];
    organisationUnits: D2IdentifiableObject[];
    categoryDimensions: D2IdentifiableObject[];
    eventPointColor: string;
    labelFontStyle: string;
    programStage: D2IdentifiableObject;
    labelFontWeight: string;
    timeField: string;
    parentGraph: string;
    filters: D2IdentifiableObject[];
    rows: D2IdentifiableObject[];
    radiusLow: number;
    radiusHigh: number;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    hideTitle: boolean;
    eventClustering: boolean;
    colorLow: string;
    trackedEntityType: D2IdentifiableObject;
    legendSet: D2IdentifiableObject;
    opacity: number;
    user: D2IdentifiableObject;
    config: string;
}

interface D2ExternalMapLayer extends D2IdentifiableObject {
    favorites: string[];
    imageFormat: "PNG" | "JPG";
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    legendSetUrl: string;
    mapService: "WMS" | "TMS" | "XYZ";
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    layers: string;
    id: Identifier;
    href: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    mapLayerPosition: "BASEMAP" | "OVERLAY";
    url: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSet: D2IdentifiableObject;
    attribution: string;
    user: D2IdentifiableObject;
}

interface D2ReportTable extends D2IdentifiableObject {
    dataElementGroupSetDimensions: D2IdentifiableObject[];
    orgUnitField: string;
    numberType: "VALUE" | "ROW_PERCENTAGE" | "COLUMN_PERCENTAGE";
    endDate: Date;
    publicAccess: string;
    userOrganisationUnitChildren: boolean;
    legendDisplayStyle: "FILL" | "TEXT";
    hideEmptyColumns: boolean;
    measureCriteria: string;
    lastUpdated: Date;
    hideEmptyRows: boolean;
    attributeDimensions: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    reportParams: any;
    parentGraphMap: any;
    userOrganisationUnit: boolean;
    filterDimensions: string[];
    id: Identifier;
    href: string;
    rowSubTotals: boolean;
    interpretations: D2IdentifiableObject[];
    itemOrganisationUnitGroups: D2IdentifiableObject[];
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    programIndicatorDimensions: D2IdentifiableObject[];
    created: Date;
    subscribers: string[];
    attributeValues: D2IdentifiableObject[];
    columnDimensions: string[];
    completedOnly: boolean;
    colTotals: boolean;
    showDimensionLabels: boolean;
    subtitle: string;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    shortName: string;
    topLimit: number;
    startDate: Date;
    favorites: string[];
    dataDimensionItems: D2IdentifiableObject[];
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
    code: Identifier;
    categoryOptionGroupSetDimensions: D2IdentifiableObject[];
    access: any;
    userOrganisationUnitGrandChildren: boolean;
    displayName: string;
    columns: D2IdentifiableObject[];
    hideSubtitle: boolean;
    description: string;
    organisationUnitGroupSetDimensions: D2IdentifiableObject[];
    title: string;
    displayShortName: string;
    organisationUnitLevels: number[];
    externalAccess: boolean;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    colSubTotals: boolean;
    relatives: any;
    dataElementDimensions: D2IdentifiableObject[];
    periods: D2IdentifiableObject[];
    organisationUnits: D2IdentifiableObject[];
    categoryDimensions: D2IdentifiableObject[];
    showHierarchy: boolean;
    rowTotals: boolean;
    timeField: string;
    filters: D2IdentifiableObject[];
    cumulative: boolean;
    rows: D2IdentifiableObject[];
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    hideTitle: boolean;
    rowDimensions: string[];
    regression: boolean;
    legendSet: D2IdentifiableObject;
    user: D2IdentifiableObject;
    skipRounding: boolean;
}

interface D2Report extends D2IdentifiableObject {
    favorites: string[];
    designContent: string;
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    type: "JASPER_REPORT_TABLE" | "JASPER_JDBC" | "HTML";
    externalAccess: boolean;
    reportTable: D2IdentifiableObject;
    lastUpdated: Date;
    relatives: any;
    reportParams: any;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    cacheStrategy:
    | "NO_CACHE"
    | "CACHE_15_MINUTES"
    | "CACHE_30_MINUTES"
    | "CACHE_1_HOUR"
    | "CACHE_6AM_TOMORROW"
    | "CACHE_TWO_WEEKS"
    | "RESPECT_SYSTEM_SETTING";
    user: D2IdentifiableObject;
}

interface D2Map extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    basemap: string;
    latitude: number;
    description: string;
    title: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    mapViews: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    interpretations: D2IdentifiableObject[];
    longitude: number;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    subscribers: string[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    zoom: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    shortName: string;
    user: D2IdentifiableObject;
}

interface D2Document extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    url: string;
    externalAccess: boolean;
    lastUpdated: Date;
    external: boolean;
    attachment: boolean;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
    contentType: string;
}

interface D2ValidationResult extends D2IdentifiableObject {
    period: D2IdentifiableObject;
    organisationUnit: D2IdentifiableObject;
    validationRule: D2IdentifiableObject;
    created: Date;
    attributeOptionCombo: D2IdentifiableObject;
    rightsideValue: number;
    id: string;
    leftsideValue: number;
    notificationSent: boolean;
    dayInPeriod: number;
}

interface D2Chart extends D2IdentifiableObject {
    dataElementGroupSetDimensions: D2IdentifiableObject[];
    showData: boolean;
    orgUnitField: string;
    endDate: Date;
    baseLineValue: number;
    publicAccess: string;
    userOrganisationUnitChildren: boolean;
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
    lastUpdated: Date;
    attributeDimensions: D2IdentifiableObject[];
    translations: D2IdentifiableObject[];
    yearlySeries: string[];
    parentGraphMap: any;
    userOrganisationUnit: boolean;
    filterDimensions: string[];
    id: Identifier;
    href: string;
    interpretations: D2IdentifiableObject[];
    itemOrganisationUnitGroups: D2IdentifiableObject[];
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    programIndicatorDimensions: D2IdentifiableObject[];
    domainAxisLabel: string;
    created: Date;
    subscribers: string[];
    rangeAxisLabel: string;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    attributeValues: D2IdentifiableObject[];
    completedOnly: boolean;
    cumulativeValues: boolean;
    subtitle: string;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    rangeAxisDecimals: number;
    shortName: string;
    topLimit: number;
    startDate: Date;
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    favorites: string[];
    dataDimensionItems: D2IdentifiableObject[];
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
    code: Identifier;
    categoryOptionGroupSetDimensions: D2IdentifiableObject[];
    access: any;
    userOrganisationUnitGrandChildren: boolean;
    displayName: string;
    columns: D2IdentifiableObject[];
    hideSubtitle: boolean;
    description: string;
    organisationUnitGroupSetDimensions: D2IdentifiableObject[];
    title: string;
    hideLegend: boolean;
    displayShortName: string;
    organisationUnitLevels: number[];
    externalAccess: boolean;
    rangeAxisMinValue: number;
    percentStackedValues: boolean;
    seriesItems: D2IdentifiableObject[];
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    noSpaceBetweenColumns: boolean;
    relatives: any;
    dataElementDimensions: D2IdentifiableObject[];
    rangeAxisSteps: number;
    targetLineLabel: string;
    periods: D2IdentifiableObject[];
    organisationUnits: D2IdentifiableObject[];
    categoryDimensions: D2IdentifiableObject[];
    timeField: string;
    targetLineValue: number;
    filters: D2IdentifiableObject[];
    rows: D2IdentifiableObject[];
    baseLineLabel: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    hideTitle: boolean;
    series: string;
    legendSet: D2IdentifiableObject;
    rangeAxisMaxValue: number;
    colorSet: D2IdentifiableObject;
    category: string;
    user: D2IdentifiableObject;
}

interface D2Predictor extends D2IdentifiableObject {
    favorites: string[];
    outputCombo: D2IdentifiableObject;
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    generator: any;
    displayShortName: string;
    organisationUnitLevels: D2IdentifiableObject[];
    externalAccess: boolean;
    output: D2IdentifiableObject;
    lastUpdated: Date;
    sampleSkipTest: any;
    translations: D2IdentifiableObject[];
    id: Identifier;
    sequentialSampleCount: number;
    href: string;
    displayDescription: string;
    annualSampleCount: number;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    sequentialSkipCount: number;
    groups: D2IdentifiableObject[];
    periodType: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    shortName: string;
    user: D2IdentifiableObject;
}

interface D2PredictorGroup extends D2IdentifiableObject {
    favorites: string[];
    members: D2IdentifiableObject[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2DashboardItem extends D2IdentifiableObject {
    favorites: string[];
    reports: D2IdentifiableObject[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    externalAccess: boolean;
    reportTable: D2IdentifiableObject;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    appKey: string;
    id: Identifier;
    href: string;
    text: string;
    map: D2IdentifiableObject;
    height: number;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    shape: "NORMAL" | "DOUBLE_WIDTH" | "FULL_WIDTH";
    created: Date;
    attributeValues: D2IdentifiableObject[];
    resources: D2IdentifiableObject[];
    users: D2IdentifiableObject[];
    eventReport: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    name: string;
    eventChart: D2IdentifiableObject;
    width: number;
    x: number;
    messages: boolean;
    y: number;
    user: D2IdentifiableObject;
    chart: D2IdentifiableObject;
}

interface D2Dashboard extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    items: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    shortName: string;
    user: D2IdentifiableObject;
}

interface D2PushAnalysis extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    recipientUserGroups: D2IdentifiableObject[];
    attributeValues: D2IdentifiableObject[];
    message: string;
    title: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
    dashboard: D2IdentifiableObject;
}

interface D2KeyJsonValue extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    namespace: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
    value: string;
    key: string;
}

interface D2CategoryOptionGroupSetDimension extends D2IdentifiableObject {
    items: D2IdentifiableObject[];
    dimension: D2IdentifiableObject;
}

interface D2DataElementOperand extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    categoryOptionCombo: D2IdentifiableObject;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dataElement: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    attributeOptionCombo: D2IdentifiableObject;
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2FileResource extends D2IdentifiableObject {
    favorites: string[];
    contentMd5: string;
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    storageStatus: "NONE" | "PENDING" | "FAILED" | "STORED";
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    href: string;
    id: Identifier;
    contentType: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    domain: "DATA_VALUE" | "PUSH_ANALYSIS" | "DOCUMENT" | "MESSAGE_ATTACHMENT" | "USER_AVATAR";
    name: string;
    contentLength: string;
    user: D2IdentifiableObject;
}

interface D2ProgramStageDataElement extends D2IdentifiableObject {
    favorites: string[];
    displayInReports: boolean;
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    skipSynchronization: boolean;
    externalAccess: boolean;
    lastUpdated: Date;
    renderOptionsAsRadio: boolean;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    allowFutureDate: boolean;
    renderType: any;
    lastUpdatedBy: D2IdentifiableObject;
    programStage: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dataElement: D2IdentifiableObject;
    compulsory: boolean;
    allowProvidedElsewhere: boolean;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
}

interface D2Relationship extends D2IdentifiableObject {
    favorites: string[];
    access: any;
    code: Identifier;
    displayName: string;
    publicAccess: string;
    description: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    formName: string;
    from: any;
    href: string;
    id: Identifier;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    relationshipType: D2IdentifiableObject;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: any;
    to: any;
    user: D2IdentifiableObject;
}

interface D2ProgramTrackedEntityAttribute extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    groups: D2IdentifiableObject[];
    program: D2IdentifiableObject;
    mandatory: boolean;
    attribute: D2IdentifiableObject;
    externalAccess: boolean;
    lastUpdated: Date;
    renderOptionsAsRadio: boolean;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    allowFutureDate: boolean;
    renderType: any;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    searchable: boolean;
    displayInList: boolean;
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
}

interface D2Legend extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    image: string;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    endValue: number;
    color: string;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    startValue: number;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2AnalyticsPeriodBoundary extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    offsetPeriodType: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
    analyticsPeriodBoundaryType:
    | "BEFORE_START_OF_REPORTING_PERIOD"
    | "BEFORE_END_OF_REPORTING_PERIOD"
    | "AFTER_START_OF_REPORTING_PERIOD"
    | "AFTER_END_OF_REPORTING_PERIOD";
    boundaryTarget: string;
    offsetPeriods: number;
}

interface D2Icon extends D2IdentifiableObject { }

interface D2ProgramStageInstance extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2ProgramStageInstanceFilter extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    programStage: Identifier;
    eventQueryCriteria: any;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    description: string;
    program: Identifier;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2UserGroupAccess extends D2IdentifiableObject {
    access: string;
    id: string;
}

interface D2DataElementGroupSetDimension extends D2IdentifiableObject {
    items: D2IdentifiableObject[];
    dimension: D2IdentifiableObject;
}

interface D2Color extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    color: string;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2Interpretation extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    likedBy: D2IdentifiableObject[];
    organisationUnit: D2IdentifiableObject;
    displayName: string;
    publicAccess: string;
    externalAccess: boolean;
    reportTable: D2IdentifiableObject;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    text: string;
    map: D2IdentifiableObject;
    dataSet: D2IdentifiableObject;
    likes: number;
    lastUpdatedBy: D2IdentifiableObject;
    period: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    comments: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    eventReport: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    mentions: D2IdentifiableObject[];
    name: string;
    eventChart: D2IdentifiableObject;
    user: D2IdentifiableObject;
    chart: D2IdentifiableObject;
}

interface D2DataInputPeriod extends D2IdentifiableObject {
    period: D2IdentifiableObject;
    closingDate: Date;
    openingDate: Date;
}

interface D2CategoryDimension extends D2IdentifiableObject {
    items: D2IdentifiableObject[];
    dimension: D2IdentifiableObject;
}

interface D2TrackedEntityDataElementDimension extends D2IdentifiableObject {
    filter: string;
    legendSet: D2IdentifiableObject;
    dataElement: D2IdentifiableObject;
}

interface D2MessageConversation extends D2IdentifiableObject {
    favorites: string[];
    messageCount: number;
    code: Identifier;
    access: any;
    subject: string;
    displayName: string;
    publicAccess: string;
    externalAccess: boolean;
    followUp: boolean;
    lastUpdated: Date;
    messageType: "PRIVATE" | "SYSTEM" | "VALIDATION_RESULT" | "TICKET";
    translations: D2IdentifiableObject[];
    userMessages: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    userSurname: string;
    lastUpdatedBy: D2IdentifiableObject;
    lastSenderSurname: string;
    read: boolean;
    userGroupAccesses: D2IdentifiableObject[];
    lastSender: D2IdentifiableObject;
    created: Date;
    lastMessage: Date;
    attributeValues: D2IdentifiableObject[];
    priority: "NONE" | "LOW" | "MEDIUM" | "HIGH";
    lastSenderFirstname: string;
    userAccesses: D2IdentifiableObject[];
    name: string;
    messages: D2IdentifiableObject[];
    userFirstname: string;
    assignee: D2IdentifiableObject;
    user: D2IdentifiableObject;
    status: "NONE" | "OPEN" | "PENDING" | "INVALID" | "SOLVED";
}

interface D2MetadataVersion extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    type: "BEST_EFFORT" | "ATOMIC";
    externalAccess: boolean;
    lastUpdated: Date;
    importDate: Date;
    hashCode: string;
    translations: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2MinMaxDataElement extends D2IdentifiableObject {
    min: number;
    generated: boolean;
    max: number;
    dataElement: D2IdentifiableObject;
    source: D2IdentifiableObject;
    optionCombo: D2IdentifiableObject;
}

interface D2OrganisationUnitGroupSetDimension extends D2IdentifiableObject {
    dimension: D2IdentifiableObject;
    items: D2IdentifiableObject[];
}

interface D2ReportingRate extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    dataSet: D2IdentifiableObject;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    metric:
    | "REPORTING_RATE"
    | "REPORTING_RATE_ON_TIME"
    | "ACTUAL_REPORTS"
    | "ACTUAL_REPORTS_ON_TIME"
    | "EXPECTED_REPORTS";
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2DataSetElement extends D2IdentifiableObject {
    dataElement: D2IdentifiableObject;
    categoryCombo: D2IdentifiableObject;
    dataSet: D2IdentifiableObject;
}

interface D2ProgramTrackedEntityAttributeDimensionItem extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    program: D2IdentifiableObject;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    attribute: D2IdentifiableObject;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2ProgramDataElementDimensionItem extends D2IdentifiableObject {
    favorites: string[];
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
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    program: D2IdentifiableObject;
    displayShortName: string;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    displayDescription: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    dataElement: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    name: string;
    legendSets: D2IdentifiableObject[];
    shortName: string;
    user: D2IdentifiableObject;
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
}

interface D2TrackedEntityProgramIndicatorDimension extends D2IdentifiableObject {
    filter: string;
    legendSet: D2IdentifiableObject;
    programIndicator: D2IdentifiableObject;
}

interface D2ProgramInstance extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    storedBy: string;
    endDate: Date;
    organisationUnit: D2IdentifiableObject;
    displayName: string;
    publicAccess: string;
    enrollmentDate: Date;
    createdAtClient: Date;
    program: D2IdentifiableObject;
    messageConversations: D2IdentifiableObject[];
    comments: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    relationshipItems: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    programStageInstances: D2IdentifiableObject[];
    entityInstance: D2IdentifiableObject;
    followup: boolean;
    deleted: boolean;
    userAccesses: D2IdentifiableObject[];
    name: string;
    incidentDate: Date;
    user: D2IdentifiableObject;
    status: "ACTIVE" | "COMPLETED" | "CANCELLED";
    lastUpdatedAtClient: Date;
}

interface D2InterpretationComment extends D2IdentifiableObject {
    favorites: string[];
    lastUpdatedBy: D2IdentifiableObject;
    access: any;
    userGroupAccesses: D2IdentifiableObject[];
    code: Identifier;
    created: Date;
    displayName: string;
    publicAccess: string;
    attributeValues: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    mentions: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    href: string;
    text: string;
    id: Identifier;
    user: D2IdentifiableObject;
}

interface D2TrackedEntityInstance extends D2IdentifiableObject {
    favorites: string[];
    programOwners: D2IdentifiableObject[];
    code: Identifier;
    access: any;
    programInstances: D2IdentifiableObject[];
    organisationUnit: D2IdentifiableObject;
    displayName: string;
    publicAccess: string;
    createdAtClient: Date;
    externalAccess: boolean;
    lastUpdated: Date;
    inactive: boolean;
    translations: D2IdentifiableObject[];
    relationshipItems: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    deleted: boolean;
    trackedEntityType: D2IdentifiableObject;
    userAccesses: D2IdentifiableObject[];
    name: string;
    geometry: any;
    user: D2IdentifiableObject;
    trackedEntityAttributeValues: D2IdentifiableObject[];
    lastUpdatedAtClient: Date;
}

interface D2TrackedEntityInstanceFilter extends D2IdentifiableObject {
    favorites: string[];
    code: Identifier;
    access: any;
    displayName: string;
    publicAccess: string;
    description: string;
    program: D2IdentifiableObject;
    enrollmentCreatedPeriod: any;
    externalAccess: boolean;
    lastUpdated: Date;
    translations: D2IdentifiableObject[];
    id: Identifier;
    href: string;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    created: Date;
    attributeValues: D2IdentifiableObject[];
    followup: boolean;
    eventFilters: D2IdentifiableObject[];
    enrollmentStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    sortOrder: number;
    userAccesses: D2IdentifiableObject[];
    name: string;
    style: any;
    user: D2IdentifiableObject;
}

interface D2UserCredentials extends D2IdentifiableObject {
    favorites: string[];
    lastLogin: Date;
    userInfo: D2IdentifiableObject;
    code: Identifier;
    access: any;
    openId: string;
    displayName: string;
    publicAccess: string;
    externalAuth: boolean;
    cogsDimensionConstraints: D2IdentifiableObject[];
    catDimensionConstraints: D2IdentifiableObject[];
    externalAccess: boolean;
    lastUpdated: Date;
    password: string;
    translations: D2IdentifiableObject[];
    ldapId: string;
    disabled: boolean;
    id: Identifier;
    href: string;
    twoFA: boolean;
    passwordLastUpdated: Date;
    lastUpdatedBy: D2IdentifiableObject;
    userGroupAccesses: D2IdentifiableObject[];
    invitation: boolean;
    created: Date;
    attributeValues: D2IdentifiableObject[];
    selfRegistered: boolean;
    userAuthorityGroups: D2IdentifiableObject[];
    userAccesses: D2IdentifiableObject[];
    name: string;
    user: D2IdentifiableObject;
    username: string;
}

interface D2UserAccess extends D2IdentifiableObject {
    access: string;
    id: string;
}