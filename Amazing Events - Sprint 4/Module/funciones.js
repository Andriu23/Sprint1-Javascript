const searchInput = document.getElementById("search-input");
const categoryBox = document.getElementById("searchCategories");
const cardsBox = document.getElementById("box");
let dataFromAPI = {};
let categoryCheckboxes = [];

export function initPage(data) {
  dataFromAPI = data;
  initCarousel();
  createCategoryBoxes(categoryBox);
  createCardBoxes(cardsBox, dataFromAPI.events);
  initSearchInput();
}

export function initCarousel() {
  const carrusel = document.querySelector(".carrusel-items");

  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
  let intervalo = null;
  let step = 1;
  const start = () => {
    intervalo = setInterval(function () {
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if (carrusel.scrollLeft === maxScrollLeft) {
        step = step * -1;
      } else if (carrusel.scrollLeft === 0) {
        step = step * -1;
      }
    }, 10);
  };
  const stop = () => {
    clearInterval(intervalo);
  };
  carrusel.addEventListener("mouseover", () => {
    stop();
  });
  carrusel.addEventListener("mouseout", () => {
    start();
  });
  start();
}

export function initSearchInput() {
  searchInput.addEventListener("keyup", filterCard);
}

export function getCategoriesWithoutDuplicates(events) {
  let categories = events.map((event) => event.category);
  const categorySet = new Set(categories);
  categories = Array.from(categorySet);
  return categories;
}

export function createCheckBox(category) {
  const div = document.createElement("DIV");
  div.classList.add("form-check");

  const input = document.createElement("INPUT");
  input.type = "checkbox";
  input.className = "form-check-input";
  input.value = category;
  input.id = `${category}-check`;
  input.name = "category";
  input.addEventListener("change", filterCard);
  categoryCheckboxes.push(input);

  const label = document.createElement("LABEL");
  label.className = "form-check-label";
  label.for = `${category}-check`;
  label.textContent = category;
  label.style = "cursor:pointer";
  label.addEventListener("click", (event) => {
    let checkbox = document.getElementById(`${category}-check`);
    checkbox.click();
  });

  div.appendChild(input);
  div.appendChild(label);

  return div;
}

export function createCategoryBoxes(element) {
  const fragment = document.createDocumentFragment();
  const categories = getCategoriesWithoutDuplicates(dataFromAPI.events);
  for (const category of categories) {
    const div = createCheckBox(category);
    fragment.appendChild(div);
  }
  element.appendChild(fragment);
}

export function createCards(event) {
  return `
    <article class="card" style="width: 15rem;">
      <img src="${event.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
      </div>
      <div class="d-flex justify-content-around" style="width: 12rem;">
        <p>Price: $${event.price}</p>            
        <a href="/assets/paginas/details.html?id=${event._id}" class="btn btn-outline-info btn-center">Details</a>
      </div>
    </article>`;
}

export function createCardBoxes(cardsBox, events) {
  let template = "";
  for (const event of events) {
    template += createCards(event);
  }
  cardsBox.innerHTML = template;
}

export function filterCard() {
  let checkedCategories = [];
  categoryCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCategories.push(checkbox.value);
    }
  });
  let query = searchInput.value.toLocaleLowerCase().trim();

  let filteredEvents = dataFromAPI.events;
  if (checkedCategories.length > 0 || query !== "") {
    filteredEvents = filteredEvents.filter((event) => {
      let categoryNameMatch =
        checkedCategories.length === 0 ||
        checkedCategories.includes(event.category);
      let nameMatch = event.name.toLocaleLowerCase().includes(query);
      let descriptionMatch = event.description
        .toLocaleLowerCase()
        .includes(query);
      return categoryNameMatch && (nameMatch || descriptionMatch);
    });
    if (filteredEvents.length === 0) {
      const cardsBox = document.getElementById("box");
      cardsBox.innerHTML = `There are no results to show`;
      return;
    }
  }
  const cardsBox = document.getElementById("box");
  createCardBoxes(cardsBox, filteredEvents);
}

export function showDetailCard(event) {
  const detailBox = document.getElementById("details")
  detailBox.innerHTML = `<div class="card mb-3 my-2" style="max-width: 720px;">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${event.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text">${event.description}</p>
              <div>
                <p>Categoty: ${event.category}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p>Place: ${event.place}</p>
                <p>Capacity: ${event.capacity}</p>
                <p>Assistance: ${event.assistance}</p>
              </div>
              <div class="d-flex justify-content-around">
              <p>Price: $${event.price}</p>
              <p class="card-text"><small class="text-body-secondary">Date: ${event.date}</small></p>
              </div>
            </div>
          </div>
        </div>
        </div>`;
}
