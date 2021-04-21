import 'core-js'

function curried<T>(structure: 'array' | 'set'): (arg0: Iterable<T>) => T[] | Set<T> {
  return function(iter: Iterable<T>): T[] | Set<T> {
    if (structure === 'array') {
      return Array.from(iter)
    } else {
      return new Set(iter)
    }
  }
}

export function into<T>(structure: 'array'): (arg0: Iterable<T>) => T[]
export function into<T>(structure: 'array', iter: Iterable<T>): T[]
export function into<T>(structure: 'set'): (arg0: Iterable<T>) => Set<T>
export function into<T>(structure: 'set', iter: Iterable<T>): Set<T>

export function into<T>(
  structure: 'array' | 'set',
  iter?: Iterable<T>
): T[] | ((arg0: Iterable<T>) => T[]) | Set<T> | ((arg0: Iterable<T>) => Set<T>) {
  if (iter === undefined && structure === 'array') {
    return (arg0: Iterable<T>) => Array.from(arg0)
  } else if (iter === undefined && structure === 'set') {
    return (arg0: Iterable<T>) => new Set(arg0)
  } else if (iter !== undefined && structure === 'array') {
    return Array.from(iter)
  }

  return new Set(iter)
}
