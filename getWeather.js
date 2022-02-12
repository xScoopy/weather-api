
const url = "https://api.openweathermap.org/data/2.5/weather?"

const apiHelper = async (path) => {
    const res = await fetch(path)
    const jsonData = await res.json()
    const resolvedJsonData = {
        "temp" : jsonData.main.temp,
        "desc" : jsonData.weather[0].description,
        "unit" : unit
    }
    return resolvedJsonData 
}

const getWeatherZip = (zip, apiKey, unit="imperial") => {
    const path = `${url}zip=${zip}&appid=${apiKey}&units=${unit}`
    return apiHelper(path)
}

const getWeatherCity = async (city, apiKey, unit="imperial") => {
    const path = `${url}q=${city}&appid=${apiKey}&units=${unit}`
    return apiHelper(path)
}
const getWeatherGeo = async (lat, lon, apiKey, unit="imperial") => {
    const path = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    return apiHelper(path)
}