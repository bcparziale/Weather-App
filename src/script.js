function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector(".city");
  let cityInput = document.querySelector(".city-input");
  cityElement.innerHTML = cityInput.value;
}

// Feature #1
let dateElement = document.querySelector(".date-time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// Feature #2
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);



let temperature= Math.round(response.data.main.temp);
let apiKey= "5283155a9e4cfe25a19ee560a22a198b";
let city= document.querySelector(".city");
let temperatureElement= document.querySelector(".temp");
let temperatureElement.innerHTML = `${temperature}°F`;
let apiurl= `https://api.openweathermap.org/data/2.5/weather?q=`${city}`&units=metric`;

let h1= document.querySelector(".city");
h1.innerHTML = city;


axios.get(`${apiurl}`&appid=`${APIkey}`).then.(function(response)) {
  console.log(response);
}
