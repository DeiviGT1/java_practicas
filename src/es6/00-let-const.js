const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "kiwi";
    const fruits3 = "watermelon";
    
  }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);  
};

fruits();

// No podemos ejecutar la linea 9 y 10 ya que llaman a una variable dentro de un
// condicional que no está definida globalmente sino localmenteF
