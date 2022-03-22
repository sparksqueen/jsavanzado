const ajax = (recurso, metodo = "get") => {
  //el metodo, la req de xhr
  let xhr = new XMLHttpRequest();
  xhr.open(metodo, recurso);
  xhr.send();
  return xhr;
};

// ajax("url") //si queremos usar get
// ajax("url", "post") //si queremos pasarle el segundo parametro

// btn.addEventListener("click", () => {
//     ajax("saludo.html");
//     xhr.addEventListener("load", () => {
//       if (xhr.status == 200) {
//         let plantilla = xhr.response;
//         let div = document.querySelector("div");
//         div.innerHTML = plantilla;
//         console.log(plantilla);
//       }
//     });
//   });

// const getUsers = ajax("https://jsonplaceholder.typicode.com/users");
// getUsers.addEventListener("load", () => {
//   if (getUsers.status === 200) {
//     const info = JSON.parse(getUsers.response);
//     console.log(info);
//     info.forEach((e) =>
//       console.log(`El usuario ${e.name} puede ser contactado a ${e.email}`)
//     );
//   }
// });

/**
 *
 * Modulo 6 - AJAX Avanzado
 *
 */

//Binarios
let getImg = ajax("imagen.jpg");
//BLOB - Objeto "largo" Binario


 let form = document.querySelector("form");
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   let valor = form[0].value;
   let file = form[0].files;
   console.log(file);
 });
