// compteur standard qui utilise une boucle while
let compteur = (i = 0) => {
    while(i <= 15){
        console.log(i);
        i++
    }
}

compteur();

// compteur récursif 
compteur = (i = 0) => {
    // la condition est l'inverse de celle du compteur standard
    // si cette condition est réalisée pour la valeur de i, le retour stoppe l'exécution de la suite de la fonction, la récursion est terminée
    if( i > 15) return 
    console.log(i);
    i++;
    // la fonction est appelée à l'intérieur d'elle-même avec la nouvelle valeur de i qui a été incrémenté
    compteur(i)
}




const categories =  {
    litterature: ['1984', 'Las Vegas Parano', 'Crime et Châtiment'],
    music: {
        classic: ['Sonate au clair de lune', 'Traviata'],
        rock: ['Twist and Shout', 'Satisfaction']
    },
    cinema : {
        horror: {
            classic: ['Freddy Kruger', 'Saw', 'Scream'],
            recent: ["Nope", "Relic"]
        },
        thriller : {
             classic: ['Shutter Island', "Shining "],
             recent: ['The Guilty']
        }
    }
}


// le tableau "arr" contiendra tous les titres récupérés  
const getTitles = (obj, arr=[]) => {
    // on boucle sur les clés de l'objet qui a été passé en paramètre
    Object.keys(obj).forEach(key => {
        // si la valeur associée à la clé est un tableau
       if( Array.isArray(obj[key])){
        // alors on boucle sur ce tableau et on ajoute les titres dans le tableau "arr" qui rassemble tous les titres
        // le retour empêche l'execution de la suite de la fonction et permet de passer à la clé suivante
        return obj[key].forEach(title => arr.push(title))
       }
       // si la valeur associée à la clé n'est pas un tableau, alors il s'agit d'un objet imbriqué
       // la fonction getTitles est exécutée à l'intérieur d'elle-même, on lui passe l'objet imbriquée et la tableau "arr" qui contient les titres précédents
       getTitles(obj[key], arr)
    })

    // une fois la récursion terminée on retourne le tableau qui contient tous les titres
    return arr;
}

const titles = getTitles(categories)

console.log(titles)