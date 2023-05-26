const ensemble = new Set();

console.log(ensemble)

// ajouter des éléments à l'ensemble
ensemble.add(1);
ensemble.add(2);
ensemble.add(3);

// On peut ajouter n'importe quel type de données à l'ensemble
ensemble.add("text")
ensemble.add({name: "quentin"})
 
// la méthode delete permet de supprimer les éléments de l'ensemble
ensemble.delete(1)

// la méthode has permet de vérifier si un élément est présent dans l'ensemble
console.log(ensemble.has("text"))

  // contrairement aux tableaux, on ne peut pas ajouter plusieurs fois un même élément dans un ensemble
 ensemble.add(1)
 ensemble.add(1)
 ensemble.add(1)
 ensemble.add(1)
 ensemble.add(1)
 console.log(ensemble)


// cas pratique 

const articles = [
    {
        name: "article 1",
        category: "javascript"
    },
    {
        name: "article 2",
        category: "javascript"
    },
    {
        name: "article 3",
        category: "java"
    },
    {
        name: "article 4",
        category: "java"
    },
    {
        name: "article 5",
        category: "php"
    }, 
    {
        name: "article 6",
        category: "php "
    }
]

// on utilise map sur les articles pour récupérer un tableau qui contient seulement les catégories 
// le tableau qui est retournée est mis dans un ensemble, les doublons ne sont plus présents dans l'ensemble
// on met l'ensemble dans un tableau en utilisant l'opérateur spread
// on ajoute une nouvelle catégorie "tous" dans le tableau 
let categories = ["tous",  ...new Set(articles.map(article => article.category))]

 
 