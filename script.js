const apiKey = "0460b1caf0ea3ce68de933fefd4a81d7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(" .search input");
const searchbtn = document.querySelector(" .search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "<sup>°C</sup>";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(" .Wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "../clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "../clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "../rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "../drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "../mist .png";
    }
    document.querySelector(" .weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
