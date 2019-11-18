import { useEffect, useState } from "react";
import { D2ApiResponse } from "../api/common";

type D2ApiDataHookQuery<Data> = Pick<D2ApiResponse<Data>, "cancel" | "getData">;

interface D2ApiDataHookState<Data> {
    loading: boolean;
    data?: Data;
    error?: Error;
}

interface D2ApiDataHookResponse<Data> extends D2ApiDataHookState<Data> {
    refetch(query: D2ApiDataHookQuery<Data>): void;
}

export const useD2ApiData = <T>(apiQuery: D2ApiDataHookQuery<T>): D2ApiDataHookResponse<T> => {
    const [state, setState] = useState<D2ApiDataHookState<T>>({ loading: true });
    const [query, refetch] = useState<D2ApiDataHookQuery<T>>(apiQuery);

    useEffect(() => {
        const { cancel, getData } = query;
        getData()
            .then(data => {
                setState({ loading: false, data });
            })
            .catch(error => {
                setState({ loading: false, error });
            });

        return cancel;
    }, [query, setState]);

    return { ...state, refetch };
};
