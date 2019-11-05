// The code below gets weather data from Open Weather Map. 
// While functions it doesn't stand on it's own. That is you
// couldn't use this in any project. 

// Your job is to make this code useful anywhere. 

// There are a couple big problems
// 1) The API key is contained in the function. To be useful
// anywhere this needs to come from outside. 
// - Pass the zip into the function as a parameter
// 2) When the fetch method resoves the second promise it calls 
// a function in the other code block. This isn't going to work 
// well for any other projects that may use this this. 
// - Make handleJson  a callback: pass it in as a parameter. 
// 3) How are you going to handle errors? 
// 4) What other improvements can you make? 
// - Take a look at the JSON returned from openweathermap. It's pretty confusing. 
// How would you improve on this? 
// - The open weather map takes a unit as a param maybe we can pass that into the function...
// - The open weather map API can use a city name or gelocation to get the weather. Should 
// we write a new function, or can that be passed in to this function? 
// - While the single function is good would this work better as a class? 

function getWeather(zip) {
  const apiKey = '467355df4c808dd6134a3b64e9ace282'
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => handleJson(json))
    .catch(err => console.log(err.message))
}

