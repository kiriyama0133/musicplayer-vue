interface MusicData {
    filepath: string;
    metadata: {
        title: string;
        artist: string;
        album: string;
        year: string;
        track: string;
        genre: string;
        duration: string;
        bitrate: string;
        cover: Uint8Array | undefined;
    };
}
export declare const MusicStore: import("pinia").StoreDefinition<"music", Pick<{
    mp3_data: import("vue").Ref<{
        filepath: string;
        metadata: {
            title: string;
            artist: string;
            album: string;
            year: string;
            track: string;
            genre: string;
            duration: string;
            bitrate: string;
            cover: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
                every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
                find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number) => number;
                join: (separator?: string) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reverse: () => Uint8Array<ArrayBufferLike>;
                set: (array: ArrayLike<number>, offset?: number) => void;
                slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
                some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
                subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                toLocaleString: {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
                };
                toString: () => string;
                valueOf: () => Uint8Array<ArrayBufferLike>;
                entries: () => ArrayIterator<[number, number]>;
                keys: () => ArrayIterator<number>;
                values: () => ArrayIterator<number>;
                includes: (searchElement: number, fromIndex?: number) => boolean;
                [Symbol.iterator]: () => ArrayIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | undefined;
        };
    }[], MusicData[] | {
        filepath: string;
        metadata: {
            title: string;
            artist: string;
            album: string;
            year: string;
            track: string;
            genre: string;
            duration: string;
            bitrate: string;
            cover: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
                every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
                find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number) => number;
                join: (separator?: string) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reverse: () => Uint8Array<ArrayBufferLike>;
                set: (array: ArrayLike<number>, offset?: number) => void;
                slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
                some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
                subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                toLocaleString: {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
                };
                toString: () => string;
                valueOf: () => Uint8Array<ArrayBufferLike>;
                entries: () => ArrayIterator<[number, number]>;
                keys: () => ArrayIterator<number>;
                values: () => ArrayIterator<number>;
                includes: (searchElement: number, fromIndex?: number) => boolean;
                [Symbol.iterator]: () => ArrayIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | undefined;
        };
    }[]>;
    fetchMusicData: () => Promise<void>;
    music_index: import("vue").Ref<number, number>;
}, "mp3_data" | "music_index">, Pick<{
    mp3_data: import("vue").Ref<{
        filepath: string;
        metadata: {
            title: string;
            artist: string;
            album: string;
            year: string;
            track: string;
            genre: string;
            duration: string;
            bitrate: string;
            cover: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
                every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
                find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number) => number;
                join: (separator?: string) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reverse: () => Uint8Array<ArrayBufferLike>;
                set: (array: ArrayLike<number>, offset?: number) => void;
                slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
                some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
                subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                toLocaleString: {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
                };
                toString: () => string;
                valueOf: () => Uint8Array<ArrayBufferLike>;
                entries: () => ArrayIterator<[number, number]>;
                keys: () => ArrayIterator<number>;
                values: () => ArrayIterator<number>;
                includes: (searchElement: number, fromIndex?: number) => boolean;
                [Symbol.iterator]: () => ArrayIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | undefined;
        };
    }[], MusicData[] | {
        filepath: string;
        metadata: {
            title: string;
            artist: string;
            album: string;
            year: string;
            track: string;
            genre: string;
            duration: string;
            bitrate: string;
            cover: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
                every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
                find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number) => number;
                join: (separator?: string) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reverse: () => Uint8Array<ArrayBufferLike>;
                set: (array: ArrayLike<number>, offset?: number) => void;
                slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
                some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
                subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                toLocaleString: {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
                };
                toString: () => string;
                valueOf: () => Uint8Array<ArrayBufferLike>;
                entries: () => ArrayIterator<[number, number]>;
                keys: () => ArrayIterator<number>;
                values: () => ArrayIterator<number>;
                includes: (searchElement: number, fromIndex?: number) => boolean;
                [Symbol.iterator]: () => ArrayIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | undefined;
        };
    }[]>;
    fetchMusicData: () => Promise<void>;
    music_index: import("vue").Ref<number, number>;
}, never>, Pick<{
    mp3_data: import("vue").Ref<{
        filepath: string;
        metadata: {
            title: string;
            artist: string;
            album: string;
            year: string;
            track: string;
            genre: string;
            duration: string;
            bitrate: string;
            cover: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
                every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
                find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number) => number;
                join: (separator?: string) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reverse: () => Uint8Array<ArrayBufferLike>;
                set: (array: ArrayLike<number>, offset?: number) => void;
                slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
                some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
                subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                toLocaleString: {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
                };
                toString: () => string;
                valueOf: () => Uint8Array<ArrayBufferLike>;
                entries: () => ArrayIterator<[number, number]>;
                keys: () => ArrayIterator<number>;
                values: () => ArrayIterator<number>;
                includes: (searchElement: number, fromIndex?: number) => boolean;
                [Symbol.iterator]: () => ArrayIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | undefined;
        };
    }[], MusicData[] | {
        filepath: string;
        metadata: {
            title: string;
            artist: string;
            album: string;
            year: string;
            track: string;
            genre: string;
            duration: string;
            bitrate: string;
            cover: {
                [x: number]: number;
                readonly BYTES_PER_ELEMENT: number;
                readonly buffer: {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => ArrayBuffer;
                    readonly [Symbol.toStringTag]: string;
                } | {
                    readonly byteLength: number;
                    slice: (begin?: number, end?: number) => SharedArrayBuffer;
                    readonly [Symbol.species]: SharedArrayBuffer;
                    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
                };
                readonly byteLength: number;
                readonly byteOffset: number;
                copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
                every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
                find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
                findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
                forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
                indexOf: (searchElement: number, fromIndex?: number) => number;
                join: (separator?: string) => string;
                lastIndexOf: (searchElement: number, fromIndex?: number) => number;
                readonly length: number;
                map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
                reduce: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reduceRight: {
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
                    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
                    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
                };
                reverse: () => Uint8Array<ArrayBufferLike>;
                set: (array: ArrayLike<number>, offset?: number) => void;
                slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
                some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
                sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
                subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
                toLocaleString: {
                    (): string;
                    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
                };
                toString: () => string;
                valueOf: () => Uint8Array<ArrayBufferLike>;
                entries: () => ArrayIterator<[number, number]>;
                keys: () => ArrayIterator<number>;
                values: () => ArrayIterator<number>;
                includes: (searchElement: number, fromIndex?: number) => boolean;
                [Symbol.iterator]: () => ArrayIterator<number>;
                readonly [Symbol.toStringTag]: "Uint8Array";
            } | undefined;
        };
    }[]>;
    fetchMusicData: () => Promise<void>;
    music_index: import("vue").Ref<number, number>;
}, "fetchMusicData">>;
export {};
