console.log("sync");

// AJAX

/**
 *   let xhr = new XMLHttpRequest();
 * xhr.open("get", "home.html");
 * xhr.send();
 *
 */

//llamada a ajax mas corta ---- funcion "custom"
const ajax = (recurso, metodo = "get") => {
  // let metodoHttp = metodo || "get"; //metodo o get
  let xhr = new XMLHttpRequest();
  xhr.open(metodo, recurso);
  xhr.send();
  return xhr;
};
//cuando queramos obtener esta respuesta vamos a llamar a variable.response

let links = document.querySelectorAll("a");
console.log(links);
let info = document.querySelector("#info");
links.forEach((link) =>
  link.addEventListener("click", () => {
    let pagina = `${link.id}.html`;
    //nos falta el href
    location.hash = link.id;
    //llamada a ajax para mostrar nuestro contenido
    let xhr = ajax(pagina);
    xhr.addEventListener(
      "load",
      () => xhr.status === 200 && (info.innerHTML = xhr.response)
    );
  })
);

//llamada a api externa
//https://jsonplaceholder.typicode.com/users

let nombres = document.querySelector("#nombres");
let getUsers = ajax("https://jsonplaceholder.typicode.com/users");
getUsers.addEventListener("load", () => {
  if (getUsers.status === 200) {
    let informacion = JSON.parse(getUsers.response);
    informacion.forEach((e) => {
      console.log(e.name);
      nombres.innerHTML += `<p>${e.name}</p>`;
    });
    console.log(informacion);
  }
});


//API - aplicacion externa a la que le podemos consultar y enviar datos desde nuestra pagina (front) -- el servidor los recibe, y los maneja segun la necesidad -- INTERFAZ --- servidor sirve para enviar y recibir datos. 
//intermediario entre frontend y la bd
//jQuery la proxima semana.