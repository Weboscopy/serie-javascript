// Méthodes des Map
let map = new Map();

let a = {name: "quentin"}
let b = {}
let c = {language: "JS"}

map.set(a, 1)
    .set(b, 2)
    .set(c, 3)

console.log(map)
console.log(map.size)
console.log(map.has(a))
console.log(map.get(a))

// boucle sur les Map
for (let [key, value] of map.entries()){
    console.log(key, value)
}

// transform une Map en un tableau
const array = [...map]
console.log(array)

// Map vs WeakMap

// map = new Map();
// map.set(a, "objet a");

// a = null;
// console.log(map)
weakmap = new WeakMap();


a = {name: "quentin"};
weakmap.set(a, "objet a");

a = null 
setTimeout(() => {
    console.log(weakmap)
}, 12200)
