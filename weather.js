document.addEventListener("DOMContentLoaded", function () {
  const weatherInput = document.getElementById("weather-input");
  const weatherButton = document.getElementById("weather-button");

  const weatherCity = document.getElementById("weather-city");
  const weatherTemp = document.getElementById("weather-temp");
  const weatherDesc = document.getElementById("weather-desc");
  const weatherIcon = document.getElementById("weather-icon");

  weatherButton.addEventListener("click", function (e) {
    e.preventDefault();

    const city = weatherInput.value.trim();

    if (city == "") {
      alert("Please enter a city");
    } else {
      const API_KEY = `3eaa0d76acdf148a9aa22246c4468121`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${API_KEY}`;

      fetch(url)
        .then(async function (response) {
          const data = await response.json();

          console.log(data);

          const weatherData = {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
          };

          weatherCity.innerText = `${weatherData.city}, ${weatherData.country}`;
          weatherTemp.innerText = `${weatherData.temperature}°F`;
          weatherDesc.innerText = `${weatherData.description}`;
          weatherIcon.src = weatherData.icon;
          weatherIcon.height = 100;
          weatherIcon.width = 100;
        })
        .catch(function (error) {
          console.log(error);
          alert("City not found");
        });
    }
  });
});
