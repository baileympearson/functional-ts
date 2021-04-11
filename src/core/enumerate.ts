import { range } from '../utility/range';
import { zip2 } from './zip2';

type Enumerated<T> = Iterable<[number, T]>
export function enumerate<T>(): (arg0: Iterable<T>) => Enumerated<T>;
export function enumerate<T>(iter: Iterable<T>): Enumerated<T>

export function enumerate<T>(iter?: Iterable<T>): ((arg0: Iterable<T>) => Enumerated<T>) | Enumerated<T> {
    function* _enumerate(iter: Iterable<T>) : Enumerated<T> {
        for (const value of zip2(range(), iter)) {
            yield value
        }
    }

    if (iter === undefined) {
        return _enumerate
    }

    return (function* () {
        yield* _enumerate(iter)
    })()
}