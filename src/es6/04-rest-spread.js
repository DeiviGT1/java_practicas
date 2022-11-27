// arrays destructured 
let fruits = ["apple", "banana"];
let [a, b] = fruits;
// console.log(a, b)

// object destructured
let user = {username: "Jose", age: 21};
let {username, age} = user;
// console.log(username, age)

// spread operator, con los 3 puntos toma los datos del primer objeto y 
// los concatena con los datos que estamos agregando, dejando el nombre
// de la variable y su valor

// Acá lo que hace es dividir person en key, value para meterlo sin que quede
// un objeto dentro de otro
let person = {username: "Jose", age: 21};
let country = "Colombia";

let data = {...person, country}
console.log(data)

// rest en este caso values permite meter valores indefinidos los cuales 
// seran agregamos como variable tipo objeto (parecido a lista)
function sum(num, ...values){
    console.log(values, typeof(values))
}

sum(1,123,432,45,345,1);