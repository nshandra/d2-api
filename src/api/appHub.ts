import { D2ApiGeneric } from "./d2Api";
import { D2ApiResponse } from "./common";

/* https://docs.dhis2.org/master/en/developer/html/webapi_app_store.html */

export class AppHub {
    constructor(public d2Api: D2ApiGeneric) {}

    list(): D2ApiResponse<App[]> {
        return this.d2Api.get<App[]>("/appHub");
    }

    install(version: string): D2ApiResponse<void> {
        return this.d2Api.post(`/appHub/${version}`);
    }
}

export interface App {
    appType: AppType;
    created: string;
    description: string;
    developer: AppDeveloper;
    id: string;
    images: AppImage[];
    lastUpdated: string;
    name: string;
    owner: string;
    reviews: [];
    sourceUrl: string;
    status: AppStatus;
    versions: AppVersion[];
}

export interface AppVersion {
    id: string;
    version: string;
    created: string;
    demoUrl: string;
    downloadUrl: string;
    lastUpdated: string;
    maxDhisVersion: string;
    minDhisVersion: string;
}

export interface AppDeveloper {
    address: string;
    email: string;
    name: string;
    organization: string;
}

export interface AppImage {
    caption: string;
    created: string;
    description: string;
    id: string;
    imageUrl: string;
    lastUpdated: string;
    logo: boolean;
}

export type AppType = "APP" | "RESOURCE" | "DASHBOARD_WIDGET" | "TRACKER_DASHBOARD_WIDGET";

export type AppStatus =
    | "OK"
    | "INVALID_BUNDLED_APP_OVERRIDE"
    | "INVALID_CORE_APP"
    | "NAMESPACE_TAKEN"
    | "INVALID_ZIP_FORMAT"
    | "MISSING_MANIFEST"
    | "INVALID_MANIFEST_JSON"
    | "INSTALLATION_FAILED"
    | "NOT_FOUND"
    | "MISSING_SYSTEM_BASE_URL"
    | "APPROVED"
    | "PENDING"
    | "NOT_APPROVED"
    | "DELETION_IN_PROGRESS";
