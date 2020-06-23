import {
    Id,
    Preset,
    FieldPresets,
    D2Access,
    D2Translation,
    D2Geometry,
    D2Style,
    D2DimensionalKeywords,
    D2Expression,
} from "./base";

export type D2AttributeValue = {
    attribute: D2Attribute;
    created: string;
    lastUpdated: string;
    value: string;
};

export type D2Attribute = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryAttribute: boolean;
    categoryOptionAttribute: boolean;
    categoryOptionComboAttribute: boolean;
    categoryOptionGroupAttribute: boolean;
    categoryOptionGroupSetAttribute: boolean;
    code: Id;
    constantAttribute: boolean;
    created: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    indicatorAttribute: boolean;
    indicatorGroupAttribute: boolean;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSetAttribute: boolean;
    mandatory: boolean;
    name: string;
    optionAttribute: boolean;
    optionSet: D2OptionSet;
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
    unique: boolean;
    user: D2User;
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
};

export type D2UserAuthorityGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    authorities: string[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    users: D2User[];
};

export type D2User = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    avatar: D2FileResource;
    birthday: string;
    code: Id;
    created: string;
    dataViewOrganisationUnits: D2OrganisationUnit[];
    displayName: string;
    education: string;
    email: string;
    employer: string;
    externalAccess: boolean;
    facebookMessenger: string;
    favorite: boolean;
    favorites: string[];
    firstName: string;
    gender: string;
    href: string;
    id: Id;
    interests: string;
    introduction: string;
    jobTitle: string;
    languages: string;
    lastCheckedInterpretations: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    nationality: string;
    organisationUnits: D2OrganisationUnit[];
    phoneNumber: string;
    publicAccess: string;
    skype: string;
    surname: string;
    teiSearchOrganisationUnits: D2OrganisationUnit[];
    telegram: string;
    translations: D2Translation[];
    twitter: string;
    user: D2User;
    userAccesses: D2UserAccess[];
    userCredentials: D2UserCredentials;
    userGroupAccesses: D2UserGroupAccess[];
    userGroups: D2UserGroup[];
    welcomeMessage: string;
    whatsApp: string;
};

export type D2UserGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    managedByGroups: D2UserGroup[];
    managedGroups: D2UserGroup[];
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    users: D2User[];
};

export type D2ExternalFileResource = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2SqlView = {
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
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    sqlQuery: string;
    translations: D2Translation[];
    type: "VIEW" | "MATERIALIZED_VIEW" | "QUERY";
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Constant = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    value: number;
};

export type D2OAuth2Client = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    cid: Id;
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    grantTypes: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    redirectUris: string[];
    secret: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2JobConfiguration = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    configurable: boolean;
    continuousExecution: boolean;
    created: string;
    cronExpression: string;
    displayName: string;
    enabled: boolean;
    externalAccess: boolean;
    favorite: boolean;
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
    lastExecuted: string;
    lastExecutedStatus: "RUNNING" | "COMPLETED" | "STOPPED" | "SCHEDULED" | "DISABLED" | "FAILED";
    lastRuntimeExecution: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    leaderOnlyJob: boolean;
    name: string;
    nextExecutionTime: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userUid: string;
};

export type D2Option = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: string;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    optionSet: D2OptionSet;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2OptionSet = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    options: D2Option[];
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
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
};

export type D2OptionGroupSet = {
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
    created: string;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimension: string;
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
    favorite: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: any[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    name: string;
    optionGroups: D2OptionGroup[];
    optionSet: D2OptionSet;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2OptionGroup = {
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
    created: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    optionSet: D2OptionSet;
    options: D2Option[];
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2LegendSet = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legends: D2Legend[];
    name: string;
    publicAccess: string;
    symbolizer: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ColorSet = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    colors: D2Color[];
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2OrganisationUnit = {
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
    ancestors: D2OrganisationUnit[];
    attributeValues: D2AttributeValue[];
    children: D2OrganisationUnit[];
    closedDate: string;
    code: Id;
    comment: string;
    contactPerson: string;
    created: string;
    dataSets: D2DataSet[];
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    geometry: D2Geometry;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    leaf: boolean;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    level: number;
    memberCount: number;
    name: string;
    openingDate: string;
    organisationUnitGroups: D2OrganisationUnitGroup[];
    parent: D2OrganisationUnit;
    path: string;
    phoneNumber: string;
    programs: D2Program[];
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    type: string;
    url: string;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    users: D2User[];
};

export type D2OrganisationUnitLevel = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    level: number;
    name: string;
    offlineLevels: number;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2OrganisationUnitGroup = {
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
    created: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    geometry: D2Geometry;
    groupSets: D2OrganisationUnitGroupSet[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    organisationUnits: D2OrganisationUnit[];
    publicAccess: string;
    shortName: string;
    symbol: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2OrganisationUnitGroupSet = {
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
    created: string;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimension: string;
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
    favorite: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    includeSubhierarchyInAnalytics: boolean;
    items: any[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    name: string;
    organisationUnitGroups: D2OrganisationUnitGroup[];
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2CategoryOption = {
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
    categories: D2Category[];
    categoryOptionCombos: D2CategoryOptionCombo[];
    categoryOptionGroups: D2CategoryOptionGroup[];
    code: Id;
    created: string;
    description: string;
    dimensionItem: string;
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
    endDate: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    isDefault: boolean;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    organisationUnits: D2OrganisationUnit[];
    publicAccess: string;
    shortName: string;
    startDate: string;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2CategoryOptionGroup = {
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
    categoryOptions: D2CategoryOption[];
    code: Id;
    created: string;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    groupSets: D2CategoryOptionGroupSet[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2CategoryOptionGroupSet = {
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
    categoryOptionGroups: D2CategoryOptionGroup[];
    code: Id;
    created: string;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimension: string;
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
    favorite: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: any[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Category = {
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
    categoryCombos: D2CategoryCombo[];
    categoryOptions: D2CategoryOption[];
    code: Id;
    created: string;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    description: string;
    dimension: string;
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
    favorite: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: any[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2CategoryCombo = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categories: D2Category[];
    categoryOptionCombos: D2CategoryOptionCombo[];
    code: Id;
    created: string;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    isDefault: boolean;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    skipTotal: boolean;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2CategoryOptionCombo = {
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
    categoryCombo: D2CategoryCombo;
    categoryOptions: D2CategoryOption[];
    code: Id;
    created: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    ignoreApproval: boolean;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataElement = {
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
    categoryCombo: D2CategoryCombo;
    code: Id;
    commentOptionSet: D2OptionSet;
    created: string;
    dataElementGroups: D2DataElementGroup[];
    dataSetElements: D2DataSetElement[];
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    fieldMask: string;
    formName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    optionSet: D2OptionSet;
    optionSetValue: boolean;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: D2Translation[];
    url: string;
    user: D2User;
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
};

export type D2DataElementGroup = {
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
    created: string;
    dataElements: D2DataElement[];
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    groupSets: D2DataElementGroupSet[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataElementGroupSet = {
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
    created: string;
    dataDimension: boolean;
    dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
    dataElementGroups: D2DataElementGroup[];
    description: string;
    dimension: string;
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
    favorite: boolean;
    favorites: string[];
    filter: string;
    href: string;
    id: Id;
    items: any[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2IndicatorType = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    factor: number;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    number: boolean;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2AnalyticsTableHook = {
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
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
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
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Indicator = {
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
    created: string;
    dataSets: D2DataSet[];
    decimals: number;
    denominator: string;
    denominatorDescription: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    indicatorGroups: D2IndicatorGroup[];
    indicatorType: D2IndicatorType;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    numerator: string;
    numeratorDescription: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: D2Translation[];
    url: string;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2IndicatorGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    groupSet: D2IndicatorGroupSet;
    href: string;
    id: Id;
    indicators: D2Indicator[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2IndicatorGroupSet = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    compulsory: boolean;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    indicatorGroups: D2IndicatorGroup[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataEntryForm = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    format: number;
    href: string;
    htmlCode: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    style: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataSet = {
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
    categoryCombo: D2CategoryCombo;
    code: Id;
    compulsoryDataElementOperands: D2DataElementOperand[];
    compulsoryFieldsCompleteOnly: boolean;
    created: string;
    dataElementDecoration: boolean;
    dataEntryForm: D2DataEntryForm;
    dataInputPeriods: D2DataInputPeriod[];
    dataSetElements: D2DataSetElement[];
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    fieldCombinationRequired: boolean;
    formName: string;
    formType: "DEFAULT" | "CUSTOM" | "SECTION" | "SECTION_MULTIORG";
    href: string;
    id: Id;
    indicators: D2Indicator[];
    interpretations: D2Interpretation[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    mobile: boolean;
    name: string;
    noValueRequiresComment: boolean;
    notificationRecipients: D2UserGroup;
    notifyCompletingUser: boolean;
    openFuturePeriods: number;
    organisationUnits: D2OrganisationUnit[];
    periodType: string;
    publicAccess: string;
    renderAsTabs: boolean;
    renderHorizontally: boolean;
    sections: D2Section[];
    shortName: string;
    skipOffline: boolean;
    style: D2Style;
    timelyDays: number;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validCompleteOnly: boolean;
    version: number;
    workflow: D2DataApprovalWorkflow;
};

export type D2DataSetNotificationTemplate = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    dataSetNotificationTrigger: "DATA_SET_COMPLETION" | "SCHEDULED_DAYS";
    dataSets: D2DataSet[];
    deliveryChannels: never[];
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    messageTemplate: string;
    name: string;
    notificationRecipient: "ORGANISATION_UNIT_CONTACT" | "USER_GROUP";
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroup: D2UserGroup;
    relativeScheduledDays: number;
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Section = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryCombos: D2CategoryCombo[];
    code: Id;
    created: string;
    dataElements: D2DataElement[];
    dataSet: D2DataSet;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    greyedFields: D2DataElementOperand[];
    href: string;
    id: Id;
    indicators: D2Indicator[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    showColumnTotals: boolean;
    showRowTotals: boolean;
    sortOrder: number;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataApprovalLevel = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryOptionGroupSet: D2CategoryOptionGroupSet;
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    level: number;
    name: string;
    orgUnitLevel: number;
    orgUnitLevelName: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataApprovalWorkflow = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    categoryCombo: D2CategoryCombo;
    code: Id;
    created: string;
    dataApprovalLevels: D2DataApprovalLevel[];
    dataSets: D2DataSet[];
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    periodType: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ValidationRule = {
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
    created: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    importance: "HIGH" | "MEDIUM" | "LOW";
    instruction: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    leftSide: D2Expression;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    notificationTemplates: D2ValidationNotificationTemplate[];
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
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validationRuleGroups: D2ValidationRuleGroup[];
};

export type D2ValidationRuleGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validationRules: D2ValidationRule[];
};

export type D2ValidationNotificationTemplate = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    messageTemplate: string;
    name: string;
    notifyParentOrganisationUnitOnly: boolean;
    notifyUsersInHierarchyOnly: boolean;
    publicAccess: string;
    recipientUserGroups: D2UserGroup[];
    sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
    subjectTemplate: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validationRules: D2ValidationRule[];
};

export type D2TrackedEntityAttribute = {
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
    created: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    fieldMask: string;
    formName: string;
    generated: boolean;
    href: string;
    id: Id;
    inherit: boolean;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    optionSet: D2OptionSet;
    optionSetValue: boolean;
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
    unique: boolean;
    user: D2User;
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
};

export type D2TrackedEntityType = {
    access: D2Access;
    allowAuditLog: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    publicAccess: string;
    shortName: string;
    style: D2Style;
    trackedEntityTypeAttributes: D2TrackedEntityTypeAttribute[];
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2TrackedEntityTypeAttribute = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayInList: boolean;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    mandatory: boolean;
    name: string;
    publicAccess: string;
    searchable: boolean;
    trackedEntityAttribute: D2TrackedEntityAttribute;
    trackedEntityType: D2TrackedEntityType;
    translations: D2Translation[];
    user: D2User;
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
};

export type D2ProgramTrackedEntityAttributeGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    attributes: D2ProgramTrackedEntityAttribute[];
    code: Id;
    created: string;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    uniqunessType: "NONE" | "STRICT" | "VALIDATION";
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramStageSection = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    dataElements: D2DataElement[];
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    programIndicators: D2ProgramIndicator[];
    programStage: D2ProgramStage;
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramNotificationTemplate = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    deliveryChannels: never[];
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
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
    recipientDataElement: D2DataElement;
    recipientProgramAttribute: D2TrackedEntityAttribute;
    recipientUserGroup: D2UserGroup;
    relativeScheduledDays: number;
    subjectTemplate: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramStage = {
    access: D2Access;
    allowGenerateNextVisit: boolean;
    attributeValues: D2AttributeValue[];
    autoGenerateEvent: boolean;
    blockEntryForm: boolean;
    code: Id;
    created: string;
    dataEntryForm: D2DataEntryForm;
    description: string;
    displayDescription: string;
    displayGenerateEventBox: boolean;
    displayName: string;
    dueDateLabel: string;
    enableUserAssignment: boolean;
    executionDateLabel: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    formType: "DEFAULT" | "CUSTOM" | "SECTION" | "SECTION_MULTIORG";
    generatedByEnrollmentDate: boolean;
    hideDueDate: boolean;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    minDaysFromStart: number;
    name: string;
    notificationTemplates: D2ProgramNotificationTemplate[];
    openAfterEnrollment: boolean;
    periodType: string;
    preGenerateUID: boolean;
    program: D2Program;
    programStageDataElements: D2ProgramStageDataElement[];
    programStageSections: D2ProgramStageSection[];
    publicAccess: string;
    remindCompleted: boolean;
    repeatable: boolean;
    reportDateToUse: string;
    sortOrder: number;
    standardInterval: number;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    validationStrategy: "ON_COMPLETE" | "ON_UPDATE_AND_INSERT";
};

export type D2SMSCommand = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    codeValueSeparator: string;
    completenessMethod: "ALL_DATAVALUE" | "AT_LEAST_ONE_DATAVALUE" | "DO_NOT_MARK_COMPLETE";
    created: string;
    currentPeriodUsedForReporting: boolean;
    dataset: D2DataSet;
    defaultMessage: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
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
    program: D2Program;
    programStage: D2ProgramStage;
    publicAccess: string;
    receivedMessage: string;
    separator: string;
    smsCodes: any[];
    specialCharacters: any[];
    successMessage: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroup: D2UserGroup;
    userGroupAccesses: D2UserGroupAccess[];
    wrongFormatMessage: string;
};

export type D2Program = {
    access: D2Access;
    accessLevel: "OPEN" | "AUDITED" | "PROTECTED" | "CLOSED";
    attributeValues: D2AttributeValue[];
    categoryCombo: D2CategoryCombo;
    code: Id;
    completeEventsExpiryDays: number;
    created: string;
    dataEntryForm: D2DataEntryForm;
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
    favorite: boolean;
    favorites: string[];
    featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
    formName: string;
    href: string;
    id: Id;
    ignoreOverdueEvents: boolean;
    incidentDateLabel: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    maxTeiCountToReturn: number;
    minAttributesRequiredToSearch: number;
    name: string;
    notificationTemplates: D2ProgramNotificationTemplate[];
    onlyEnrollOnce: boolean;
    organisationUnits: D2OrganisationUnit[];
    programIndicators: D2ProgramIndicator[];
    programRuleVariables: D2ProgramRuleVariable[];
    programSections: D2ProgramSection[];
    programStages: D2ProgramStage[];
    programTrackedEntityAttributes: D2ProgramTrackedEntityAttribute[];
    programType: "WITH_REGISTRATION" | "WITHOUT_REGISTRATION";
    publicAccess: string;
    registration: boolean;
    relatedProgram: D2Program;
    selectEnrollmentDatesInFuture: boolean;
    selectIncidentDatesInFuture: boolean;
    shortName: string;
    skipOffline: boolean;
    style: D2Style;
    trackedEntityType: D2TrackedEntityType;
    translations: D2Translation[];
    useFirstStageDuringRegistration: boolean;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userRoles: D2UserAuthorityGroup[];
    version: number;
    withoutRegistration: boolean;
};

export type D2EventReport = {
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
    attributeValueDimension: D2TrackedEntityAttribute;
    attributeValues: D2AttributeValue[];
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimension[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    collapseDataDimensions: boolean;
    columnDimensions: string[];
    columns: any[];
    completedOnly: boolean;
    created: string;
    dataDimensionItems: any[];
    dataElementDimensions: D2TrackedEntityDataElementDimension[];
    dataElementGroupSetDimensions: D2DataElementGroupSetDimension[];
    dataElementValueDimension: D2DataElement;
    dataType: "AGGREGATED_VALUES" | "EVENTS";
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: string;
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: any[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyRows: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: D2Interpretation[];
    itemOrganisationUnitGroups: D2OrganisationUnitGroup[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimension[];
    organisationUnitLevels: number[];
    organisationUnits: D2OrganisationUnit[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: D2Map;
    periods: any[];
    program: D2Program;
    programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimension[];
    programStage: D2ProgramStage;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    relatives: any;
    rowDimensions: string[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: any[];
    shortName: string;
    showDimensionLabels: boolean;
    showHierarchy: boolean;
    sortOrder: number;
    startDate: string;
    subscribed: boolean;
    subscribers: string[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: any;
};

export type D2EventChart = {
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
    attributeValueDimension: D2TrackedEntityAttribute;
    attributeValues: D2AttributeValue[];
    baseLineLabel: string;
    baseLineValue: number;
    categoryDimensions: D2CategoryDimension[];
    categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimension[];
    code: Id;
    collapseDataDimensions: boolean;
    colorSet: D2ColorSet;
    columnDimensions: string[];
    columns: any[];
    completedOnly: boolean;
    created: string;
    cumulativeValues: boolean;
    dataDimensionItems: any[];
    dataElementDimensions: D2TrackedEntityDataElementDimension[];
    dataElementGroupSetDimensions: D2DataElementGroupSetDimension[];
    dataElementValueDimension: D2DataElement;
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    domainAxisLabel: string;
    endDate: string;
    eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: any[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideNaData: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: D2Interpretation[];
    itemOrganisationUnitGroups: D2OrganisationUnitGroup[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: D2LegendSet;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimension[];
    organisationUnitLevels: number[];
    organisationUnits: D2OrganisationUnit[];
    outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
    parentGraphMap: D2Map;
    percentStackedValues: boolean;
    periods: any[];
    program: D2Program;
    programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimension[];
    programStage: D2ProgramStage;
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
    rows: any[];
    shortName: string;
    showData: boolean;
    sortOrder: number;
    startDate: string;
    subscribed: boolean;
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
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    value: any;
    yearlySeries: string[];
};

export type D2ProgramSection = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    formName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    program: D2Program;
    programTrackedEntityAttribute: D2TrackedEntityAttribute[];
    publicAccess: string;
    renderType: any;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramIndicator = {
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
    analyticsPeriodBoundaries: D2AnalyticsPeriodBoundary[];
    analyticsType: "EVENT" | "ENROLLMENT";
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    decimals: number;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    filter: string;
    formName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    program: D2Program;
    programIndicatorGroups: D2ProgramIndicatorGroup[];
    publicAccess: string;
    shortName: string;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramRuleVariable = {
    access: D2Access;
    attribute: D2TrackedEntityAttribute;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    dataElement: D2DataElement;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    program: D2Program;
    programStage: D2ProgramStage;
    publicAccess: string;
    sourceType:
        | "DATAELEMENT_NEWEST_EVENT_PROGRAM_STAGE"
        | "DATAELEMENT_NEWEST_EVENT_PROGRAM"
        | "DATAELEMENT_CURRENT_EVENT"
        | "DATAELEMENT_PREVIOUS_EVENT"
        | "CALCULATED_VALUE"
        | "TEI_ATTRIBUTE";
    translations: D2Translation[];
    useCodeForOptionSet: boolean;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramIndicatorGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    programIndicators: D2ProgramIndicator[];
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2RelationshipType = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    bidirectional: boolean;
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    fromConstraint: any;
    fromToName: string;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    toConstraint: any;
    toFromName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramRuleAction = {
    access: D2Access;
    attribute: D2TrackedEntityAttribute;
    attributeValues: D2AttributeValue[];
    code: Id;
    content: string;
    created: string;
    data: string;
    dataElement: D2DataElement;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    location: string;
    name: string;
    option: D2Option;
    optionGroup: D2OptionGroup;
    programIndicator: D2ProgramIndicator;
    programRule: D2ProgramRule;
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
    programStage: D2ProgramStage;
    programStageSection: D2ProgramStageSection;
    publicAccess: string;
    templateUid: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramRule = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    condition: string;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    priority: number;
    program: D2Program;
    programRuleActions: D2ProgramRuleAction[];
    programStage: D2ProgramStage;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2MapView = {
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
    categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimension[];
    classes: number;
    code: Id;
    colorHigh: string;
    colorLow: string;
    colorScale: string;
    columnDimensions: string[];
    columns: any[];
    completedOnly: boolean;
    config: string;
    created: string;
    dataDimensionItems: any[];
    dataElementDimensions: D2TrackedEntityDataElementDimension[];
    dataElementGroupSetDimensions: D2DataElementGroupSetDimension[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: string;
    eventClustering: boolean;
    eventCoordinateField: string;
    eventPointColor: string;
    eventPointRadius: number;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: any[];
    followUp: boolean;
    hidden: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: D2Interpretation[];
    itemOrganisationUnitGroups: D2OrganisationUnitGroup[];
    labelFontColor: string;
    labelFontSize: string;
    labelFontStyle: string;
    labelFontWeight: string;
    labels: boolean;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    layer: string;
    legendSet: D2LegendSet;
    method: number;
    name: string;
    opacity: number;
    orgUnitField: string;
    organisationUnitGroupSet: D2OrganisationUnitGroupSet;
    organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimension[];
    organisationUnitLevels: number[];
    organisationUnitSelectionMode:
        | "SELECTED"
        | "CHILDREN"
        | "DESCENDANTS"
        | "ACCESSIBLE"
        | "CAPTURE"
        | "ALL";
    organisationUnits: D2OrganisationUnit[];
    parentGraph: string;
    parentGraphMap: D2Map;
    parentLevel: number;
    periods: any[];
    program: D2Program;
    programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimension[];
    programStage: D2ProgramStage;
    programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    publicAccess: string;
    radiusHigh: number;
    radiusLow: number;
    relatives: any;
    rows: any[];
    shortName: string;
    sortOrder: number;
    startDate: string;
    styleDataItem: object;
    subscribed: boolean;
    subscribers: string[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    trackedEntityType: D2TrackedEntityType;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
};

export type D2ValidationResult = {
    attributeOptionCombo: D2CategoryOptionCombo;
    created: string;
    dayInPeriod: number;
    id: string;
    leftsideValue: number;
    notificationSent: boolean;
    organisationUnit: D2OrganisationUnit;
    period: any;
    rightsideValue: number;
    validationRule: D2ValidationRule;
};

export type D2Document = {
    access: D2Access;
    attachment: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    contentType: string;
    created: string;
    displayName: string;
    external: boolean;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    url: string;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ReportTable = {
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
    categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimension[];
    code: Id;
    colSubTotals: boolean;
    colTotals: boolean;
    columnDimensions: string[];
    columns: any[];
    completedOnly: boolean;
    created: string;
    cumulative: boolean;
    dataDimensionItems: any[];
    dataElementDimensions: D2TrackedEntityDataElementDimension[];
    dataElementGroupSetDimensions: D2DataElementGroupSetDimension[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    endDate: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: any[];
    fontSize: "LARGE" | "NORMAL" | "SMALL";
    hideEmptyColumns: boolean;
    hideEmptyRows: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: D2Interpretation[];
    itemOrganisationUnitGroups: D2OrganisationUnitGroup[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendDisplayStyle: "FILL" | "TEXT";
    legendSet: D2LegendSet;
    measureCriteria: string;
    name: string;
    numberType: "VALUE" | "ROW_PERCENTAGE" | "COLUMN_PERCENTAGE";
    orgUnitField: string;
    organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimension[];
    organisationUnitLevels: number[];
    organisationUnits: D2OrganisationUnit[];
    parentGraphMap: D2Map;
    periods: any[];
    programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimension[];
    publicAccess: string;
    regression: boolean;
    relatives: any;
    reportParams: any;
    rowDimensions: string[];
    rowSubTotals: boolean;
    rowTotals: boolean;
    rows: any[];
    shortName: string;
    showDimensionLabels: boolean;
    showHierarchy: boolean;
    skipRounding: boolean;
    sortOrder: number;
    startDate: string;
    subscribed: boolean;
    subscribers: string[];
    subtitle: string;
    timeField: string;
    title: string;
    topLimit: number;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
};

export type D2ExternalMapLayer = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    attribution: string;
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    imageFormat: "PNG" | "JPG";
    lastUpdated: string;
    lastUpdatedBy: D2User;
    layers: string;
    legendSet: D2LegendSet;
    legendSetUrl: string;
    mapLayerPosition: "BASEMAP" | "OVERLAY";
    mapService: "WMS" | "TMS" | "XYZ";
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    url: string;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Chart = {
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
    categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimension[];
    code: Id;
    colorSet: D2ColorSet;
    columns: any[];
    completedOnly: boolean;
    created: string;
    cumulativeValues: boolean;
    dataDimensionItems: any[];
    dataElementDimensions: D2TrackedEntityDataElementDimension[];
    dataElementGroupSetDimensions: D2DataElementGroupSetDimension[];
    description: string;
    digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    domainAxisLabel: string;
    endDate: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    filterDimensions: string[];
    filters: any[];
    hideEmptyRowItems: "NONE" | "BEFORE_FIRST" | "AFTER_LAST" | "BEFORE_FIRST_AFTER_LAST" | "ALL";
    hideLegend: boolean;
    hideSubtitle: boolean;
    hideTitle: boolean;
    href: string;
    id: Id;
    interpretations: D2Interpretation[];
    itemOrganisationUnitGroups: D2OrganisationUnitGroup[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
    legendSet: D2LegendSet;
    name: string;
    noSpaceBetweenColumns: boolean;
    orgUnitField: string;
    organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimension[];
    organisationUnitLevels: number[];
    organisationUnits: D2OrganisationUnit[];
    parentGraphMap: D2Map;
    percentStackedValues: boolean;
    periods: any[];
    programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimension[];
    publicAccess: string;
    rangeAxisDecimals: number;
    rangeAxisLabel: string;
    rangeAxisMaxValue: number;
    rangeAxisMinValue: number;
    rangeAxisSteps: number;
    regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
    relatives: any;
    rows: any[];
    series: string;
    seriesItems: any[];
    shortName: string;
    showData: boolean;
    sortOrder: number;
    startDate: string;
    subscribed: boolean;
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
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userOrganisationUnit: boolean;
    userOrganisationUnitChildren: boolean;
    userOrganisationUnitGrandChildren: boolean;
    yearlySeries: string[];
};

export type D2Map = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    basemap: string;
    code: Id;
    created: string;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    interpretations: D2Interpretation[];
    lastUpdated: string;
    lastUpdatedBy: D2User;
    latitude: number;
    longitude: number;
    mapViews: D2MapView[];
    name: string;
    publicAccess: string;
    shortName: string;
    subscribed: boolean;
    subscribers: string[];
    title: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    zoom: number;
};

export type D2Report = {
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
    created: string;
    designContent: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    relatives: any;
    reportParams: any;
    reportTable: D2ReportTable;
    translations: D2Translation[];
    type: "JASPER_REPORT_TABLE" | "JASPER_JDBC" | "HTML";
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Predictor = {
    access: D2Access;
    annualSampleCount: number;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    generator: D2Expression;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    organisationUnitLevels: D2OrganisationUnitLevel[];
    output: D2DataElement;
    outputCombo: D2CategoryOptionCombo;
    periodType: string;
    predictorGroups: D2PredictorGroup[];
    publicAccess: string;
    sampleSkipTest: D2Expression;
    sequentialSampleCount: number;
    sequentialSkipCount: number;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2PredictorGroup = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    predictors: D2Predictor[];
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DashboardItem = {
    access: D2Access;
    appKey: string;
    attributeValues: D2AttributeValue[];
    chart: D2Chart;
    code: Id;
    contentCount: number;
    created: string;
    displayName: string;
    eventChart: D2EventChart;
    eventReport: D2EventReport;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    height: number;
    href: string;
    id: Id;
    interpretationCount: number;
    interpretationLikeCount: number;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    map: D2Map;
    messages: boolean;
    name: string;
    publicAccess: string;
    reportTable: D2ReportTable;
    reports: D2Report[];
    resources: D2Document[];
    shape: "NORMAL" | "DOUBLE_WIDTH" | "FULL_WIDTH";
    text: string;
    translations: D2Translation[];
    type:
        | "CHART"
        | "EVENT_CHART"
        | "MAP"
        | "REPORT_TABLE"
        | "EVENT_REPORT"
        | "USERS"
        | "REPORTS"
        | "RESOURCES"
        | "TEXT"
        | "MESSAGES"
        | "APP";
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    users: D2User[];
    width: number;
    x: number;
    y: number;
};

export type D2Dashboard = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    dashboardItems: D2DashboardItem[];
    description: string;
    displayDescription: string;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    itemCount: number;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2PushAnalysis = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    dashboard: D2Dashboard;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    message: string;
    name: string;
    publicAccess: string;
    recipientUserGroups: D2UserGroup[];
    title: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2KeyJsonValue = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    key: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    namespace: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    value: string;
};

export type D2UserCredentials = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    catDimensionConstraints: D2Category[];
    code: Id;
    cogsDimensionConstraints: D2CategoryOptionGroupSet[];
    created: string;
    disabled: boolean;
    displayName: string;
    externalAccess: boolean;
    externalAuth: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    invitation: boolean;
    lastLogin: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    ldapId: string;
    name: string;
    openId: string;
    password: string;
    passwordLastUpdated: string;
    publicAccess: string;
    selfRegistered: boolean;
    translations: D2Translation[];
    twoFA: boolean;
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
    userInfo: D2User;
    userRoles: D2UserAuthorityGroup[];
    username: string;
};

export type D2AnalyticsPeriodBoundary = {
    access: D2Access;
    analyticsPeriodBoundaryType:
        | "BEFORE_START_OF_REPORTING_PERIOD"
        | "BEFORE_END_OF_REPORTING_PERIOD"
        | "AFTER_START_OF_REPORTING_PERIOD"
        | "AFTER_END_OF_REPORTING_PERIOD";
    attributeValues: D2AttributeValue[];
    boundaryTarget: string;
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    offsetPeriodType: string;
    offsetPeriods: number;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2UserAccess = {
    access: string;
    displayName: string;
    id: string;
    userUid: string;
};

export type D2Relationship = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    formName: string;
    from: any;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    relationshipType: D2RelationshipType;
    style: D2Style;
    to: any;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataElementGroupSetDimension = {
    dataElementGroups: D2DataElementGroup[];
    dimension: D2DataElementGroupSet;
};

export type D2InterpretationComment = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    mentions: any[];
    name: string;
    publicAccess: string;
    text: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2MetadataVersion = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    hashCode: string;
    href: string;
    id: Id;
    importDate: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    type: "BEST_EFFORT" | "ATOMIC";
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataInputPeriod = {
    closingDate: string;
    openingDate: string;
    period: any;
};

export type D2TrackedEntityInstance = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    createdAtClient: string;
    deleted: boolean;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    geometry: D2Geometry;
    href: string;
    id: Id;
    inactive: boolean;
    lastUpdated: string;
    lastUpdatedAtClient: string;
    lastUpdatedBy: D2User;
    name: string;
    organisationUnit: D2OrganisationUnit;
    programInstances: D2ProgramInstance[];
    programOwners: any[];
    publicAccess: string;
    relationshipItems: any[];
    trackedEntityAttributeValues: any[];
    trackedEntityType: D2TrackedEntityType;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2TrackedEntityInstanceFilter = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    enrollmentCreatedPeriod: any;
    enrollmentStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
    eventFilters: any[];
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    followup: boolean;
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    program: D2Program;
    publicAccess: string;
    sortOrder: number;
    style: D2Style;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramStageInstanceFilter = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    displayName: string;
    eventQueryCriteria: any;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    program: Id;
    programStage: Id;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2OrganisationUnitGroupSetDimension = {
    dimension: D2OrganisationUnitGroupSet;
    organisationUnitGroups: D2OrganisationUnitGroup[];
};

export type D2UserGroupAccess = {
    access: string;
    displayName: string;
    id: string;
    userGroupUid: string;
};

export type D2ProgramStageInstance = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataSetElement = {
    categoryCombo: D2CategoryCombo;
    dataElement: D2DataElement;
    dataSet: D2DataSet;
};

export type D2Color = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    color: string;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2CategoryDimension = {
    categoryOptions: D2CategoryOption[];
    dimension: D2Category;
};

export type D2ProgramTrackedEntityAttributeDimensionItem = {
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
    attribute: D2TrackedEntityAttribute;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    program: D2Program;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2DataElementOperand = {
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
    attributeOptionCombo: D2CategoryOptionCombo;
    attributeValues: D2AttributeValue[];
    categoryOptionCombo: D2CategoryOptionCombo;
    code: Id;
    created: string;
    dataElement: D2DataElement;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2MinMaxDataElement = {
    dataElement: D2DataElement;
    generated: boolean;
    max: number;
    min: number;
    optionCombo: D2CategoryOptionCombo;
    source: D2OrganisationUnit;
};

export type D2Icon = {};

export type D2ProgramInstance = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    createdAtClient: string;
    deleted: boolean;
    displayName: string;
    endDate: string;
    enrollmentDate: string;
    entityInstance: D2TrackedEntityInstance;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    followup: boolean;
    href: string;
    id: Id;
    incidentDate: string;
    lastUpdated: string;
    lastUpdatedAtClient: string;
    lastUpdatedBy: D2User;
    messageConversations: D2MessageConversation[];
    name: string;
    organisationUnit: D2OrganisationUnit;
    program: D2Program;
    programStageInstances: D2ProgramStageInstance[];
    publicAccess: string;
    relationshipItems: any[];
    status: "ACTIVE" | "COMPLETED" | "CANCELLED";
    storedBy: string;
    trackedEntityComments: any[];
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2TrackedEntityProgramIndicatorDimension = {
    filter: string;
    legendSet: D2LegendSet;
    programIndicator: D2ProgramIndicator;
};

export type D2CategoryOptionGroupSetDimension = {
    categoryOptionGroups: D2CategoryOptionGroup[];
    dimension: D2CategoryOptionGroupSet;
};

export type D2Legend = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    color: string;
    created: string;
    displayName: string;
    endValue: number;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    image: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    startValue: number;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2Interpretation = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    chart: D2Chart;
    code: Id;
    comments: D2InterpretationComment[];
    created: string;
    dataSet: D2DataSet;
    displayName: string;
    eventChart: D2EventChart;
    eventReport: D2EventReport;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    likedBy: D2User[];
    likes: number;
    map: D2Map;
    mentions: any[];
    name: string;
    organisationUnit: D2OrganisationUnit;
    period: any;
    publicAccess: string;
    reportTable: D2ReportTable;
    text: string;
    translations: D2Translation[];
    type: "REPORT_TABLE" | "CHART" | "MAP" | "EVENT_REPORT" | "EVENT_CHART" | "DATASET_REPORT";
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2TrackedEntityDataElementDimension = {
    dataElement: D2DataElement;
    filter: string;
    legendSet: D2LegendSet;
};

export type D2ReportingRate = {
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
    created: string;
    dataSet: D2DataSet;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
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
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramStageDataElement = {
    access: D2Access;
    allowFutureDate: boolean;
    allowProvidedElsewhere: boolean;
    attributeValues: D2AttributeValue[];
    code: Id;
    compulsory: boolean;
    created: string;
    dataElement: D2DataElement;
    displayInReports: boolean;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    programStage: D2ProgramStage;
    publicAccess: string;
    renderOptionsAsRadio: boolean;
    renderType: any;
    skipSynchronization: boolean;
    sortOrder: number;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramTrackedEntityAttribute = {
    access: D2Access;
    allowFutureDate: boolean;
    attribute: D2TrackedEntityAttribute;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayInList: boolean;
    displayName: string;
    displayShortName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    mandatory: boolean;
    name: string;
    program: D2Program;
    programTrackedEntityAttributeGroups: D2ProgramTrackedEntityAttributeGroup[];
    publicAccess: string;
    renderOptionsAsRadio: boolean;
    renderType: any;
    searchable: boolean;
    sortOrder: number;
    translations: D2Translation[];
    user: D2User;
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
};

export type D2FileResource = {
    access: D2Access;
    attributeValues: D2AttributeValue[];
    code: Id;
    contentLength: string;
    contentMd5: string;
    contentType: string;
    created: string;
    displayName: string;
    domain: "DATA_VALUE" | "PUSH_ANALYSIS" | "DOCUMENT" | "MESSAGE_ATTACHMENT" | "USER_AVATAR";
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    name: string;
    publicAccess: string;
    storageStatus: "NONE" | "PENDING" | "FAILED" | "STORED";
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userGroupAccesses: D2UserGroupAccess[];
};

export type D2ProgramDataElementDimensionItem = {
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
    created: string;
    dataElement: D2DataElement;
    description: string;
    dimensionItem: string;
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
    favorite: boolean;
    favorites: string[];
    href: string;
    id: Id;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    legendSet: D2LegendSet;
    legendSets: D2LegendSet[];
    name: string;
    program: D2Program;
    publicAccess: string;
    shortName: string;
    translations: D2Translation[];
    user: D2User;
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
};

export type D2MessageConversation = {
    access: D2Access;
    assignee: D2User;
    attributeValues: D2AttributeValue[];
    code: Id;
    created: string;
    displayName: string;
    externalAccess: boolean;
    favorite: boolean;
    favorites: string[];
    followUp: boolean;
    href: string;
    id: Id;
    lastMessage: string;
    lastSender: D2User;
    lastSenderFirstname: string;
    lastSenderSurname: string;
    lastUpdated: string;
    lastUpdatedBy: D2User;
    messageCount: number;
    messageType: "PRIVATE" | "SYSTEM" | "VALIDATION_RESULT" | "TICKET";
    messages: any[];
    name: string;
    priority: "NONE" | "LOW" | "MEDIUM" | "HIGH";
    publicAccess: string;
    read: boolean;
    status: "NONE" | "OPEN" | "PENDING" | "INVALID" | "SOLVED";
    subject: string;
    translations: D2Translation[];
    user: D2User;
    userAccesses: D2UserAccess[];
    userFirstname: string;
    userGroupAccesses: D2UserGroupAccess[];
    userMessages: any[];
    userSurname: string;
};

export interface D2AttributeValueSchema {
    model: D2AttributeValue;
    fields: { attribute: D2AttributeSchema; created: string; lastUpdated: string; value: string };
    fieldPresets: {
        $all: Preset<D2AttributeValue, keyof D2AttributeValue>;
        $identifiable: Preset<D2AttributeValue, FieldPresets["identifiable"]>;
        $nameable: Preset<D2AttributeValue, FieldPresets["nameable"]>;
        $persisted: Preset<D2AttributeValue, "lastUpdated" | "attribute" | "value" | "created">;
        $owner: Preset<D2AttributeValue, "lastUpdated" | "attribute" | "value" | "created">;
    };
}

export interface D2AttributeSchema {
    model: D2Attribute;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        categoryAttribute: boolean;
        categoryOptionAttribute: boolean;
        categoryOptionComboAttribute: boolean;
        categoryOptionGroupAttribute: boolean;
        categoryOptionGroupSetAttribute: boolean;
        code: Id;
        constantAttribute: boolean;
        created: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        indicatorAttribute: boolean;
        indicatorGroupAttribute: boolean;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSetAttribute: boolean;
        mandatory: boolean;
        name: string;
        optionAttribute: boolean;
        optionSet: D2OptionSetSchema;
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
        unique: boolean;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userAttribute: boolean;
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2Attribute, keyof D2Attribute>;
        $identifiable: Preset<D2Attribute, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Attribute, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Attribute,
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
            | "id"
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
            | "optionAttribute"
        >;
        $owner: Preset<
            D2Attribute,
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
            | "id"
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
            | "optionAttribute"
        >;
    };
}

export interface D2UserAuthorityGroupSchema {
    model: D2UserAuthorityGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        authorities: string[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        users: D2UserSchema[];
    };
    fieldPresets: {
        $all: Preset<D2UserAuthorityGroup, keyof D2UserAuthorityGroup>;
        $identifiable: Preset<D2UserAuthorityGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2UserAuthorityGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2UserAuthorityGroup,
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2UserAuthorityGroup,
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
            | "id"
            | "user"
        >;
    };
}

export interface D2UserSchema {
    model: D2User;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        avatar: D2FileResourceSchema;
        birthday: string;
        code: Id;
        created: string;
        dataViewOrganisationUnits: D2OrganisationUnitSchema[];
        displayName: string;
        education: string;
        email: string;
        employer: string;
        externalAccess: boolean;
        facebookMessenger: string;
        favorite: boolean;
        favorites: string[];
        firstName: string;
        gender: string;
        href: string;
        id: Id;
        interests: string;
        introduction: string;
        jobTitle: string;
        languages: string;
        lastCheckedInterpretations: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        nationality: string;
        organisationUnits: D2OrganisationUnitSchema[];
        phoneNumber: string;
        publicAccess: string;
        skype: string;
        surname: string;
        teiSearchOrganisationUnits: D2OrganisationUnitSchema[];
        telegram: string;
        translations: D2Translation[];
        twitter: string;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userCredentials: D2UserCredentialsSchema;
        userGroupAccesses: D2UserGroupAccessSchema[];
        userGroups: D2UserGroupSchema[];
        welcomeMessage: string;
        whatsApp: string;
    };
    fieldPresets: {
        $all: Preset<D2User, keyof D2User>;
        $identifiable: Preset<D2User, FieldPresets["identifiable"]>;
        $nameable: Preset<D2User, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2User,
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
            | "id"
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
            | "userGroups"
            | "firstName"
            | "phoneNumber"
            | "nationality"
            | "interests"
        >;
        $owner: Preset<
            D2User,
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
            | "id"
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
            | "interests"
        >;
    };
}

export interface D2UserGroupSchema {
    model: D2UserGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        managedByGroups: D2UserGroupSchema[];
        managedGroups: D2UserGroupSchema[];
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        users: D2UserSchema[];
    };
    fieldPresets: {
        $all: Preset<D2UserGroup, keyof D2UserGroup>;
        $identifiable: Preset<D2UserGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2UserGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2UserGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "managedByGroups"
            | "attributeValues"
            | "users"
            | "managedGroups"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2UserGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "users"
            | "managedGroups"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
    };
}

export interface D2ExternalFileResourceSchema {
    model: D2ExternalFileResource;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ExternalFileResource, keyof D2ExternalFileResource>;
        $identifiable: Preset<D2ExternalFileResource, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ExternalFileResource, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ExternalFileResource,
            "lastUpdatedBy" | "code" | "created" | "lastUpdated" | "id"
        >;
        $owner: Preset<
            D2ExternalFileResource,
            "lastUpdatedBy" | "code" | "created" | "lastUpdated" | "id"
        >;
    };
}

export interface D2SqlViewSchema {
    model: D2SqlView;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        cacheStrategy:
            | "NO_CACHE"
            | "CACHE_15_MINUTES"
            | "CACHE_30_MINUTES"
            | "CACHE_1_HOUR"
            | "CACHE_6AM_TOMORROW"
            | "CACHE_TWO_WEEKS"
            | "RESPECT_SYSTEM_SETTING";
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        sqlQuery: string;
        translations: D2Translation[];
        type: "VIEW" | "MATERIALIZED_VIEW" | "QUERY";
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2SqlView, keyof D2SqlView>;
        $identifiable: Preset<D2SqlView, FieldPresets["identifiable"]>;
        $nameable: Preset<D2SqlView, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2SqlView,
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2SqlView,
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
            | "id"
            | "user"
        >;
    };
}

export interface D2ConstantSchema {
    model: D2Constant;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        value: number;
    };
    fieldPresets: {
        $all: Preset<D2Constant, keyof D2Constant>;
        $identifiable: Preset<D2Constant, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Constant, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Constant,
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "value"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
        $owner: Preset<
            D2Constant,
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "value"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
    };
}

export interface D2OAuth2ClientSchema {
    model: D2OAuth2Client;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        cid: Id;
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        grantTypes: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        redirectUris: string[];
        secret: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OAuth2Client, keyof D2OAuth2Client>;
        $identifiable: Preset<D2OAuth2Client, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OAuth2Client, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OAuth2Client,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "secret"
            | "redirectUris"
            | "lastUpdated"
            | "grantTypes"
            | "name"
            | "id"
            | "cid"
        >;
        $owner: Preset<
            D2OAuth2Client,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "secret"
            | "redirectUris"
            | "lastUpdated"
            | "grantTypes"
            | "name"
            | "id"
            | "cid"
        >;
    };
}

export interface D2JobConfigurationSchema {
    model: D2JobConfiguration;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        configurable: boolean;
        continuousExecution: boolean;
        created: string;
        cronExpression: string;
        displayName: string;
        enabled: boolean;
        externalAccess: boolean;
        favorite: boolean;
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
        lastExecuted: string;
        lastExecutedStatus:
            | "RUNNING"
            | "COMPLETED"
            | "STOPPED"
            | "SCHEDULED"
            | "DISABLED"
            | "FAILED";
        lastRuntimeExecution: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        leaderOnlyJob: boolean;
        name: string;
        nextExecutionTime: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userUid: string;
    };
    fieldPresets: {
        $all: Preset<D2JobConfiguration, keyof D2JobConfiguration>;
        $identifiable: Preset<D2JobConfiguration, FieldPresets["identifiable"]>;
        $nameable: Preset<D2JobConfiguration, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2JobConfiguration,
            | "jobStatus"
            | "code"
            | "enabled"
            | "leaderOnlyJob"
            | "lastUpdated"
            | "continuousExecution"
            | "id"
            | "jobType"
            | "lastUpdatedBy"
            | "nextExecutionTime"
            | "created"
            | "cronExpression"
            | "lastRuntimeExecution"
            | "lastExecutedStatus"
            | "name"
            | "jobParameters"
            | "lastExecuted"
        >;
        $owner: Preset<
            D2JobConfiguration,
            | "jobStatus"
            | "code"
            | "enabled"
            | "leaderOnlyJob"
            | "lastUpdated"
            | "continuousExecution"
            | "id"
            | "jobType"
            | "lastUpdatedBy"
            | "nextExecutionTime"
            | "created"
            | "cronExpression"
            | "lastRuntimeExecution"
            | "lastExecutedStatus"
            | "name"
            | "jobParameters"
            | "lastExecuted"
        >;
    };
}

export interface D2OptionSchema {
    model: D2Option;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: string;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        formName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        optionSet: D2OptionSetSchema;
        publicAccess: string;
        sortOrder: number;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Option, keyof D2Option>;
        $identifiable: Preset<D2Option, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Option, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Option,
            | "code"
            | "description"
            | "lastUpdated"
            | "optionSet"
            | "translations"
            | "formName"
            | "id"
            | "created"
            | "attributeValues"
            | "sortOrder"
            | "name"
            | "style"
        >;
        $owner: Preset<
            D2Option,
            | "code"
            | "description"
            | "lastUpdated"
            | "optionSet"
            | "translations"
            | "formName"
            | "id"
            | "created"
            | "attributeValues"
            | "sortOrder"
            | "name"
            | "style"
        >;
    };
}

export interface D2OptionSetSchema {
    model: D2OptionSet;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        options: D2OptionSchema[];
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2OptionSet, keyof D2OptionSet>;
        $identifiable: Preset<D2OptionSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OptionSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OptionSet,
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2OptionSet,
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
            | "id"
            | "user"
        >;
    };
}

export interface D2OptionGroupSetSchema {
    model: D2OptionGroupSet;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataDimension: boolean;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        description: string;
        dimension: string;
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
        favorite: boolean;
        favorites: string[];
        filter: string;
        href: string;
        id: Id;
        items: any[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        name: string;
        optionGroups: D2OptionGroupSchema[];
        optionSet: D2OptionSetSchema;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OptionGroupSet, keyof D2OptionGroupSet>;
        $identifiable: Preset<D2OptionGroupSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OptionGroupSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OptionGroupSet,
            | "code"
            | "publicAccess"
            | "description"
            | "optionGroups"
            | "lastUpdated"
            | "optionSet"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
        $owner: Preset<
            D2OptionGroupSet,
            | "code"
            | "publicAccess"
            | "description"
            | "optionGroups"
            | "lastUpdated"
            | "optionSet"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
    };
}

export interface D2OptionGroupSchema {
    model: D2OptionGroup;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        optionSet: D2OptionSetSchema;
        options: D2OptionSchema[];
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OptionGroup, keyof D2OptionGroup>;
        $identifiable: Preset<D2OptionGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OptionGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OptionGroup,
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "optionSet"
            | "translations"
            | "options"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
        $owner: Preset<
            D2OptionGroup,
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "optionSet"
            | "translations"
            | "options"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
    };
}

export interface D2LegendSetSchema {
    model: D2LegendSet;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legends: D2LegendSchema[];
        name: string;
        publicAccess: string;
        symbolizer: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2LegendSet, keyof D2LegendSet>;
        $identifiable: Preset<D2LegendSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2LegendSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2LegendSet,
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2LegendSet,
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
            | "id"
            | "user"
        >;
    };
}

export interface D2ColorSetSchema {
    model: D2ColorSet;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        colors: D2ColorSchema[];
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ColorSet, keyof D2ColorSet>;
        $identifiable: Preset<D2ColorSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ColorSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ColorSet,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "colors"
            | "lastUpdated"
            | "translations"
            | "name"
            | "id"
        >;
        $owner: Preset<
            D2ColorSet,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "colors"
            | "lastUpdated"
            | "translations"
            | "name"
            | "id"
        >;
    };
}

export interface D2OrganisationUnitSchema {
    model: D2OrganisationUnit;
    fields: {
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
        ancestors: D2OrganisationUnitSchema[];
        attributeValues: D2AttributeValueSchema[];
        children: D2OrganisationUnitSchema[];
        closedDate: string;
        code: Id;
        comment: string;
        contactPerson: string;
        created: string;
        dataSets: D2DataSetSchema[];
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        geometry: D2Geometry;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        leaf: boolean;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        level: number;
        memberCount: number;
        name: string;
        openingDate: string;
        organisationUnitGroups: D2OrganisationUnitGroupSchema[];
        parent: D2OrganisationUnitSchema;
        path: string;
        phoneNumber: string;
        programs: D2ProgramSchema[];
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        type: string;
        url: string;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        users: D2UserSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OrganisationUnit, keyof D2OrganisationUnit>;
        $identifiable: Preset<D2OrganisationUnit, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OrganisationUnit, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OrganisationUnit,
            | "parent"
            | "path"
            | "lastUpdated"
            | "children"
            | "translations"
            | "id"
            | "organisationUnitGroups"
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
            | "user"
        >;
        $owner: Preset<
            D2OrganisationUnit,
            | "parent"
            | "path"
            | "lastUpdated"
            | "translations"
            | "id"
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
            | "user"
        >;
    };
}

export interface D2OrganisationUnitLevelSchema {
    model: D2OrganisationUnitLevel;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        level: number;
        name: string;
        offlineLevels: number;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OrganisationUnitLevel, keyof D2OrganisationUnitLevel>;
        $identifiable: Preset<D2OrganisationUnitLevel, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OrganisationUnitLevel, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OrganisationUnitLevel,
            | "lastUpdatedBy"
            | "offlineLevels"
            | "code"
            | "level"
            | "created"
            | "lastUpdated"
            | "translations"
            | "name"
            | "id"
        >;
        $owner: Preset<
            D2OrganisationUnitLevel,
            | "lastUpdatedBy"
            | "offlineLevels"
            | "code"
            | "level"
            | "created"
            | "lastUpdated"
            | "translations"
            | "name"
            | "id"
        >;
    };
}

export interface D2OrganisationUnitGroupSchema {
    model: D2OrganisationUnitGroup;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        color: string;
        created: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
        geometry: D2Geometry;
        groupSets: D2OrganisationUnitGroupSetSchema[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        organisationUnits: D2OrganisationUnitSchema[];
        publicAccess: string;
        shortName: string;
        symbol: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OrganisationUnitGroup, keyof D2OrganisationUnitGroup>;
        $identifiable: Preset<D2OrganisationUnitGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OrganisationUnitGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OrganisationUnitGroup,
            | "symbol"
            | "code"
            | "color"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "organisationUnits"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "groupSets"
            | "userAccesses"
            | "name"
            | "geometry"
            | "shortName"
            | "user"
        >;
        $owner: Preset<
            D2OrganisationUnitGroup,
            | "symbol"
            | "code"
            | "color"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "organisationUnits"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "geometry"
            | "shortName"
            | "user"
        >;
    };
}

export interface D2OrganisationUnitGroupSetSchema {
    model: D2OrganisationUnitGroupSet;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        compulsory: boolean;
        created: string;
        dataDimension: boolean;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        description: string;
        dimension: string;
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
        favorite: boolean;
        favorites: string[];
        filter: string;
        href: string;
        id: Id;
        includeSubhierarchyInAnalytics: boolean;
        items: any[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        name: string;
        organisationUnitGroups: D2OrganisationUnitGroupSchema[];
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2OrganisationUnitGroupSet, keyof D2OrganisationUnitGroupSet>;
        $identifiable: Preset<D2OrganisationUnitGroupSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OrganisationUnitGroupSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OrganisationUnitGroupSet,
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
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
            | "user"
        >;
        $owner: Preset<
            D2OrganisationUnitGroupSet,
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
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
            | "user"
        >;
    };
}

export interface D2CategoryOptionSchema {
    model: D2CategoryOption;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categories: D2CategorySchema[];
        categoryOptionCombos: D2CategoryOptionComboSchema[];
        categoryOptionGroups: D2CategoryOptionGroupSchema[];
        code: Id;
        created: string;
        description: string;
        dimensionItem: string;
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
        endDate: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        isDefault: boolean;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        organisationUnits: D2OrganisationUnitSchema[];
        publicAccess: string;
        shortName: string;
        startDate: string;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2CategoryOption, keyof D2CategoryOption>;
        $identifiable: Preset<D2CategoryOption, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryOption, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2CategoryOption,
            | "code"
            | "endDate"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "categories"
            | "organisationUnits"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "categoryOptionCombos"
            | "categoryOptionGroups"
            | "userAccesses"
            | "name"
            | "style"
            | "shortName"
            | "user"
            | "startDate"
        >;
        $owner: Preset<
            D2CategoryOption,
            | "code"
            | "endDate"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
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
            | "startDate"
        >;
    };
}

export interface D2CategoryOptionGroupSchema {
    model: D2CategoryOptionGroup;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryOptions: D2CategoryOptionSchema[];
        code: Id;
        created: string;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        groupSets: D2CategoryOptionGroupSetSchema[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2CategoryOptionGroup, keyof D2CategoryOptionGroup>;
        $identifiable: Preset<D2CategoryOptionGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryOptionGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2CategoryOptionGroup,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "categoryOptions"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "groupSets"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
        $owner: Preset<
            D2CategoryOptionGroup,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "categoryOptions"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
    };
}

export interface D2CategoryOptionGroupSetSchema {
    model: D2CategoryOptionGroupSet;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryOptionGroups: D2CategoryOptionGroupSchema[];
        code: Id;
        created: string;
        dataDimension: boolean;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        description: string;
        dimension: string;
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
        favorite: boolean;
        favorites: string[];
        filter: string;
        href: string;
        id: Id;
        items: any[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2CategoryOptionGroupSet, keyof D2CategoryOptionGroupSet>;
        $identifiable: Preset<D2CategoryOptionGroupSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryOptionGroupSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2CategoryOptionGroupSet,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "categoryOptionGroups"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
        $owner: Preset<
            D2CategoryOptionGroupSet,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "categoryOptionGroups"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
    };
}

export interface D2CategorySchema {
    model: D2Category;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryCombos: D2CategoryComboSchema[];
        categoryOptions: D2CategoryOptionSchema[];
        code: Id;
        created: string;
        dataDimension: boolean;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        description: string;
        dimension: string;
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
        favorite: boolean;
        favorites: string[];
        filter: string;
        href: string;
        id: Id;
        items: any[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Category, keyof D2Category>;
        $identifiable: Preset<D2Category, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Category, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Category,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "categoryCombos"
            | "id"
            | "categoryOptions"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
        $owner: Preset<
            D2Category,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "categoryOptions"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
    };
}

export interface D2CategoryComboSchema {
    model: D2CategoryCombo;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        categories: D2CategorySchema[];
        categoryOptionCombos: D2CategoryOptionComboSchema[];
        code: Id;
        created: string;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        isDefault: boolean;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        skipTotal: boolean;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2CategoryCombo, keyof D2CategoryCombo>;
        $identifiable: Preset<D2CategoryCombo, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryCombo, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2CategoryCombo,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "categories"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "categoryOptionCombos"
            | "userAccesses"
            | "name"
            | "skipTotal"
            | "user"
        >;
        $owner: Preset<
            D2CategoryCombo,
            | "dataDimensionType"
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "categories"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "userAccesses"
            | "name"
            | "skipTotal"
            | "user"
        >;
    };
}

export interface D2CategoryOptionComboSchema {
    model: D2CategoryOptionCombo;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryCombo: D2CategoryComboSchema;
        categoryOptions: D2CategoryOptionSchema[];
        code: Id;
        created: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        ignoreApproval: boolean;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2CategoryOptionCombo, keyof D2CategoryOptionCombo>;
        $identifiable: Preset<D2CategoryOptionCombo, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryOptionCombo, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2CategoryOptionCombo,
            | "code"
            | "lastUpdated"
            | "ignoreApproval"
            | "categoryCombo"
            | "translations"
            | "id"
            | "categoryOptions"
            | "lastUpdatedBy"
            | "created"
            | "attributeValues"
            | "name"
        >;
        $owner: Preset<
            D2CategoryOptionCombo,
            | "code"
            | "lastUpdated"
            | "ignoreApproval"
            | "categoryCombo"
            | "translations"
            | "id"
            | "categoryOptions"
            | "lastUpdatedBy"
            | "created"
            | "attributeValues"
            | "name"
        >;
    };
}

export interface D2DataElementSchema {
    model: D2DataElement;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryCombo: D2CategoryComboSchema;
        code: Id;
        commentOptionSet: D2OptionSetSchema;
        created: string;
        dataElementGroups: D2DataElementGroupSchema[];
        dataSetElements: D2DataSetElementSchema[];
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        fieldMask: string;
        formName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        optionSet: D2OptionSetSchema;
        optionSetValue: boolean;
        publicAccess: string;
        shortName: string;
        style: D2Style;
        translations: D2Translation[];
        url: string;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2DataElement, keyof D2DataElement>;
        $identifiable: Preset<D2DataElement, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataElement, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataElement,
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
            | "id"
            | "fieldMask"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "dataElementGroups"
            | "attributeValues"
            | "zeroIsSignificant"
            | "url"
            | "userAccesses"
            | "name"
            | "legendSets"
            | "aggregationLevels"
            | "style"
            | "shortName"
            | "user"
        >;
        $owner: Preset<
            D2DataElement,
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
            | "id"
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
            | "user"
        >;
    };
}

export interface D2DataElementGroupSchema {
    model: D2DataElementGroup;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataElements: D2DataElementSchema[];
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        groupSets: D2DataElementGroupSetSchema[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataElementGroup, keyof D2DataElementGroup>;
        $identifiable: Preset<D2DataElementGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataElementGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataElementGroup,
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "dataElements"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "groupSets"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
        $owner: Preset<
            D2DataElementGroup,
            | "code"
            | "publicAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "dataElements"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "userAccesses"
            | "name"
            | "shortName"
            | "user"
        >;
    };
}

export interface D2DataElementGroupSetSchema {
    model: D2DataElementGroupSet;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        compulsory: boolean;
        created: string;
        dataDimension: boolean;
        dataDimensionType: "DISAGGREGATION" | "ATTRIBUTE";
        dataElementGroups: D2DataElementGroupSchema[];
        description: string;
        dimension: string;
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
        favorite: boolean;
        favorites: string[];
        filter: string;
        href: string;
        id: Id;
        items: any[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataElementGroupSet, keyof D2DataElementGroupSet>;
        $identifiable: Preset<D2DataElementGroupSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataElementGroupSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataElementGroupSet,
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "dataElementGroups"
            | "compulsory"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
        $owner: Preset<
            D2DataElementGroupSet,
            | "code"
            | "publicAccess"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "dataElementGroups"
            | "compulsory"
            | "userAccesses"
            | "name"
            | "dataDimension"
            | "user"
        >;
    };
}

export interface D2IndicatorTypeSchema {
    model: D2IndicatorType;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        factor: number;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        number: boolean;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2IndicatorType, keyof D2IndicatorType>;
        $identifiable: Preset<D2IndicatorType, FieldPresets["identifiable"]>;
        $nameable: Preset<D2IndicatorType, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2IndicatorType,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "lastUpdated"
            | "number"
            | "translations"
            | "name"
            | "id"
            | "factor"
        >;
        $owner: Preset<
            D2IndicatorType,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "lastUpdated"
            | "number"
            | "translations"
            | "name"
            | "id"
            | "factor"
        >;
    };
}

export interface D2AnalyticsTableHookSchema {
    model: D2AnalyticsTableHook;
    fields: {
        access: D2Access;
        analyticsTableType:
            | "DATA_VALUE"
            | "COMPLETENESS"
            | "COMPLETENESS_TARGET"
            | "ORG_UNIT_TARGET"
            | "EVENT"
            | "ENROLLMENT"
            | "VALIDATION_RESULT";
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
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
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2AnalyticsTableHook, keyof D2AnalyticsTableHook>;
        $identifiable: Preset<D2AnalyticsTableHook, FieldPresets["identifiable"]>;
        $nameable: Preset<D2AnalyticsTableHook, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2AnalyticsTableHook,
            | "phase"
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "analyticsTableType"
            | "sql"
            | "lastUpdated"
            | "name"
            | "resourceTableType"
            | "id"
        >;
        $owner: Preset<
            D2AnalyticsTableHook,
            | "phase"
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "analyticsTableType"
            | "sql"
            | "lastUpdated"
            | "name"
            | "resourceTableType"
            | "id"
        >;
    };
}

export interface D2IndicatorSchema {
    model: D2Indicator;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataSets: D2DataSetSchema[];
        decimals: number;
        denominator: string;
        denominatorDescription: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        formName: string;
        href: string;
        id: Id;
        indicatorGroups: D2IndicatorGroupSchema[];
        indicatorType: D2IndicatorTypeSchema;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        numerator: string;
        numeratorDescription: string;
        publicAccess: string;
        shortName: string;
        style: D2Style;
        translations: D2Translation[];
        url: string;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Indicator, keyof D2Indicator>;
        $identifiable: Preset<D2Indicator, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Indicator, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Indicator,
            | "code"
            | "publicAccess"
            | "aggregateExportCategoryOptionCombo"
            | "description"
            | "lastUpdated"
            | "denominatorDescription"
            | "indicatorType"
            | "translations"
            | "formName"
            | "id"
            | "numeratorDescription"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "indicatorGroups"
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
            | "aggregateExportAttributeOptionCombo"
        >;
        $owner: Preset<
            D2Indicator,
            | "code"
            | "publicAccess"
            | "aggregateExportCategoryOptionCombo"
            | "description"
            | "lastUpdated"
            | "denominatorDescription"
            | "indicatorType"
            | "translations"
            | "formName"
            | "id"
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
            | "aggregateExportAttributeOptionCombo"
        >;
    };
}

export interface D2IndicatorGroupSchema {
    model: D2IndicatorGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        groupSet: D2IndicatorGroupSetSchema;
        href: string;
        id: Id;
        indicators: D2IndicatorSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2IndicatorGroup, keyof D2IndicatorGroup>;
        $identifiable: Preset<D2IndicatorGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2IndicatorGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2IndicatorGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "indicators"
            | "groupSet"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2IndicatorGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "indicators"
            | "groupSet"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
    };
}

export interface D2IndicatorGroupSetSchema {
    model: D2IndicatorGroupSet;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        compulsory: boolean;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        indicatorGroups: D2IndicatorGroupSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2IndicatorGroupSet, keyof D2IndicatorGroupSet>;
        $identifiable: Preset<D2IndicatorGroupSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2IndicatorGroupSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2IndicatorGroupSet,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "description"
            | "indicatorGroups"
            | "lastUpdated"
            | "compulsory"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2IndicatorGroupSet,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "description"
            | "indicatorGroups"
            | "lastUpdated"
            | "compulsory"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
    };
}

export interface D2DataEntryFormSchema {
    model: D2DataEntryForm;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        format: number;
        href: string;
        htmlCode: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        style: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataEntryForm, keyof D2DataEntryForm>;
        $identifiable: Preset<D2DataEntryForm, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataEntryForm, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataEntryForm,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "htmlCode"
            | "format"
            | "lastUpdated"
            | "translations"
            | "name"
            | "style"
            | "id"
        >;
        $owner: Preset<
            D2DataEntryForm,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "htmlCode"
            | "format"
            | "lastUpdated"
            | "translations"
            | "name"
            | "style"
            | "id"
        >;
    };
}

export interface D2DataSetSchema {
    model: D2DataSet;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryCombo: D2CategoryComboSchema;
        code: Id;
        compulsoryDataElementOperands: D2DataElementOperandSchema[];
        compulsoryFieldsCompleteOnly: boolean;
        created: string;
        dataElementDecoration: boolean;
        dataEntryForm: D2DataEntryFormSchema;
        dataInputPeriods: D2DataInputPeriodSchema[];
        dataSetElements: D2DataSetElementSchema[];
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        fieldCombinationRequired: boolean;
        formName: string;
        formType: "DEFAULT" | "CUSTOM" | "SECTION" | "SECTION_MULTIORG";
        href: string;
        id: Id;
        indicators: D2IndicatorSchema[];
        interpretations: D2InterpretationSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        mobile: boolean;
        name: string;
        noValueRequiresComment: boolean;
        notificationRecipients: D2UserGroupSchema;
        notifyCompletingUser: boolean;
        openFuturePeriods: number;
        organisationUnits: D2OrganisationUnitSchema[];
        periodType: string;
        publicAccess: string;
        renderAsTabs: boolean;
        renderHorizontally: boolean;
        sections: D2SectionSchema[];
        shortName: string;
        skipOffline: boolean;
        style: D2Style;
        timelyDays: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        validCompleteOnly: boolean;
        version: number;
        workflow: D2DataApprovalWorkflowSchema;
    };
    fieldPresets: {
        $all: Preset<D2DataSet, keyof D2DataSet>;
        $identifiable: Preset<D2DataSet, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataSet, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataSet,
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
            | "id"
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
            | "organisationUnits"
            | "renderHorizontally"
            | "renderAsTabs"
            | "mobile"
            | "periodType"
            | "openFuturePeriods"
            | "expiryDays"
            | "user"
        >;
        $owner: Preset<
            D2DataSet,
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
            | "id"
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
            | "organisationUnits"
            | "renderHorizontally"
            | "renderAsTabs"
            | "mobile"
            | "periodType"
            | "openFuturePeriods"
            | "expiryDays"
            | "user"
        >;
    };
}

export interface D2DataSetNotificationTemplateSchema {
    model: D2DataSetNotificationTemplate;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataSetNotificationTrigger: "DATA_SET_COMPLETION" | "SCHEDULED_DAYS";
        dataSets: D2DataSetSchema[];
        deliveryChannels: never[];
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        messageTemplate: string;
        name: string;
        notificationRecipient: "ORGANISATION_UNIT_CONTACT" | "USER_GROUP";
        notifyParentOrganisationUnitOnly: boolean;
        notifyUsersInHierarchyOnly: boolean;
        publicAccess: string;
        recipientUserGroup: D2UserGroupSchema;
        relativeScheduledDays: number;
        sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
        subjectTemplate: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataSetNotificationTemplate, keyof D2DataSetNotificationTemplate>;
        $identifiable: Preset<D2DataSetNotificationTemplate, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataSetNotificationTemplate, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataSetNotificationTemplate,
            | "code"
            | "lastUpdated"
            | "relativeScheduledDays"
            | "id"
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
            | "messageTemplate"
        >;
        $owner: Preset<
            D2DataSetNotificationTemplate,
            | "code"
            | "lastUpdated"
            | "relativeScheduledDays"
            | "id"
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
            | "messageTemplate"
        >;
    };
}

export interface D2SectionSchema {
    model: D2Section;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        categoryCombos: D2CategoryComboSchema[];
        code: Id;
        created: string;
        dataElements: D2DataElementSchema[];
        dataSet: D2DataSetSchema;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        greyedFields: D2DataElementOperandSchema[];
        href: string;
        id: Id;
        indicators: D2IndicatorSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        showColumnTotals: boolean;
        showRowTotals: boolean;
        sortOrder: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Section, keyof D2Section>;
        $identifiable: Preset<D2Section, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Section, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Section,
            | "code"
            | "greyedFields"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "dataSet"
            | "dataElements"
            | "showColumnTotals"
            | "lastUpdatedBy"
            | "created"
            | "attributeValues"
            | "indicators"
            | "sortOrder"
            | "name"
            | "showRowTotals"
        >;
        $owner: Preset<
            D2Section,
            | "code"
            | "greyedFields"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "dataSet"
            | "dataElements"
            | "showColumnTotals"
            | "lastUpdatedBy"
            | "created"
            | "attributeValues"
            | "indicators"
            | "sortOrder"
            | "name"
            | "showRowTotals"
        >;
    };
}

export interface D2DataApprovalLevelSchema {
    model: D2DataApprovalLevel;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        categoryOptionGroupSet: D2CategoryOptionGroupSetSchema;
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        level: number;
        name: string;
        orgUnitLevel: number;
        orgUnitLevelName: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataApprovalLevel, keyof D2DataApprovalLevel>;
        $identifiable: Preset<D2DataApprovalLevel, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataApprovalLevel, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataApprovalLevel,
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2DataApprovalLevel,
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
            | "id"
            | "user"
        >;
    };
}

export interface D2DataApprovalWorkflowSchema {
    model: D2DataApprovalWorkflow;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        categoryCombo: D2CategoryComboSchema;
        code: Id;
        created: string;
        dataApprovalLevels: D2DataApprovalLevelSchema[];
        dataSets: D2DataSetSchema[];
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        periodType: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataApprovalWorkflow, keyof D2DataApprovalWorkflow>;
        $identifiable: Preset<D2DataApprovalWorkflow, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataApprovalWorkflow, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DataApprovalWorkflow,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "dataApprovalLevels"
            | "lastUpdated"
            | "periodType"
            | "categoryCombo"
            | "translations"
            | "userAccesses"
            | "name"
            | "dataSets"
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2DataApprovalWorkflow,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "dataApprovalLevels"
            | "lastUpdated"
            | "periodType"
            | "categoryCombo"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
    };
}

export interface D2ValidationRuleSchema {
    model: D2ValidationRule;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        importance: "HIGH" | "MEDIUM" | "LOW";
        instruction: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        leftSide: D2Expression;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        notificationTemplates: D2ValidationNotificationTemplateSchema[];
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
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        validationRuleGroups: D2ValidationRuleGroupSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ValidationRule, keyof D2ValidationRule>;
        $identifiable: Preset<D2ValidationRule, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ValidationRule, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ValidationRule,
            | "validationRuleGroups"
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
            | "id"
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
            | "user"
        >;
        $owner: Preset<
            D2ValidationRule,
            | "code"
            | "importance"
            | "publicAccess"
            | "description"
            | "operator"
            | "organisationUnitLevels"
            | "lastUpdated"
            | "leftSide"
            | "translations"
            | "id"
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
            | "user"
        >;
    };
}

export interface D2ValidationRuleGroupSchema {
    model: D2ValidationRuleGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        validationRules: D2ValidationRuleSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ValidationRuleGroup, keyof D2ValidationRuleGroup>;
        $identifiable: Preset<D2ValidationRuleGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ValidationRuleGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ValidationRuleGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "validationRules"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "description"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2ValidationRuleGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "validationRules"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "description"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
    };
}

export interface D2ValidationNotificationTemplateSchema {
    model: D2ValidationNotificationTemplate;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        messageTemplate: string;
        name: string;
        notifyParentOrganisationUnitOnly: boolean;
        notifyUsersInHierarchyOnly: boolean;
        publicAccess: string;
        recipientUserGroups: D2UserGroupSchema[];
        sendStrategy: "COLLECTIVE_SUMMARY" | "SINGLE_NOTIFICATION";
        subjectTemplate: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        validationRules: D2ValidationRuleSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ValidationNotificationTemplate, keyof D2ValidationNotificationTemplate>;
        $identifiable: Preset<D2ValidationNotificationTemplate, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ValidationNotificationTemplate, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ValidationNotificationTemplate,
            | "code"
            | "recipientUserGroups"
            | "lastUpdated"
            | "subjectTemplate"
            | "id"
            | "sendStrategy"
            | "lastUpdatedBy"
            | "validationRules"
            | "created"
            | "notifyUsersInHierarchyOnly"
            | "name"
            | "messageTemplate"
        >;
        $owner: Preset<
            D2ValidationNotificationTemplate,
            | "code"
            | "recipientUserGroups"
            | "lastUpdated"
            | "subjectTemplate"
            | "id"
            | "sendStrategy"
            | "lastUpdatedBy"
            | "validationRules"
            | "created"
            | "notifyUsersInHierarchyOnly"
            | "name"
            | "messageTemplate"
        >;
    };
}

export interface D2TrackedEntityAttributeSchema {
    model: D2TrackedEntityAttribute;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        confidential: boolean;
        created: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        fieldMask: string;
        formName: string;
        generated: boolean;
        href: string;
        id: Id;
        inherit: boolean;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        optionSet: D2OptionSetSchema;
        optionSetValue: boolean;
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
        unique: boolean;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2TrackedEntityAttribute, keyof D2TrackedEntityAttribute>;
        $identifiable: Preset<D2TrackedEntityAttribute, FieldPresets["identifiable"]>;
        $nameable: Preset<D2TrackedEntityAttribute, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityAttribute,
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
            | "id"
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
            | "user"
        >;
        $owner: Preset<
            D2TrackedEntityAttribute,
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
            | "id"
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
            | "user"
        >;
    };
}

export interface D2TrackedEntityTypeSchema {
    model: D2TrackedEntityType;
    fields: {
        access: D2Access;
        allowAuditLog: boolean;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
        formName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        maxTeiCountToReturn: number;
        minAttributesRequiredToSearch: number;
        name: string;
        publicAccess: string;
        shortName: string;
        style: D2Style;
        trackedEntityTypeAttributes: D2TrackedEntityTypeAttributeSchema[];
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2TrackedEntityType, keyof D2TrackedEntityType>;
        $identifiable: Preset<D2TrackedEntityType, FieldPresets["identifiable"]>;
        $nameable: Preset<D2TrackedEntityType, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityType,
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
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "maxTeiCountToReturn"
            | "userAccesses"
            | "name"
            | "style"
            | "user"
        >;
        $owner: Preset<
            D2TrackedEntityType,
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
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "attributeValues"
            | "maxTeiCountToReturn"
            | "userAccesses"
            | "name"
            | "style"
            | "user"
        >;
    };
}

export interface D2TrackedEntityTypeAttributeSchema {
    model: D2TrackedEntityTypeAttribute;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayInList: boolean;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        mandatory: boolean;
        name: string;
        publicAccess: string;
        searchable: boolean;
        trackedEntityAttribute: D2TrackedEntityAttributeSchema;
        trackedEntityType: D2TrackedEntityTypeSchema;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2TrackedEntityTypeAttribute, keyof D2TrackedEntityTypeAttribute>;
        $identifiable: Preset<D2TrackedEntityTypeAttribute, FieldPresets["identifiable"]>;
        $nameable: Preset<D2TrackedEntityTypeAttribute, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityTypeAttribute,
            | "code"
            | "mandatory"
            | "trackedEntityAttribute"
            | "lastUpdated"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "searchable"
            | "displayInList"
            | "trackedEntityType"
        >;
        $owner: Preset<
            D2TrackedEntityTypeAttribute,
            | "code"
            | "mandatory"
            | "trackedEntityAttribute"
            | "lastUpdated"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "searchable"
            | "displayInList"
            | "trackedEntityType"
        >;
    };
}

export interface D2ProgramTrackedEntityAttributeGroupSchema {
    model: D2ProgramTrackedEntityAttributeGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        attributes: D2ProgramTrackedEntityAttributeSchema[];
        code: Id;
        created: string;
        description: string;
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        uniqunessType: "NONE" | "STRICT" | "VALIDATION";
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<
            D2ProgramTrackedEntityAttributeGroup,
            keyof D2ProgramTrackedEntityAttributeGroup
        >;
        $identifiable: Preset<D2ProgramTrackedEntityAttributeGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramTrackedEntityAttributeGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramTrackedEntityAttributeGroup,
            | "uniqunessType"
            | "code"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "name"
            | "attributes"
            | "shortName"
        >;
        $owner: Preset<
            D2ProgramTrackedEntityAttributeGroup,
            | "uniqunessType"
            | "code"
            | "description"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "name"
            | "shortName"
        >;
    };
}

export interface D2ProgramStageSectionSchema {
    model: D2ProgramStageSection;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataElements: D2DataElementSchema[];
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        formName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        programIndicators: D2ProgramIndicatorSchema[];
        programStage: D2ProgramStageSchema;
        publicAccess: string;
        renderType: any;
        sortOrder: number;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramStageSection, keyof D2ProgramStageSection>;
        $identifiable: Preset<D2ProgramStageSection, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramStageSection, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramStageSection,
            | "code"
            | "description"
            | "programIndicators"
            | "lastUpdated"
            | "translations"
            | "formName"
            | "id"
            | "renderType"
            | "dataElements"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "sortOrder"
            | "name"
            | "style"
        >;
        $owner: Preset<
            D2ProgramStageSection,
            | "code"
            | "description"
            | "programIndicators"
            | "lastUpdated"
            | "translations"
            | "formName"
            | "id"
            | "renderType"
            | "dataElements"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "sortOrder"
            | "name"
            | "style"
        >;
    };
}

export interface D2ProgramNotificationTemplateSchema {
    model: D2ProgramNotificationTemplate;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        deliveryChannels: never[];
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
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
        recipientDataElement: D2DataElementSchema;
        recipientProgramAttribute: D2TrackedEntityAttributeSchema;
        recipientUserGroup: D2UserGroupSchema;
        relativeScheduledDays: number;
        subjectTemplate: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramNotificationTemplate, keyof D2ProgramNotificationTemplate>;
        $identifiable: Preset<D2ProgramNotificationTemplate, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramNotificationTemplate, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramNotificationTemplate,
            | "code"
            | "notificationTrigger"
            | "lastUpdated"
            | "relativeScheduledDays"
            | "id"
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
            | "messageTemplate"
        >;
        $owner: Preset<
            D2ProgramNotificationTemplate,
            | "code"
            | "notificationTrigger"
            | "lastUpdated"
            | "relativeScheduledDays"
            | "id"
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
            | "messageTemplate"
        >;
    };
}

export interface D2ProgramStageSchema {
    model: D2ProgramStage;
    fields: {
        access: D2Access;
        allowGenerateNextVisit: boolean;
        attributeValues: D2AttributeValueSchema[];
        autoGenerateEvent: boolean;
        blockEntryForm: boolean;
        code: Id;
        created: string;
        dataEntryForm: D2DataEntryFormSchema;
        description: string;
        displayDescription: string;
        displayGenerateEventBox: boolean;
        displayName: string;
        dueDateLabel: string;
        enableUserAssignment: boolean;
        executionDateLabel: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
        formName: string;
        formType: "DEFAULT" | "CUSTOM" | "SECTION" | "SECTION_MULTIORG";
        generatedByEnrollmentDate: boolean;
        hideDueDate: boolean;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        minDaysFromStart: number;
        name: string;
        notificationTemplates: D2ProgramNotificationTemplateSchema[];
        openAfterEnrollment: boolean;
        periodType: string;
        preGenerateUID: boolean;
        program: D2ProgramSchema;
        programStageDataElements: D2ProgramStageDataElementSchema[];
        programStageSections: D2ProgramStageSectionSchema[];
        publicAccess: string;
        remindCompleted: boolean;
        repeatable: boolean;
        reportDateToUse: string;
        sortOrder: number;
        standardInterval: number;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        validationStrategy: "ON_COMPLETE" | "ON_UPDATE_AND_INSERT";
    };
    fieldPresets: {
        $all: Preset<D2ProgramStage, keyof D2ProgramStage>;
        $identifiable: Preset<D2ProgramStage, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramStage, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramStage,
            | "allowGenerateNextVisit"
            | "dataEntryForm"
            | "publicAccess"
            | "reportDateToUse"
            | "program"
            | "lastUpdated"
            | "programStageDataElements"
            | "translations"
            | "id"
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
            | "programStageSections"
        >;
        $owner: Preset<
            D2ProgramStage,
            | "allowGenerateNextVisit"
            | "dataEntryForm"
            | "publicAccess"
            | "reportDateToUse"
            | "program"
            | "lastUpdated"
            | "programStageDataElements"
            | "translations"
            | "id"
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
            | "programStageSections"
        >;
    };
}

export interface D2SMSCommandSchema {
    model: D2SMSCommand;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        codeValueSeparator: string;
        completenessMethod: "ALL_DATAVALUE" | "AT_LEAST_ONE_DATAVALUE" | "DO_NOT_MARK_COMPLETE";
        created: string;
        currentPeriodUsedForReporting: boolean;
        dataset: D2DataSetSchema;
        defaultMessage: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
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
        program: D2ProgramSchema;
        programStage: D2ProgramStageSchema;
        publicAccess: string;
        receivedMessage: string;
        separator: string;
        smsCodes: any[];
        specialCharacters: any[];
        successMessage: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroup: D2UserGroupSchema;
        userGroupAccesses: D2UserGroupAccessSchema[];
        wrongFormatMessage: string;
    };
    fieldPresets: {
        $all: Preset<D2SMSCommand, keyof D2SMSCommand>;
        $identifiable: Preset<D2SMSCommand, FieldPresets["identifiable"]>;
        $nameable: Preset<D2SMSCommand, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2SMSCommand,
            | "moreThanOneOrgUnitMessage"
            | "smsCodes"
            | "specialCharacters"
            | "currentPeriodUsedForReporting"
            | "program"
            | "noUserMessage"
            | "lastUpdated"
            | "receivedMessage"
            | "defaultMessage"
            | "id"
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
            | "dataset"
        >;
        $owner: Preset<
            D2SMSCommand,
            | "moreThanOneOrgUnitMessage"
            | "smsCodes"
            | "specialCharacters"
            | "currentPeriodUsedForReporting"
            | "program"
            | "noUserMessage"
            | "lastUpdated"
            | "receivedMessage"
            | "defaultMessage"
            | "id"
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
            | "dataset"
        >;
    };
}

export interface D2ProgramSchema {
    model: D2Program;
    fields: {
        access: D2Access;
        accessLevel: "OPEN" | "AUDITED" | "PROTECTED" | "CLOSED";
        attributeValues: D2AttributeValueSchema[];
        categoryCombo: D2CategoryComboSchema;
        code: Id;
        completeEventsExpiryDays: number;
        created: string;
        dataEntryForm: D2DataEntryFormSchema;
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
        favorite: boolean;
        favorites: string[];
        featureType: "NONE" | "MULTI_POLYGON" | "POLYGON" | "POINT" | "SYMBOL";
        formName: string;
        href: string;
        id: Id;
        ignoreOverdueEvents: boolean;
        incidentDateLabel: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        maxTeiCountToReturn: number;
        minAttributesRequiredToSearch: number;
        name: string;
        notificationTemplates: D2ProgramNotificationTemplateSchema[];
        onlyEnrollOnce: boolean;
        organisationUnits: D2OrganisationUnitSchema[];
        programIndicators: D2ProgramIndicatorSchema[];
        programRuleVariables: D2ProgramRuleVariableSchema[];
        programSections: D2ProgramSectionSchema[];
        programStages: D2ProgramStageSchema[];
        programTrackedEntityAttributes: D2ProgramTrackedEntityAttributeSchema[];
        programType: "WITH_REGISTRATION" | "WITHOUT_REGISTRATION";
        publicAccess: string;
        registration: boolean;
        relatedProgram: D2ProgramSchema;
        selectEnrollmentDatesInFuture: boolean;
        selectIncidentDatesInFuture: boolean;
        shortName: string;
        skipOffline: boolean;
        style: D2Style;
        trackedEntityType: D2TrackedEntityTypeSchema;
        translations: D2Translation[];
        useFirstStageDuringRegistration: boolean;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userRoles: D2UserAuthorityGroupSchema[];
        version: number;
        withoutRegistration: boolean;
    };
    fieldPresets: {
        $all: Preset<D2Program, keyof D2Program>;
        $identifiable: Preset<D2Program, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Program, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Program,
            | "dataEntryForm"
            | "publicAccess"
            | "ignoreOverdueEvents"
            | "skipOffline"
            | "programIndicators"
            | "lastUpdated"
            | "categoryCombo"
            | "translations"
            | "id"
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
            | "programTrackedEntityAttributes"
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
            | "user"
        >;
        $owner: Preset<
            D2Program,
            | "dataEntryForm"
            | "publicAccess"
            | "ignoreOverdueEvents"
            | "skipOffline"
            | "lastUpdated"
            | "categoryCombo"
            | "translations"
            | "id"
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
            | "programTrackedEntityAttributes"
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
            | "user"
        >;
    };
}

export interface D2EventReportSchema {
    model: D2EventReport;
    fields: {
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
        attributeValueDimension: D2TrackedEntityAttributeSchema;
        attributeValues: D2AttributeValueSchema[];
        categoryDimensions: D2CategoryDimensionSchema[];
        categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimensionSchema[];
        code: Id;
        colSubTotals: boolean;
        colTotals: boolean;
        collapseDataDimensions: boolean;
        columnDimensions: string[];
        columns: any[];
        completedOnly: boolean;
        created: string;
        dataDimensionItems: any[];
        dataElementDimensions: D2TrackedEntityDataElementDimensionSchema[];
        dataElementGroupSetDimensions: D2DataElementGroupSetDimensionSchema[];
        dataElementValueDimension: D2DataElementSchema;
        dataType: "AGGREGATED_VALUES" | "EVENTS";
        description: string;
        digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
        displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        endDate: string;
        eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        filterDimensions: string[];
        filters: any[];
        fontSize: "LARGE" | "NORMAL" | "SMALL";
        hideEmptyRows: boolean;
        hideNaData: boolean;
        hideSubtitle: boolean;
        hideTitle: boolean;
        href: string;
        id: Id;
        interpretations: D2InterpretationSchema[];
        itemOrganisationUnitGroups: D2OrganisationUnitGroupSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        orgUnitField: string;
        organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimensionSchema[];
        organisationUnitLevels: number[];
        organisationUnits: D2OrganisationUnitSchema[];
        outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
        parentGraphMap: D2MapSchema;
        periods: any[];
        program: D2ProgramSchema;
        programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimensionSchema[];
        programStage: D2ProgramStageSchema;
        programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
        publicAccess: string;
        relatives: any;
        rowDimensions: string[];
        rowSubTotals: boolean;
        rowTotals: boolean;
        rows: any[];
        shortName: string;
        showDimensionLabels: boolean;
        showHierarchy: boolean;
        sortOrder: number;
        startDate: string;
        subscribed: boolean;
        subscribers: string[];
        subtitle: string;
        timeField: string;
        title: string;
        topLimit: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userOrganisationUnit: boolean;
        userOrganisationUnitChildren: boolean;
        userOrganisationUnitGrandChildren: boolean;
        value: any;
    };
    fieldPresets: {
        $all: Preset<D2EventReport, keyof D2EventReport>;
        $identifiable: Preset<D2EventReport, FieldPresets["identifiable"]>;
        $nameable: Preset<D2EventReport, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2EventReport,
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
            | "id"
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
            | "user"
        >;
        $owner: Preset<
            D2EventReport,
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
            | "id"
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
            | "user"
        >;
    };
}

export interface D2EventChartSchema {
    model: D2EventChart;
    fields: {
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
        attributeValueDimension: D2TrackedEntityAttributeSchema;
        attributeValues: D2AttributeValueSchema[];
        baseLineLabel: string;
        baseLineValue: number;
        categoryDimensions: D2CategoryDimensionSchema[];
        categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimensionSchema[];
        code: Id;
        collapseDataDimensions: boolean;
        colorSet: D2ColorSetSchema;
        columnDimensions: string[];
        columns: any[];
        completedOnly: boolean;
        created: string;
        cumulativeValues: boolean;
        dataDimensionItems: any[];
        dataElementDimensions: D2TrackedEntityDataElementDimensionSchema[];
        dataElementGroupSetDimensions: D2DataElementGroupSetDimensionSchema[];
        dataElementValueDimension: D2DataElementSchema;
        description: string;
        digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        domainAxisLabel: string;
        endDate: string;
        eventStatus: "ACTIVE" | "COMPLETED" | "VISITED" | "SCHEDULE" | "OVERDUE" | "SKIPPED";
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        filterDimensions: string[];
        filters: any[];
        hideEmptyRowItems:
            | "NONE"
            | "BEFORE_FIRST"
            | "AFTER_LAST"
            | "BEFORE_FIRST_AFTER_LAST"
            | "ALL";
        hideLegend: boolean;
        hideNaData: boolean;
        hideSubtitle: boolean;
        hideTitle: boolean;
        href: string;
        id: Id;
        interpretations: D2InterpretationSchema[];
        itemOrganisationUnitGroups: D2OrganisationUnitGroupSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
        legendSet: D2LegendSetSchema;
        name: string;
        noSpaceBetweenColumns: boolean;
        orgUnitField: string;
        organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimensionSchema[];
        organisationUnitLevels: number[];
        organisationUnits: D2OrganisationUnitSchema[];
        outputType: "EVENT" | "ENROLLMENT" | "TRACKED_ENTITY_INSTANCE";
        parentGraphMap: D2MapSchema;
        percentStackedValues: boolean;
        periods: any[];
        program: D2ProgramSchema;
        programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimensionSchema[];
        programStage: D2ProgramStageSchema;
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
        rows: any[];
        shortName: string;
        showData: boolean;
        sortOrder: number;
        startDate: string;
        subscribed: boolean;
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
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userOrganisationUnit: boolean;
        userOrganisationUnitChildren: boolean;
        userOrganisationUnitGrandChildren: boolean;
        value: any;
        yearlySeries: string[];
    };
    fieldPresets: {
        $all: Preset<D2EventChart, keyof D2EventChart>;
        $identifiable: Preset<D2EventChart, FieldPresets["identifiable"]>;
        $nameable: Preset<D2EventChart, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2EventChart,
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
            | "id"
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
            | "user"
        >;
        $owner: Preset<
            D2EventChart,
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
            | "id"
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
            | "user"
        >;
    };
}

export interface D2ProgramSectionSchema {
    model: D2ProgramSection;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        formName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        program: D2ProgramSchema;
        programTrackedEntityAttribute: D2TrackedEntityAttributeSchema[];
        publicAccess: string;
        renderType: any;
        sortOrder: number;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramSection, keyof D2ProgramSection>;
        $identifiable: Preset<D2ProgramSection, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramSection, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramSection,
            | "code"
            | "description"
            | "program"
            | "programTrackedEntityAttribute"
            | "lastUpdated"
            | "translations"
            | "formName"
            | "id"
            | "renderType"
            | "lastUpdatedBy"
            | "created"
            | "sortOrder"
            | "name"
            | "style"
        >;
        $owner: Preset<
            D2ProgramSection,
            | "code"
            | "description"
            | "program"
            | "programTrackedEntityAttribute"
            | "lastUpdated"
            | "translations"
            | "formName"
            | "id"
            | "renderType"
            | "lastUpdatedBy"
            | "created"
            | "sortOrder"
            | "name"
            | "style"
        >;
    };
}

export interface D2ProgramIndicatorSchema {
    model: D2ProgramIndicator;
    fields: {
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
        analyticsPeriodBoundaries: D2AnalyticsPeriodBoundarySchema[];
        analyticsType: "EVENT" | "ENROLLMENT";
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        decimals: number;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        filter: string;
        formName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        program: D2ProgramSchema;
        programIndicatorGroups: D2ProgramIndicatorGroupSchema[];
        publicAccess: string;
        shortName: string;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramIndicator, keyof D2ProgramIndicator>;
        $identifiable: Preset<D2ProgramIndicator, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramIndicator, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramIndicator,
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
            | "id"
            | "programIndicatorGroups"
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
            | "aggregateExportAttributeOptionCombo"
        >;
        $owner: Preset<
            D2ProgramIndicator,
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
            | "id"
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
            | "aggregateExportAttributeOptionCombo"
        >;
    };
}

export interface D2ProgramRuleVariableSchema {
    model: D2ProgramRuleVariable;
    fields: {
        access: D2Access;
        attribute: D2TrackedEntityAttributeSchema;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataElement: D2DataElementSchema;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        program: D2ProgramSchema;
        programStage: D2ProgramStageSchema;
        publicAccess: string;
        sourceType:
            | "DATAELEMENT_NEWEST_EVENT_PROGRAM_STAGE"
            | "DATAELEMENT_NEWEST_EVENT_PROGRAM"
            | "DATAELEMENT_CURRENT_EVENT"
            | "DATAELEMENT_PREVIOUS_EVENT"
            | "CALCULATED_VALUE"
            | "TEI_ATTRIBUTE";
        translations: D2Translation[];
        useCodeForOptionSet: boolean;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramRuleVariable, keyof D2ProgramRuleVariable>;
        $identifiable: Preset<D2ProgramRuleVariable, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramRuleVariable, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramRuleVariable,
            | "code"
            | "sourceType"
            | "program"
            | "attribute"
            | "lastUpdated"
            | "id"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "useCodeForOptionSet"
            | "dataElement"
            | "name"
        >;
        $owner: Preset<
            D2ProgramRuleVariable,
            | "code"
            | "sourceType"
            | "program"
            | "attribute"
            | "lastUpdated"
            | "id"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "useCodeForOptionSet"
            | "dataElement"
            | "name"
        >;
    };
}

export interface D2ProgramIndicatorGroupSchema {
    model: D2ProgramIndicatorGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        programIndicators: D2ProgramIndicatorSchema[];
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramIndicatorGroup, keyof D2ProgramIndicatorGroup>;
        $identifiable: Preset<D2ProgramIndicatorGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramIndicatorGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramIndicatorGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "description"
            | "programIndicators"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2ProgramIndicatorGroup,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "attributeValues"
            | "description"
            | "programIndicators"
            | "lastUpdated"
            | "translations"
            | "userAccesses"
            | "name"
            | "id"
            | "user"
        >;
    };
}

export interface D2RelationshipTypeSchema {
    model: D2RelationshipType;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        bidirectional: boolean;
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        fromConstraint: any;
        fromToName: string;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        toConstraint: any;
        toFromName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2RelationshipType, keyof D2RelationshipType>;
        $identifiable: Preset<D2RelationshipType, FieldPresets["identifiable"]>;
        $nameable: Preset<D2RelationshipType, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2RelationshipType,
            | "bidirectional"
            | "code"
            | "publicAccess"
            | "description"
            | "fromToName"
            | "lastUpdated"
            | "translations"
            | "toConstraint"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "toFromName"
            | "fromConstraint"
            | "userAccesses"
            | "name"
            | "user"
        >;
        $owner: Preset<
            D2RelationshipType,
            | "bidirectional"
            | "code"
            | "publicAccess"
            | "description"
            | "fromToName"
            | "lastUpdated"
            | "translations"
            | "toConstraint"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "toFromName"
            | "fromConstraint"
            | "userAccesses"
            | "name"
            | "user"
        >;
    };
}

export interface D2ProgramRuleActionSchema {
    model: D2ProgramRuleAction;
    fields: {
        access: D2Access;
        attribute: D2TrackedEntityAttributeSchema;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        content: string;
        created: string;
        data: string;
        dataElement: D2DataElementSchema;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        location: string;
        name: string;
        option: D2OptionSchema;
        optionGroup: D2OptionGroupSchema;
        programIndicator: D2ProgramIndicatorSchema;
        programRule: D2ProgramRuleSchema;
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
        programStage: D2ProgramStageSchema;
        programStageSection: D2ProgramStageSectionSchema;
        publicAccess: string;
        templateUid: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramRuleAction, keyof D2ProgramRuleAction>;
        $identifiable: Preset<D2ProgramRuleAction, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramRuleAction, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramRuleAction,
            | "code"
            | "data"
            | "optionGroup"
            | "templateUid"
            | "content"
            | "attribute"
            | "lastUpdated"
            | "programIndicator"
            | "id"
            | "programRule"
            | "programStageSection"
            | "programRuleActionType"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "dataElement"
            | "location"
            | "option"
        >;
        $owner: Preset<
            D2ProgramRuleAction,
            | "code"
            | "data"
            | "optionGroup"
            | "templateUid"
            | "content"
            | "attribute"
            | "lastUpdated"
            | "programIndicator"
            | "id"
            | "programRule"
            | "programStageSection"
            | "programRuleActionType"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "dataElement"
            | "location"
            | "option"
        >;
    };
}

export interface D2ProgramRuleSchema {
    model: D2ProgramRule;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        condition: string;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        priority: number;
        program: D2ProgramSchema;
        programRuleActions: D2ProgramRuleActionSchema[];
        programStage: D2ProgramStageSchema;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramRule, keyof D2ProgramRule>;
        $identifiable: Preset<D2ProgramRule, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramRule, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramRule,
            | "code"
            | "description"
            | "program"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "priority"
            | "condition"
            | "programRuleActions"
            | "name"
        >;
        $owner: Preset<
            D2ProgramRule,
            | "code"
            | "description"
            | "program"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "priority"
            | "condition"
            | "programRuleActions"
            | "name"
        >;
    };
}

export interface D2MapViewSchema {
    model: D2MapView;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryDimensions: D2CategoryDimensionSchema[];
        categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimensionSchema[];
        classes: number;
        code: Id;
        colorHigh: string;
        colorLow: string;
        colorScale: string;
        columnDimensions: string[];
        columns: any[];
        completedOnly: boolean;
        config: string;
        created: string;
        dataDimensionItems: any[];
        dataElementDimensions: D2TrackedEntityDataElementDimensionSchema[];
        dataElementGroupSetDimensions: D2DataElementGroupSetDimensionSchema[];
        description: string;
        digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        endDate: string;
        eventClustering: boolean;
        eventCoordinateField: string;
        eventPointColor: string;
        eventPointRadius: number;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        filterDimensions: string[];
        filters: any[];
        followUp: boolean;
        hidden: boolean;
        hideSubtitle: boolean;
        hideTitle: boolean;
        href: string;
        id: Id;
        interpretations: D2InterpretationSchema[];
        itemOrganisationUnitGroups: D2OrganisationUnitGroupSchema[];
        labelFontColor: string;
        labelFontSize: string;
        labelFontStyle: string;
        labelFontWeight: string;
        labels: boolean;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        layer: string;
        legendSet: D2LegendSetSchema;
        method: number;
        name: string;
        opacity: number;
        orgUnitField: string;
        organisationUnitGroupSet: D2OrganisationUnitGroupSetSchema;
        organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimensionSchema[];
        organisationUnitLevels: number[];
        organisationUnitSelectionMode:
            | "SELECTED"
            | "CHILDREN"
            | "DESCENDANTS"
            | "ACCESSIBLE"
            | "CAPTURE"
            | "ALL";
        organisationUnits: D2OrganisationUnitSchema[];
        parentGraph: string;
        parentGraphMap: D2MapSchema;
        parentLevel: number;
        periods: any[];
        program: D2ProgramSchema;
        programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimensionSchema[];
        programStage: D2ProgramStageSchema;
        programStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
        publicAccess: string;
        radiusHigh: number;
        radiusLow: number;
        relatives: any;
        rows: any[];
        shortName: string;
        sortOrder: number;
        startDate: string;
        styleDataItem: object;
        subscribed: boolean;
        subscribers: string[];
        subtitle: string;
        timeField: string;
        title: string;
        topLimit: number;
        trackedEntityType: D2TrackedEntityTypeSchema;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userOrganisationUnit: boolean;
        userOrganisationUnitChildren: boolean;
        userOrganisationUnitGrandChildren: boolean;
    };
    fieldPresets: {
        $all: Preset<D2MapView, keyof D2MapView>;
        $identifiable: Preset<D2MapView, FieldPresets["identifiable"]>;
        $nameable: Preset<D2MapView, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2MapView,
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
            | "id"
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
            | "config"
        >;
        $owner: Preset<
            D2MapView,
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
            | "id"
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
            | "config"
        >;
    };
}

export interface D2ValidationResultSchema {
    model: D2ValidationResult;
    fields: {
        attributeOptionCombo: D2CategoryOptionComboSchema;
        created: string;
        dayInPeriod: number;
        id: string;
        leftsideValue: number;
        notificationSent: boolean;
        organisationUnit: D2OrganisationUnitSchema;
        period: any;
        rightsideValue: number;
        validationRule: D2ValidationRuleSchema;
    };
    fieldPresets: {
        $all: Preset<D2ValidationResult, keyof D2ValidationResult>;
        $identifiable: Preset<D2ValidationResult, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ValidationResult, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ValidationResult,
            "created" | "rightsideValue" | "leftsideValue" | "notificationSent"
        >;
        $owner: Preset<
            D2ValidationResult,
            "created" | "rightsideValue" | "leftsideValue" | "notificationSent"
        >;
    };
}

export interface D2DocumentSchema {
    model: D2Document;
    fields: {
        access: D2Access;
        attachment: boolean;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        contentType: string;
        created: string;
        displayName: string;
        external: boolean;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        url: string;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Document, keyof D2Document>;
        $identifiable: Preset<D2Document, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Document, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Document,
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
            | "id"
            | "user"
            | "contentType"
        >;
        $owner: Preset<
            D2Document,
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
            | "id"
            | "user"
            | "contentType"
        >;
    };
}

export interface D2ReportTableSchema {
    model: D2ReportTable;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        categoryDimensions: D2CategoryDimensionSchema[];
        categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimensionSchema[];
        code: Id;
        colSubTotals: boolean;
        colTotals: boolean;
        columnDimensions: string[];
        columns: any[];
        completedOnly: boolean;
        created: string;
        cumulative: boolean;
        dataDimensionItems: any[];
        dataElementDimensions: D2TrackedEntityDataElementDimensionSchema[];
        dataElementGroupSetDimensions: D2DataElementGroupSetDimensionSchema[];
        description: string;
        digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
        displayDensity: "COMFORTABLE" | "NORMAL" | "COMPACT" | "NONE";
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        endDate: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        filterDimensions: string[];
        filters: any[];
        fontSize: "LARGE" | "NORMAL" | "SMALL";
        hideEmptyColumns: boolean;
        hideEmptyRows: boolean;
        hideSubtitle: boolean;
        hideTitle: boolean;
        href: string;
        id: Id;
        interpretations: D2InterpretationSchema[];
        itemOrganisationUnitGroups: D2OrganisationUnitGroupSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
        legendDisplayStyle: "FILL" | "TEXT";
        legendSet: D2LegendSetSchema;
        measureCriteria: string;
        name: string;
        numberType: "VALUE" | "ROW_PERCENTAGE" | "COLUMN_PERCENTAGE";
        orgUnitField: string;
        organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimensionSchema[];
        organisationUnitLevels: number[];
        organisationUnits: D2OrganisationUnitSchema[];
        parentGraphMap: D2MapSchema;
        periods: any[];
        programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimensionSchema[];
        publicAccess: string;
        regression: boolean;
        relatives: any;
        reportParams: any;
        rowDimensions: string[];
        rowSubTotals: boolean;
        rowTotals: boolean;
        rows: any[];
        shortName: string;
        showDimensionLabels: boolean;
        showHierarchy: boolean;
        skipRounding: boolean;
        sortOrder: number;
        startDate: string;
        subscribed: boolean;
        subscribers: string[];
        subtitle: string;
        timeField: string;
        title: string;
        topLimit: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userOrganisationUnit: boolean;
        userOrganisationUnitChildren: boolean;
        userOrganisationUnitGrandChildren: boolean;
    };
    fieldPresets: {
        $all: Preset<D2ReportTable, keyof D2ReportTable>;
        $identifiable: Preset<D2ReportTable, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ReportTable, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ReportTable,
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
            | "id"
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
            | "skipRounding"
        >;
        $owner: Preset<
            D2ReportTable,
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
            | "id"
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
            | "skipRounding"
        >;
    };
}

export interface D2ExternalMapLayerSchema {
    model: D2ExternalMapLayer;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        attribution: string;
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        imageFormat: "PNG" | "JPG";
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        layers: string;
        legendSet: D2LegendSetSchema;
        legendSetUrl: string;
        mapLayerPosition: "BASEMAP" | "OVERLAY";
        mapService: "WMS" | "TMS" | "XYZ";
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        url: string;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ExternalMapLayer, keyof D2ExternalMapLayer>;
        $identifiable: Preset<D2ExternalMapLayer, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ExternalMapLayer, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ExternalMapLayer,
            | "imageFormat"
            | "code"
            | "publicAccess"
            | "legendSetUrl"
            | "mapService"
            | "lastUpdated"
            | "layers"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "mapLayerPosition"
            | "url"
            | "userAccesses"
            | "name"
            | "legendSet"
            | "attribution"
            | "user"
        >;
        $owner: Preset<
            D2ExternalMapLayer,
            | "imageFormat"
            | "code"
            | "publicAccess"
            | "legendSetUrl"
            | "mapService"
            | "lastUpdated"
            | "layers"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "mapLayerPosition"
            | "url"
            | "userAccesses"
            | "name"
            | "legendSet"
            | "attribution"
            | "user"
        >;
    };
}

export interface D2ChartSchema {
    model: D2Chart;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        baseLineLabel: string;
        baseLineValue: number;
        category: string;
        categoryDimensions: D2CategoryDimensionSchema[];
        categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimensionSchema[];
        code: Id;
        colorSet: D2ColorSetSchema;
        columns: any[];
        completedOnly: boolean;
        created: string;
        cumulativeValues: boolean;
        dataDimensionItems: any[];
        dataElementDimensions: D2TrackedEntityDataElementDimensionSchema[];
        dataElementGroupSetDimensions: D2DataElementGroupSetDimensionSchema[];
        description: string;
        digitGroupSeparator: "COMMA" | "SPACE" | "NONE";
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        domainAxisLabel: string;
        endDate: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        filterDimensions: string[];
        filters: any[];
        hideEmptyRowItems:
            | "NONE"
            | "BEFORE_FIRST"
            | "AFTER_LAST"
            | "BEFORE_FIRST_AFTER_LAST"
            | "ALL";
        hideLegend: boolean;
        hideSubtitle: boolean;
        hideTitle: boolean;
        href: string;
        id: Id;
        interpretations: D2InterpretationSchema[];
        itemOrganisationUnitGroups: D2OrganisationUnitGroupSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendDisplayStrategy: "FIXED" | "BY_DATA_ITEM";
        legendSet: D2LegendSetSchema;
        name: string;
        noSpaceBetweenColumns: boolean;
        orgUnitField: string;
        organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimensionSchema[];
        organisationUnitLevels: number[];
        organisationUnits: D2OrganisationUnitSchema[];
        parentGraphMap: D2MapSchema;
        percentStackedValues: boolean;
        periods: any[];
        programIndicatorDimensions: D2TrackedEntityProgramIndicatorDimensionSchema[];
        publicAccess: string;
        rangeAxisDecimals: number;
        rangeAxisLabel: string;
        rangeAxisMaxValue: number;
        rangeAxisMinValue: number;
        rangeAxisSteps: number;
        regressionType: "NONE" | "LINEAR" | "POLYNOMIAL" | "LOESS";
        relatives: any;
        rows: any[];
        series: string;
        seriesItems: any[];
        shortName: string;
        showData: boolean;
        sortOrder: number;
        startDate: string;
        subscribed: boolean;
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
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userOrganisationUnit: boolean;
        userOrganisationUnitChildren: boolean;
        userOrganisationUnitGrandChildren: boolean;
        yearlySeries: string[];
    };
    fieldPresets: {
        $all: Preset<D2Chart, keyof D2Chart>;
        $identifiable: Preset<D2Chart, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Chart, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Chart,
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
            | "id"
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
            | "user"
        >;
        $owner: Preset<
            D2Chart,
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
            | "id"
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
            | "user"
        >;
    };
}

export interface D2MapSchema {
    model: D2Map;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        basemap: string;
        code: Id;
        created: string;
        description: string;
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        interpretations: D2InterpretationSchema[];
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        latitude: number;
        longitude: number;
        mapViews: D2MapViewSchema[];
        name: string;
        publicAccess: string;
        shortName: string;
        subscribed: boolean;
        subscribers: string[];
        title: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        zoom: number;
    };
    fieldPresets: {
        $all: Preset<D2Map, keyof D2Map>;
        $identifiable: Preset<D2Map, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Map, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Map,
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
            | "id"
            | "interpretations"
            | "longitude"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "subscribers"
            | "created"
            | "zoom"
            | "userAccesses"
            | "name"
            | "user"
        >;
        $owner: Preset<
            D2Map,
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
            | "id"
            | "longitude"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "subscribers"
            | "created"
            | "zoom"
            | "userAccesses"
            | "name"
            | "user"
        >;
    };
}

export interface D2ReportSchema {
    model: D2Report;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        cacheStrategy:
            | "NO_CACHE"
            | "CACHE_15_MINUTES"
            | "CACHE_30_MINUTES"
            | "CACHE_1_HOUR"
            | "CACHE_6AM_TOMORROW"
            | "CACHE_TWO_WEEKS"
            | "RESPECT_SYSTEM_SETTING";
        code: Id;
        created: string;
        designContent: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        relatives: any;
        reportParams: any;
        reportTable: D2ReportTableSchema;
        translations: D2Translation[];
        type: "JASPER_REPORT_TABLE" | "JASPER_JDBC" | "HTML";
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Report, keyof D2Report>;
        $identifiable: Preset<D2Report, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Report, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Report,
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
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "userAccesses"
            | "name"
            | "cacheStrategy"
            | "user"
        >;
        $owner: Preset<
            D2Report,
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
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "userAccesses"
            | "name"
            | "cacheStrategy"
            | "user"
        >;
    };
}

export interface D2PredictorSchema {
    model: D2Predictor;
    fields: {
        access: D2Access;
        annualSampleCount: number;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        generator: D2Expression;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        organisationUnitLevels: D2OrganisationUnitLevelSchema[];
        output: D2DataElementSchema;
        outputCombo: D2CategoryOptionComboSchema;
        periodType: string;
        predictorGroups: D2PredictorGroupSchema[];
        publicAccess: string;
        sampleSkipTest: D2Expression;
        sequentialSampleCount: number;
        sequentialSkipCount: number;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Predictor, keyof D2Predictor>;
        $identifiable: Preset<D2Predictor, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Predictor, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Predictor,
            | "outputCombo"
            | "code"
            | "description"
            | "generator"
            | "organisationUnitLevels"
            | "output"
            | "lastUpdated"
            | "sampleSkipTest"
            | "id"
            | "sequentialSampleCount"
            | "annualSampleCount"
            | "lastUpdatedBy"
            | "created"
            | "sequentialSkipCount"
            | "predictorGroups"
            | "periodType"
            | "name"
        >;
        $owner: Preset<
            D2Predictor,
            | "outputCombo"
            | "code"
            | "description"
            | "generator"
            | "organisationUnitLevels"
            | "output"
            | "lastUpdated"
            | "sampleSkipTest"
            | "id"
            | "sequentialSampleCount"
            | "annualSampleCount"
            | "lastUpdatedBy"
            | "created"
            | "sequentialSkipCount"
            | "periodType"
            | "name"
        >;
    };
}

export interface D2PredictorGroupSchema {
    model: D2PredictorGroup;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        predictors: D2PredictorSchema[];
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2PredictorGroup, keyof D2PredictorGroup>;
        $identifiable: Preset<D2PredictorGroup, FieldPresets["identifiable"]>;
        $nameable: Preset<D2PredictorGroup, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2PredictorGroup,
            | "predictors"
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2PredictorGroup,
            | "predictors"
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
            | "id"
            | "user"
        >;
    };
}

export interface D2DashboardItemSchema {
    model: D2DashboardItem;
    fields: {
        access: D2Access;
        appKey: string;
        attributeValues: D2AttributeValueSchema[];
        chart: D2ChartSchema;
        code: Id;
        contentCount: number;
        created: string;
        displayName: string;
        eventChart: D2EventChartSchema;
        eventReport: D2EventReportSchema;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        height: number;
        href: string;
        id: Id;
        interpretationCount: number;
        interpretationLikeCount: number;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        map: D2MapSchema;
        messages: boolean;
        name: string;
        publicAccess: string;
        reportTable: D2ReportTableSchema;
        reports: D2ReportSchema[];
        resources: D2DocumentSchema[];
        shape: "NORMAL" | "DOUBLE_WIDTH" | "FULL_WIDTH";
        text: string;
        translations: D2Translation[];
        type:
            | "CHART"
            | "EVENT_CHART"
            | "MAP"
            | "REPORT_TABLE"
            | "EVENT_REPORT"
            | "USERS"
            | "REPORTS"
            | "RESOURCES"
            | "TEXT"
            | "MESSAGES"
            | "APP";
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        users: D2UserSchema[];
        width: number;
        x: number;
        y: number;
    };
    fieldPresets: {
        $all: Preset<D2DashboardItem, keyof D2DashboardItem>;
        $identifiable: Preset<D2DashboardItem, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DashboardItem, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2DashboardItem,
            | "reports"
            | "code"
            | "reportTable"
            | "lastUpdated"
            | "translations"
            | "appKey"
            | "id"
            | "text"
            | "map"
            | "height"
            | "lastUpdatedBy"
            | "shape"
            | "created"
            | "resources"
            | "users"
            | "eventReport"
            | "eventChart"
            | "width"
            | "x"
            | "messages"
            | "y"
            | "chart"
        >;
        $owner: Preset<
            D2DashboardItem,
            | "reports"
            | "code"
            | "reportTable"
            | "lastUpdated"
            | "translations"
            | "appKey"
            | "id"
            | "text"
            | "map"
            | "height"
            | "lastUpdatedBy"
            | "shape"
            | "created"
            | "resources"
            | "users"
            | "eventReport"
            | "eventChart"
            | "width"
            | "x"
            | "messages"
            | "y"
            | "chart"
        >;
    };
}

export interface D2DashboardSchema {
    model: D2Dashboard;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dashboardItems: D2DashboardItemSchema[];
        description: string;
        displayDescription: string;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        itemCount: number;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Dashboard, keyof D2Dashboard>;
        $identifiable: Preset<D2Dashboard, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Dashboard, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Dashboard,
            | "favorites"
            | "code"
            | "publicAccess"
            | "description"
            | "externalAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "dashboardItems"
            | "userAccesses"
            | "name"
            | "user"
        >;
        $owner: Preset<
            D2Dashboard,
            | "favorites"
            | "code"
            | "publicAccess"
            | "description"
            | "externalAccess"
            | "lastUpdated"
            | "translations"
            | "id"
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "created"
            | "dashboardItems"
            | "userAccesses"
            | "name"
            | "user"
        >;
    };
}

export interface D2PushAnalysisSchema {
    model: D2PushAnalysis;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dashboard: D2DashboardSchema;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        message: string;
        name: string;
        publicAccess: string;
        recipientUserGroups: D2UserGroupSchema[];
        title: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2PushAnalysis, keyof D2PushAnalysis>;
        $identifiable: Preset<D2PushAnalysis, FieldPresets["identifiable"]>;
        $nameable: Preset<D2PushAnalysis, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2PushAnalysis,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "recipientUserGroups"
            | "message"
            | "title"
            | "lastUpdated"
            | "name"
            | "id"
            | "dashboard"
        >;
        $owner: Preset<
            D2PushAnalysis,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "recipientUserGroups"
            | "message"
            | "title"
            | "lastUpdated"
            | "name"
            | "id"
            | "dashboard"
        >;
    };
}

export interface D2KeyJsonValueSchema {
    model: D2KeyJsonValue;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        key: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        namespace: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        value: string;
    };
    fieldPresets: {
        $all: Preset<D2KeyJsonValue, keyof D2KeyJsonValue>;
        $identifiable: Preset<D2KeyJsonValue, FieldPresets["identifiable"]>;
        $nameable: Preset<D2KeyJsonValue, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2KeyJsonValue,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "lastUpdated"
            | "userAccesses"
            | "namespace"
            | "id"
            | "user"
            | "key"
        >;
        $owner: Preset<
            D2KeyJsonValue,
            | "lastUpdatedBy"
            | "userGroupAccesses"
            | "code"
            | "created"
            | "publicAccess"
            | "lastUpdated"
            | "userAccesses"
            | "namespace"
            | "id"
            | "user"
            | "key"
        >;
    };
}

export interface D2UserCredentialsSchema {
    model: D2UserCredentials;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        catDimensionConstraints: D2CategorySchema[];
        code: Id;
        cogsDimensionConstraints: D2CategoryOptionGroupSetSchema[];
        created: string;
        disabled: boolean;
        displayName: string;
        externalAccess: boolean;
        externalAuth: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        invitation: boolean;
        lastLogin: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        ldapId: string;
        name: string;
        openId: string;
        password: string;
        passwordLastUpdated: string;
        publicAccess: string;
        selfRegistered: boolean;
        translations: D2Translation[];
        twoFA: boolean;
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
        userInfo: D2UserSchema;
        userRoles: D2UserAuthorityGroupSchema[];
        username: string;
    };
    fieldPresets: {
        $all: Preset<D2UserCredentials, keyof D2UserCredentials>;
        $identifiable: Preset<D2UserCredentials, FieldPresets["identifiable"]>;
        $nameable: Preset<D2UserCredentials, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2UserCredentials,
            | "lastLogin"
            | "userInfo"
            | "code"
            | "openId"
            | "externalAuth"
            | "cogsDimensionConstraints"
            | "catDimensionConstraints"
            | "lastUpdated"
            | "password"
            | "ldapId"
            | "disabled"
            | "id"
            | "twoFA"
            | "passwordLastUpdated"
            | "lastUpdatedBy"
            | "invitation"
            | "created"
            | "selfRegistered"
            | "userRoles"
            | "user"
            | "username"
        >;
        $owner: Preset<
            D2UserCredentials,
            | "lastLogin"
            | "userInfo"
            | "code"
            | "openId"
            | "externalAuth"
            | "cogsDimensionConstraints"
            | "catDimensionConstraints"
            | "lastUpdated"
            | "password"
            | "ldapId"
            | "disabled"
            | "id"
            | "twoFA"
            | "passwordLastUpdated"
            | "lastUpdatedBy"
            | "invitation"
            | "created"
            | "selfRegistered"
            | "userRoles"
            | "user"
            | "username"
        >;
    };
}

export interface D2AnalyticsPeriodBoundarySchema {
    model: D2AnalyticsPeriodBoundary;
    fields: {
        access: D2Access;
        analyticsPeriodBoundaryType:
            | "BEFORE_START_OF_REPORTING_PERIOD"
            | "BEFORE_END_OF_REPORTING_PERIOD"
            | "AFTER_START_OF_REPORTING_PERIOD"
            | "AFTER_END_OF_REPORTING_PERIOD";
        attributeValues: D2AttributeValueSchema[];
        boundaryTarget: string;
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        offsetPeriodType: string;
        offsetPeriods: number;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2AnalyticsPeriodBoundary, keyof D2AnalyticsPeriodBoundary>;
        $identifiable: Preset<D2AnalyticsPeriodBoundary, FieldPresets["identifiable"]>;
        $nameable: Preset<D2AnalyticsPeriodBoundary, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2AnalyticsPeriodBoundary,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "lastUpdated"
            | "offsetPeriodType"
            | "id"
            | "analyticsPeriodBoundaryType"
            | "boundaryTarget"
            | "offsetPeriods"
        >;
        $owner: Preset<
            D2AnalyticsPeriodBoundary,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "lastUpdated"
            | "offsetPeriodType"
            | "id"
            | "analyticsPeriodBoundaryType"
            | "boundaryTarget"
            | "offsetPeriods"
        >;
    };
}

export interface D2UserAccessSchema {
    model: D2UserAccess;
    fields: { access: string; displayName: string; id: string; userUid: string };
    fieldPresets: {
        $all: Preset<D2UserAccess, keyof D2UserAccess>;
        $identifiable: Preset<D2UserAccess, FieldPresets["identifiable"]>;
        $nameable: Preset<D2UserAccess, FieldPresets["nameable"]>;
        $persisted: Preset<D2UserAccess, "access">;
        $owner: Preset<D2UserAccess, "access">;
    };
}

export interface D2RelationshipSchema {
    model: D2Relationship;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        formName: string;
        from: any;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        relationshipType: D2RelationshipTypeSchema;
        style: D2Style;
        to: any;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Relationship, keyof D2Relationship>;
        $identifiable: Preset<D2Relationship, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Relationship, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Relationship,
            | "code"
            | "description"
            | "lastUpdated"
            | "formName"
            | "from"
            | "id"
            | "lastUpdatedBy"
            | "relationshipType"
            | "created"
            | "style"
            | "to"
        >;
        $owner: Preset<
            D2Relationship,
            | "code"
            | "description"
            | "lastUpdated"
            | "formName"
            | "from"
            | "id"
            | "lastUpdatedBy"
            | "relationshipType"
            | "created"
            | "style"
            | "to"
        >;
    };
}

export interface D2DataElementGroupSetDimensionSchema {
    model: D2DataElementGroupSetDimension;
    fields: {
        dataElementGroups: D2DataElementGroupSchema[];
        dimension: D2DataElementGroupSetSchema;
    };
    fieldPresets: {
        $all: Preset<D2DataElementGroupSetDimension, keyof D2DataElementGroupSetDimension>;
        $identifiable: Preset<D2DataElementGroupSetDimension, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataElementGroupSetDimension, FieldPresets["nameable"]>;
        $persisted: Preset<D2DataElementGroupSetDimension, "dataElementGroups" | "dimension">;
        $owner: Preset<D2DataElementGroupSetDimension, "dataElementGroups" | "dimension">;
    };
}

export interface D2InterpretationCommentSchema {
    model: D2InterpretationComment;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        mentions: any[];
        name: string;
        publicAccess: string;
        text: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2InterpretationComment, keyof D2InterpretationComment>;
        $identifiable: Preset<D2InterpretationComment, FieldPresets["identifiable"]>;
        $nameable: Preset<D2InterpretationComment, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2InterpretationComment,
            "created" | "lastUpdated" | "mentions" | "text" | "id" | "user"
        >;
        $owner: Preset<
            D2InterpretationComment,
            "created" | "lastUpdated" | "mentions" | "text" | "id" | "user"
        >;
    };
}

export interface D2MetadataVersionSchema {
    model: D2MetadataVersion;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        hashCode: string;
        href: string;
        id: Id;
        importDate: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        type: "BEST_EFFORT" | "ATOMIC";
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2MetadataVersion, keyof D2MetadataVersion>;
        $identifiable: Preset<D2MetadataVersion, FieldPresets["identifiable"]>;
        $nameable: Preset<D2MetadataVersion, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2MetadataVersion,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "type"
            | "lastUpdated"
            | "importDate"
            | "hashCode"
            | "name"
            | "id"
        >;
        $owner: Preset<
            D2MetadataVersion,
            | "lastUpdatedBy"
            | "code"
            | "created"
            | "type"
            | "lastUpdated"
            | "importDate"
            | "hashCode"
            | "name"
            | "id"
        >;
    };
}

export interface D2DataInputPeriodSchema {
    model: D2DataInputPeriod;
    fields: { closingDate: string; openingDate: string; period: any };
    fieldPresets: {
        $all: Preset<D2DataInputPeriod, keyof D2DataInputPeriod>;
        $identifiable: Preset<D2DataInputPeriod, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataInputPeriod, FieldPresets["nameable"]>;
        $persisted: Preset<D2DataInputPeriod, "period" | "closingDate" | "openingDate">;
        $owner: Preset<D2DataInputPeriod, "period" | "closingDate" | "openingDate">;
    };
}

export interface D2TrackedEntityInstanceSchema {
    model: D2TrackedEntityInstance;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        createdAtClient: string;
        deleted: boolean;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        geometry: D2Geometry;
        href: string;
        id: Id;
        inactive: boolean;
        lastUpdated: string;
        lastUpdatedAtClient: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        organisationUnit: D2OrganisationUnitSchema;
        programInstances: D2ProgramInstanceSchema[];
        programOwners: any[];
        publicAccess: string;
        relationshipItems: any[];
        trackedEntityAttributeValues: any[];
        trackedEntityType: D2TrackedEntityTypeSchema;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2TrackedEntityInstance, keyof D2TrackedEntityInstance>;
        $identifiable: Preset<D2TrackedEntityInstance, FieldPresets["identifiable"]>;
        $nameable: Preset<D2TrackedEntityInstance, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityInstance,
            | "programOwners"
            | "code"
            | "programInstances"
            | "organisationUnit"
            | "createdAtClient"
            | "lastUpdated"
            | "inactive"
            | "relationshipItems"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "deleted"
            | "trackedEntityType"
            | "geometry"
            | "trackedEntityAttributeValues"
            | "lastUpdatedAtClient"
        >;
        $owner: Preset<
            D2TrackedEntityInstance,
            | "code"
            | "organisationUnit"
            | "createdAtClient"
            | "lastUpdated"
            | "inactive"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "deleted"
            | "trackedEntityType"
            | "geometry"
            | "lastUpdatedAtClient"
        >;
    };
}

export interface D2TrackedEntityInstanceFilterSchema {
    model: D2TrackedEntityInstanceFilter;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        enrollmentCreatedPeriod: any;
        enrollmentStatus: "ACTIVE" | "COMPLETED" | "CANCELLED";
        eventFilters: any[];
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        followup: boolean;
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        program: D2ProgramSchema;
        publicAccess: string;
        sortOrder: number;
        style: D2Style;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2TrackedEntityInstanceFilter, keyof D2TrackedEntityInstanceFilter>;
        $identifiable: Preset<D2TrackedEntityInstanceFilter, FieldPresets["identifiable"]>;
        $nameable: Preset<D2TrackedEntityInstanceFilter, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityInstanceFilter,
            | "code"
            | "description"
            | "program"
            | "enrollmentCreatedPeriod"
            | "lastUpdated"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "followup"
            | "eventFilters"
            | "enrollmentStatus"
            | "sortOrder"
            | "name"
            | "style"
        >;
        $owner: Preset<
            D2TrackedEntityInstanceFilter,
            | "code"
            | "description"
            | "program"
            | "enrollmentCreatedPeriod"
            | "lastUpdated"
            | "id"
            | "lastUpdatedBy"
            | "created"
            | "followup"
            | "eventFilters"
            | "enrollmentStatus"
            | "sortOrder"
            | "name"
            | "style"
        >;
    };
}

export interface D2ProgramStageInstanceFilterSchema {
    model: D2ProgramStageInstanceFilter;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        displayName: string;
        eventQueryCriteria: any;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        program: Id;
        programStage: Id;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramStageInstanceFilter, keyof D2ProgramStageInstanceFilter>;
        $identifiable: Preset<D2ProgramStageInstanceFilter, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramStageInstanceFilter, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramStageInstanceFilter,
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
            | "id"
            | "user"
        >;
        $owner: Preset<
            D2ProgramStageInstanceFilter,
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
            | "id"
            | "user"
        >;
    };
}

export interface D2OrganisationUnitGroupSetDimensionSchema {
    model: D2OrganisationUnitGroupSetDimension;
    fields: {
        dimension: D2OrganisationUnitGroupSetSchema;
        organisationUnitGroups: D2OrganisationUnitGroupSchema[];
    };
    fieldPresets: {
        $all: Preset<
            D2OrganisationUnitGroupSetDimension,
            keyof D2OrganisationUnitGroupSetDimension
        >;
        $identifiable: Preset<D2OrganisationUnitGroupSetDimension, FieldPresets["identifiable"]>;
        $nameable: Preset<D2OrganisationUnitGroupSetDimension, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2OrganisationUnitGroupSetDimension,
            "dimension" | "organisationUnitGroups"
        >;
        $owner: Preset<D2OrganisationUnitGroupSetDimension, "dimension" | "organisationUnitGroups">;
    };
}

export interface D2UserGroupAccessSchema {
    model: D2UserGroupAccess;
    fields: { access: string; displayName: string; id: string; userGroupUid: string };
    fieldPresets: {
        $all: Preset<D2UserGroupAccess, keyof D2UserGroupAccess>;
        $identifiable: Preset<D2UserGroupAccess, FieldPresets["identifiable"]>;
        $nameable: Preset<D2UserGroupAccess, FieldPresets["nameable"]>;
        $persisted: Preset<D2UserGroupAccess, "access">;
        $owner: Preset<D2UserGroupAccess, "access">;
    };
}

export interface D2ProgramStageInstanceSchema {
    model: D2ProgramStageInstance;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramStageInstance, keyof D2ProgramStageInstance>;
        $identifiable: Preset<D2ProgramStageInstance, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramStageInstance, FieldPresets["nameable"]>;
        $persisted: Preset<D2ProgramStageInstance, "code" | "created" | "lastUpdated" | "id">;
        $owner: Preset<D2ProgramStageInstance, "code" | "created" | "lastUpdated" | "id">;
    };
}

export interface D2DataSetElementSchema {
    model: D2DataSetElement;
    fields: {
        categoryCombo: D2CategoryComboSchema;
        dataElement: D2DataElementSchema;
        dataSet: D2DataSetSchema;
    };
    fieldPresets: {
        $all: Preset<D2DataSetElement, keyof D2DataSetElement>;
        $identifiable: Preset<D2DataSetElement, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataSetElement, FieldPresets["nameable"]>;
        $persisted: Preset<D2DataSetElement, "dataElement" | "categoryCombo" | "dataSet">;
        $owner: Preset<D2DataSetElement, "dataElement" | "categoryCombo" | "dataSet">;
    };
}

export interface D2ColorSchema {
    model: D2Color;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        color: string;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Color, keyof D2Color>;
        $identifiable: Preset<D2Color, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Color, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Color,
            | "lastUpdatedBy"
            | "code"
            | "color"
            | "created"
            | "lastUpdated"
            | "translations"
            | "name"
            | "id"
        >;
        $owner: Preset<
            D2Color,
            | "lastUpdatedBy"
            | "code"
            | "color"
            | "created"
            | "lastUpdated"
            | "translations"
            | "name"
            | "id"
        >;
    };
}

export interface D2CategoryDimensionSchema {
    model: D2CategoryDimension;
    fields: { categoryOptions: D2CategoryOptionSchema[]; dimension: D2CategorySchema };
    fieldPresets: {
        $all: Preset<D2CategoryDimension, keyof D2CategoryDimension>;
        $identifiable: Preset<D2CategoryDimension, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryDimension, FieldPresets["nameable"]>;
        $persisted: Preset<D2CategoryDimension, "categoryOptions" | "dimension">;
        $owner: Preset<D2CategoryDimension, "categoryOptions" | "dimension">;
    };
}

export interface D2ProgramTrackedEntityAttributeDimensionItemSchema {
    model: D2ProgramTrackedEntityAttributeDimensionItem;
    fields: {
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
        attribute: D2TrackedEntityAttributeSchema;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        program: D2ProgramSchema;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<
            D2ProgramTrackedEntityAttributeDimensionItem,
            keyof D2ProgramTrackedEntityAttributeDimensionItem
        >;
        $identifiable: Preset<
            D2ProgramTrackedEntityAttributeDimensionItem,
            FieldPresets["identifiable"]
        >;
        $nameable: Preset<D2ProgramTrackedEntityAttributeDimensionItem, FieldPresets["nameable"]>;
        $persisted: Preset<D2ProgramTrackedEntityAttributeDimensionItem, never>;
        $owner: Preset<D2ProgramTrackedEntityAttributeDimensionItem, never>;
    };
}

export interface D2DataElementOperandSchema {
    model: D2DataElementOperand;
    fields: {
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
        attributeOptionCombo: D2CategoryOptionComboSchema;
        attributeValues: D2AttributeValueSchema[];
        categoryOptionCombo: D2CategoryOptionComboSchema;
        code: Id;
        created: string;
        dataElement: D2DataElementSchema;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2DataElementOperand, keyof D2DataElementOperand>;
        $identifiable: Preset<D2DataElementOperand, FieldPresets["identifiable"]>;
        $nameable: Preset<D2DataElementOperand, FieldPresets["nameable"]>;
        $persisted: Preset<D2DataElementOperand, "categoryOptionCombo" | "dataElement">;
        $owner: Preset<D2DataElementOperand, "categoryOptionCombo" | "dataElement">;
    };
}

export interface D2MinMaxDataElementSchema {
    model: D2MinMaxDataElement;
    fields: {
        dataElement: D2DataElementSchema;
        generated: boolean;
        max: number;
        min: number;
        optionCombo: D2CategoryOptionComboSchema;
        source: D2OrganisationUnitSchema;
    };
    fieldPresets: {
        $all: Preset<D2MinMaxDataElement, keyof D2MinMaxDataElement>;
        $identifiable: Preset<D2MinMaxDataElement, FieldPresets["identifiable"]>;
        $nameable: Preset<D2MinMaxDataElement, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2MinMaxDataElement,
            "min" | "generated" | "max" | "dataElement" | "source" | "optionCombo"
        >;
        $owner: Preset<
            D2MinMaxDataElement,
            "min" | "generated" | "max" | "dataElement" | "source" | "optionCombo"
        >;
    };
}

export interface D2IconSchema {
    model: D2Icon;
    fields: {};
    fieldPresets: {
        $all: Preset<D2Icon, keyof D2Icon>;
        $identifiable: Preset<D2Icon, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Icon, FieldPresets["nameable"]>;
        $persisted: Preset<D2Icon, never>;
        $owner: Preset<D2Icon, never>;
    };
}

export interface D2ProgramInstanceSchema {
    model: D2ProgramInstance;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        createdAtClient: string;
        deleted: boolean;
        displayName: string;
        endDate: string;
        enrollmentDate: string;
        entityInstance: D2TrackedEntityInstanceSchema;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        followup: boolean;
        href: string;
        id: Id;
        incidentDate: string;
        lastUpdated: string;
        lastUpdatedAtClient: string;
        lastUpdatedBy: D2UserSchema;
        messageConversations: D2MessageConversationSchema[];
        name: string;
        organisationUnit: D2OrganisationUnitSchema;
        program: D2ProgramSchema;
        programStageInstances: D2ProgramStageInstanceSchema[];
        publicAccess: string;
        relationshipItems: any[];
        status: "ACTIVE" | "COMPLETED" | "CANCELLED";
        storedBy: string;
        trackedEntityComments: any[];
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramInstance, keyof D2ProgramInstance>;
        $identifiable: Preset<D2ProgramInstance, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramInstance, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramInstance,
            | "storedBy"
            | "endDate"
            | "organisationUnit"
            | "enrollmentDate"
            | "createdAtClient"
            | "program"
            | "messageConversations"
            | "trackedEntityComments"
            | "lastUpdated"
            | "relationshipItems"
            | "id"
            | "created"
            | "programStageInstances"
            | "entityInstance"
            | "followup"
            | "deleted"
            | "incidentDate"
            | "status"
            | "lastUpdatedAtClient"
        >;
        $owner: Preset<
            D2ProgramInstance,
            | "storedBy"
            | "endDate"
            | "organisationUnit"
            | "enrollmentDate"
            | "createdAtClient"
            | "program"
            | "messageConversations"
            | "trackedEntityComments"
            | "lastUpdated"
            | "id"
            | "created"
            | "programStageInstances"
            | "entityInstance"
            | "followup"
            | "deleted"
            | "incidentDate"
            | "status"
            | "lastUpdatedAtClient"
        >;
    };
}

export interface D2TrackedEntityProgramIndicatorDimensionSchema {
    model: D2TrackedEntityProgramIndicatorDimension;
    fields: {
        filter: string;
        legendSet: D2LegendSetSchema;
        programIndicator: D2ProgramIndicatorSchema;
    };
    fieldPresets: {
        $all: Preset<
            D2TrackedEntityProgramIndicatorDimension,
            keyof D2TrackedEntityProgramIndicatorDimension
        >;
        $identifiable: Preset<
            D2TrackedEntityProgramIndicatorDimension,
            FieldPresets["identifiable"]
        >;
        $nameable: Preset<D2TrackedEntityProgramIndicatorDimension, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityProgramIndicatorDimension,
            "filter" | "legendSet" | "programIndicator"
        >;
        $owner: Preset<
            D2TrackedEntityProgramIndicatorDimension,
            "filter" | "legendSet" | "programIndicator"
        >;
    };
}

export interface D2CategoryOptionGroupSetDimensionSchema {
    model: D2CategoryOptionGroupSetDimension;
    fields: {
        categoryOptionGroups: D2CategoryOptionGroupSchema[];
        dimension: D2CategoryOptionGroupSetSchema;
    };
    fieldPresets: {
        $all: Preset<D2CategoryOptionGroupSetDimension, keyof D2CategoryOptionGroupSetDimension>;
        $identifiable: Preset<D2CategoryOptionGroupSetDimension, FieldPresets["identifiable"]>;
        $nameable: Preset<D2CategoryOptionGroupSetDimension, FieldPresets["nameable"]>;
        $persisted: Preset<D2CategoryOptionGroupSetDimension, "categoryOptionGroups" | "dimension">;
        $owner: Preset<D2CategoryOptionGroupSetDimension, "categoryOptionGroups" | "dimension">;
    };
}

export interface D2LegendSchema {
    model: D2Legend;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        color: string;
        created: string;
        displayName: string;
        endValue: number;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        image: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        startValue: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Legend, keyof D2Legend>;
        $identifiable: Preset<D2Legend, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Legend, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Legend,
            | "lastUpdatedBy"
            | "image"
            | "code"
            | "endValue"
            | "color"
            | "created"
            | "lastUpdated"
            | "translations"
            | "name"
            | "startValue"
            | "id"
        >;
        $owner: Preset<
            D2Legend,
            | "lastUpdatedBy"
            | "image"
            | "code"
            | "endValue"
            | "color"
            | "created"
            | "lastUpdated"
            | "translations"
            | "name"
            | "startValue"
            | "id"
        >;
    };
}

export interface D2InterpretationSchema {
    model: D2Interpretation;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        chart: D2ChartSchema;
        code: Id;
        comments: D2InterpretationCommentSchema[];
        created: string;
        dataSet: D2DataSetSchema;
        displayName: string;
        eventChart: D2EventChartSchema;
        eventReport: D2EventReportSchema;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        likedBy: D2UserSchema[];
        likes: number;
        map: D2MapSchema;
        mentions: any[];
        name: string;
        organisationUnit: D2OrganisationUnitSchema;
        period: any;
        publicAccess: string;
        reportTable: D2ReportTableSchema;
        text: string;
        translations: D2Translation[];
        type: "REPORT_TABLE" | "CHART" | "MAP" | "EVENT_REPORT" | "EVENT_CHART" | "DATASET_REPORT";
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2Interpretation, keyof D2Interpretation>;
        $identifiable: Preset<D2Interpretation, FieldPresets["identifiable"]>;
        $nameable: Preset<D2Interpretation, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2Interpretation,
            | "likedBy"
            | "organisationUnit"
            | "publicAccess"
            | "reportTable"
            | "lastUpdated"
            | "id"
            | "text"
            | "map"
            | "dataSet"
            | "likes"
            | "period"
            | "userGroupAccesses"
            | "comments"
            | "created"
            | "eventReport"
            | "userAccesses"
            | "mentions"
            | "eventChart"
            | "user"
            | "chart"
        >;
        $owner: Preset<
            D2Interpretation,
            | "likedBy"
            | "organisationUnit"
            | "publicAccess"
            | "reportTable"
            | "lastUpdated"
            | "id"
            | "text"
            | "map"
            | "dataSet"
            | "likes"
            | "period"
            | "userGroupAccesses"
            | "comments"
            | "created"
            | "eventReport"
            | "userAccesses"
            | "mentions"
            | "eventChart"
            | "user"
            | "chart"
        >;
    };
}

export interface D2TrackedEntityDataElementDimensionSchema {
    model: D2TrackedEntityDataElementDimension;
    fields: { dataElement: D2DataElementSchema; filter: string; legendSet: D2LegendSetSchema };
    fieldPresets: {
        $all: Preset<
            D2TrackedEntityDataElementDimension,
            keyof D2TrackedEntityDataElementDimension
        >;
        $identifiable: Preset<D2TrackedEntityDataElementDimension, FieldPresets["identifiable"]>;
        $nameable: Preset<D2TrackedEntityDataElementDimension, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2TrackedEntityDataElementDimension,
            "filter" | "legendSet" | "dataElement"
        >;
        $owner: Preset<D2TrackedEntityDataElementDimension, "filter" | "legendSet" | "dataElement">;
    };
}

export interface D2ReportingRateSchema {
    model: D2ReportingRate;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataSet: D2DataSetSchema;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
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
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ReportingRate, keyof D2ReportingRate>;
        $identifiable: Preset<D2ReportingRate, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ReportingRate, FieldPresets["nameable"]>;
        $persisted: Preset<D2ReportingRate, never>;
        $owner: Preset<D2ReportingRate, never>;
    };
}

export interface D2ProgramStageDataElementSchema {
    model: D2ProgramStageDataElement;
    fields: {
        access: D2Access;
        allowFutureDate: boolean;
        allowProvidedElsewhere: boolean;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        compulsory: boolean;
        created: string;
        dataElement: D2DataElementSchema;
        displayInReports: boolean;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        programStage: D2ProgramStageSchema;
        publicAccess: string;
        renderOptionsAsRadio: boolean;
        renderType: any;
        skipSynchronization: boolean;
        sortOrder: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2ProgramStageDataElement, keyof D2ProgramStageDataElement>;
        $identifiable: Preset<D2ProgramStageDataElement, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramStageDataElement, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramStageDataElement,
            | "displayInReports"
            | "code"
            | "skipSynchronization"
            | "lastUpdated"
            | "renderOptionsAsRadio"
            | "id"
            | "allowFutureDate"
            | "renderType"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "dataElement"
            | "compulsory"
            | "allowProvidedElsewhere"
            | "sortOrder"
        >;
        $owner: Preset<
            D2ProgramStageDataElement,
            | "displayInReports"
            | "code"
            | "skipSynchronization"
            | "lastUpdated"
            | "renderOptionsAsRadio"
            | "id"
            | "allowFutureDate"
            | "renderType"
            | "lastUpdatedBy"
            | "programStage"
            | "created"
            | "dataElement"
            | "compulsory"
            | "allowProvidedElsewhere"
            | "sortOrder"
        >;
    };
}

export interface D2ProgramTrackedEntityAttributeSchema {
    model: D2ProgramTrackedEntityAttribute;
    fields: {
        access: D2Access;
        allowFutureDate: boolean;
        attribute: D2TrackedEntityAttributeSchema;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayInList: boolean;
        displayName: string;
        displayShortName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        mandatory: boolean;
        name: string;
        program: D2ProgramSchema;
        programTrackedEntityAttributeGroups: D2ProgramTrackedEntityAttributeGroupSchema[];
        publicAccess: string;
        renderOptionsAsRadio: boolean;
        renderType: any;
        searchable: boolean;
        sortOrder: number;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2ProgramTrackedEntityAttribute, keyof D2ProgramTrackedEntityAttribute>;
        $identifiable: Preset<D2ProgramTrackedEntityAttribute, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramTrackedEntityAttribute, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2ProgramTrackedEntityAttribute,
            | "code"
            | "programTrackedEntityAttributeGroups"
            | "program"
            | "mandatory"
            | "attribute"
            | "lastUpdated"
            | "renderOptionsAsRadio"
            | "id"
            | "allowFutureDate"
            | "renderType"
            | "lastUpdatedBy"
            | "created"
            | "searchable"
            | "displayInList"
            | "sortOrder"
        >;
        $owner: Preset<
            D2ProgramTrackedEntityAttribute,
            | "code"
            | "programTrackedEntityAttributeGroups"
            | "program"
            | "mandatory"
            | "attribute"
            | "lastUpdated"
            | "renderOptionsAsRadio"
            | "id"
            | "allowFutureDate"
            | "renderType"
            | "lastUpdatedBy"
            | "created"
            | "searchable"
            | "displayInList"
            | "sortOrder"
        >;
    };
}

export interface D2FileResourceSchema {
    model: D2FileResource;
    fields: {
        access: D2Access;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        contentLength: string;
        contentMd5: string;
        contentType: string;
        created: string;
        displayName: string;
        domain: "DATA_VALUE" | "PUSH_ANALYSIS" | "DOCUMENT" | "MESSAGE_ATTACHMENT" | "USER_AVATAR";
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        name: string;
        publicAccess: string;
        storageStatus: "NONE" | "PENDING" | "FAILED" | "STORED";
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
    };
    fieldPresets: {
        $all: Preset<D2FileResource, keyof D2FileResource>;
        $identifiable: Preset<D2FileResource, FieldPresets["identifiable"]>;
        $nameable: Preset<D2FileResource, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2FileResource,
            | "contentMd5"
            | "code"
            | "lastUpdated"
            | "id"
            | "contentType"
            | "lastUpdatedBy"
            | "created"
            | "domain"
            | "name"
            | "contentLength"
            | "user"
        >;
        $owner: Preset<
            D2FileResource,
            | "contentMd5"
            | "code"
            | "lastUpdated"
            | "id"
            | "contentType"
            | "lastUpdatedBy"
            | "created"
            | "domain"
            | "name"
            | "contentLength"
            | "user"
        >;
    };
}

export interface D2ProgramDataElementDimensionItemSchema {
    model: D2ProgramDataElementDimensionItem;
    fields: {
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
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        dataElement: D2DataElementSchema;
        description: string;
        dimensionItem: string;
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
        favorite: boolean;
        favorites: string[];
        href: string;
        id: Id;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        legendSet: D2LegendSetSchema;
        legendSets: D2LegendSetSchema[];
        name: string;
        program: D2ProgramSchema;
        publicAccess: string;
        shortName: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userGroupAccesses: D2UserGroupAccessSchema[];
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
    };
    fieldPresets: {
        $all: Preset<D2ProgramDataElementDimensionItem, keyof D2ProgramDataElementDimensionItem>;
        $identifiable: Preset<D2ProgramDataElementDimensionItem, FieldPresets["identifiable"]>;
        $nameable: Preset<D2ProgramDataElementDimensionItem, FieldPresets["nameable"]>;
        $persisted: Preset<D2ProgramDataElementDimensionItem, never>;
        $owner: Preset<D2ProgramDataElementDimensionItem, never>;
    };
}

export interface D2MessageConversationSchema {
    model: D2MessageConversation;
    fields: {
        access: D2Access;
        assignee: D2UserSchema;
        attributeValues: D2AttributeValueSchema[];
        code: Id;
        created: string;
        displayName: string;
        externalAccess: boolean;
        favorite: boolean;
        favorites: string[];
        followUp: boolean;
        href: string;
        id: Id;
        lastMessage: string;
        lastSender: D2UserSchema;
        lastSenderFirstname: string;
        lastSenderSurname: string;
        lastUpdated: string;
        lastUpdatedBy: D2UserSchema;
        messageCount: number;
        messageType: "PRIVATE" | "SYSTEM" | "VALIDATION_RESULT" | "TICKET";
        messages: any[];
        name: string;
        priority: "NONE" | "LOW" | "MEDIUM" | "HIGH";
        publicAccess: string;
        read: boolean;
        status: "NONE" | "OPEN" | "PENDING" | "INVALID" | "SOLVED";
        subject: string;
        translations: D2Translation[];
        user: D2UserSchema;
        userAccesses: D2UserAccessSchema[];
        userFirstname: string;
        userGroupAccesses: D2UserGroupAccessSchema[];
        userMessages: any[];
        userSurname: string;
    };
    fieldPresets: {
        $all: Preset<D2MessageConversation, keyof D2MessageConversation>;
        $identifiable: Preset<D2MessageConversation, FieldPresets["identifiable"]>;
        $nameable: Preset<D2MessageConversation, FieldPresets["nameable"]>;
        $persisted: Preset<
            D2MessageConversation,
            | "messageCount"
            | "subject"
            | "lastUpdated"
            | "messageType"
            | "userMessages"
            | "id"
            | "lastSender"
            | "created"
            | "lastMessage"
            | "priority"
            | "messages"
            | "assignee"
            | "user"
            | "status"
        >;
        $owner: Preset<
            D2MessageConversation,
            | "messageCount"
            | "subject"
            | "lastUpdated"
            | "messageType"
            | "userMessages"
            | "id"
            | "lastSender"
            | "created"
            | "lastMessage"
            | "priority"
            | "messages"
            | "assignee"
            | "user"
            | "status"
        >;
    };
}

export type D2Model =
    | D2AttributeValue
    | D2Attribute
    | D2UserAuthorityGroup
    | D2User
    | D2UserGroup
    | D2ExternalFileResource
    | D2SqlView
    | D2Constant
    | D2OAuth2Client
    | D2JobConfiguration
    | D2Option
    | D2OptionSet
    | D2OptionGroupSet
    | D2OptionGroup
    | D2LegendSet
    | D2ColorSet
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
    | D2TrackedEntityTypeAttribute
    | D2ProgramTrackedEntityAttributeGroup
    | D2ProgramStageSection
    | D2ProgramNotificationTemplate
    | D2ProgramStage
    | D2SMSCommand
    | D2Program
    | D2EventReport
    | D2EventChart
    | D2ProgramSection
    | D2ProgramIndicator
    | D2ProgramRuleVariable
    | D2ProgramIndicatorGroup
    | D2RelationshipType
    | D2ProgramRuleAction
    | D2ProgramRule
    | D2MapView
    | D2ValidationResult
    | D2Document
    | D2ReportTable
    | D2ExternalMapLayer
    | D2Chart
    | D2Map
    | D2Report
    | D2Predictor
    | D2PredictorGroup
    | D2DashboardItem
    | D2Dashboard
    | D2PushAnalysis
    | D2KeyJsonValue
    | D2UserCredentials
    | D2AnalyticsPeriodBoundary
    | D2UserAccess
    | D2Relationship
    | D2DataElementGroupSetDimension
    | D2InterpretationComment
    | D2MetadataVersion
    | D2DataInputPeriod
    | D2TrackedEntityInstance
    | D2TrackedEntityInstanceFilter
    | D2ProgramStageInstanceFilter
    | D2OrganisationUnitGroupSetDimension
    | D2UserGroupAccess
    | D2ProgramStageInstance
    | D2DataSetElement
    | D2Color
    | D2CategoryDimension
    | D2ProgramTrackedEntityAttributeDimensionItem
    | D2DataElementOperand
    | D2MinMaxDataElement
    | D2Icon
    | D2ProgramInstance
    | D2TrackedEntityProgramIndicatorDimension
    | D2CategoryOptionGroupSetDimension
    | D2Legend
    | D2Interpretation
    | D2TrackedEntityDataElementDimension
    | D2ReportingRate
    | D2ProgramStageDataElement
    | D2ProgramTrackedEntityAttribute
    | D2FileResource
    | D2ProgramDataElementDimensionItem
    | D2MessageConversation;

export enum D2ModelEnum {
    attributeValues = "attributeValues",
    attributes = "attributes",
    userRoles = "userRoles",
    users = "users",
    userGroups = "userGroups",
    externalFileResources = "externalFileResources",
    sqlViews = "sqlViews",
    constants = "constants",
    oAuth2Clients = "oAuth2Clients",
    jobConfigurations = "jobConfigurations",
    options = "options",
    optionSets = "optionSets",
    optionGroupSets = "optionGroupSets",
    optionGroups = "optionGroups",
    legendSets = "legendSets",
    colorSets = "colorSets",
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
    trackedEntityTypeAttributes = "trackedEntityTypeAttributes",
    programTrackedEntityAttributeGroups = "programTrackedEntityAttributeGroups",
    programStageSections = "programStageSections",
    programNotificationTemplates = "programNotificationTemplates",
    programStages = "programStages",
    smsCommands = "smsCommands",
    programs = "programs",
    eventReports = "eventReports",
    eventCharts = "eventCharts",
    programSections = "programSections",
    programIndicators = "programIndicators",
    programRuleVariables = "programRuleVariables",
    programIndicatorGroups = "programIndicatorGroups",
    relationshipTypes = "relationshipTypes",
    programRuleActions = "programRuleActions",
    programRules = "programRules",
    mapViews = "mapViews",
    validationResults = "validationResults",
    documents = "documents",
    reportTables = "reportTables",
    externalMapLayers = "externalMapLayers",
    charts = "charts",
    maps = "maps",
    reports = "reports",
    predictors = "predictors",
    predictorGroups = "predictorGroups",
    dashboardItems = "dashboardItems",
    dashboards = "dashboards",
    pushAnalysis = "pushAnalysis",
    dataStores = "dataStores",
    userCredentials = "userCredentials",
    analyticsPeriodBoundaries = "analyticsPeriodBoundaries",
    userAccesses = "userAccesses",
    relationships = "relationships",
    dataElementGroupSetDimensions = "dataElementGroupSetDimensions",
    interpretationComments = "interpretationComments",
    metadataVersions = "metadataVersions",
    dataInputPeriods = "dataInputPeriods",
    trackedEntityInstances = "trackedEntityInstances",
    trackedEntityInstanceFilters = "trackedEntityInstanceFilters",
    eventFilters = "eventFilters",
    organisationUnitGroupSetDimensions = "organisationUnitGroupSetDimensions",
    userGroupAccesses = "userGroupAccesses",
    programStageInstances = "programStageInstances",
    dataSetElements = "dataSetElements",
    colors = "colors",
    categoryDimensions = "categoryDimensions",
    ProgramTrackedEntityAttributeDimensionItems = "ProgramTrackedEntityAttributeDimensionItems",
    dataElementOperands = "dataElementOperands",
    minMaxDataElements = "minMaxDataElements",
    icons = "icons",
    programInstances = "programInstances",
    dataElementDimensions = "dataElementDimensions",
    categoryOptionGroupSetDimensions = "categoryOptionGroupSetDimensions",
    legends = "legends",
    interpretations = "interpretations",
    trackedEntityDataElementDimensions = "trackedEntityDataElementDimensions",
    reportingRates = "reportingRates",
    programStageDataElements = "programStageDataElements",
    programTrackedEntityAttributes = "programTrackedEntityAttributes",
    fileResources = "fileResources",
    programDataElements = "programDataElements",
    messageConversations = "messageConversations",
}

export type D2ModelSchemas = {
    attributeValues: D2AttributeValueSchema;
    attributes: D2AttributeSchema;
    userRoles: D2UserAuthorityGroupSchema;
    users: D2UserSchema;
    userGroups: D2UserGroupSchema;
    externalFileResources: D2ExternalFileResourceSchema;
    sqlViews: D2SqlViewSchema;
    constants: D2ConstantSchema;
    oAuth2Clients: D2OAuth2ClientSchema;
    jobConfigurations: D2JobConfigurationSchema;
    options: D2OptionSchema;
    optionSets: D2OptionSetSchema;
    optionGroupSets: D2OptionGroupSetSchema;
    optionGroups: D2OptionGroupSchema;
    legendSets: D2LegendSetSchema;
    colorSets: D2ColorSetSchema;
    organisationUnits: D2OrganisationUnitSchema;
    organisationUnitLevels: D2OrganisationUnitLevelSchema;
    organisationUnitGroups: D2OrganisationUnitGroupSchema;
    organisationUnitGroupSets: D2OrganisationUnitGroupSetSchema;
    categoryOptions: D2CategoryOptionSchema;
    categoryOptionGroups: D2CategoryOptionGroupSchema;
    categoryOptionGroupSets: D2CategoryOptionGroupSetSchema;
    categories: D2CategorySchema;
    categoryCombos: D2CategoryComboSchema;
    categoryOptionCombos: D2CategoryOptionComboSchema;
    dataElements: D2DataElementSchema;
    dataElementGroups: D2DataElementGroupSchema;
    dataElementGroupSets: D2DataElementGroupSetSchema;
    indicatorTypes: D2IndicatorTypeSchema;
    analyticsTableHooks: D2AnalyticsTableHookSchema;
    indicators: D2IndicatorSchema;
    indicatorGroups: D2IndicatorGroupSchema;
    indicatorGroupSets: D2IndicatorGroupSetSchema;
    dataEntryForms: D2DataEntryFormSchema;
    dataSets: D2DataSetSchema;
    dataSetNotificationTemplates: D2DataSetNotificationTemplateSchema;
    sections: D2SectionSchema;
    dataApprovalLevels: D2DataApprovalLevelSchema;
    dataApprovalWorkflows: D2DataApprovalWorkflowSchema;
    validationRules: D2ValidationRuleSchema;
    validationRuleGroups: D2ValidationRuleGroupSchema;
    validationNotificationTemplates: D2ValidationNotificationTemplateSchema;
    trackedEntityAttributes: D2TrackedEntityAttributeSchema;
    trackedEntityTypes: D2TrackedEntityTypeSchema;
    trackedEntityTypeAttributes: D2TrackedEntityTypeAttributeSchema;
    programTrackedEntityAttributeGroups: D2ProgramTrackedEntityAttributeGroupSchema;
    programStageSections: D2ProgramStageSectionSchema;
    programNotificationTemplates: D2ProgramNotificationTemplateSchema;
    programStages: D2ProgramStageSchema;
    smsCommands: D2SMSCommandSchema;
    programs: D2ProgramSchema;
    eventReports: D2EventReportSchema;
    eventCharts: D2EventChartSchema;
    programSections: D2ProgramSectionSchema;
    programIndicators: D2ProgramIndicatorSchema;
    programRuleVariables: D2ProgramRuleVariableSchema;
    programIndicatorGroups: D2ProgramIndicatorGroupSchema;
    relationshipTypes: D2RelationshipTypeSchema;
    programRuleActions: D2ProgramRuleActionSchema;
    programRules: D2ProgramRuleSchema;
    mapViews: D2MapViewSchema;
    validationResults: D2ValidationResultSchema;
    documents: D2DocumentSchema;
    reportTables: D2ReportTableSchema;
    externalMapLayers: D2ExternalMapLayerSchema;
    charts: D2ChartSchema;
    maps: D2MapSchema;
    reports: D2ReportSchema;
    predictors: D2PredictorSchema;
    predictorGroups: D2PredictorGroupSchema;
    dashboardItems: D2DashboardItemSchema;
    dashboards: D2DashboardSchema;
    pushAnalysis: D2PushAnalysisSchema;
    dataStores: D2KeyJsonValueSchema;
    userCredentials: D2UserCredentialsSchema;
    analyticsPeriodBoundaries: D2AnalyticsPeriodBoundarySchema;
    userAccesses: D2UserAccessSchema;
    relationships: D2RelationshipSchema;
    dataElementGroupSetDimensions: D2DataElementGroupSetDimensionSchema;
    interpretationComments: D2InterpretationCommentSchema;
    metadataVersions: D2MetadataVersionSchema;
    dataInputPeriods: D2DataInputPeriodSchema;
    trackedEntityInstances: D2TrackedEntityInstanceSchema;
    trackedEntityInstanceFilters: D2TrackedEntityInstanceFilterSchema;
    eventFilters: D2ProgramStageInstanceFilterSchema;
    organisationUnitGroupSetDimensions: D2OrganisationUnitGroupSetDimensionSchema;
    userGroupAccesses: D2UserGroupAccessSchema;
    programStageInstances: D2ProgramStageInstanceSchema;
    dataSetElements: D2DataSetElementSchema;
    colors: D2ColorSchema;
    categoryDimensions: D2CategoryDimensionSchema;
    ProgramTrackedEntityAttributeDimensionItems: D2ProgramTrackedEntityAttributeDimensionItemSchema;
    dataElementOperands: D2DataElementOperandSchema;
    minMaxDataElements: D2MinMaxDataElementSchema;
    icons: D2IconSchema;
    programInstances: D2ProgramInstanceSchema;
    dataElementDimensions: D2TrackedEntityProgramIndicatorDimensionSchema;
    categoryOptionGroupSetDimensions: D2CategoryOptionGroupSetDimensionSchema;
    legends: D2LegendSchema;
    interpretations: D2InterpretationSchema;
    trackedEntityDataElementDimensions: D2TrackedEntityDataElementDimensionSchema;
    reportingRates: D2ReportingRateSchema;
    programStageDataElements: D2ProgramStageDataElementSchema;
    programTrackedEntityAttributes: D2ProgramTrackedEntityAttributeSchema;
    fileResources: D2FileResourceSchema;
    programDataElements: D2ProgramDataElementDimensionItemSchema;
    messageConversations: D2MessageConversationSchema;
};
