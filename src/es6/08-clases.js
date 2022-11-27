// // // Declarar
// // class User {};
// // // Instancia de una clase
// // const newUser = new User()

// class User{
//     //Metodos
//     greeting(){
//         return "Hello";
//     }

// }

// const newUser = new User()
// // console.log(newUser.greeting())


// // Constructor: es similar al init de las funciones de python
// class User{
//     constructor(){
//         console.log("Nuevo usuario");
//     }

//     greeting(){
//         return "Hello";
//     }
// }

// const newUser2 = new User()

// // This: elemento padre que lo contiene, este podemos asimilarlo a self en python

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         return "hello"
//     }
//     greeting(){
//         return `${this.speak()} ${this.name} es tu nombre`;
//     }
// }

// const Jose = new User("Jose")
// console.log(Jose.greeting())


// setting getters: Nos permite cambiar el valor de algun parametro definido en la instancia para una funcion especifica

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "hello"
    }
    greeting(){
        return `${this.speak()} ${this.name} es tu nombre`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const developer = new User("David", 22);
console.log(developer.uAge)
console.log(developer.uAge = 20)
