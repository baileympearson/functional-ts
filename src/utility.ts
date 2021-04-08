import { map } from "./library"

export function* takeWhile<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T> {
    for (const value of iter) {
        if (!pred(value)) {
            return
        }

        yield value
    }
}

export function* take<T>(count: number, iter: Iterable<T>): Iterable<T> {
    if (count < 0) {
        return
    }

    let _count = 0
    return takeWhile(() => _count++ < count, iter)
}

type Func<T> = (...args: T[]) => any;
export function complement(fn: Func<any>): Func<any> {
    return (...args: any) => !fn(...args)
}

export function* dropWhile<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T> {
    takeWhile(complement(pred), iter)

    for (const value of iter) {
        yield value
    }
}

export function* drop<T>(count: number, iter: Iterable<T>): Iterable<T> {

}