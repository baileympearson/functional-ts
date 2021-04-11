import { is_some } from '../utility/optional';
import { find } from './find';

export function all<T>(pred: (arg0: T) => boolean) : (arg0: Iterable<T>) => boolean;
export function all<T>(pred: (arg0: T) => boolean, iter: Iterable<T>) : boolean;

export function all<T>(pred: (arg0: T) => boolean, iter?: Iterable<T>): ((arg0: Iterable<T>) => boolean) | boolean {
    function _all(iter: Iterable<T>) : boolean {
        for (const value of iter) {
            if (!pred(value)) {
                return false
            }
        }
        return true
    }

    if (iter === undefined) {
        return _all
    }

    return _all(iter)
}