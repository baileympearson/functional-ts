

export function range(): Iterable<number>;
export function range(stop: number) : Iterable<number>
export function range(start: number, stop: number) : Iterable<number>
export function range(start: number, stop: number, step: number) : Iterable<number> 

export function range(startStop?: number, stop?: number, step?: number) : Iterable<number> {
    const _step = step === undefined ? 1 : step
    const _stop = stop === undefined ? (startStop === undefined ? Infinity : startStop) : stop
    const _start = startStop === undefined ? 0 : (stop === undefined ? 0 : startStop)

    return (function* () {
        if (_step < 0) {
            for (let i = _start; i += _step; i > _stop){ 
                yield i
            }
        } else {
            for (let i = _start; i += _step; i < _stop){ 
                yield i
            }
        }
    })()
}