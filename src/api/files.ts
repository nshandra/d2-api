import { generateUid } from "../utils/uid";
import { Id } from "./base";
import { D2ApiResponse } from "./common";
import { D2ApiGeneric } from "./d2Api";

export interface FileUploadParameters {
    id?: Id;
    name: string;
    data: Blob;
    ignoreDocument?: boolean;
}

interface PartialSaveResponse {
    response?: {
        fileResource?: {
            id?: string;
        };
    };
}

export interface FileUploadResult {
    httpStatus: string;
    httpStatusCode: number;
    status: "OK" | "ERROR";
    message?: string;
    response: {
        responseType: "ObjectReport";
        klass: string;
        uid: Id;
        errorReports?: Array<{
            message: string;
            mainKlass: string;
            errorCode: string;
            errorProperties: string[];
        }>;
    };
}

export class Files {
    constructor(public d2Api: D2ApiGeneric) {}

    upload(params: FileUploadParameters): D2ApiResponse<FileUploadResult> {
        const { id, name, data } = params;

        const formData = new FormData();
        formData.append("file", data, name);
        formData.append("domain", "DOCUMENT");

        const response = this.d2Api.apiConnection
            .request<PartialSaveResponse>({
                method: "post",
                url: "/fileResources",
                data: formData,
                dataType: "raw",
            })
            .getData()
            .then(data => {
                const fileResourceId =
                    data.response && data.response.fileResource
                        ? data.response.fileResource.id
                        : undefined;

                const method = id ? "put" : "post";

                const { response } = this.d2Api[method]<FileUploadResult>(
                    "/documents",
                    {},
                    {
                        id: id || generateUid(),
                        name,
                        url: fileResourceId,
                    }
                );

                return response;
            });

        return D2ApiResponse.build({ response });
    }
}
