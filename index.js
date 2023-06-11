const button = document.querySelector("button")
const form = document.querySelector("form")
const div = document.querySelector("div")


const func = (e) => {
    alert(e.currentTarget.tagName)
}

// bubbling  - propagation de l'intérieur vers l'extérieur

// button.addEventListener('click', func)
// form.addEventListener('click', func)
// div.addEventListener('click', func)

// capturing - propagation de l'extérieur vers l'intérieur

// button.addEventListener('click', func, {capture: true})
// form.addEventListener('click', func, {capture: true})
// div.addEventListener('click', func, {capture: true})


// stopper la propagation d'un événement 

button.addEventListener('click', func)
form.addEventListener('click', (e) => {
    e.stopPropagation()
    alert(e.currentTarget.tagName)
})
div.addEventListener('click', func)



