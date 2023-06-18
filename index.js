const posts = [
    {
        title: "Article 1",
        body: "N’empêche que tout le monde parle de moi! C’est quand même un signe! Ben évidemment que c’est vrai! Vous avez jamais dit que ça devait être faux! Sire, mon père était peut-être unijambiste mais, moi, ma femme a pas de moustache! "
    },
    {
        title: "Article 2",
        body: "Ouais, y a pas à dire, quand y a du dessert le repas est tout de suite plus chaleureux! La vache! Ca vous rend pas aimable en tout cas, hein! On construit un barrage, après on lance de la caillasse de l'autre côté de la rivière pour faire croire aux autres qu'on a traversé dans l'autre sens, une fois qu'ils sont au milieu, on casse le barrage et on les noie. "
    }, 
    {
        title: "Article 3",
        body: "Ouais le problème c'est qu'on a passé quatre semaines à construire un barrage, ça fait un peu mal au cul de le détruire. N’empêche que tout le monde parle de moi! C’est quand même un signe! Ben c’est bien ce que j’ai dit! Provençal le Gaulois… le Galois… Ouais je vois ce que vous voulez dire… "
    },
    {
        title: "Article 4",
        body: "Alors par contre, si vous sentez qu’il s’énerve un peu, hein, vous lui sortez un morceau de viande. Mais attendez… Y a une table et des sièges et j’devrais m’farcir toutes les notes à ratifier debout? N’empêche que j’suis une légende! "
    },
    {
        title: "Article 5",
        body: "Ah il faut la tenter celle-là! Ben c’est bien ce que j’ai dit! Provençal le Gaulois… le Galois… Ouais je vois ce que vous voulez dire… Alors dites vous que c’est un combat réel et montrez-moi ce que vous avez dans l’slibard! Moi, prochaine bataille rangée je reste à Kaamelott. Oh ben ça va on plaisante! "
    }
]


const app = {
    init: function(){
        app.renderList(posts)
        document.querySelector('input').addEventListener("input", debounce((e) => {
            app.filterPosts(e.target.value)
        }, 1000))
    },
    renderList: function(data){
        document.querySelector("ul")?.remove()
        const ul = document.createElement("ul");
        data.forEach(item => {
            const li = document.createElement("li")
            li.innerHTML = `
                <h3>${item.title}</h3>
                <span>${item.body}</span>
            `
            ul.appendChild(li)
        })
        document.querySelector("form").after(ul)
    },
    filterPosts: function(input){
        const filteredPosts = posts.filter(post => post.body.includes(input))
        app.renderList(filteredPosts)
    }
}

function debounce(func, delay){
    let timeout;
    return (...args) => {
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

 

document.addEventListener("DOMContentLoaded", app.init)