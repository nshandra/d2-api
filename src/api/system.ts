import _ from "lodash";

import { D2ApiResponse } from "./common";
import { D2ApiBase } from "./d2Api";
import { Id } from "../schemas";

export class System {
    constructor(public d2Api: D2ApiBase) {}

    getIds(options: { limit?: number }): D2ApiResponse<Id[]> {
        return this.d2Api
            .request<{ codes: Id[] }>({ method: "GET", url: `/system/id`, params: options })
            .map(res => (res.data && res.data.codes) || []);
    }

    get info(): D2ApiResponse<SystemInfo> {
        return this.d2Api.request({ method: "GET", url: `/system/info` });
    }

    ping(): D2ApiResponse<boolean> {
        return this.d2Api
            .request({
                method: "GET",
                url: `/system/info`,
                validateStatus: (status: number) => [200, 302, 401].includes(status),
            })
            .map(res => res.status === 200);
    }

    getTaskEntries(selector: TaskSelector): D2ApiResponse<TaskEntry[]> {
        return this.d2Api.request({
            method: "GET",
            url: _.compact(["/system/tasks", selector.category, selector.id]).join("/"),
        });
    }

    get tasks(): D2ApiResponse<Tasks> {
        return this.d2Api.request({ method: "GET", url: `/system/tasks` });
    }

    get flags(): D2ApiResponse<SystemItem[]> {
        return this.d2Api.request({ method: "GET", url: `/system/flags` });
    }

    get styles(): D2ApiResponse<SystemItem[]> {
        return this.d2Api.request({ method: "GET", url: `/system/styles` });
    }
}

export interface SystemItem {
    name: string;
    key: string;
    path: string;
}

export type Tasks = Record<TaskCategory, Record<Id, TaskEntry[]>>;

export type TaskCategory =
    | "ANALYTICSTABLE_UPDATE"
    | "ANALYTICS_TABLE"
    | "COMPLETE_DATA_SET_REGISTRATION_IMPORT"
    | "CREDENTIALS_EXPIRY_ALERT"
    | "DATAVALUE_IMPORT"
    | "DATAVALUE_IMPORT_INTERNAL"
    | "DATA_INTEGRITY"
    | "DATA_SET_NOTIFICATION"
    | "DATA_STATISTICS"
    | "DATA_SYNC"
    | "ENROLLMENT_IMPORT"
    | "EVENT_IMPORT"
    | "FILE_RESOURCE_CLEANUP"
    | "GML_IMPORT"
    | "LEADER_ELECTION"
    | "LEADER_RENEWAL"
    | "METADATA_IMPORT"
    | "META_DATA_SYNC"
    | "MOCK"
    | "MONITORING"
    | "PREDICTOR"
    | "PROGRAM_DATA_SYNC"
    | "PROGRAM_NOTIFICATIONS"
    | "PUSH_ANALYSIS"
    | "REMOVE_EXPIRED_RESERVED_VALUES"
    | "RESOURCE_TABLE"
    | "SEND_SCHEDULED_MESSAGE"
    | "SMS_SEND"
    | "TEI_IMPORT"
    | "VALIDATION_RESULTS_NOTIFICATION";

export interface TaskSelector {
    category: TaskCategory;
    id?: Id;
}

export interface TaskEntry {
    uid: Id;
    level: string;
    category: TaskCategory;
    time: string;
    message: string;
    completed: boolean;
}

export interface SystemInfo {
    // Docs: If the user who is requesting this resource does not have full authority in the
    // system then only the first seven properties will be included, as this information is
    // security sensitive.
    contextPath: string;
    userAgent: string;
    version: string;
    revision: string;
    buildTime: Date;
    serverDate: Date;
    environmentVariable: string;

    javaVersion?: string;
    javaVendor?: string;
    calendar?: string;
    dateFormat?: string;
    lastAnalyticsTableSuccess?: Date;
    intervalSinceLastAnalyticsTableSuccess?: string;
    lastAnalyticsTableRuntime?: string;
    jasperReportsVersion?: string;
    fileStoreProvider?: string;
    readOnlyMode?: string;
    nodeId?: string;
    osName?: string;
    osArchitecture?: string;
    osVersion?: string;
    externalDirectory?: string;
    databaseInfo?: {
        name: string;
        user: string;
        spatialSupport: boolean;
    };
    readReplicaCount?: number;
    memoryInfo?: string;
    cpuCores?: number;
    encryption?: boolean;
    emailConfigured?: boolean;
    redisEnabled?: boolean;
    systemId?: string;
    systemName?: string;
    clusterHostname?: string;
    isMetadataVersionEnabled?: boolean;
    metadataAudit?: {
        persist: boolean;
        log: boolean;
    };
    logging?: {
        level: string;
        format: string;
        consoleEnabled: boolean;
        consoleLevel: string;
        consoleFormat: string;
        fileEnabled: boolean;
        fileName: string;
        fileLevel: string;
        fileFormat: string;
    };
    metadataSyncEnabled?: boolean;
}
