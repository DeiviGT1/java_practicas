//Creamos una funcion asincrona
const fnAsync =() => {
    // Creamos la promesa que es similar a un if
    return new Promise((resolve, reject) => {
        (true)
        // setTimeout sirve para definir el tiempo que esperara el programa para resolver
        ? setTimeout(() => resolve("AsynC!!!"), 2000)
        : reject(new Error("Error!"));
    })
}

// Creamos una funcion con async para que el programa espere al momento de ejecutrar está funcion
const anotherFn = async() => {
    // el await significa que esta funcion es la que tendrá que esperar para continuar
    const something = await fnAsync();
    console.log(something);
    console.log("Hello dude");

// si no agregamos el async y await, el programa ejecutara toda esta funcion en secuencia sin esperar y terminará 
// de ejecutar antes de que pase el tiempo para ejecutar fnAsync
}

// Primero imprimira el before, luego el after ya que ejecutra anotherFn asincronamente y al pasar el
// tiempo definido en el setTime out ejecutara la funcion anotherFn e imprimirá Async y Hello dude
console.log("Before");
anotherFn();
console.log("After");