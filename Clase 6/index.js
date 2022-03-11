// //AJAX - XML XMLHR

// //programacion asincronica
// //lo usamos mayormente para llamadas a un servidor
// //necesitamos un servidor -- live server / XAMPP

// //definir XMLHR  - genera una request
// let xhr = new XMLHttpRequest();
// //usar los eventos de ajax

// //READY STATE
// //nos marca el estado de nuestra request

// /**
//  *
//  * 0 - instanciado (iniciando)
//  * 1 - Objeto configurado - cuando le damos algo para hacer a nuestra request
//  * 2 - Headers enviados y recibidos
//  * 3 - Descargando - generalmente no lo vemos porque su periodo es corto y solo funciona si hay una descarga externa
//  * 4 - Finalizado --- finalizado puede ser exitosamente o fallido
//  * (para ver si es exito --- headers STATUS CODE --- 200 )
//  *
//  */

// //permite la configuracion de nuestra request
// //open(metodo, recurso)
// //metodo GET, POST, PUT, DELETE, PATCH
// //recurso - lo que va a abrir
// xhr.open("get", "texto.txt");

// //enviar nuestra request
// xhr.send();

// //no nos devuelve nada porque cuando se está ejecutando el log, la request sigue sin resolver
// console.log(xhr.response);

// //ahora es asincronico, enronces me va a devolver la respuesta --- si ya lo resolvió, sino volverá vacio
// setTimeout(() => {
//   console.log(xhr.response);
// }, 2000);

// xhr.addEventListener("readystatechange", () => {
//   console.log(`Estado actual: ${xhr.readyState}`);
//   if (xhr.readyState === 2) {
//     let headers = xhr.getAllResponseHeaders();
//     let algoDelHeader = xhr.getResponseHeader("content-type");
//     console.log(headers);
//     console.log(algoDelHeader);
//     // if (algoDelHeader != "text/html") {
//     //   xhr.abort();
//     //cancelar la ejecucion de este request
//     //    }
//   }
// });

// //con timeout = 1 le decimos que si tarda mas que 1 ms, no lo resuelva. (entonces se envia a estado 4 y finaliza con un fallo)
// xhr.timeout = 10;

// xhr.addEventListener("timeout", () => console.log("excedido de tiempo"));

// //xhr load
// //si se excede el tiempo con timeout el estado no llega a ser load
// xhr.addEventListener("load", () => {
//   if (xhr.status == 200) {
//     console.log(`Respuesta: ${xhr.response}`);
//   } else {
//     console.log("failed");
//   }
// });

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("get", "saludo.html");

  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let plantilla = xhr.response;
      let div = document.querySelector("div");
      div.innerHTML = plantilla;
      console.log(plantilla);
    }
  });
  xhr.send();
});
