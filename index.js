const sayHello = (name) => `Bonjour ${name}`
const capitalize = (str) => str.toUpperCase()
const getName = (str) => str.split(" ")[1]
const log = msg => str=> console.log(msg, str)

// Rappel sur la composition de fonctions
log(getName(capitalize( sayHello("quentin"))))


// fonction pipe (version 1)
let pipe = (...fns) => {
    return (input) => {
        fns.forEach(fn => input = fn(input))
    }
}

// fonction pipe (version 2)
 pipe = (...fns) =>  (input) =>  fns.reduce((acc, fn) => fn(acc) ,input)
    

pipe(
    sayHello,
    capitalize,
    getName,
    log("hey")
)("quentin")



// fonction compose 
const compose = (...fns) =>  (input) =>  fns.reduceRight((acc, fn) => fn(acc) ,input)

compose(
    log("hey"),
    getName,
    capitalize,
    sayHello
)("quentin")


// pipe asynchrone 
const asyncPipe = (...fns) =>  (input) =>  fns.reduce(async (acc, fn) => fn(await acc) ,input)


const getUserId = async (username) => {
    const data =  await (await fetch(`http://jsonplaceholder.typicode.com/users?username=${username}`)).json()
    return data[0].id 
}

const getPostsByUserId = async (userId) => {
    return await (await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json()
}

const convertTitles = (posts) => {
    return posts.map(post => ({...post, title: post.title.toUpperCase()}))
}

asyncPipe(
    getUserId,
    getPostsByUserId,
    convertTitles
)("Bret").then(val => console.log(val))