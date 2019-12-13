import axios, { Canceler } from "axios";
import { useCallback, useEffect, useState } from "react";
import { D2ApiResponse } from "../api/common";

export type D2ApiDataHookQuery<Data> = Pick<D2ApiResponse<Data>, "cancel" | "getData">;

interface D2ApiDataHookState<Data> {
    loading: boolean;
    data?: Data;
    error?: Error;
}

interface D2ApiDataHookResponse<Data> extends D2ApiDataHookState<Data> {
    refetch(query: D2ApiDataHookQuery<Data>): Canceler;
}

export const useD2ApiData = <T>(apiQuery?: D2ApiDataHookQuery<T>): D2ApiDataHookResponse<T> => {
    const [query, setQuery] = useState<D2ApiDataHookQuery<T> | undefined>(apiQuery);
    const [state, setState] = useState<D2ApiDataHookState<T>>({ loading: true });

    useEffect(() => {
        if (query) {
            const { cancel, getData } = query;
            getData()
                .then(data => {
                    setState({ loading: false, data });
                })
                .catch(error => {
                    if (!axios.isCancel(error)) {
                        setState({ loading: false, error });
                        console.error(error);
                    }
                });

            return cancel;
        }
    }, [query, setState]);

    const refetch = useCallback(
        (newQuery: D2ApiDataHookQuery<T>) => {
            setState((prevState: D2ApiDataHookState<T>) => ({ ...prevState, loading: true }));
            setQuery(newQuery);
            return newQuery.cancel;
        },
        [setState, setQuery]
    );

    return { ...state, refetch };
};
