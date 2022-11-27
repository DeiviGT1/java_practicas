// Esta es una funcion antiguamente en JS
function square(num){
    return num * num;
}

//Las nuevas funciones pueden ser definidas con const, var o let (recomiendan const)
const square = (num) =>{
    return num * num;
}

// Esta es otra forma de aplicar la arrow function, 
// solo aplica si hay una sola linea de codigo y un solo parametro
// si hay mas parametros los colocamos con el parentesis
const square = num => num * num