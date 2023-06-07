// règle 1: même input => même output 

const pure = (x) => {
    return x * 2;
}

// pour un input fixé à 2, la fonction retourne systématiquement 4
console.log(pure(2))


const impure = (x) => {
    return x * Math.floor(Math.random() * 10)
}

// pour un input fixé à 2, la fonction retourne des valeurs différentes
console.log(impure(2))


// règle 2: les fonctions pures ne doivent pas générer d'effets de bord 

// fonction pure qui n'utilise aucune valeur extérieure 
let add = (x, y) => {
    return x + y
}

let z = 1;

// fonction impure qui utilise une variable à la portée globale
add = (x,y) => {
    return x + y + z
}

// fonction impure qui utilise et modifie une variable à la portée globale 
let increment = () => {
    return z += 1 
}

console.log(increment())
console.log(z)


// transformer des fonctions impures en fonction pures (cas des primitives)
 z = 1;
increment = num => {
    return num+=1
}

console.log(increment(z))
console.log(z)

// transformer des fonctions impures en fonction pures (cas des structures)

let arr1 = [1,2,3,4]
let obj1 = {name: "Quentin"}
 
// fonctions impures 
let addValueToArr = (array, value) => {
    array.push(value)
    return array
}

let addValueToObj = (object, key, value) => {
   object[key] = value
   return object
}

console.log(addValueToArr(arr1, 5))
console.log(arr1)

console.log(addValueToObj(obj1, "age", 23))
console.log(obj1)

// fonctions pures

 arr1 = [1,2,3,4]
 obj1 = {name: "Quentin"}
 
 addValueToArr = (array, value) => {
    return [...array, value]
}

 addValueToObj = (object, key, value) => {
    return {...object, [key]: value}
}

console.log(addValueToArr(arr1, 5))
console.log(arr1)
console.log(addValueToObj(obj1, "age", 23))
console.log(obj1)


// Pour les objets imbriqués, les copies superficielles ne suffisent plus
// il faut alors utiliser les copies profondes
obj1 = {name: "Quentin", friend: {name: "Paul"}}


addValueToObj = (object, key, value) => {
    // copie profonde
    const copy = JSON.parse(JSON.stringify(object))
    copy[key] = value 
    return copy
}

console.log(addValueToArr(arr1, 5))
console.log(arr1)
console.log(addValueToObj(obj1, "age", 23))
console.log(obj1)