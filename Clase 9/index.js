const ajax = (recurso, metodo = "get") => {
  //el metodo, la req de xhr
  let xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.open(metodo, recurso);
  xhr.send();
  return xhr;
};

let input = document.querySelector("#img-drop");
let progress = document.querySelector("progress");
let drop = document.querySelector("#img-dr");

let getImg = ajax("imagen.jpg");

//  API BLOB
//decir que el tipo de respuesta es blob, y definir la imagen como respuesta
console.log(getImg);
getImg.addEventListener("load", () => {
  if (getImg.status === 200) {
    //console.log("todo ok");
    let imagen = getImg.response;
    //URL API
    let url = URL.createObjectURL(imagen);
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  }
});

//PROGRESS BAR -- HTML
//EVENTO PROGRESS -- AJAX -- Activa en Status 3
//LOADER

getImg.addEventListener("progress", (e) => {
  if (e.lengthComputable) {
    let porcentaje = (e.loaded * 100) / e.total;
    console.log(porcentaje);
    progress.value = porcentaje;
  }
});

//INPUT
// DRAG & DROP
// API DRAG Y DROP
//drag enter --> cuando arrastro al div
// drag leave --> cuando salgo arrastrando del div
// drag over --> cuando permanezco en el div
// drop --> accion soltar

drop.addEventListener("dragenter", (e) => {
  e.preventDefault();
  console.log("Entré en el div");
});

drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  console.log("Salí del div");
});
drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("Me colgué en el div");
});
drop.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
});

input.addEventListener("change", () => console.log(input.files));


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  let xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.open(metodo, recurso);
  xhr.send();

  getImg.addEventListener("load", () => {
    if (getImg.status === 200) {
     let respuesta = Parse(getImg.response)
     console.log(respuesta)
    }
  });
  