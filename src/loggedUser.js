
var user = {
    
    userId: 0,
    logged: false 
}

export function setId(id){
    user.userId = id
}

export function setLogged(log){
    user.logged = log
}

export function getId(){
    return user.userId
}

export function getLogged(){
    return user.logged 
}