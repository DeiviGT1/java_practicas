const users ={
    Jose:{
        country: "CO"
    },
    David:{
        country: "US"
    },
    Oscar:{
        country: "MX"
    }
}
// Con el simbolo de pregunta (?), en lugar de arrojar un error es cocmo un try para que intente acceder, 
// si no existe se arroja un undefined
console.log(users?.Ana?.Age);