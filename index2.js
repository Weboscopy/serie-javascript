const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newLi = document.createElement("li")
    newLi.innerHTML = `
    <span>${input.value}</span><button>X</button>
    `
    // newLi.lastElementChild.addEventListener("click", (e) => {
    //     e.target.parentElement.remove()
    // })

    ul.appendChild(newLi)
    input.value = ""
})

// délégation d'événement 
ul.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
         e.target.parentElement.remove()
    }
})