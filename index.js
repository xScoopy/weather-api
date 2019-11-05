// The code below gets weather data from Open Weather Map. 

function getWeather(zip) {
  const apiKey = '467355df4c808dd6134a3b64e9ace282'
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => handleJson(json))
    .catch(err => console.log(err.message))
}