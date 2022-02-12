

// function getWeather(zip, apiKey) {
//     const units = 'imperial'
//     const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//     return fetch(path)
//     .then((res) => {
//         return res.json()
//     })
    
//   }
const url = "https://api.openweathermap.org/data/2.5/weather?"
const getWeatherZip = async (zip, apiKey, unit="imperial") => {
    const path = `${url}zip=${zip}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const jsonData = await res.json()
    const resolvedJsonData = {
        "temp" : jsonData.main.temp,
        "desc" : jsonData.weather[0].description,
        "unit" : unit
    }
    return resolvedJsonData 
}

const getWeatherCity = async (city, apiKey, unit="imperial") => {
    const path = `${url}q=${city}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const jsonData = await res.json()
    const resolvedJsonData = {
        "temp" : jsonData.main.temp,
        "desc" : jsonData.weather[0].description,
        "unit" : unit
    }
    return resolvedJsonData 
}
const getWeatherGeo = async (lat, lon, apiKey, unit="imperial") => {
    const path = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const jsonData = await res.json()
    const resolvedJsonData = {
        "temp" : jsonData.main.temp,
        "desc" : jsonData.weather[0].description,
        "unit" : unit
    }
    return resolvedJsonData 
}

// tempEl.innerHTML = data.main.temp
// descEl.innerHTML = data.weather[0].description