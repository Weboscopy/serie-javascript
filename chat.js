
const quentin = {
    id: 1,
    username: "quentin",
}

const paul = {
    id: 2,
    username: "paul",
}

const sarah = {
    id: 3,
    username: "sarah",
}

const alice = {
    id: 4,
    username: "alice",
}


const chatRoom = new Map();


function joinRoom(user){
    if(chatRoom.has(user)){
        console.log(`${user.username} est déjà présent dans le salon...`)
    } else {
        chatRoom.set(user, {status: "active"})
        console.log(`${user.username} a rejoint le salon!`)
    }
}

function countParticipants(){
    if(chatRoom.size === 0){
        console.log(`Il n' y a personne dans le salon`)
    } else {
        console.log(`Il y a ${chatRoom.size} de personnes dans le salon`)
    }
}

function changeStatus(user){
    if(chatRoom.has(user)){
        chatRoom.set(user, {status: "inactive"})
    }
}

function getActiveParticipants(){
    list = [];
    for (let [key, value] of chatRoom.entries()){
        if(value.status === "active"){
            list.push(key.username)
        }
    }

    console.log(list)
}

function leaveRoom(user){
    chatRoom.delete(user)
}



joinRoom(quentin)
joinRoom(paul)
joinRoom(alice)
joinRoom(sarah)
joinRoom(paul)
changeStatus(paul)

getActiveParticipants()

leaveRoom(quentin)

console.log(chatRoom)
countParticipants()