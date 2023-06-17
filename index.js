const arr = ["1", "a", 2, 2, 9, true]
const str = "chaîne de caractères"
const set = new Set(arr)
const map = new Map()
map.set({name: "text"}, "obj ").set(arr, "arr")


// les boucles "traditionnelles"
let i = 0;
while(i < arr.length){
    console.log(arr[i])
    i++
}

let j = 0;
do {
    console.log(arr[j])
    j++
} while(j < arr.length)


for (let k = 0; k < arr.length; k++){
    console.log(arr[k])
}

// les itérables sont toutes les structures qui possèdent un itérateur
const iterator = arr[Symbol.iterator]()

console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// la boucle for / of est une boucle spécifique pour les itérables
for (let val of arr){
    console.log(val)
}



// les objets ne sont pas des itérables par défaut 
const obj = {name: "quentin", age: 23}

// for (let val of obj){
//     console.log(val)
// }


// la boucle for / in s'applique sur tous les objets
for (let key in obj){
    console.log(obj[key])
}


for (let key of Object.keys(obj)){
    console.log(key)
}
for (let val of Object.values(obj)){
    console.log(val)
}
for (let [key, val] of Object.entries(obj)){
    console.log(key, val)
}

Object.keys(obj).forEach(key => console.log(key))
Object.values(obj).forEach(val => console.log(val))
Object.entries(obj).forEach(([key, val]) => console.log(key, val))



// les itérables étant des objets, ils peuvent également utiliser la boucle for / in
arr.name = "quentin"
console.log(arr)
for (let key in arr){
    console.log(arr[key])
}

// la boucle for / of n'est applicable que sur les itérables
// elle est plus optimale que la boucle for / in
for (let val of arr){
    console.log(val)
}



const obj2 = {
    name: "quentin",
    age: 23,
    // implementation du protocole pour rendre un objet itérable 
    [Symbol.iterator] : function(){
        let i = 0;
        let values = Object.values(this)
        const iterator = {
            next: () => {
                let iteration;
                if(i < values.length){
                    iteration = {value: values[i], done: false}
                } else {
                    iteration = {value: undefined, done: true}
                }

                i++
                return iteration
            }
        }   
        return iterator
    }
}

for (let val of obj2){
    console.log(val)
}