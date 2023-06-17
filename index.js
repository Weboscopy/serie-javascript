// Objet Window
this.a = 17
console.log(this)
console.log(window.a)

// fonction standard : this fait référence à l'objet qui invoque la fonction
function func(){
    console.log(this)
}


func()
window.func()
const obj1 = {a:18, func}
obj1.func()


// fonction fléchée : this fait référence au contexte de la fonction parent dans laquelle la fonction fléchée a été définie

const arrowFunc = () => {
    console.log(this)
}

const obj2 = {a:12, arrowFunc}
obj2.arrowFunc()

// methodes avec fonctions callbacks
const user = {
    username: "quentin",
    skills: ["html", "css", "js"],
    showSkills(){
        this.skills.forEach(function(skill){
            console.log(`${this.username} connaît ${skill}`)
        })
    }
}

user.showSkills()


// fonctions constructeur 
function User(){
    this.a = 23
    console.log(this)
}

const user1 = new User()


// La méthode call 

let quentin = {username: "quentin"}

function addToCart(article){
    console.log(`${this.username} a ajouté ${article}`)
}

addToCart.call(quentin, "1 t-shirt")


 quentin = {
    username: "quentin",
    addToCart(article){
        console.log(`${this.username} a ajouté ${article}`)
    }
}

const paul = {
    username: "paul"
}

quentin.addToCart("1 t-shirt")
quentin.addToCart.call(paul, "1 t-shirt")

// méthode call vs méthode apply
function addToCart2(article, amount, price){
    console.log(`${this.username}`, {article, amount, price})
}

// les arguments de la fonction sur laquelle on applique la méthode call sont passés les uns à la suite des autres
addToCart2.call(paul, "t-shirt", 2, 20)
const args = ["t-shirt", 2, 30]
// les arguments de la fonction sur laquelle on applique la méthode apply sont passés dans un tableau
addToCart2.apply(paul, args)


// méthode bind (retourne une nouvelle fonction à laquelle a été attaché le contexte de l'objet passé en argument)
const addToPaulCart = addToCart2.bind(paul)
const addToQuentinCart = addToCart2.bind(quentin)
console.log(addToPaulCart)
addToPaulCart("t-shirt", 3, 90)
addToQuentinCart("baskets", 4, 100)


// call: cas d'utilisation 1

function Person(name){
    this.name = name 
}

function Developer(name, job){
    Person.call(this, name)
    this.job = job
}

const dev1 = new Developer("quentin", "front-end dev")

console.log(dev1)

// apply : cas d'utilisation 1

const a = [1,2,3,4,5]
const b = [6,7,8,9,10]

const c = a.concat(b)
console.log(a,b,c)

a.push.apply(a, b)

console.log(a)

// apply : cas d'utilisation 2
console.log(Math.max(20, 19, 23, 8))

const arr = [28, 12, 3, 8, 8]

console.log(Math.max.apply(null, arr))


// bind : cas d'utilisation 

// fonction partielle avec fonction curry 
let login = email => password => console.log(email, password)

const defaultLogin = login("tom@mail.com")
defaultLogin(123)

// fonction partielle avec la méthode bind 
function login2(email, password){
    console.log(email, password)
}

const defaultLogin2 = login2.bind(null, "tom@mail.com")

defaultLogin(123)


// fonctions fléchées  (les méthodes call, apply, bind sont inutilisables sur les fonctions fléchées)
quentin = {username: "quentin"}

const arrowAddToCart = (article) => {
    console.log(`${this.username} a ajouté ${article} au panier`)
}

arrowAddToCart.call(quentin,"1 t-shirt")