const formulario = document.querySelector("#form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#email");
const reemail = document.querySelector("#reemail");
const constraseña = document.querySelector("#constraseña");
const titulo = document.querySelector("#titulo");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("blur", () => {
  nombre.value.includes(" ")
    ? console.log("error nombre")
    : console.log(nombre.value.trim());
});
