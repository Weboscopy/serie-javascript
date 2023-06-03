
// décorateur 
let logDate = (fn) => {
    // retour d'une fonctionne annonyme
     return (...args) => {
        // fonctionnalité supplémentaire apportée par le décorateur
        console.log(new Date().toLocaleString())
        // retour du resultat de la fonction décorée
        return fn(...args)
     }
}

// fonctions de base
let hello = (name) => {
    console.log(`Salut ${name}`)
}

let multiply = (...args) => {
    console.log([...args].reduce((acc, curr) => acc * curr))
}

// réécriture des fonctions de base
// la fonction à décorer est passée en argument du décorateur
hello = logDate(hello)
multiply = logDate(multiply)

// invocation des fonctions décorées
hello("Quentin")
multiply(1,2,3,4)


// on peut utiliser les closures avec les docorateurs 
const count = (fn) => {
    let count = 0
    return (...args) => {
        console.log(`La fonction ${fn.name} a été invoquée ${count += 1} fois`)
        return fn(...args)
    }
}

multiply = (...args) => {
    console.log([...args].reduce((acc, curr) => acc * curr))
}

multiply = count(multiply)
multiply(1,2,3,4)
multiply(1,2,3,4)
multiply(1,2,3,4)
multiply(1,2,3,4)
multiply(1,2,3,4)

// plusieurs décorateurs - example pour faire de la validation

const validateParamsNb = (fn) => (...args) => {
    if(args.length !== fn.length){
        // nombre d'arguments passés diffèrent du nombre d'arguments requis par la fonction décorée
        throw new Error(`Nombre d'args invalide pour ${fn.name}`)
    }
    return fn(...args)
}

const validateParamsInt = (fn) => (...args) => {
    if(!args.every(arg => Number.isInteger(arg))){
        throw new TypeError("Les args doivent être des nombres")
    }
    return fn(...args)
}


let calculateVolume = (h, l, w) => {
    console.log(h*l*w)
}

let calculateArea = (h, l) => {
    console.log(h, l)
}

calculateVolume = validateParamsNb(calculateVolume)
calculateVolume = validateParamsInt(calculateVolume)
calculateVolume(100,200,300)
// calculateVolume(100,200)
// calculateVolume(100, 200,"Quentin")
calculateArea = validateParamsNb(calculateArea)
calculateArea = validateParamsInt(calculateArea)
calculateArea(100,200)
// calculateVolume(100,200, 300)
// calculateVolume(100, "Quentin")


// décorateur asynchrone
const retry = (fn) => {
    return async (...args) => {
        let attempt = 1;
        while(attempt <= 3){
            try {
                console.log(`tentative ${attempt}, appel de la fonction ${fn.name}`)
                return await fn(...args) 
            } catch (error) {
                console.log(`tentative ${attempt}, erreur: ${error.message}`)
                attempt++
            }
        }

        throw new Error("Impossible de récupérer les données")
    }
}

// fonction de base asynchrone
let fetchData = async (url) => {
    const res = await fetch(url)
    if(! res.ok){
        throw new Error(`${res.status} | ${res.statusText}`)
    }

    return res.json()
}

// décoration de la fonction par composition
fetchData = retry(fetchData);

(async () => {
    try {
        const data = await fetchData("https://jsonplaceholder.typicode.com/posts")
        // const data = await fetchData("https://jsonplaceholder.typicode.com/ddjejdjd")
        console.log(data)
    } catch (error) {   
        console.error(error.message)
    }
})()

// décorer la méthode d'une classe
class Person{
    constructor(name){
        this.name = name
    }

    hello(){
        console.log(`Salut ${this.name}`)
    }
}

const quentin = new Person("quentin")

logDate = (fn) => (...args) => {
    console.log(new Date().toLocaleString())
    return fn(...args)
}

// on utilise la méthode bind pour créer une nouvelle fonction qui connaîtra le contexte de l'objet utilisé par la méthode
const helloWithLogDate = logDate(quentin.hello.bind(quentin))

helloWithLogDate()