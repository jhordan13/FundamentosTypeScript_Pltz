/* ############# Tipo de dato object : Propio de TypeScript ############### */
var user;
user = {};
user = {
    id: 1,
    username: "Jordan13",
    firstname: "Jordan",
    isPro: true
};
console.log("user: ", user);
// console.log("username: ",user.username); --> No es posible poder acceder a una propiedad del objeto de tipo "object" propio de TypeScript
/* ############# Tipo de dato Object : Propio de JavaScript ############### */
// OBS: Para definir un "Object" propio de JavaScript no es necesario especificar su tipo
var myObj = {
    id: 1,
    username: "Jordan13",
    firstname: "Jordan",
    isPro: true
};
var isInstance = myObj instanceof Object; // instanceof devuelve "true" si 'myObj' es una instancia de 'Object'
console.log("isIntance: ", isInstance);
console.log("username: ", myObj.username);
