import { D2ApiGeneric } from "./d2Api";
import { Id } from "./base";
import { CancelableResponse } from "../repositories/CancelableResponse";

export class UserLookup {
    constructor(public api: D2ApiGeneric) {}

    get(id: Id): CancelableResponse<UserInfo> {
        return this.api.get<UserInfo>(`/userLookup/${id}`);
    }

    query(searchText: string): CancelableResponse<UserLookupQueryResponse> {
        return this.api.get<UserLookupQueryResponse>(`/userLookup`, { query: searchText });
    }
}

export interface UserLookupQueryResponse {
    users: UserInfo[];
}

export interface UserInfo {
    id: Id;
    username: string;
    firstName: string;
    surname: string;
    displayName: string;
}
