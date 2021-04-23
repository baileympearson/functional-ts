import { indexed_helper } from './utils/index_pred'

export function drop<T>(num: number): (arg0: Iterable<T>) => Generator<T>
export function drop<T>(num: number, iter: Iterable<T>): Generator<T>

export function drop<T>(
  num: number,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Generator<T>) | Generator<T> {
  function _drop(iter: Iterable<T>): Generator<T> {
    return indexed_helper(([index, _]: [number, T]) => index > num, iter)
  }

  if (iter === undefined) {
    return _drop
  }

  return (function*() {
    yield* _drop(iter)
  })()
}
