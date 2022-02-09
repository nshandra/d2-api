import { Ref } from "../schemas";
import { RequireAtLeastOne } from "../utils/types";
import { D2ApiGeneric } from "./d2Api";
import { D2ApiResponse } from "./common";

interface Message {
    subject: string;
    text: string;
    users?: Ref[];
    userGroups?: Ref[];
    organisationUnits?: Ref[];
}

export type PostMessage = RequireAtLeastOne<Message, "users" | "userGroups" | "organisationUnits">;

export class MessageConversations {
    constructor(public d2Api: D2ApiGeneric) {}

    post(message: PostMessage): D2ApiResponse<void> {
        return this.d2Api.post<void>("/messageConversations", {}, message);
    }
}
