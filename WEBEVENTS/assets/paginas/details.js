const cards=document.getElementById("box");
function createCards(event){
return `<div class="card mb-3 my-2" style="max-width: 720px;">
<div class="row g-0">
  <div class="col-md-5">
    <img src="${event.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-7">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div>
        <p>Category: ${event.category}</p>
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
</div>`
}
function showCards(array) {
    let template = ""
    for (const card of array) {
    template += createCards(card);
    }
    cards.innerHTML += template;
}
showCards(data.events);