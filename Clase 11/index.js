//Programacion orientada a objetos en JS y en otros lenguajes
// POO - Lenguajes --- Java - C# - C++ 
// Lenguaje C - C++ - C# - Java 
//JAVA , C Tienen objetos y clases --- EL ESTADO PERMANECE
//Javascript -- Trata a todo como objetos pero el paradigma es funcional
//se definen funciones, y una vez definidas el estado se descarta
// Podemos aprovechar en JS caracteristicas de objetos como - Propiedades - Metodos y "Templates"

let objeto = {}

//Literal (como en 9)
//Create
//Funciones Constructoras

//Create 

let objeto2 = Object.create({ x: 1, y: 2 }) // a dentro le pasamos el prototipo
let objeto3 = Object.create(null)

const prototipo = { saludo: function () { console.log("Hola") } }
let objeto4 = Object.create(prototipo)

// Puedo acceder a los prototipos de manera directa por mas que esten anidados a nuestro objeto

//1)  Las funciones en JS son Variadicas --- yo puedo pasarle mas parametros de los necesarios, sin que se rompa
// funcion(x,y)

// funcion(1,2,3,5,7,9,4)
//Esto nos va a servir para /closures/ --- EXCLUSIVO DE TODO LENGUAJE FUNCIONAL

//2)  Las funciones en JS tienen su propio ámbito o Scope

// 3) Tienen su propio contexto

//1) Closures --- en algunos casos puedo pasarle valores a variables. 

//Ambito
var b = 2
function externa(x) {
    var c = 10
    return function interna(y) {
        console.log(x + y)
    }
}

var resultado = externa(1)
//resultado que es una variable se va a comportar como una funcion --> o sea, que le voy a poder pasar un valor como parametro
//cambia el comportamiento y puedo pasarle un valor como parametro --- pero resultado sigue siendo una variable

//2) Ámbito -- Una funcion puede acceder a datos declarados de manera local, global, o  preestablecidos -pasados como propiedad de una funcion-

//3) Contexto ---- .this

//function funcion1() { console.log(this) }
//si a una funcion no le defino su contexto, por defecto reside en window



//Funciones constructoras
//Persona es una funcion, con un objeto. Ese objeto se replica en otras variables cada vez que lo llamo
function Persona(nombre, edad) {
    //tengo un template de objeto
    var persona = {
        nombre: nombre,
        edad: edad
    }
    //retorno una nueva instancia de ese objeto por cada ejecucion
    return persona
}

var Juan = Persona("Juan", 20)
var Maria = Persona("Maria", 15)

//POR ESTO NECESITO FUNCIONES CONSTRUCTORAS
//Juan y Maria siendo = Persona se relacionan con el mismo objeto, y cambian ambos
//La funcion ejecuta, retorna, se descarta

//new
//tambien necesita una funcion constructora
//Persona2 es una funcion con parametros y definiciones planas, autoreferencial, y cuando escribo en otra variable la palabra clave NEW me transforma esto en un objeto con sus cualidades
function Persona2(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
}

var Jose = new Persona2("Jose", 30)

//new va a hacer los siguientes pasos de manera automatica
// var obj = {}
// Persona2.call(obj)
// return(obj) --- ESTO LO HACE NEW y no necesito retornar como en la funcion Persona

//Clases
//es lo que usan lenguajes de POO
//ES2015
class Persona3 {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}
//Funcion constructora se reemplaza por una clase que tiene un constructor

var Pedro = new Persona3("Pedro", 45)

// class Alumno {
//     constructor(nombre, materia){
//         this.nombre = nombre;
//         this.materia = materia
//     }
// }

// let alumno1 = new Alumno("Juan", "Matematica")


//Herencia
//llamamos a las propiedades padres con la palabra reservada super
//añadimos nuevas propiedades con la palabra reservada this
class Alumno extends Persona3 { //extends declara que Alumno va a tener todas las propiedades de Persona3, y además las propias de Alumno
    constructor(nombre, edad, materia) {
        super(nombre, edad) //llama a las propiedades definidas en Persona3
        this.materia = materia
    }
}

let alumno1 = new Alumno("Juan", "Matematica")