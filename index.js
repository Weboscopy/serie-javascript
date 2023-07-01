const form = document.querySelector("form")

const app =  {
  init: () =>{
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirmPassword").value
        const file = document.querySelector("#files").files[0]

        if(!username || !email || !password || !confirmPassword){
            app.sendAlert("Veuillez remplir tous les champs", "error")
            return 
        }

        if(password !== confirmPassword){
            app.sendAlert("Les mots de passe sont différents", "error")
            return
        }

        if (typeof file === "undefined" || file.type !== "image/jpeg"){
            app.sendAlert("Ajouter une image au format jpeg", "error")
            return
        }

        console.log({username, email, password, image: file.name})

        document.querySelectorAll("input").forEach(input => input.value = "")

        app.sendAlert("Inscription terminée!", "success")
    })
  
    },
    init2: () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()

            const formData = new FormData(e.currentTarget)
            const values = [...formData.values()]

            if(values.includes("")){
                app.sendAlert("Veuillez remplir tous les champs", "error")
                return 
            }

            if(formData.get("password") !== formData.get("confirmPassword")){
                app.sendAlert("Les mots de passe sont différents", "error")
                return
            }

            if(formData.get("file").type !== "image/jpeg"){
                app.sendAlert("Ajouter une image au format jpeg", "error")
                return
            }

            formData.set("image", formData.get("file").name)
            formData.delete("file")
            formData.delete("confirmPassword")

            const formObject = Object.fromEntries(formData)

            console.log(formObject)

            document.querySelectorAll("input").forEach(input => input.value = "")

            app.sendAlert("Inscription terminée!", "success")
         
        })
    },
    sendAlert: (msg, type) => {
        const span = document.createElement("span")
        span.innerText = msg
        span.classList.add(type)
        document.querySelector("h1").after(span)
        setTimeout(() => {
            span.remove()
        }, 2000)
    },
}

document.addEventListener("DOMContentLoaded", app.init2)