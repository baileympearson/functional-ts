import 'core-js'

export function* map<T, Out>(f: (arg0: T) => Out, iter: Iterable<T>) : Iterable<Out> {
  for (let value of iter) {
    yield f(value)
  }
}

export function* filter<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T> {
  for (let value of iter) {
    if (pred(value)) {
      yield value
    }
  }
}


