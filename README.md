# functional-ts

## What is functional-ts?

functional-ts is a simple, flexible library for working with syncronous iterators in Javascript.  The intention 
is to provide a small set of functions that can operate on all iterators and iterables.  A couple of design notes:

- This library provides free functions.  Unlike other libraries, complex operator chains are built from composition of 
functions rather than method chaining.  This means that there are no concepts to learn in this library other than
the functions contained.

- The library is not optimized for performance.  Out of the box, iterators have performance benefits over raw 
collection operators (such as `Array.map`), but I made no effort to optimize further.  This is intended as learning
experience - optimization might come later.

## Why use functional-ts?

functional-ts is intended to be more flexible and powerful than the native iterator operations.  All the functions 
included operate solely on Iterables and therefore work on all iterable types.  For example:

```ts
const arr = [1,2,3,4]
const set = new Set([1,2,3,4])
function* iterable() {
    yield 1
    yield 2
    yield 3
    yield 4
}

const double = (x: number) => x * 2
map(double, arr)                // 1
map(double, set)                // 2
map(double, iterable)           // 3
```

Examples 1, 2, and 3 all seemlessly produce iterables of numbers.  Since all the core operations produce iterables,
a utility function is provided to easily convert iterables into native Javascript data structures:

```ts
function* iterable() {
    yield 1
    yield 2
    yield 3
}
into('array', iterable)     // [1,2,3]
into('set', iterable)       // Set(1,2,3)
```

## Core Functions

### Map