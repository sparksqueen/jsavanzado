console.log("sync");

//EVENTOS (del DOM)
//trigger (detonar) - listener (escuchador) - handler (manejador)

//via funcion con onclick HTML
const saludar = () => console.log("hola desde html/js");

//addEventListener <---- API EventTarget
const boton3 = document.querySelector("#boton3");
boton3.addEventListener("click", () => console.log("hola AEL"));

//en este caso el prevent default previene enviarte a google.
const a = document.querySelector("a");
a.addEventListener("click", (e) => e.preventDefault());
//despues de esto, hago una funcion custom que haga lo que yo quiero que haga el <a>

//callbacks
const funcion1 = () => console.log("holis");
const funcion2 = () => console.log("holis 2");

const ejecutor = (param1, callback) => {
  console.log(param1);
  callback();
};

//propagacion de los eventos
const Uno = document.querySelector("#uno");
const Dos = document.querySelector("#dos");
const Tres = document.querySelector("#tres");

Tres.addEventListener(
  "click",
  (e) => {
    console.log("click en Tres");
    //   e.stopPropagation();
  },
  true, // parametro opcional.  No pasarlo, o pasarlo como false es lo mismo
);

Dos.addEventListener(
  "click",
  (e) => {
    console.log("click en Dos");
    //  e.stopPropagation();
  },
  true, // parametro opcional.  No pasarlo, o pasarlo como false es lo mismo
);

Uno.addEventListener(
  "click",
  (e) => {
    console.log("click en Uno");
    //  e.stopPropagation();
  },
  true, // parametro opcional.  No pasarlo, o pasarlo como false es lo mismo
);
//booleano (tercer parametro opcional de AEL) - false(o default) - BUBBLING, true: CAPTURING
// BUBBLING - se propaga de hijo a padre --- por defecto   ---- TRES / DOS / UNO
// CAPTURING - se propaga de padre a hijo ------- UNO / DOS / TRES
