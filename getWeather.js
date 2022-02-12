

// function getWeather(zip, apiKey) {
//     const units = 'imperial'
//     const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
//     return fetch(path)
//     .then((res) => {
//         return res.json()
//     })
    
//   }

const getWeather = async (zip, apiKey) => {
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path)
    return (await res.json())
}