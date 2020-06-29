import { Ref } from "../schemas";
import { D2ApiResponse } from "./api-response";
import { D2ApiGeneric } from "./d2Api";

export interface PostMessage {
    subject: string;
    text: string;
    users: Ref[];
    userGrousp?: Ref[];
    organisationUnits?: Ref[];
}

export default class MessageConversations {
    constructor(public d2Api: D2ApiGeneric) {}

    post(message: PostMessage): D2ApiResponse<void> {
        return this.d2Api.post<void>("/messageConversations", {}, message);
    }
}
