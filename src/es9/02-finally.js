const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve("Hey!");
        } else{
            reject("Didn't work dude");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    //El finally se ejecuta si o si al terminar el then o el catch
    .finally(() => console.log("Finally"))

