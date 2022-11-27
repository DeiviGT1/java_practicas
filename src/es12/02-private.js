class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Colocando un # al inicio del metodo, este se convierte en privado, 
    // por lo que solo podemos acceder a el estando en la clase
    #speak(){
        return "hello"
    }
    greeting(){
        return `${this.speak()} ${this.name} es tu nombre`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}


const developer = new User("David", 22);
console.log(developer.uAge)
console.log(developer.uAge = 20)
