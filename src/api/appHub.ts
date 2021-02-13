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
    appType: string;
    created: Date;
    description: string;
    developer: AppDeveloper;
    id: string;
    images: AppImage[];
    lastUpdated: Date;
    name: string;
    owner: string;
    reviews: [];
    sourceUrl: string;
    status: string;
    versions: AppVersion[];
}

export interface AppVersion {
    channel: string;
    created: Date;
    demoUrl: string;
    downloadUrl: string;
    id: string;
    lastUpdated: Date;
    maxDhisVersion: string;
    minDhisVersion: string;
    version: string;
}

export interface AppDeveloper {
    address: string;
    email: string;
    name: string;
    organization: string;
}

export interface AppImage {
    caption: string;
    created: Date;
    description: string;
    id: string;
    imageUrl: string;
    lastUpdated: Date;
    logo: boolean;
}
