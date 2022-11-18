let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter city");
city = city.toLowerCase();
city = city.trim();
if (weather[city] !== undefined) {
  let hum = weather[city].humidity;
  let temperature = weather[city].temp;
  let tempC = Math.round(temperature);
  let tempF = Math.round(weather[city].temp * 1.8 + 32);
  alert(
    `It is currently ${tempC}°C (${tempF}°C) in ${city} with a humidity of ${hum}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
