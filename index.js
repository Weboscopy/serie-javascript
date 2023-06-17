const app = {
    init: () => {
        document.addEventListener("scroll", throttle((e) => {
            document.body.style.background  = randomColor()
        }, 2000))
        app.loadPosts()
    },
    loadPosts: async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        data.forEach(post =>{
            const article = document.createElement("article")
            article.innerHTML = `
            <h3>${post.title}</h3>
            <span>${post.body}</span>
            `
            document.querySelector("body").appendChild(article)
        })
    }
}

const throttle = (fn, interval) => {
    let lastTime = 0;
    return (...args) => {
        const now = new Date().getTime()
        if(now - lastTime < interval) return 
        lastTime = now 
        fn(...args)
    }
}


function randomColor(){
    const rndInt = Math.floor(Math.random() * 6) + 1
    switch(rndInt){
        case 1:
            return "#e0ffcd"
        case 2:
            return "#fdffcd"
        case 3: 
            return "#ffebbb"
        case 4:
            return "#ffcab0"
        case 5: 
            return "#a393eb"
        case 6:
            return "#8ed2c9"
    }
}

document.addEventListener("DOMContentLoaded", app.init)