import { generateUid } from "../utils/uid";
import { Id, MetadataResponse } from "./base";
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
    id: string;
    response: MetadataResponse;
}

export class Files {
    constructor(public d2Api: D2ApiGeneric) {}

    upload(params: FileUploadParameters): D2ApiResponse<FileUploadResult> {
        const { id = generateUid(), name, data } = params;

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

                const document = { id, name, url: fileResourceId };

                const { response } = this.d2Api.post<MetadataResponse>(
                    "/metadata",
                    {},
                    { documents: [document] }
                );

                return response;
            });

        return D2ApiResponse.build({
            response: response.then(({ data, ...rest }) => ({
                ...rest,
                data: { id, response: data },
            })),
        });
    }
}
