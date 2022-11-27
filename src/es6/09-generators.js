// Con el asterisco en la funcion podemos identificar que es un generator
function* iterate(array){
    for (let value of array){
        // yield es una palabra reservada para retornar cada uno de los valores del ciclo
        yield value;
    }
}

const it = iterate(["Jose", "David", "Oscar", "Ana"])
// recuerda el estado de it pues cada vez imprime el valor siguiente
console.log(it.next().value);
console.log(it.next().value);

const objeto = ["Jose", "David", "Oscar", "Ana"]

// Esta es la forma normal de hacer un ciclo for, si queremoms obtener el indice colocamos in en lugar de of
for (let elemento of objeto) {
  console.log(elemento) // 'a' 'b' 'c'
}