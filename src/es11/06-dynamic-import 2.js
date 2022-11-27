// Primero con esto creamos una variable que encontrara el elemento por id, como hariamos con selenium
const button = document.getElementById("btn");

// Con addEventListener() lo que hacemos es hacer una accion a la variable
// async function es una funcion anonima (sin nombre) asincrona
button.addEventListener("click", async function() {
    const module = await import("./module.js");
    console.log(module)
    module.hello()
})