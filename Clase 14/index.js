//IFEE
//encapsulamiento 
//JS y encapsulamiento 
//se basa en la programacion funcional
//envolver todo mi programa en funciones
//BENEFICIOS: prolijidad - evitar repetir codigo - //funciones se ejecutan y descartan //
//si las variables dentro de una fucion solo residen dentro de la fucion --> afuera no puedo modificarlas
//BENEFICIO MAS GRANDE DE ENCAPSULAMIENTO: no puedo modificar las variables por fuera, lo que brinda seguridad a mi codigo

// function programa() {
//     var privado = true
//     //mi variable es privada, reside y se descarta dentro de mi funcion y no puede ser modificada
// }

// programa()
//esta funcion la puedo seguir modificando desde fuera y sigo pudiendo romper el codigo

// (function (numero) {
//     console.log(numero)
//     var privado = true
//     console.log(privado)
// })(300)
// console.log(privado)
// //closure

//MODO ESTRICTO
//"JS es muy permisivo"
// "use strict"
// // let a
// // a = 1
// let objDinamic = { x: 1 } //obj literal
// let objStatic = Object.create(null, { x: { value: 1 } }) //creado con create (proto, val)

// //delete objStatic.x
// delete objDinamic.x
//El modo estricto sirve para evitar codificacion "ilegal" permitida originalmente por JS


/**
 * 
 * PATRONES DE DISEÑO
 * 
 */

//sirven para: estructurar el código - seguir una forma consistente de escritura - no repetir - prolijo

//PATRON MODULO 
(function () {
    "use strict"

    var x = true

    function getX() {
        console.log(x)
    }
    //modular
    //por ultimo tengo que retornar algo
    //que y donde vamos a publicar de esta funcion
    //crear en window un nuevo MODULO 
    window.modulo1 = getX
})()

//podemos acceder a las variables solo desde dentro de la funcion, pero tenemos un metodo para llamarlas por fuera que NO podemos modificar
//nadie va a poder acceder o borrar variables que no queremos comprometer

