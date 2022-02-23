const select = document.querySelector("#superheroe");
const imagen = document.querySelector("img");

//      Poner en un select tres (o más) opciones de superheroes. Dependiendo el
//que el usuario elija, se mostrará debajo una imagen que haga referencia al
//personaje. Cuando se le pase el mouse por encima, la imagen debe mostrar
//una foto de su identidad secreta en su lugar. (Por ejemplo en lugar de
//verse superman, se vera a Clark Kent).

select.addEventListener("change", () => {
  let selectedOption = select.options[select.selectedIndex];
  switch (selectedOption.text) {
    case "Superman":
      imagen.src = "images/superman.jpg";
      imagen.alt = "superman";
      break;
    case "Spiderman":
      imagen.src = "images/spiderman.jpg";
      imagen.alt = "spiderman";
      break;
    case "Batman":
      imagen.src = "images/batman.jpeg";
      imagen.alt = "batman";
      break;
    default:
      break;
  }
});

imagen.addEventListener("mouseover", () => {
  const altValue = imagen.alt;
  switch (altValue) {
    case "superman":
      imagen.src = "images/idsuperman.jpg";
      break;
    case "spiderman":
      imagen.src = "images/idspiderman.jpg";
      break;
    case "batman":
      imagen.src = "images/idbatman.jpg";
      break;
    default:
      break;
  }
});

imagen.addEventListener("mouseout", () => {
  const altValue = imagen.alt;
  switch (altValue) {
    case "superman":
      imagen.src = "images/superman.jpg";
      break;
    case "spiderman":
      imagen.src = "images/spiderman.jpg";
      break;
    case "batman":
      imagen.src = "images/batman.jpeg";
      break;
    default:
      break;
  }
});
