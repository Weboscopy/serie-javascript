import { articles } from "./articles.js";

// Fonctionnement 
const username = "Quentin";


let arr = Array.from(username, (v, i) => {
    return v
})

console.log(arr);

arr = Array.from({length: 40},(v, i) => {
    return i * 2
})

console.log(arr);


// Cas d'utilisation - pagination

const articlesParPage = 10;

const pages = Math.ceil( articles.length / articlesParPage);


const articlesPaginate = Array.from({length: pages}, (_,i) => {
    const start = i * articlesParPage;
    return articles.slice(start, start + articlesParPage)
})

console.log(articlesPaginate[0])