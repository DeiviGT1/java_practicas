// Antigua forma de definir parametros por defecto
function newUser(name, age, country){
    var name = name || "Jose";
    var age = age || 22;
    var country = country || "Colombia";
    console.log(name, age, country);
}

newUser()


//Nueva forma de definir parametros por defecto
function newAdmin(name = "Jose", age = 22, country = "CO"){
    console.log(name, age, country)
}

newAdmin()