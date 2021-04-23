import { indexed_helper } from './utils/index_pred'

export function take<T>(num: number): (arg0: Iterable<T>) => Generator<T>
export function take<T>(num: number, iter: Iterable<T>): Generator<T>

export function take<T>(
  num: number,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Generator<T>) | Generator<T> {
  function _take(iter: Iterable<T>): Generator<T> {
    return indexed_helper(([index, _]: [number, T]) => index < num, iter)
  }
  if (iter === undefined) {
    return _take
  }

  return (function*() {
    yield* _take(iter)
  })()
}
