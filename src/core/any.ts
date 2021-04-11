import { is_some } from '../utility/optional';
import { find } from './find';

export function any<T>(pred: (arg0: T) => boolean) : (arg0: Iterable<T>) => boolean;
export function any<T>(pred: (arg0: T) => boolean, iter: Iterable<T>) : boolean;

export function any<T>(pred: (arg0: T) => boolean, iter?: Iterable<T>): ((arg0: Iterable<T>) => boolean) | boolean {
    function _any(iter: Iterable<T>) : boolean {
        let result = find(pred, iter)
        return is_some(result)
    }

    if (iter === undefined) {
        return _any
    }

    return _any(iter)
}