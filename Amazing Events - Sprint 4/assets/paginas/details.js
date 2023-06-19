import { showDetailCard } from '../../Module/funciones.js'

const detailBox = document.getElementById("details")
const params = new URLSearchParams(location.search)
const id = params.get("id")
let event = {}
fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
      event = data.events.find((event)=>event._id == id)
      showDetailCard(event)
    })
    .catch((err) => console.log(err));
    