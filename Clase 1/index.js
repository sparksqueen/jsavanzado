// index, main, intro
/**
 *
 * Primer ejercicio
 *
 */
console.log("sync");

// var nombreUsuario = prompt("Ingrese su nombre");

// var saludo = "Hola, buenas noches " + nombreUsuario + "!";

// alert(saludo.toLowerCase());
// alert(saludo.toUpperCase());

/**
 *
 * Segundo Ejercicio
 *
 */

// var nombrePersona = prompt("Ingrese su nombre");
// const nombre1 = ["Sergio", "Checho"];
// const nombre2 = ["Tania", "Tania"];

// if (nombre1[0].includes(nombrePersona)) {
//   alert("A " + nombre1[0] + " le gusta que le digan " + nombre1[1]);
// } else if (nombre2[0].includes(nombrePersona)) {
//   alert("A " + nombre2[0] + " le gusta que le digan " + nombre2[1]);
// } else {
//   alert("Ese nombre es incorrecto");
// }

/**
 *
 * ES6
 *
 */

/* VAR vs LET y CONST */
//ES5 - var (cambia de valor, scope es global)
//ES6 - let (cambia de valor, scope es local)
//ES6 - const (no cambia de valor, scope es local)

// var consultar = true;
// // var edad = 7;
// // //var edad = 9; //si se puede
// // edad = 9;
// // console.log(edad);

// if (consultar) {
//   var edad = 100;
//   console.log(edad);
// }
// console.log(edad);

// if (consultar) {
//   let edad1 = 200;
//   console.log(edad1);
// }
// console.log(edad1);

// //var se puede volver a definir, let no

// let edad2 = 5;
// //let edad2 = 10; // no se puede
// edad2 = 9;
// console.log(edad2);

// const edad3 = 10;
// //const edad3 = 11; // no se puede
// //edad3 = 11; // no se puede
// console.log(edad3);
// //en determinadas situaciones puede cambiar su valor, pero nunca redefinirse
// //no se puede modificar de manera directa

/**
 * tipos de datos
 *
 * primitivos: string - number - boolean - undefined - NULL
 *
 * objeto: object - array - function
 *
 */

//arrow function
function saludarConES5() {
  console.log("Hola desde ES5");
}
saludarConES5();
//ES6
//funciones anonimas
const saludarConES6 = () => console.log("Hola desde ES6");
//es autoretornante
saludarConES6();

const hola = "Hola pero con parametros";

const saludarConParametros = (saludo) => console.log(saludo);

saludarConParametros(hola);

const holaSP = "Hola pero sin parametros";
const saludarSinParametros = () => console.log(holaSP);

saludarSinParametros();

const saludar = false;

const saludarSi = () => {
  if (saludar) {
    console.log("Hola condicional");
  }
  console.log("Hola desde afuera del if");
};
saludarSi();

//ES6 if ternario
const saludarSiTernario = () => {
  saludar ? console.log("hola :D") : console.log("no me dejan saludarte :("); //solo se usa si tenemos dos condiciones
  // saludar && console.log() //se usa si tenemos solo una
  //tambien podemos usar !saludar (no saludar - saludar === false)
};

saludarSiTernario();

const sumarConParametrosES5 = (x, y, z) => console.log(x + y + z);
sumarConParametrosES5(1, 2, 3);
//si o si pasar todos los parametros

//ES6 - valores default
const sumarConParametrosES6 = (x = 5, y = 5, z = 10) => console.log(x + y + z);
sumarConParametrosES6();

//spread operator
const array = [1, 2];
const arrayGrande = [...array, 3, 4];
console.log(arrayGrande);

//string interpolate
const nombre = "Angeles";
const hobbie = "pedir comida";
console.log("ES5 dice: Hola, mi nombre es " + nombre + " y me gusta " + hobbie);
console.log(`ES6 dice: Hola, mi nombre es ${nombre} y me gusta ${hobbie}`); //backtick

console.log(arrayGrande.find((x) => x > 2));
console.log(arrayGrande.findIndex((x) => x > 2));

console.log(nombre.startsWith("A"));
console.log(nombre.startsWith("A", 1));
console.log(nombre.endsWith("s"));
console.log(nombre.endsWith("A", 1));
console.log(nombre.includes("gel"));
console.log(nombre.includes("gel", 1));
console.log(nombre.includes("gel", 3));
