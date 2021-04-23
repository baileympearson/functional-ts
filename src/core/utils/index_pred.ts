import { enumerate } from '../enumerate'
import { filter } from '../filter'
import { map } from '../map'

export function indexed_helper<T>(
  predicate: (arg0: [number, T]) => boolean,
  iter: Iterable<T>
): Generator<T> {
  const second = ([_, element]: [number, T]) => element
  return map(second, filter(predicate, enumerate(iter)))
}
