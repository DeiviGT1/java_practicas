// flat map devuelve una matriz de cualquier submatriz (arreglos anidados en arreglos)
// array.flat lo devuelve en una sola dimension

const array = [1,2,[3,4],5,6];
const result = array.flat(9);
console.log(result)

// flatMap imprime el array con la funcion que le solicitemos
const array2 = [1, 2, 3, 4, 5, 6];
console.log(array2.flatMap(v => [v, v*2]))