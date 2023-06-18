const app = {
    init: async () => {
       for await (let val of getPosts(50)){
            const li = document.createElement("li")
            li.innerHTML = `
            <h3>${val.data.title}</h3>
            <span>${val.data.body}</span>
            `
            document.querySelector("ul").appendChild(li)
            const progressBar = document.querySelector(".progress-done")
            progressBar.style.width = `${val.percentage}%`
            progressBar.parentElement.firstElementChild.innerText = `${val.percentage} %`
       }
    }
}


async function *getPosts(nbOfPosts){
    for(let i=1; i <= nbOfPosts; i++){
        const percentage = Math.ceil(i * 100 / nbOfPosts);
        const data = await (await fetch(`http://localhost:3000/posts/${i}`)).json()
        yield {data, percentage}
    }
}



document.addEventListener("DOMContentLoaded", app.init)