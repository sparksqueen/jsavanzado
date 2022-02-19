console.log("sync");

//... Objetos?

// const array1 = [1, 2];
// const array2 = [3, 4];
// const arrayGrande = [...array1, ...array2]; // concatenacion
// console.log(arrayGrande);
// //OBJETOS ES2018.
// //ESTANDAR ES6 - 2015(ES2015)
// const objeto1 = { nombre: "Pedro", edad: 40 };
// const objeto2 = { nombre: "Jose", hobbie: "Cantar" };
// const objetoGrande = { ...objeto1, ...objeto2 };  // merge de los dos objetos
// console.log(objetoGrande);

/**
 *
 * ES6 Repaso
 *
 *  */

// const array = [1, 2, 3, 4];
// const nombre = "Angeles";

// //ARRAYS
// console.log(array.find((x) => x > 2)); //el numero que pasa la condicion
// console.log(array.findIndex((x) => x > 2)); //index/inidice/posicion

// //STRING
// console.log(nombre.startsWith("A")); // === "A" , 0
// console.log(nombre.startsWith("A", 1)); // startsWith(searchString: string, position?: number):
// console.log(nombre.endsWith("s"));
// console.log(nombre.endsWith("e", 6)); //ojo, analiza la posicion final que le pasemos
// console.log(nombre.startsWith("Angel"));
// console.log(nombre.startsWith("ngel", 1));

// console.log(nombre.includes("gel"));
// console.log(nombre.includes("gel", 1)); //incluye desde una posicion
// console.log(nombre.includes("gel", 3));

//document.getElementById
//document.querySelector // "tag" , "#id" o ".class"
//document.querySelectorAll
//document.getElementsByClassName
//document.getElementsByTagName

console.log(document.getElementById("parrafo").innerHTML); // ya no se usan 
console.log(document.getElementsByClassName("parrafoC")[0].innerHTML);
console.log(document.getElementsByTagName("p")[0].innerHTML);
const parrafosTag = document.getElementsByTagName("p");
console.log(parrafosTag);
// parrafosTag.forEach(console.log(parrafo[i].innerHTML));

console.log(document.querySelector("p").innerHTML); // ---se usa + 
const parrafos = document.querySelectorAll("p"); // (".class") - llamaria a una clase y no a un tag
console.log(parrafos);
parrafos.forEach((parrafo) => console.log(parrafo.innerHTML)); // si es texto innerText

// escribir algo por HTML
//innerHTML = "Hola" , .write, .create

//document.querySelector("p").innerHTML = "Cambio desde JS";

document.querySelector("#imagen").src =
  "https://us.123rf.com/450wm/objowl/objowl1209/objowl120900004/15031310-star-flower-imagen-abstracta-digital-con-un-dise%C3%B1o-estrella-flor-psicod%C3%A9lica-en-verde-azul-rosa-y-am.jpg";

//vamos a cambiar las clases de este parrafo ---- generalmente vinculado a modificar CSS 
const parrafo = document.querySelector("#cambiar").classList;

parrafo.add("otraClase");
parrafo.add("unaClaseMas");
console.log(parrafo);

parrafo.remove("otraClase");
console.log(parrafo);

parrafo.toggle("unaClaseConToggle");
console.log(parrafo);
parrafo.toggle("unaClaseConToggle");
console.log(parrafo);
parrafo.toggle("unaClaseConToggle");
console.log(parrafo);

/**
 *
 * EVENTOS -- ???
 *
 * Los eventos modifican el dom si uso JS para modificar HTML en la funcion que se ejecuta
 *
 */

const evento = () => {
  document.getElementById("boton").innerText = "Me clickearon";
};

// const f = () => () --- autoretornante
//arrow f anonima / sin nombre
// () => hace esto


// window.innerHeight;
// window.innerWidth; //inner es la parte "usable" de la pagina
// window.outerHeight;
// window.outerWidth; //outer es toda la pantalla sin barras de navegacion etc
// window.screen.width
// window.screen.availWidth
// window.location
// history.back()
// history.forward()
// setTimeout("console.log('En un segundo te saludo')", 1000);
