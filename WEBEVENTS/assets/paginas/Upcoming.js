const carrusel = document.querySelector(".carrusel-items");
console.log(carrusel)

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if(carrusel.scrollLeft === maxScrollLeft){
            step = step * -1;
        }else if(carrusel.scrollLeft === 0){
            step = step * -1;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
};
carrusel.addEventListener("mouseover", () => {
    stop();
})
carrusel.addEventListener("mouseout", () => {
    start();
})

start()

const cards=document.getElementById("box");
function createCards(event){
return `<article class="card" style="width: 15rem;">
            <img src="${event.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            </div>
            <div class="d-flex justify-content-around" style="width: 12rem;">
                <p>Price: $${event.price}</p>            
                <a href="./assets/paginas/details.html" class="btn btn-outline-info btn-center">Details</a>
            </div>
        </article>`
}
function showCards(array) {
    let template = ""
    for (const card of array) {
    template += createCards(card);
    }
    cards.innerHTML += template;
}
showCards(data.events);