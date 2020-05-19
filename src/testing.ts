import { D2ApiGeneric } from "./api/d2Api";
import MockAdapter from "axios-mock-adapter";

export type D2ApiMock = MockAdapter;

export function getMockApiFromClass<D2Api extends D2ApiGeneric>(apiClass: {
    new (): D2Api;
}): () => { api: D2Api; mock: MockAdapter } {
    return () => {
        const api = new apiClass();
        const mock = new MockAdapter(api.connection);
        return { api, mock };
    };
}
