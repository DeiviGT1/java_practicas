// enhaced object literals
function newUser(user, age, country){
        return {user : user,
        age : age,
        country : country
    }
}

// Se define la funcion asi ya que el nombre del parametro es el mismo del que necesitamos para el key

function newUser(user, age, country, uID){
    return {user,
        age,
        country,
        id: uID
    }
}

console.log(newUser("Jose", 22, "COL", 1007))