let cacheStore: { [key: string]: any } = {};

export function cache<S>(mainKey: string, fn: (...args: any[]) => S): (...args: any[]) => S {
    return function(...args: any) {
        const cacheKey = mainKey + "-" + JSON.stringify(args);

        if (cacheStore[cacheKey]) {
            return cacheStore[cacheKey];
        } else {
            const value = fn(...args);
            cacheStore[cacheKey] = value;
            return value;
        }
    };
}
