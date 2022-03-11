let menu = document.querySelector(".material-icons");
let drawer = document.querySelector("#drawer");
menu.addEventListener("click", function (e) {
  if (drawer.style.left) {
    drawer.style.left = "";
  } else {
    drawer.style.left = "0px";
  }
});

let loader = document.querySelector("img");
if (loader.complete) {
  //1) new request
  let xhr = new XMLHttpRequest();
  //2) open --- metodo y el content
  xhr.open("get", "home.html");
  // 4) validar y manejar la respuesta
  // esta es la parte donde puedo mostrar en pantalla algo, etc.
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      setTimeout(() => {
        document.querySelector("main").innerHTML = xhr.response;
      }, 1000);
    }
  });
  // 3) enviar el request
  xhr.send();
}
