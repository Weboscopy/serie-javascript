import { users } from "./data.js"
// Programmation asynchrone 

// Méthode 1 : avec des fonctions callbacks  
const createUser1 = (username, cb) => {
    setTimeout(() => {
        const id = new Date().getTime();
        const newUser = { id, username }
        users.push(newUser)
        cb()
    }, 2000)
}

const convertUsers1 = (cb) => {
    setTimeout(() => {
        const data = users.map(user => ({ ...user, username: user.username.toUpperCase() }))
        cb(data)
    }, 1000)
}


const getUsers1 = (data) => {
    setTimeout(() => {
        console.log(data)
    }, 1000)
}

createUser1('quentin', () => {
    convertUsers1(getUsers1)
});


// Les promesses 
// ce sont des objets caractérisés par un status et une valeur
// par défaut le statut est à pending et la valeur vaut undefined
const promise = new Promise((resolve, reject) => {
    resolve("valeur")
    // reject("erreur")
})

console.log(promise)
promise
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(console.log("je suis toujours exécuté"))




const createUser2 = (username,) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const id = new Date().getTime();
            const newUser = { id, username }
            users.push(newUser)

            const error = false
            if (!error) {
                resolve()
            } else {
                reject("Impossible de créer l'utilisateur")
            }
        }, 2000)
    })
}

const convertUsers2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = users.map(user => ({ ...user, username: user.username.toUpperCase() }))
            const error = false
            if (!error) {
                resolve(data)
            } else {
                reject("Impossible de convertir les utilisateurs")
            }
        }, 1000)
    })
}

const getUsers2 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            const error = false
            if (!error) {
                resolve()
            } else {
                reject("Impossible de récupérer les utilisateurs")
            }
        }, 1000)
    })
}

// Méthode 2 : avec la méthode then sur les promesses 

createUser2("quentin")
    .then(convertUsers2)
    .then(data => getUsers2(data))
    .catch(error => console.log(error))


// // Méthode 3 : avec les fonctions asynchrones
const func = async () => {
    try {
        await createUser2("quentin")
        const data = await convertUsers2()
        await getUsers2(data)
    } catch (error) {
        console.log(error)
    }

}

func()


// utiliser les fonctions asynchrones pour récupérer des données sur un API
const getPost = async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+ id)
    const data = await res.json()
    console.log(data)
}

getPost(3)

// traiter des promesses de manière séquentielle 
const ids = [4,8,12,19]

// la méthode forEach ne permet de récupérer la séquence d'articles dans le bon ordre
ids.forEach(async (id) => {
    await getPost(id)
});

// la boucle for/of permet de récupérer la séquence d'articles dans le bon ordre
(async () => {
    for (let id of ids){
        await getPost(id)
    }
})()


// traiter des promesses de manière concurrentielle

const getPost2 = async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+ id)
    const data = await res.json()
    console.log(data)
}

const getUser = async (id) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+ id)
    const data = await res.json()
    return data
}

Promise.all([getPost2(4), getPost2(12), getUser(7), getUser(9)]).then(data => console.log(data))

