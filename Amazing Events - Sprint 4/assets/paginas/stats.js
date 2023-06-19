import { getCategoriesWithoutDuplicates } from "../../Module/funciones.js";

let dataFromAPI = {};

window.addEventListener(`load`, () => {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((data) => {
      dataFromAPI = data;
      
      
      const sortedEvents = sortedEventsByPercentageOfAttendance();
      const highEvent = sortedEvents[sortedEvents.length-1]
      const lowEvent = sortedEvents[0]
      const largerEvent = eventWithLargerCapacity()
      
      document.getElementById("td_highest_attendance").innerHTML = `
        ${highEvent.name} ${highEvent.percentage.toFixed(2)} %
      `;
      document.getElementById("td_low_attendance").innerHTML = `
        ${lowEvent.name} ${lowEvent.percentage.toFixed(2)} %
      `;
      document.getElementById("td_larger_capacity").innerHTML = `
        ${largerEvent.name} ${largerEvent.capacity}
      `;

      fillUpcomingEventTable();
      fillPastEventTable();
    })
    .catch((err) => console.log(err));
});

function sortedEventsByPercentageOfAttendance() {
    return dataFromAPI.events.filter((event) => new Date(event.date) < new Date(dataFromAPI.currentDate)).
        map((event) => {
        return {
            "name": event.name,
            "percentage":  event.assistance / event.capacity * 100
        }
    }).sort((a, b) => a.percentage - b.percentage);
}

function eventWithLargerCapacity() {
    return dataFromAPI.events.filter((event) => new Date(event.date) < new Date(dataFromAPI.currentDate))
        .reduce((event, largerEvent)=>{
            if (event.capacity > largerEvent.capacity) {
                return event
            } else {
                return largerEvent
            }
    }, {"capacity": -Infinity})
}

function fillUpcomingEventTable() {
    const upcomingEvent = dataFromAPI.events.filter((event) => new Date(event.date) > new Date(dataFromAPI.currentDate))
    const categories = getCategoriesWithoutDuplicates(upcomingEvent)
    
    let rows = ""
    categories.forEach(category => {
        let summary = upcomingEvent.filter((event) => event.category === category)
        .reduce((summary, event)=>{
            if (event.price !== undefined && event.estimate !== undefined) {
                summary.revenue += event.price * event.estimate;
                summary.capacity += event.capacity;
                summary.estimate += event.estimate;
            }
            return summary;
        }, {
            "revenue": 0.0,
            "capacity": 0,
            "estimate": 0,
        })
        rows += `
            <tr class="bg-secondary-subtle">
                <td>${category}</td>
                <td>$${summary.revenue}</td>
                <td>${(summary.estimate / summary.capacity * 100).toFixed(2)} %</td>
            </tr>
        `
    });
    document.getElementById("upcoming_events").innerHTML += `
    <tr class="bg-secondary text-light">
          <th colspan="3">Upcoming events statistics by category</th>
    </tr>
    <tr class="bg-secondary-subtle">
        <td>Categories</td><td>Renenues</td><td>Percentage of attendance</td>
    </tr>
    ${rows}`;
    console.log(rows);
}

function fillPastEventTable() {
    const pastEvents = dataFromAPI.events.filter((event) => new Date(event.date) < new Date(dataFromAPI.currentDate))
    const categories = getCategoriesWithoutDuplicates(pastEvents)
    
    let rows = ""
    categories.forEach(category => {
        let summary = pastEvents.filter((event) => event.category === category)
        .reduce((summary, event)=>{
            if (event.price !== undefined && event.assistance !== undefined) {
                summary.revenue += event.price * event.assistance;
                summary.capacity += event.capacity;
                summary.assistance += event.assistance;
            }
            return summary;
        }, {
            "revenue": 0.0,
            "capacity": 0,
            "assistance": 0,
        })
        rows += `
            <tr class="bg-secondary-subtle">
                <td>${category}</td>
                <td>$${summary.revenue}</td>
                <td>${(summary.assistance / summary.capacity * 100).toFixed(2)} %</td>
            </tr>
        `
    });
    document.getElementById("past_events").innerHTML += `
    <tr class="bg-secondary text-light">
          <th colspan="3">Past events statistics by category</th>
    </tr>
    <tr class="bg-secondary-subtle">
        <td>Categories</td><td>Renenues</td><td>Percentage of attendance</td>
    </tr>
    ${rows}`;
    console.log(rows);
}