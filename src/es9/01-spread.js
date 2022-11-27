const User = {username: "Jose", age: 22, country: "CO"}
const {username, ...values} = User

console.log(username);
console.log(values)