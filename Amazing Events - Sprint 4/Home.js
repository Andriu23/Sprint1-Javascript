import { initPage } from "./Module/funciones.js";

window.addEventListener(`load`, () => {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => initPage(data))
    .catch((err) => console.log(err));
});
  