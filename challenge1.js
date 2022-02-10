
function getWeather(zip, apiKey, callback) {
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    fetch(path)
      .then(res => res.json())
      .then(json => {
        callback(json)
      })
      .catch(err => console.log(err.message))
  }