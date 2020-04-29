/* Cache a lazy class-property getter */
export function cached<Res>(_target: any, _key: any, descriptor: TypedPropertyDescriptor<Res>) {
    let cachedValue: Res | undefined = undefined;
    const originalGetter = descriptor.get;
    if (!originalGetter) throw "This decorator can only be applied on class properties";

    descriptor.get = function() {
        if (!cachedValue) cachedValue = originalGetter.bind(this)();
        return cachedValue;
    };
}

/* Define a lazy cached property of an object */
export function defineLazyCachedProperty<Obj extends object, Key extends keyof Obj, Res>(
    object: Obj,
    name: Key,
    get: () => Res
): void {
    let cachedValue: Res | undefined = undefined;

    Object.defineProperty(object, name, {
        get: () => {
            if (!cachedValue) cachedValue = get();
            return cachedValue;
        },
        enumerable: true,
        configurable: true,
    });
}
