export type Id<T> = (arg0: Iterable<T>) => Iterable<T> 
export function filter<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => Iterable<T>
export function filter<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T>

export function filter<T>(pred: (arg0: T) => boolean, iter?: Iterable<T>): Iterable<T> | Id<T> {
  function* _filter(iter: Iterable<T>): Iterable<T> {
    for (const value of iter) {
      if (pred(value)) {
        yield value
      }
    }
  }

  if (iter === undefined) {
    return _filter
  }

  return (function*() {
    yield* _filter(iter)
  })()
}
