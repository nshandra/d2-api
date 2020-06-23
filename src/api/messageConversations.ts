import { D2Api } from "./d2-api";
import { Ref } from "../schemas";
import { D2ApiResponse } from "./api-response";

export interface PostMessage {
    subject: string;
    text: string;
    users: Ref[];
    userGrousp?: Ref[];
    organisationUnits?: Ref[];
}

export default class MessageConversations {
    constructor(public d2Api: D2Api) {}

    post(message: PostMessage): D2ApiResponse<void> {
        return this.d2Api.post<void>("/messageConversations", {}, message);
    }
}
