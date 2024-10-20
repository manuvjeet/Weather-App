const apiKey = 'e514c428477295936e4cf4b6d1728647'; // Replace with your API key from OpenWeatherMap
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const desc = document.getElementById('desc');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const bgColorInput = document.getElementById('bgColor');
const applyBtn = document.getElementById('applyBtn');

// Fetch weather data
async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  
  if (response.status === 200) {
    cityName.innerHTML = data.name;
    temp.innerHTML = `Temperature: ${data.main.temp}°C`;
    desc.innerHTML = `Description: ${data.weather[0].description}`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
  } else {
    alert('City not found!');
  }
}

// Handle search button click
searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

// Handle background color change
applyBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = bgColorInput.value;
});