import { SelectedPick } from "./inference";
import { D2ApiResponse } from "./common";
import { D2Api } from "./d2-api";
import { D2UserSchema } from "./../schemas/models";
import { cache } from "../utils/cache";

type CurrentUser = SelectedPick<D2UserSchema, { $all: true }>;

export default class D2ApiCurrentUser {
    constructor(private api: D2Api) {
        this.api = api;
    }

    _get(): D2ApiResponse<CurrentUser> {
        return this.api.get("/me");
    }

    get = cache<D2ApiResponse<CurrentUser>>("currentUser.get", this._get.bind(this));
}
