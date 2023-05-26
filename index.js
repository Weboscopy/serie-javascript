// portée globale (accessible partout dans le script)

let x = 10;

const parent = () => {
    console.log(x);

    // portée locale
    // accessible dans la fonction "parent"
    // et également dans la fonction imbriquée "enfant"
    let y = 20;

    const enfant = () => {
        console.log(y+=5)
        console.log(x)
    }


   return enfant
}

// la variable closure contient ce qui a été retourné de la fonction parent, à savoir la fonction enfant 
// cette fonction enfant a toujours accées à la variable y de la fonction parent
const closure = parent();

console.log(closure); 

closure();
closure();
closure();
closure();

// Cas d'utilisation 

// Fonction annonyme invoquée immédiatement
((montantInitial) => {
    console.log(`Montant initial: ${montantInitial}`)

    // variable à la portée locale
    // on lui assigne la valeur passée en paramètre de la fonction invoquée immédiatement
    let valeur = montantInitial;

    // la fonction retournée va avoir accès à la variable valeur qui a une portée locale   
    return charge = () => {
        valeur -= 10;
        if(valeur > 0 ){
            console.log(`Il vous reste ${valeur}`)
        } else {
            console.log(`Votre compte est vide`)
        }
    }

// la fonction est invoquée immédiatement avec un montant initial de 40
})(40)


// la fonction annonyme est invoquée immédiatement au lancement du script
// cette fonction retourne une fonction charge que l'on va pouvoir utiliser
// la fonction charge va avoir accès à la variable valeur qui correspond au montant
// cette valeur du montant n'est accessible que par la fonction charge  puisque la valeur a été définie localement dans la fonction annonyme parente de la fonction charge
// la fonction charge va donc être le seul et unique moyen d'accéder à la valeur du montant  
charge();
charge();
charge();
charge();
charge();