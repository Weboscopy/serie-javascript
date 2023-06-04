// date du jour au format UTC
let date = new Date()

console.log(date)

// créer une date spécifique 
// l'heure renseignée dans le constructeur correspond à l'heure locale 
// la date créée est au format UTC
date = new Date(2023, 2, 13, 20, 30)  // !! les mois sont indexés à partir de 0
date = new Date("Marche 23, 2023 20:00:00")
date = new Date("1/1/2023")
date = new Date("2023-03-12T20:00:00")

// pour créer une date directement au format UTC, il faut rajouter la lettre Z à la fin
date = new Date("2023-03-12T20:00:00Z")
console.log(date)


// formatage des dates 
console.log(date.toLocaleString()) // retourne la date au format local dans une chaîne de caractères 
console.log(date.toLocaleString("en-EN")) // on peut changer le format de la date

console.log(date.toLocaleString("fr-FR", {
    dateStyle: "full"       // option de formatage général
}))
console.log(date.toLocaleString("fr-FR", {
    // options de formatage spécifique
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}))


// fonction de formatage 
const dayOfWeek = (date) => date.toLocaleString("fr-FR", {weekday: "long"})

console.log(dayOfWeek(date))


// récupérer le temps au format Unix (temps écoulé en ms depuis le 01/01/1970)
date = new Date("March 23, 2023 20:00:00").getTime();

console.log(date)

date = new Date(1679598000000) // le temps au format Unix peut être utilisé pour créer une date
console.log(date)

// la méthode statique now retourne la date du jour au format Unix
let today = Date.now()
console.log(today)

// calcul relatif des dates  
today = new Date()
const tomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 24)
console.log(tomorrow)

const fiveMonthsLater = new Date(today.getTime())
fiveMonthsLater.setMonth(today.getMonth() + 5)
console.log(fiveMonthsLater)

// calculer des intervalles de temps
const date1 = new Date("March 23, 2023 20:00:00")
const date2 = new Date("May 23, 2023 20:00:00")

const timeDifference = Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24 * 7 * 4))
console.log(timeDifference)