let select = document.getElementById("superheroe");
const image = document.querySelector("img");
select.addEventListener("change", function () {
  let selectedOption = select.options[select.selectedIndex];
  switch (selectedOption.text) {
    case "Superman":
      image.src = "images/superman.jpg";
      image.alt = "superman";
      break;
    case "Spiderman":
      image.src = "images/spiderman.jpg";
      image.alt = "spiderman";
      break;
    case "Batman":
      image.src = "images/batman.jpeg";
      image.alt = "batman";
      break;
    default:
      break;
  }
});
image.addEventListener("mouseover", () => {
  var altValue = image.alt;
  console.log(altValue);
  switch (altValue) {
    case "superman":
      image.src = "images/idsuperman.jpg";
      image.alt = "superman";
      break;
    case "spiderman":
      image.src = "images/idspiderman.jpg";
      image.alt = "spiderman";
      break;
    case "batman":
      image.src = "images/idbatman.jpg";
      image.alt = "batman";
      break;
    default:
      break;
  }
});

image.addEventListener("mouseout", () => {
  var altValue = image.alt;
  console.log(altValue);
  switch (altValue) {
    case "superman":
      image.src = "images/superman.jpg";
      image.alt = "superman";
      break;
    case "spiderman":
      image.src = "images/spiderman.jpg";
      image.alt = "spiderman";
      break;
    case "batman":
      image.src = "images/batman.jpg";
      image.alt = "batman";
      break;
    default:
      break;
  }
});
