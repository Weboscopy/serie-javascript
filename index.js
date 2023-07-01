// L'HERITAGE 
class CD {
    constructor(title, date) {
        this.title = title
        this.date = date
    }
    getTitle() { console.log(`${this.title}`) }
    getDate() { console.log(`${this.date}`) }
    // les méthodes abstraites n'existent pas en JavaScript, (on ne peut pas "forcer" l'implémentation d'une méthode dans une sous-classe)
    play(){}
}

// les classes abstraites n'existent pas en JavaScript, il est donc possible d'instancier des objets CD 
const cd = new CD()

// la classe TheatreShow necessiterait l'implémentation d'une interface "playable" qui pourrait également être appliquée aux sous-classes de CD
class TheatreShow {
    play(){console.log("jouer la pièce")}
}

class VideoGame extends CD {
    constructor(title, date, editor){
        super(title, date)
        this.editor = editor 
    }
}

class Film extends CD {
    constructor(title, date, director) {
        super(title, date)
        this.director = director
    }
    getDirector() { console.log(`${this.director}`) }
    play() { console.log("regarder le film") }
}

class Music extends CD {
    constructor(title, date, composer) {
        super(title, date)
        this.composer = composer
    }
    getComposer() { console.log(`${this.composer}`) }
    play() { console.log("écouter la musique") }
}


// les problèmes liés à l'héritage 
class HorrorFilm extends Film {
    scare(){console.log(`${this.title} fait peur`)}
    // nouvelle fonctionalité ajoutée a posteriori 
    shout(){console.log(`${this.title} fait crier`)}
}

class ComedyFilm extends Film {
    makeLaugh(){console.log(`${this.title} fait rire`)}
}

// class ComedyHorrorFilm extends HorrorFilm {
//     makeLaugh(){console.log(`${this.title} fait rire`)}
// }

// class ComedyHorrorFilm extends ComedyFilm {
//     scare(){console.log(`${this.title} fait peur`)}
// }

class ComedyHorrorFilm extends Film {
    scare(){console.log(`${this.title} fait peur`)}
    makeLaugh(){console.log(`${this.title} fait rire`)}
    // nouvelle fonctionalité qui a été ajoutée et qui concerne les films d'horreur
    shout(){console.log(`${this.title} fait crier`)}
}

// LA COMPOSITION 

// on décompose le code en créant des fonctionnalités indépendantes 
const getTitle = (obj) => {
    // chaque fonction crée un objet avec une seule fonctionnalité 
    return {
        getTitle : () => console.log(obj.title)
    }
}

const getDate = (obj) => {
    return {
        getDate : () => console.log(obj.date)
    }
}

const getDirector = (obj) => {
    return {
        getDirector : () => console.log(obj.director)
    }
}

const getComposer = (obj) => {
    return {
        getComposer : () => console.log(obj.composer)
    }
}

const play = (implementation) => {
    return {
        play : () => console.log(implementation)
    }
}

const scare = (obj) => {
    return {
        scare : () => console.log(`${obj.title} fait peur`)
    }
}

const makeLaugh = (obj) => {
    return {
        makeLaugh : () => console.log(`${obj.title} fait rire`)
    }
}

// nouvelle fonctionnalité ajoutée a posteriori
const shout = (obj) => {
    return {
        makeLaugh : () => console.log(`${obj.title} fait crier`)
    }
}

// constructeurs
const createFilm = (title, date, director) => {
    const film = {
        title,
        date, 
        director 
    }

    return {
        ...film, 
        ...getTitle(film),
        ...getDate(film),
        ...getDirector(film),
        ...play("Regarder le film")
    }
}

const createMusic = (title, date, composer) => {
    const music = {
        title,
        date, 
        composer 
    }
    return {
        ...music, 
        ...getTitle(music),
        ...getDate(music),
        ...getComposer(music),
        ...play("Ecouter la musique"),
        // ajout de la nouvelle fonctionnalité
        ...shout(music)
    }
}

const createHorrorComedy = (movie) => {
    return {
        ...movie,
        ...scare(movie),
        ...makeLaugh(movie),
        // ajout de la nouvelle fonctionnalité
        ...shout(movie)
    }
}

const movie = createFilm("scary movie", "22/10/2002", "Le directeur du film")

movie.getDate()

