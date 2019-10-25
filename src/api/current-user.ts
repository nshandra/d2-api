import { D2ApiResponse } from "./common";
import { D2Api } from "./d2-api";
import { D2User } from "./../schemas/models";
import { cache } from "../utils/cache";

export default class D2ApiCurrentUser {
    constructor(private api: D2Api) {
        this.api = api;
    }

    _get(): D2ApiResponse<D2User> {
        return this.api.get("/me");
    }

    get = cache("currentUser.get", this._get.bind(this));
}
