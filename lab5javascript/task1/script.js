let weatherbtn = document.getElementById("getWeather");
let Weather = document.getElementById("weather");

weatherbtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    Weather.innerHTML = "Geolocation is not supported by this browser.";
  }
});
function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let Your_Key = "4e7255b3fd1e4f4e901160333250809";
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${Your_Key}&q=${latitude},${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      weather.innerHTML = `
  <h2>${data.location.name}</h2>
   <p>Temperature: ${data.current.temp_c.toFixed(2)} °C</p>
   <p>Weather: ${data.current.condition.text}</p>
  `;
    })
    .catch((error) => {
      weather.innerHTML = "Error fetching weather data";
    });
}
function error() {
  alert("Sorry, no position available.");
}
