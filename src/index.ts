export { D2ApiDefault, D2ApiBase as D2Api } from "./api/d2Api";
export { Id, Ref } from "./schemas/base";
export { D2ApiMock, getMockApiFromClass } from "./testing";

export { ApiContext, useD2, useD2Api } from "./react/context";
export { useD2ApiData, D2ApiDataHookQuery } from "./react/useD2ApiData";
