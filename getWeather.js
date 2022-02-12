

// function getWeather(zip, apiKey) {
//     const units = 'imperial'
//     const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//     return fetch(path)
//     .then((res) => {
//         return res.json()
//     })
    
//   }

const getWeather = async (zip, apiKey, unit="imperial") => {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const jsonData = await res.json()
    const resolvedJsonData = {
        "temp" : jsonData.main.temp,
        "desc" : jsonData.weather[0].description
    }
    return resolvedJsonData 
}

// tempEl.innerHTML = data.main.temp
// descEl.innerHTML = data.weather[0].description