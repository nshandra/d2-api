import React, { useContext } from "react";
import { D2ApiGeneric } from "../api/d2Api";

interface Context {
    api?: D2ApiGeneric;
    d2?: object;
}

export const ApiContext = React.createContext<Context>({});

export function useD2() {
    const { d2 } = useContext(ApiContext);
    if (!d2) {
        throw new Error("D2 has not been initialized");
    } else {
        return d2;
    }
}

export function useD2Api() {
    const { api } = useContext(ApiContext);
    if (!api) {
        throw new Error("API has not been initialized");
    } else {
        return api;
    }
}
