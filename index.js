// enchaînement de méthodes d'ordre supérieur sur les tableaux
const productCodes = [
    "ES0012",
    "ES0013",
    "ES0014",
    "ES0017",
    "PA0023",
    "PA0024",
    "PA0025",
]

let arr = productCodes
                .filter(code => code.startsWith("PA"))
                .map(code => code.slice(code.length -4, code.length))

console.log(arr)

// enchaînement d'une méthode d'ordre supérieur avec une méthode standard de tableau
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    [
        {
            name: "iamge5.jpg",
            size: "40*40"
        },
        {
            name: "image6.jpg",
            size: "180*180"
        },
        {
            name: "image7.jpg",
            size: "60*35"
        }
    ]
]

arr = images
        .flat()
        .map(image => typeof image === "string" ? image : image.name)

console.log(arr)

// enchaînement d'une méthode de chaîne de caractères avec une méthode de tableaux
const categories = "musique, livres, films, series"
arr = categories
                .split(",")
                .map((c, i) => ({[`category${i + 1}`]: c}) )

console.log(arr)

// utilisation simultanée des méthodes sur les tableaux
const articles = [
    {id: 1, title: "Ne regardez surtout pas ce film, vous allez être deçu", published: true},
    {id: 2, title: "Les meilleurs films de l'année", published: true},
    {id: 3, title: "Les heures de gloire du cinéma italiens ", published: false},
];

const input = "film"

arr = articles.filter(article => article.title.includes(input))

console.log(arr)


// utilisation simultannée des méthodes sur deux tableaux différents

const bookmarks = [1,3]

arr = articles.filter(article => bookmarks.indexOf(article.id) !== -1)

console.log(arr)

// enchaînement de plusieurs méthodes 

 arr = articles
                    .filter(article => article.published)
                    .map(article => article.title)
                    .sort()

console.log(arr)



// dans de nombreux cas, ce qui est fait avec un enchaînement de méthodes
// peut être fait avec une seule boucle for (donc plus optimale et plus lisable)

arr = articles
                    .filter(article => article.published)
                    .map(article => article.title)
                    .forEach(title => console.log(title))


articles.forEach(article => {
    if(article.published){
        console.log(article.title)
    }
})

