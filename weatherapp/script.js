// http://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata&appid=6bc9f7b8f1ee13d03f914d5dafd0ee5a

const cityName = document.querySelector("#city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const weatherIcon = document.querySelector("#weatherIcon");
const errorMsg = document.querySelector("#error");

const apiKey = "6bc9f7b8f1ee13d03f914d5dafd0ee5a";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    errorMsg.style.display = "block"
  } else {
    let data = await response.json();

    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + ` °C`;
    humidity.innerHTML = data.main.humidity + `%`;
    wind.innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/images/2_cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/images/1_clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/images/6_rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/images/3_drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/images/5_mist.png";
    }

    errorMsg.style.display = "none"
  }
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchInput.value);
});
