export type JsonValue = boolean | number | string | null | JsonArray | JsonMap;

export interface JsonArray extends Array<JsonValue> {}

export interface JsonMap {
    [key: string]: JsonValue;
}
