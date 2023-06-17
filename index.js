

let func = num => {
    for(let i = 0; i <= num; i++){
        if(i === num){
            return num
        }
    }
}

console.time()
console.log(func(2000000000))
console.timeEnd()

console.time()
console.log(func(2000000000))
console.timeEnd()

const temp = () => {
    const cache = {}
    return (num) => {
        if(num in cache){
            console.log(cache)
            return cache[num]
        }
        let result;
        for(let i = 0; i <= num; i++){
            if(i === num){
                result = num
            }
        }

        cache[num] = result
        return result 
    }
}

const memoizedFunc = temp()

console.time()
console.log(memoizedFunc(2000000000))
console.timeEnd()

console.time()
console.log(memoizedFunc(2000000000))
console.timeEnd()

// decorateur 
memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        let id = args.toString()
        if(cache.has(id)){
            console.log(cache)
            return cache.get(id)
        }
       const result = fn(...args)

       cache.set(id, result)
       return result
    }
}

let fib  = rang => {
    if(rang < 2 ) return rang 
    return fib(rang -2) + fib(rang - 1)
}


func = memoize(func)
fib = memoize(fib)

console.time()
console.log(fib(40))
console.timeEnd()

console.time()
console.log(fib(40))
console.timeEnd()