function showWeatherEnterSity(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp-today").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
  document.querySelector("#speed").innerHTML = `Wind speed - ${Math.round(
    response.data.wind.speed
  )}`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}
function search(city) {
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherEnterSity);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

function searchLocation(position) {
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherEnterSity);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let now = new Date();
let todayDate = document.querySelector("#date-today");
let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
let min = now.getMinutes();
todayDate.innerHTML = `<strong>Today</strong> ${hours}:${min}</br> ${day} ${month} ${year}`;

let formSearchTodaySity = document.querySelector("#enter-city");
formSearchTodaySity.addEventListener("submit", handleSubmit);

let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", currentLocation);

search("Kyiv");
