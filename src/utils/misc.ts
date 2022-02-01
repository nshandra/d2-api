export function fromPairs<Key extends string, Value>(
    pairs: Array<[Key, Value]>
): Record<Key, Value> {
    const empty = {} as Record<Key, Value>;
    return pairs.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), empty);
}
