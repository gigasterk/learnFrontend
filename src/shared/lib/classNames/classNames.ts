
type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additinal: string[] = []): string {
    return [
        cls,
        ...additinal,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ')
}
