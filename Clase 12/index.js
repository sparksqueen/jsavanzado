/**
 * 
 * REPASO CLASE 10 - PROMESAS & FETCH
 * 
 */

// ----
// 1) Promesas
// ----

//Definicion: Una promesa es una accion que no va a concretarse de manera sincronica , por lo que enviamos este pedido asincronico, que puede o no concretarse. 
//1) No se concreta, pasa por .catch
// 2) Se concreta, pasa .then y devuelve lo solicitado

//Evitamos los callback hell - anidamientos
//Simplificamos el código 
// XML NO DEVUELVE VALORES, Y LAS PROMESAS SI
// si nosotros queremos mostrar algo en pantalla necesitamos consumir un valor, como XML no lo devuelve, debemos combinarlo con una promesa

//3 estados - FULLFILLED (2) - PENDING - REJECTED (1)


const url = "https://jsonplaceholder.typicode.com"
const btn = document.querySelector("button")

//resolve & reject o res (2) y rej (1)
// const promesa = new Promise((res, rej) => {
//     //llamada de AJAX
//     let xhr = new XMLHttpRequest
//     xhr.open('get', "algo.txt")
//     xhr.addEventListener("load", () => {
//         if(xhr.status === 200){
//             //aca devolvemos un valor, que antes no podiamos devolver
//             res(xhr.response)
//             //ESO ES UN VALOR!! que podemos consumir 
//         }
//     })
//     xhr.send()
// })
//  //valor.JSON() --- en este caso es un txt, pero si nos devuelve un JSON tenemos que acceder a el
//  .then(texto => console.log(texto)) // TEXTO ES UN VALOR --- podemos mostrar por pantalla si lo manejamos de manera correcta
//  .catch(error => console.log(error))


//FETCH 
//llamamos de manera async, pero fetch INCLUYE la promesa
//por lo cual, mientras XHR no devuelve valores, FETCH SI 
//era una combinacion entre las apis: XHR - ASYNC - PROMISE - RESPONSE - REQUEST (estas ultimas dos, de promesas)
//new Promise((res, req) =>)

//en XHR
//     let xhr = new XMLHttpRequest
//     xhr.open('get', url)
//     xhr.addEventListener("load", () => {
//         if(xhr.status === 200){
//             res(console.log("algo"))
//         }
//     })
//     xhr.send()
// todo esto envuelto en una promesa

//en FETCH 

fetch(`${url}/todos/1`)
    .then(response => response.json()) // como devuelve un JSON, consumimos el metodo JSON de promesas
    .then(json => console.log(json))

const texto = fetch("algo.txt")
    .then(val => val.text())
    .then(txt => console.log(txt))

// nos devolvio primero el texto y despues la url
//esto pasó porque el texto reside en nuestro mismo servidor mientras el json es externo
//primero resolvio la llamada a algo.txt

//ANTES
// btn.addEventListener("click", () => {
//     ajax({
//         metodo: "get",
//         recurso: `${url}/users`,
//         load: res => {
//             console.log(res)
//             const usuario = res[4]
//             console.log(usuario)
//             const idUsuario = usuario.id
//             console.log(idUsuario)
//             //devolver otra llamada a ajax
//             ajax({
//                 metodo: "get",
//                 recurso: `${url}/posts?userId=${idUsuario}`,
//                 load: posteos => {
//                     console.log(posteos)
//                     posteos.forEach(posteo => {
//                         ajax({
//                             metodo: "get",
//                             recurso: `${url}/comments?postId=${posteo.id}`,
//                             load: comentario => { console.log(comentario) }
//                         })
//                     })
//                 }
//             })
//         }

//     })
// })

btn.addEventListener("click", () => {
    let idUsuario = 3
    const unaPromesa = fetch(`${url}/users`)
    .then(res => res.json())
    .then(res => fetch(`${url}/posts?userId=${idUsuario}`) )
    .then(res => res.json())
    //aca deberiamos hacer un forEach de posteos
    //.then(res => res.forEach(bla))
    // .then(res => fetch(`${url}/comments?postId=${posteo.id}`))
    // .then(res => res.json())
    .then(res => console.log(res))
})

/**
 * 
 * REPASO CLASE 11 -- Funciones - Prototipo - Objetos - Clases
 * 
 */


// Prototipos es una funcionalidad de JS que nos permite manejarnos de manera "similar " a otros lenguajes de POO
// POO - Java & C 
// JS tiene la particularidad de tratar a todo como OBJETOS pero eso no lo hace POO 
// se acerca mas a un paradigma funcional 
// LA PROGRAMACION FUNCIONAL SE BASA EN EJECUTAR UNA FUNCION "accion" y luego descartar el estado de ella, para dar paso a una nueva ejecucion de ser necesario
//retorna algo & despues borra todo el contexto creado

//mas alla de que JS maneja funciones, podemos aprovechar algunas caracteristicas de POO

/**
 * 
 * 3 formas de crear objetos
 * 
 * 1- Literal
 * 2- Con Create
 * 2- Funciones constructoras
 * 
 */

//1 - Literal
const objeto = {}
const persona = {nombre: "pepe", edad: 20}
//esto crea un objeto vacio, con un prototipo dentro


//2- Create. 
//con create podiamos definir el prototipo

/**
 * PROTOTIPOS
 */

let persona2 = Object.create({nombre: "Juan", edad: 30})
//nos devuelve objeto vacio con nombre y edad definidos en el prototipo
//por mas que el prototipo no este al mismo nivel que nuestro objeto principal, puedo acceder a el de manera directa
let objeto2 = Object.create(null)
//create null nos devuelve un objeto vacio sin NINGUNA PROPIEDAD
//eso quiere decir que en este objeto no podemos acceder a metodos de objeto, como por ej toString()

const prototipo = { saludo: function() {console.log("Hola")}}
//aca creamos un prototipo personalizado, una funcion que admite mi objeto
let objeto3 = Object.create(prototipo)
//de esta forma nosotros podemos definir valores o funciones personalizadas para nuestros objetos


/**
 * FUNCIONES
 * 
 * VARIADICAS - significa que puedo pasarle mas o menos parametros de los que define la funcion
 * menos porque puede haber valores por default , mas porque aunque no los use, los puede leer
 * TIENEN AMBITO
 * Y CONTEXTO
 */

//variadicas
//funcion(x,y = 1)
//funcion(2)
//funcion(2, 5, 3) --- el 3 no le serviria pero lo acepta igual

//nos importa porque de esa forma, por mas que yo tenga una variable que no acepta a priori valores, puedo pasarlos de todos modos, aprovechar que es variadico, y acceder a funciones internas de otras funciones
// var b = 2
// function externa(x) {
//     var c = 10
//     return function interna(y) {
//         console.log(x + y)
//     }
// }
//por esta cualidad de las funciones es que puedo llamar a externa(3) refiriendome al valor que necesita interna --> que al final estoy diciendo interna(3)


//ambito
var b = 2
function externa(x) {
    var c = 10
    return function interna(y) {
        console.log(x + y)
    }
}
//podemos acceder a datos declarados en diferentes scopes
//en este ejemplo accedemos a b que esta definido de manera global, a c definido dentro de una funcion de manera local, tambien podemos acceder a valores establecidos como propiedades de una funcion
//las funciones tienen su propio ámbito - local - global - props

//Contexto
//la posibilidad de hacer "calculos" dentro de su propio ámbito, poder acceder dentro de la funcion a .this refiriendome a ella misma
//y luego descartar el contexto y crear uno nuevo en una segunda llamada

function funcion1() {console.log(this)}
//este this, refiere a window, ya que no definimos ningun contexto. 


/**
 * 
 * FUNCIONES CONSTRUCTORAS
 * 
 */

var persona3 = {
 nombre: "Juan",
 edad: 20
}

//aca intentabamos crear una persona nueva desde persona3
