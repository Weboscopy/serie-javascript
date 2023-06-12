const person = {name: "quentin"}

const developer = {job: "front-end dev"}

const JSDeveloper = {language: "JavaScript"}

// Modifier le Prototype d'un objet
// developer.__proto__ = person;
// const JSDeveloper = {language: "JavaScript", __proto__: developer}
Object.setPrototypeOf(JSDeveloper, developer)
Object.setPrototypeOf(developer, person)

// Récupérer le Prototype d'un objet
// console.log(developer.__proto__)
console.log(Object.getPrototypeOf(developer))

console.log(JSDeveloper.name, JSDeveloper.job, JSDeveloper.language)

// boucles sur les objets 
Object.keys(JSDeveloper).forEach(key => console.log(key))
// la boucle for/in permet de récupérer également les clés des objets présents dans le Prototype 
for (let key in JSDeveloper){
    console.log(key)
}

// fonctions constructeurs 
function Person1(name){
    this.name = name 
    // this.getInfo = function(){
    //     console.log(`Salut, je suis ${this.name}`)
    // }
}

// Ajouter un Protottpe commun à tous les objets créés à partir de la fonction constructeur
Person1.prototype.getInfo = function(){
    console.log(`Salut, je suis ${this.name}`)
}

const person1 = new Person1("quentin")
const person2 = new Person1("paul")

console.log(person1)
console.log(person2)
person1.getInfo()


console.log(Person1.prototype, person1.__proto__, Object.getPrototypeOf(person2))


// héritage 
function Developer1(name, job){
    Person1.call(this, name)
    this.job = job
}

Developer1.prototype = Person1.prototype
Developer1.prototype.constructor = Developer1

const dev1 = new Developer1("eric", 'front-end dev')
console.log(dev1)
dev1.getInfo()

// Autre manière de créer des objets
const personProto = {
    getInfo: function(){
        console.log(`Salut, je suis ${this.name}`)
    }
}

const person3= Object.create(personProto)
person3.name = "tom"
person3.getInfo()


// La syntaxe de classe pour créer des objets 
class Person4 {
    constructor(name){
      this.name = name
    }

    getInfo(){
        console.log(`Salut, je suis ${this.name}`)
    }

    static hello(){
        console.log(`Hello world`)
    }

}

class Developer4 extends Person4 {
    constructor(name, job){
        super(name)
        this.job = job
    }

    static hello(){
        console.log("Hello world")
    }
}

const dev4 = new Developer1("jeremy", 'front-end-dev')
console.log(dev4)
dev4.getInfo()
Person4.hello()


// Les fonctions constructeurs permettent :
// # de déclarer des attributs et des méthodes privés 
// # de créer des attributs statiques (en plus des méthodes statiques)
function Developer5(name, job) {
        // propriété publique
        this.name = name
        
        // propriété privée
        const _job = job

        // méthode privée
        const getInfo = function(){
            console.log(`Je suis ${_job}`)
        }

        // méthode publique
        this.getSummary = function(){
            getInfo()
        }
}

// méthode statique 
Developer5.hello = function(){
    console.log("hello world")
}

// attribut statique 
Developer5.language = "JavaScript"


const dev5 = new Developer5("mathis","front-end dev")
console.log(dev5.name)
console.log(dev5._job)
dev5.getSummary()

Developer5.hello()
console.log(Developer5.language)