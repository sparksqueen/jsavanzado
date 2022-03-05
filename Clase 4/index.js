console.log("sync");

const form1 = document.querySelector("#formUno");
form1.addEventListener("submit", (e) => e.preventDefault());

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const textArea = document.querySelector("#textArea");
const boton1 = document.querySelector("#botonFU");
boton1.addEventListener("click", () => {
  nombre.value.length > 1
    ? console.log("success nombre")
    : alert("nombre mas largo");
  /**
   * HTMLElement
   */
  // nombre.value.length > 1 ? console.log("success") : nombre.setCustomValidity("Mas largo")  ---> Crea una validacion custom como las de HTML
  // console.log(nombre.checkValidity()), ---> checkea que el campo cumpla con las validaciones de HTML
  apellido.value.length > 1
    ? console.log("success apellido")
    : alert("apellido mas largo");
});

apellido.addEventListener("blur", () => {
  apellido.value.length > 1 && (apellido.style.backgroundColor = "green");
  //linea 22 analiza si se cumple 1 condicion, hace algo, y sino nada, seria como un if sin else o un ternario con else null
  apellido.value.length <= 1 && (apellido.style.backgroundColor = "red");
  // es lo mismo que if else
  //   apellido.value.length > 1
  //     ? (apellido.style.backgroundColor = "green")
  //     : (apellido.style.backgroundColor = "red");
}); //blur: opuesto a focus ... dejar de hacer click en un campo para posicionarme en otro lado de la pag

/**
 *
 * Metodos utiles para validaciones
 *
 * trim(), encodeURIComponent(), includes()
 *
 */

//trim()
//quiero que el nombre no tenga espacios adicionales al inicio ni al final
//recorta los espacios extra en los extremos
boton1.addEventListener("click", () => {
  const trimmedNombre = nombre.value.trim();
  console.log(nombre.value);
  console.log(trimmedNombre);
});

//includes()
//apellido sea solo 1 (no dos apellidos)
boton1.addEventListener("click", () => {
  apellido.value.includes(" ")
    ? alert("el apellido debe ser uno solo")
    : console.log(apellido.value);
});

//encodeURIComponent()
//hacking - XSS
//proteger textarea de ataques ciberneticos
boton1.addEventListener("click", () => {
  console.log(encodeURIComponent(textArea.value));
});

/**
 *
 * REGEXP - RegExp - Regular Expresions
 *
 */

//https://regex101.com/
const regexpMail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

const form2 = document.querySelector("#formDos");
form2.addEventListener("submit", (e) => e.preventDefault());

const REButton = document.querySelector("#check");
const REInput = document.querySelector("#mail");
REButton.addEventListener("click", () =>
  regexpMail.test(REInput.value)
    ? console.log("Es un mail valido")
    : console.log("No es valido"),
);
 //1)Crear un formulario Asignarle un evento de blur a cada input del formulario de manera tal que se cumplan las siguientes validaciones sin usar expresiones regulares :
//1.1)nombre : El nombre debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos dos letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.
    //1.2)apellido : El apellido debe ser de una o dos palabras como máximo, si se ingresaran más solo se agarrarán las dos primeras. Cada palabra debe ser de por lo menos cuatro letras como mínimo. Se deben escapar los espacios de adelante y atras de cada palabra.
    //1.3)email : El email debe respetar el formato nombre@dominio.com pudiendo contener el nombre caracteres especiales como -_.  
    //1.4)reemail : Su valor debe ser identico al de email
    //1.5)contraseña : La contraseña debe tener como mínimo 6 letras sin espacios y los caracteres especiales que se pueden usar son ?!_-.
    //1.6)titulo : El titulo puede ser opcional. Si el mismo está faltante, se debe usar el string "Post Anonimo"
    //1.7)mensaje : El mensaje debe tener como mínimo una letra. Puede ser cualquier caracter siempre y cuando el mismo no se imprima en pantalla sin ser escapado, de lo contrario podríamos tener un ataque XSS.
