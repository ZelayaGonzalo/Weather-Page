const searchValue = document.getElementById('searchBox');
const form = document.getElementById('form');
async function getTemp(city) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae3b452c15565eed9225290d1c80cb6e`, { mode: 'cors' });
  const temp = await response.json();
  await console.log(temp);
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  getTemp(searchValue.value);
});
