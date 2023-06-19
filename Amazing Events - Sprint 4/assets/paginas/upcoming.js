import { initPage} from "../../Module/funciones.js";

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((data) => {
    data.events = data.events.filter((event) => {
        return event.date > data.currentDate 
    })
    initPage(data)
  })
  .catch((err) => console.log(err));

window.addEventListener(`load`, () => {
    //?
});
