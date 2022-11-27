const hello = "Hola!"

// El metodo padStart completa el string en el inicio de con el nuevo ingresado para que el length inicial 
// tenga la cantidad del primer parametro del padStart
console.log(hello.padStart(9,"Hi"), hello.length, hello.padStart(9,"Hi").length)

// El metodo padEnd completa el string en el final de con el nuevo ingresado para que el length inicial 
// tenga la cantidad del primer parametro del padStart
console.log(hello.padEnd(9,"Hi"), hello.length, hello.padStart(9,"Hi").length)



