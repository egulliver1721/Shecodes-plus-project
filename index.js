//date format//
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
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let displayDate = document.querySelector("#date");
let currentTime = new Date();
displayDate.innerHTML = formatDate(currentTime);

//search engine//

function showWeather(response) {
  console.log(response.data);
  let weather = Math.round(response.data.main.temp_max);
  let location = response.data.name;
  let description = response.data.weather[0].description;
  let theDescription = description.toUpperCase();
  let searchResult = document.querySelector("#search-result");
  searchResult.innerHTML = `${location}`;
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = `${weather}`;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = `${theDescription}`;
  let humidity = response.data.main.humidity;
  let humidityResponse = document.querySelector("#humidity");
  humidityResponse.innerHTML = `${humidity}%`;
  let pressure = response.data.main.pressure;
  let pressureResponse = document.querySelector("#pressure");
  pressureResponse.innerHTML = `${pressure} hPa`;
  let windSpeed = response.data.wind.speed;
  let windResponse = document.querySelector("#windSpeed");
  windResponse.innerHTML = `${windSpeed} km/h`;
  let feelsLike = response.data.main.feels_like;
  let feelsLikeResponse = document.querySelector("#feelsLike");
  feelsLikeResponse.innerHTML = `${feelsLike}&degC`;

  let lowTemp = response.data.main.temp_min;
  let lowTempResponse = document.querySelector("#lowTemp");
  lowTempResponse.innerHTML = `${lowTemp}&degC`;

  let topTemp = response.data.main.temp_max;
  let topTempResponse = document.querySelector("#topTemp");
  topTempResponse.innerHTML = `${topTemp}&degC`;
}

function showCity(city) {
  let apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  showCity(city);
}

let currentCity = document.querySelector("#search");
currentCity.addEventListener("submit", handleSubmit);

// geolocation //

function retrievePosition(position) {
  let apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl2).then(showWeather);
}
function runNavigator(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let geolocation = document.querySelector("#geolocation-button");
geolocation.addEventListener("click", runNavigator);

//forecast 4 day //

//celcius//

function changeCelcius(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = 16;
}

let convertC = document.querySelector("#celcius");
convertC.addEventListener("click", changeCelcius);

//farenheight//

function changeFarenheight(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = 20;
}

let convertF = document.querySelector("#farenheight");
convertF.addEventListener("click", changeFarenheight);

showCity("Mandurah");
