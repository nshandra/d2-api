import _ from "lodash";

export const joinPath = (...parts: (string | undefined | null)[]): string => {
    return _(parts)
        .map(part => (part ? part.replace(/^\/+|\/+$/g, "") : null))
        .compact()
        .join("/");
};
