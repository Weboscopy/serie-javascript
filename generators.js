// iterable
const arr = [1,2,3,4,5]


// itérateur
const iterator = arr[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

function *generatorFunc(){
    console.log("première partie de la fonction")
    // logic
    yield 10 
    console.log("deuxième partie de la fonction")
    // logic
    yield 20 
    // return "retour"
    console.log("troisième partie de la fonction")
    // logic
    yield 30
}

const generator = generatorFunc()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())