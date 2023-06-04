/** @format */

let h3 = document.querySelector("#current-date");
h3.innerHTML = `${day} ${hour}:${minute}`;

let now = new Date();

let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("#City");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
    alert(`Please type a City`);
  }
}

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", searchCity);
