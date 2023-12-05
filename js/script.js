
import { Card } from "./card-class.js";
import { User } from "./user-class.js";

const urlReqres = "https://reqres.in/api/users?delay=3";

const buttonRef = document.getElementById("click-button");
buttonRef.addEventListener("click", () => {



     if (timeValidation()) {
        let data = localStorage.getItem("savedTime");
        data = JSON.parse(data)
        console.log(data);
        domPrint(data.users);
      } else{
        getUsers();
      }
    });




const getUsers = async () => {
    let usersObj;
  try {
    const response = await fetch(urlReqres);
    const users = await response.json();
    usersObj = users.data.map((user) => {
      return new User(
        user.id,
        user.email,
        user.first_name,
        user.last_name,
        user.avatar
      );
    });
    // Se hace la petición por primera vez y se almacenan los datos en el local storage con su etiqueta temporal
    localStorageSave(usersObj);
    domPrint(usersObj);
  } catch (error) {
    console.log(error);
  }
  return usersObj;
};


//  Utilizar hasta comprobar el local Storage


function domPrint(users) {
  const usersContainer = document.getElementById("users-container");
  const usersCard = users.map((user) =>
    new Card(user.avatar, user.last_name, user.first_name, user.id, user.email).basicCard()
  );

  usersContainer.innerHTML = usersCard.join("");
}


const localStorageSave = (usersArray) => {
    let savedTime;
    const time = new Date().getTime();
    savedTime = {
        users: usersArray,
        time: time,
    }
  // guardar en local storage
  // JSON.stringify: Convierte un objeto en una cadena de texto con formato JSON
  localStorage.setItem("savedTime", JSON.stringify(savedTime));
  return savedTime;
};

const timeValidation = () => {
    if (!localStorage.getItem('savedTime')){
        return false;
    }
    const newSetTime = new Date().getTime();
    let savedTime = localStorage.getItem('savedTime');
    savedTime = JSON.parse(savedTime);
    savedTime = savedTime.time;

    const deltaTime = newSetTime - savedTime;

    const timeCap = 60000;

    if( deltaTime >= timeCap ){
        console.warn("Los datos están desactualizados. Se acaba de hacer una nueva petición, con retardo de 3 segundos, para actualizarlos. Presiona de nuevo el botón para acceder a la actualización.");
     return false;
   } else {
     console.log("Los datos están actualizados");
     return true;
   }

    }