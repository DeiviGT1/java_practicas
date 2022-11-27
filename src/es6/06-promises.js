// Las promesas permiten almacenar funciones dentro de otras que pueden ser asincronas y ejecutadas en un 
// momento dado o quizas nunca

// .then() es un metodo de la promesa que retorna anotherFunction() y recibe parametros que en este caso es un Callback

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve("Hey!!")
        } else{
            reject("meh, didn't work")
        }
    })
}


// acá parece que simplemente llamamos a arr como la respuesta de anotherFunction()
anotherFunction()
    .then(arr => console.log(arr))
    .catch(arr => console.log(arr))