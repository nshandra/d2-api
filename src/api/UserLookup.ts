import _ from "lodash";

import { D2ApiGeneric } from "./d2Api";
import { Id } from "./base";
import { CancelableResponse } from "../repositories/CancelableResponse";

export class UserLookup {
    constructor(public api: D2ApiGeneric) {}

    get(id: Id): CancelableResponse<UserInfo> {
        return this.api.get<UserInfo>(`/userLookup/${id}`);
    }

    query(searchText: string): CancelableResponse<UserInfo[]> {
        return this.api.get<UserInfo[]>(`/userLookup`, { query: searchText });
    }
}

export interface UserInfo {
    id: Id;
    username: string;
    firstName: string;
    surname: string;
    displayName: string;
}
