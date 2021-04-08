import { takeWhile } from '../src/utility'

function toArray<T>(gen: Iterable<T>): T[] { 
  return Array.from(gen)
}

describe('tests for takeWhile', () => {
    function isNonEmpty(str: string): boolean {
        return str.length > 0
    }

    it('should do nothing to an empty iterable', () => {
        const source: string[] = []
        const expected: string[] = []
        const result = takeWhile(isNonEmpty, source)
        expect(toArray(result)).toEqual(expected)
    })

    it('should return empty if the first element does not conform to the predicate', () => {
        const source: string[] = ["", "", ""]
        const expected: string[] = []
        const result = takeWhile(isNonEmpty, source)
        expect(toArray(result)).toEqual(expected)
    })

    it('should return all values until the first value that fails the predicate', () => {
        const source: string[] = ["a", "b", ""]
        const expected: string[] = ["a", "b"]
        const result = takeWhile(isNonEmpty, source)
        expect(toArray(result)).toEqual(expected)
    })

    it('should exhaust the iterator if all values satisfy the predicate', () => {
        const source: string[] = ["a", "b", "c"]
        const expected: string[] = ["a", "b", "c"]
        const result = takeWhile(isNonEmpty, source)
        expect(toArray(result)).toEqual(expected) 
    })
})
