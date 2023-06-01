// rappel #1 : primitives vs structures

// primitives
let a = "Quentin";                      // chaîne de caractères
a = 123;                                // nombre
a = true;                               // booléen 
a = undefined;                          // undefined 
a = 1293939393939999283883n;            // grand nombre


// strcutures
new Set(); 
new Map();
new Array();
new Object();
new Date();

// toutes les structures ont un type d'objet 
console.log(typeof new Date());
console.log(typeof new Array());

// rappel #2 : valeur vs référence 

// passage par valeur pour les primitives
a = 7;
let b = a;

b++;

console.log(a,b);

// passage par référence pour les structures 

a = [1,2,3];

b = a;

b.push(4);

console.log(a === b);

console.log(a,b);


// rappel #3 : immutabilité vs mutabilité

// les primitives sont immutables 
a = "Tom";

a[0] = "t";

console.log(a);

// les structures sont mutables 

a = ["T", "o", "m"];

a[0] = 't';

console.log(a);

// La méthode freeze permet de rendre les objets immutables
// elle ne permettra pas de rendre immutable les objets imbriqués qui se trouvent à l'intérieur de l'objet bloqué
a = {name: "Sarah", friend: {name: "Paul"}};

Object.freeze(a);

a["name"] = "Quentin";
a.friend.name = "Alice";

console.log(a);

// copies supeficielles 

a = [1,2,3];

b = [...a];

b.push(4);

console.log(a === b);
console.log(a,b);

a = {name: "Quentin", friend: {name: "Alice"}};

b = {...a};

b.name = "Sarah";
b.friend.name = "Paul"

console.log(a === b);
console.log(a,b);



// copies profondes

// méthode #1 : utiliser une fonction clone
const clone = (obj) => {
    // on retourne directement les primitives et les valeurs null 
    if(typeof obj !== "object" || obj === null) return obj
    // si l'objet à copier est un tableau on crée un tableau vide, autrement un objet vide
    const copy = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        // pour chaque clé de l'objet à copier on récupère la valeur
        const valeur = obj[key]
        // la copie reprend les différents clés de l'objet de départ 
        // la valeur associée à la clef correspond à la valeur retournée par la fonction clone invoquée récursivement 
        copy[key] = clone(valeur)
    }
    // on retourne la copie
    return copy
}

a = {name: "Quentin", friend: {name: "Alice"}};

b = clone(a)
// méthode #2 : utiliser les méthodes sur les objets JSON
b = JSON.parse(JSON.stringify(a))

b.name = "Sarah";
b.friend.name = "Paul";

console.log(a === b);
console.log(a, b);