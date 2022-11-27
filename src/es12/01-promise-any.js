const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")


Promise.any([promesa1, promesa2, promesa3])
    //Esto significa que ejecutara la primera promesa que sea correcta
    .then(respuesta => console.log(respuesta)) // Promise 3
    //Si ninguna promesa es correcta entonces ejecutara el catch
    .catch(error => console.log(error))