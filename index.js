// fonction standard 
let web = (p1, p2, p3) => {
    return `${p1} ${p2} ${p3}`
}

console.log(web("html", "css", "js"))

// fonction curry
web = (p1) => {
    return (p2) => {
        return (p3) => {
            return `${p1} ${p2} ${p3}`
        }
    }
}

console.log(web("html")("css")("js"))

// fonction curry avec retours fléchés 
web = p1 => p2 => p3 => `${p1} ${p2} ${p3}`

console.log(web("html")("css")("js"))


// fonctions partielles 

const salutations = p1 => p2 => console.log(`${p1} ${p2}`)

const bonjour = salutations("Bonjour")
const hello = salutations("Hello")

bonjour("Quentin")
hello("Sarah")


// fonctions composées

const checkCredentials = fn => (...args) => {
    console.log(`Verification des infos ${args[0]} ${args[1]}...`)
    return fn(...args)
}

const addUserToDB = fn => (...args) => {
    console.log(`Ajout de l'utilisateur ${args[2]}...`)
    return fn(...args)
}

const connect = fn => (...args) => {
    console.log(`Connexion..`)
    return fn(...args)
}

let inscription = (...args) => {
    console.log(`Inscription terminée`)
}

let login = (...args) => {
    console.log("Login terminé")
}

inscription = connect(inscription)
inscription = addUserToDB(inscription)
inscription = checkCredentials(inscription)

inscription("quentin@mail.com", "123", "Quentin")

login = connect(login);
login = checkCredentials(login)

login("quentin@mail.com", "123", "Quentin")

