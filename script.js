const apiKey = "YOUR_API_KEY"; // Replace this with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = `${data.main.temp} °C`;
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weather").classList.remove("hide");
  } catch (error) {
    alert("Error fetching weather data.");
    console.error(error);
  }
}
