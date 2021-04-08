import { map, filter } from '../src/library'


function toArray<T>(gen: Iterable<T>): T[] { 
  return Array.from(gen)
}

describe('test of map', () => {
  function id<T>(val:T): T {
    return val
  }

  function double(val: number): number {
    return val * 2
  }

  it('should do nothing to an empty generator', () => {
    const source: string[] = []
    const expected: string[] = []
    const result = map(id, source)
    expect(toArray(result)).toEqual(expected)
  })

  it('should preserve identity', () => {
    const source = [1,2,3]
    const expected = [1,2,3]
    const result = map(id, source)
    expect(toArray(result)).toEqual(expected) 
  })

  it('should apply f to values in the iterable', () => {
    const source = [1,2,3]
    const expected = [2,4,6]
    const result = map(double, source)
    expect(toArray(result)).toEqual(expected)  
  })
})

describe('tests for filter', () => {
  function all<T>(val: T): boolean {
    return true
  }

  it('should do nothing to an empty iterable', () => {
    const source: string[] = []
    const expected: string[] = []
    const result = filter(all, source)
    expect(toArray(result)).toEqual(expected)
  })

  it('should filter no elements if nothing satisfies the predicate', () => {
    const greaterThanZero = (x: number) => x > 0
    const source = [1,2,3]
    const expected = [1,2,3]
    const result = filter(greaterThanZero, source)
    expect(toArray(result)).toEqual(expected) 
  })

  it('should leave all elements if all satisfy the predicate', () => {
    const equalToZero = (x: number) => x === 0
    const source = [1,2,3]
    const expected: number[] = []
    const result = filter(equalToZero, source)
    expect(toArray(result)).toEqual(expected) 
  })

  it('should keep any elements that satisfy the predicate', () => {
    const isEven = (x: number) => x % 2 === 0
    const source = [1,2,3,4,5]
    const expected = [2,4]
    const result = filter(isEven, source)
    expect(toArray(result)).toEqual(expected)  
  })
})
