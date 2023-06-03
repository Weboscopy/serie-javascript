// A) fonctionnement de la méthode reduce

let arr = [1,2,3,4,5];

// example #1 : calcul de la somme des éléments du tableau "arr"
let sum = arr.reduce((acc, curr) => {
    // à chaque itération on ajoute la valeur courrante à l'accumulateur
    acc += curr
    // généralement l'accumulateur correspond à ce que l'on souhaite calculer
    return acc
}, 0)

console.log(sum)

// syntaxe avec retour fléché 
sum = arr.reduce((acc, curr) => acc += curr, 5)

console.log(sum)

// example #2 : calcul de la moyenne des éléments du tableau "arr"

// la fonction callback peut aussi prendre l'index et le tableau de départ en paramètres
let avg = arr.reduce((acc, curr, index, array) => {
    return acc + (curr / array.length)
}, 0)

console.log(avg)

// B) Cas d'utilisation
// cas d'utilisation #1 : calcul du total d'un panier
const panier = [
    {
        name: "T-shirt",
        price: 20.40,
        qty: 3
    },
    {
        name: "Sneakers",
        price: 90.99,
        qty: 2
    },
    {
        name: "Jeans",
        price: 50.25,
        qty: 2
    }
];

// l'accumulateur est un objet
// A chaque itération, on ajoute les valeurs courrantes sur les deux propriétés de l'accumulateur
const {totalQty, totalPrice} = panier.reduce((total, item) => {  
    total.totalQty += item.qty 
    total.totalPrice += item.price * item.qty
    return total
}, {
    totalQty: 0,
    totalPrice: 0
})


console.log(totalQty, Number(totalPrice.toFixed(2)))

// cas d'utilisation #2 : agrégation
const data = [
    {id: 1, language: "html"},
    {id: 2, language: "html"},
    {id: 3, language: "javascript"},
    {id: 4, language: "javascript"},
    {id: 5, language: "javascript"},
    {id: 6, language: "javascript"},
    {id: 7, language: "javascript"},
    {id: 8, language: "python"},
    {id: 9, language: "python"},
    {id: 10, language: "python"},
];

let aggregate = data.reduce((acc, curr) => {
    // destructuration de la propriété language
    const {language} = curr
    if(acc[language]){
        // si la clé est présente dans l'accumulateur la valeur associée est incrémentée
        acc[language] += 1
    } else {
        // autrement la valeur est initialiser à 1 pour cette clé
        acc[language] = 1
    }
    return acc
    // l'accumulateur est au départ un objet vide
}, {})

console.log(aggregate)

// même logique que précédemment écrite avec une syntaxe plus courte
aggregate = data.reduce((acc, curr) => {
    const {language} = curr
    acc[language] = acc[language] + 1 || 1
    return acc
}, {})

console.log(aggregate)

// cas d'utilisation #3 : traitement des promesses de manière séquentielle

// fonction asynchrone pour récupérer un artcile sur une API en fonction de son identifiant
const getById = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

// séquence d'identifiants 
const ids = [4, 8, 12];

// méthode avec une boucle for
(async () => {
    for (let id of ids){
        await getById(id)
    }
})()

// méthode avec reduce
ids.reduce(async (promise, id) => {
    // à chaque itération on attend la résolution d'une promesse qui a été retorunée par la fonction getById
    await promise 
    return  getById(id)
    // l'accumulateur est initialisé avec une promesse déjà résolue
}, Promise.resolve())



// C) example de recréation de la méthode map à partir de la méthode reduce

const mapped = arr.map(num => num * 100)

console.log(mapped)

const reduced = arr.reduce((acc, curr) => [...acc, curr * 100],[])

console.log(reduced)