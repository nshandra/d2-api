import { SelectedPick } from "./inference";
import { D2ApiResponse, processFieldsFilterParams } from "./common";
import { D2Api } from "./d2-api";
import { Selector } from "./inference";
import { D2UserSchema } from "./../schemas/models";

interface GetOptions {
    fields: Selector<D2UserSchema>;
}

export default class D2ApiCurrentUser {
    constructor(private api: D2Api) {
        this.api = api;
    }

    get<Options extends GetOptions, User = SelectedPick<D2UserSchema, Options["fields"]>>(
        options: Options
    ): D2ApiResponse<User> {
        const params = processFieldsFilterParams(options as any);
        return this.api.get<User>("/me", params);
    }
}
