export type FetchErrorType = "network" | "unknown" | "access" | "not_found";
export type FetchErrorDetails = Response | Error;

export interface FetchErrorPayload {
    type: FetchErrorType;
    message: string;
    details?: FetchErrorDetails;
}

export class FetchError extends Error implements FetchErrorPayload {
    public static readonly ERROR_NETWORK = "network";
    public static readonly ERROR_UNKNOWN = "unknown";
    public static readonly ERROR_ACCESS = "access";
    public static readonly ERROR_NOT_FOUND = "not_found";

    public type: FetchErrorType;
    public details?: FetchErrorDetails;

    public constructor({ message, type, details }: FetchErrorPayload) {
        super(message);
        this.type = type;
        this.details = details;
    }
}
