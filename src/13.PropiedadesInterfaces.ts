enum PhotoOrientation {
  landscape = 10, // 10
  portrait,       // 11
  square,         // 12
  panorama        // 13
}

// Definimos una interface con propiedades "OPCIONALES"
interface PictureConfig{
  title?: string;
  date?: string;
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig){

  const pic = {title: "Default", date: "2020-07", }

  if(config.title){
    pic.title = config.title
  }
  if(config.date){
    pic.date = config.date
  }

  return pic;
}

let pict = generatePicture({}); //No necesitamos definir todas las propiedades en el objeto
console.log("picture :",pict);

pict = generatePicture({title: "Test title"}); 
console.log("picture :",pict);

pict = generatePicture({title: "Another Test title", date: "2021-11"}); 
console.log("picture :",pict);


/*
! readonly : 
* Permite definir atributos inmodificables y de solo lectura
* Solamente permite definir su valor al iniciar el objeto
*/

interface User{
  readonly id: number; 
  username: string;
  isPro: boolean
}

let usr : User; // Definimos una variable de tipo "objeto User"
usr = {id: 10, username: "jordan13", isPro: true}
console.log("user :",usr);
usr.username = "jor_sk";
// usr.id = 21; --> Error
console.log("user :",usr);

