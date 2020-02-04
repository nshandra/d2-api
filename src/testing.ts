import MockAdapter from "axios-mock-adapter";
import { D2ApiDefault, D2Api } from "./api/d2-api";

export type D2ApiMock = MockAdapter;

export function getMockApi(): { api: D2Api; mock: MockAdapter } {
    const api = new D2ApiDefault();
    const mock = new MockAdapter(api.connection);
    return { api, mock };
}
