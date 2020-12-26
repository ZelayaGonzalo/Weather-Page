/* eslint-disable default-case */
const searchValue = document.getElementById('searchBox');
const form = document.getElementById('form');
const info = document.getElementById('info');
const content = document.getElementById('content');
function kelvinToCelsius(number) {
  return number - 273.15;
}
function updateBackgroundImage(weather) {
  switch (weather) {
    case 'Clear':
      content.style.backgroundImage = 'url(Images/clear.jpg)';
      break;
    case 'Clouds':
      content.style.backgroundImage = 'url(Images/cloud.jpg)';
      break;
    case 'Rain':
      content.style.backgroundImage = 'url(Images/rain.jpg)';
      break;
  }
}
function updateDOM(data) {
  updateBackgroundImage(data.weather[0].main);
  info.querySelector('.title').innerHTML = `${data.name} , ${data.sys.country}`;
  info.querySelector('.temp').innerHTML = `${kelvinToCelsius(data.main.temp).toFixed(1)} °C`;
  info.querySelector('.feeling').querySelector('#feel').innerHTML = `${kelvinToCelsius(data.main.feels_like).toFixed(1)} °C`;
  info.querySelector('.minTemp').innerHTML = `Min: ${kelvinToCelsius(data.main.temp_min).toFixed(1)} °C`;
  info.querySelector('.maxTemp').innerHTML = `Max: ${kelvinToCelsius(data.main.temp_max).toFixed(1)} °C`;
}
async function getTemp(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae3b452c15565eed9225290d1c80cb6e`, { mode: 'cors' });
    const temp = await response.json();
    await updateDOM(temp);
    await console.log(temp);
  } catch {
    window.alert('Error getting info from this city.');
  }
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  getTemp(searchValue.value);
});
