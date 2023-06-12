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

const categoryBox = document.getElementById("searchCategories"); 


const categories = data.events.map((events) => events.category); 

const onlyCategory = new Set(categories); 

const arrayOnlyCategory = Array.from(onlyCategory); 

function createCheckBox(category) { 
    const div = document.createElement('DIV'); 
    div.classList.add('form-check'); 

    const input = document.createElement('INPUT');  
    input.type = "checkbox";
    input.className = "form-check-input";
    input.value = category;
    input.id = `${category}-check`; 
    input.name = "category";  

    const label = document.createElement('LABEL'); 
    label.className = "form-check-label";
    label.for =`${category}-check`; 
    label.textContent = category;
    label.style = "cursor:pointer";

    div.appendChild(input); 
    div.appendChild(label); 

    return div; 
}
function checkCategory(categories,element) { 
    const fragment = document.createDocumentFragment();

    for(const category of categories){
        const div = createCheckBox(category); 
        fragment.appendChild(div); 
    }
    element.appendChild(fragment);
}
checkCategory(arrayOnlyCategory,categoryBox); 



const cards = document.getElementById("box"); 

function createCards(event) { 
  return `<article class="card" style="width: 15rem;">
                    <img src="${event.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.description}</p>
                    </div>
                    <div class="d-flex justify-content-around" style="width: 12rem;">
                        <p>Price: $${event.price}</p>            
                        <a href="./details.html?id=${event._id}" target="_blank" class="btn btn-outline-info btn-center">Details</a>
                    </div>
                </article>`;
}

function showCards(array) { 

    let template = ""; 
    for (const event of array) { 
      if(data.currentDate > event.date)
      template += createCards(event); 
    }
    cards.innerHTML = template; 
  }
  showCards(data.events); 

  const categoryVerification = categoryBox.querySelectorAll(`input[type="checkbox"]`)

  let searchInput = document.getElementById("search-input"); 
  
  function filterCard() { 
      let checkCategary = [];
      categoryVerification.forEach((categoryBox) => {
          if(categoryBox.checked) {
              checkCategary .push(categoryBox.value);
          }
      });
      let seeker = searchInput.value.toLowerCase().trim(); 
  
       if (checkCategary .length > 0 || seeker !== "") {
      let filterEvent = data.events.filter((event) => {
        let categoryNameMatch = checkCategary.length === 0 || checkCategary.includes(event.category);
        let nameMacth = event.name.toLocaleLowerCase().includes(seeker);
        let descriptionMatch = event.description.toLocaleLowerCase().includes(seeker);
        return categoryNameMatch && (nameMacth || descriptionMatch);
      });
      showCards(filterEvent);
    } else {
      showCards(data.events);
    }
  }
  categoryVerification.forEach((categoryBox) => {
      categoryBox.addEventListener("change", filterCard);
  });
  searchInput.addEventListener("keyup", filterCard);

  window.addEventListener(`load`, () => {
    showCards(data.events);
  });

/*const cards=document.getElementById("box");
function createCards(event){
return `<article class="card" style="width: 15rem;">
            <img src="${event.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            </div>
            <div class="d-flex justify-content-around" style="width: 12rem;">
                <p>Price: $${event.price}</p>            
                <a href="./details.html?id=${event._id}" class="btn btn-outline-info btn-center">Details</a>
            </div>
        </article>`
}
function showCards(array) {
    let template = ""
    for (const card of array) {
        const tarjeta = createCards(card);
        template += tarjeta
    }
    cards.innerHTML += template;
}
function filterEvents(data) {
    let currentDate = new Date(data.currentDate);
    let past = data.events.filter((event) => {
        return new Date(event.date) < currentDate;
    });
    showCards(past);
}
    filterEvents(data)*/
    