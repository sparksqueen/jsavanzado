const regexpMail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

const mail = "mail@mail.com";

console.log(regexpMail.test(mail));

const regExpPrueba = /ai/;

var re = /\d\d\d/; //devuelve 3 digitos seguidos

const regexpCreado = /^([a-zA-Z0-9_%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
//otra forma de escribir a-zA-Z0-9_ es \w
//222

/**
 * REGEXP
 *
 * LOS REGEXP SIEMPRE SE ESCRIBEN ENTRE BARRAS (si son literal)
 * \d - muestra los numeros/digitos
 * \D - todo menos los numeros
 * REGLA GENERAL --- un metacaracter en mayuscula es la negación de su metacaracter en minuscula
 * \w letras de la a a la z + numeros del 0 al 9 + _ // ññññ (no reconoce la ñ - y caracteres especiales ) (w es de word - palabra)
 * \W caracteres especiales (contrario a \w)
 * \s devuelve los espacios en blanco
 * * 0 a infinitas veces \w*\d va a devolver todos los numeros que no estan antecedidos por un \w + los numeros que si esten antecedidos por un \w
 * + es similar a * pero devuelve de 1 a infinitas veces
 * ? entre 0 y 1 vez
 * {N,M} Entre un minimo y un maximo
 * [a-z] entre la a y la z (a o b o ... o z)
 * $ al final del string
 * *$ = entre 0 e infinitas veces, al final
 * \b -- a\b nos devuelve todas las palabras que terminan con a (los limites de una palabra)
 * () agrupan
 * [] o
 * {} definen cantidad de repeticiones
 */

/**
 * Asincronía
 *
 * El término asíncrono se refiere al concepto de que más de una cosa ocurre al mismo tiempo,
 * o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado.
 *
 *
 *
 */

console.log(1);
//el console log de la linea 48 primero se ejecuta y completa la accion, y despues sigue con la linea 50 --- SINCRONICO
console.log(2);
//lo muestra ultimo
setTimeout(() => {
  console.log(3);
}, 2000);
//setTimeout es asincronico, porque se suma a la memoria y continua leyendo las lineas siguientes
console.log(4);
console.log(5);
