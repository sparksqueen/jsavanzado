// // POO - Prototipos
// // Objeto Literal - Objeto x Create 
// //concepto fx
// //variadicas - closures - ambito y contexto
// // ambito se puede acceder a la info global local o por props
// // contexto = posibilidad de poder autoreferenciar ese objeto con .this

// /**
//  * 
//  * Funciones constructoras
//  * 
//  */
// function Persona(nombre, edad) {
//     var persona = {
//         nombre: nombre,
//         edad: edad
//     }
//     //devolver una instancia de persona
//     return persona
// }
// //const Juan = new persona()
// //no puedo usar los beneficios de POO sin un CONSTRUCTOR
// //por cada llamada va a tomar nuevos datos
// // // var persona2 = {
// // //     nombre: "Juan",
// // //     edad: 20
// // // }
// // esto siempre va a valer Juan , 20 - o lo que use
// //en el caso de la funcion cada vez que se ejecute (se llame a Persona()) va a tomar diferentes valores

// var juan = Persona("Juan", 20) // persona1 - con sus valores
// var maria = Persona("Maria", 15) //persona2 - con sus valores
// //no se pisan, porque son funciones constructoras -- que construyen una instancia de objeto

// /**
//  * NEW
//  */

// //con funciones constructoras creabamos un objeto envuelto en una funcion
// //si vamos a usar new la sintaxis cambia ligeramente:
// //creamos una funcion y dentro de ella instanciamos sin crear un objeto literal dentro

// function PersonaNew(nombre, edad){
//     this.nombre = nombre
//     this.edad = edad
// }

// var jose = new PersonaNew("Jose", 30)

// //con new no necesitamos crear un objeto literal porque : 
// //new va a realizar automaricamente los siguientes pasos: 
// // 1- var obj = {} ---- o sea, declaracion literal obj vacio
// //PersonaNew.call(obj) ----- o sea definir la funcion como parte/constructor del objeto 
// //return(obj) --- o sea, devolver el objeto resultante con sus nuevos valores


// /** 
//  * CLASES
//  */

// //la clase en realidad es una funcion, pero ES6 admitió llamar a las funciones constructoras como clases para normalizar la POO a lo usual en otros lenguajes
// //en vez de tener una funcion constructora, definimos un constructor de clases
// class PersonaClass {
//     constructor(nombre, edad){
//         this.nombre = nombre
//         this.edad = edad

//     }
// }
// var Pedro = new PersonaClass("Pedro", 40)


// class Alumno extends PersonaClass{ //extends aclara que el alumno es una persona
//     constructor(materia, nombre, edad){
//         super(nombre, edad) //super designa que propiedades de persona vamos a necesitar en alumno
//         // this.nombre = this.nombre
//         // esto no me sirve porque no reconoceriamos a el alumno como persona
//         // sino diriamos que el alumno tiene las caracteristicas nombre y edad, en vez de decir que es una persona

//         this.materia = materia // declaramos lo relativo solo al alumno
//     }
// }

// var Jacinto = new Alumno("Matematica", "Jacinto", 30)

/**
 * 
 * POO Avanzado
 * 
 */

//Prototipos en funciones constructoras 
// function Persona(nombre, edad) {
// //instancia
// this.nombre = nombre
// this.edad = edad || 30

// }
// Persona.prototype.x = true // de esta forma creabamos un nuevo prototipo
// // Persona.prototype.edad = 30 //no seria aceptable porque las edades suelen ser variables y los proto son compartidos entre todas las personas
// Persona.prototype.saludo = function Saludo() {console.log("Hola")}

// //DIF prototipo con Instancia
// // PROTO se comparte en todas las creaciones EL MISMO VALOR 
// // INSTANCIA adquiere un nuevo valor independiente por llamada 


// const juan = new Persona("Juan")
// // Pasarle a esta funcion algo dentro de su prototipo
// // prototipo es un objeto
// const maria = new Persona("Maria")


//si yo intento reasignar el prototipo (edad) desde maria.edad en ve de cambiar el valor me crea una nueva propiedad con el valor enviado
// HERENCIA 
// function Persona(nombre, edad) {

//     this.nombre = nombre
//     this.edad = edad || 30
    
//     }
//     Persona.prototype.x = true 
//     Persona.prototype.saludo = function Saludo() {console.log("Hola")}
    

//     const juan = new Persona("Juan", 20)
//     const maria = new Persona("Maria")

//     function Empleado(sueldo){
//         this.sueldo = sueldo
//     }

//     // Empleado.prototype = Persona.prototype // solo nos extiende el prototipo, pero nosotros ademas vamos a querer los valores de persona
// Empleado.prototype = Object.create(Persona.prototype)

//     var jose = new Empleado(1)


    // LLEGAR A LO MISMO EN DETALLE CON CLASES

    //CLASES
    //clases todavia es una funcion

    //lo que varia en clases es el hoisting
    //HOISTING: 
    // el ordenamiento de las lineas de codigo a la hora de ejecutar nuestra app
    // primero subia todas las variables - todas las funciones
    //identificaba todos los retornos

    // var jacinto = new Persona() 

     function Persona() {

     }


    //como esto es una clase el hoisting actua de manera diferente a si fuera una fx

    class Persona {
        constructor(nombre, edad){
            this.nombre = nombre
            this.edad = edad 
        }
        saludo(){
            console.log("Hola")
        }
        //saludo va al prototipo porque esta por fuera del constructor
        //si yo designo un prototipo como estatico este no se comparte en las proximas instancias 
        //no se propaga ni a sus instancias ni a sus clases hijas
        static estornudo() {
            console.log("Achis")
        }
    }

    var jacinto = new Persona("Jacinto", 20)
    var josefo = new Persona("Josefo" , 45)

    // Herencia

    class Empleado extends Persona{ 
        constructor(nombre, edad, sueldo){
            super(nombre, edad) 
            this.sueldo = sueldo
        }
    }
 var marcos = new Empleado("Marcos", 40, 100)
    
