# weather-api
 
This repo contains some starter code that works with the [Open Weather Map API](https://openweathermap.org). 

Your goal is to work out the challenges listed below. 

Imagine you want to turn the code in index.js into a library that could be used by anyone who wanted to use the OpenWeatherMap API. Currently there are a couple big problems:

- The API key is contained in the function. To be useful anywhere this needs to come from outside the `getWeather()` function. 
  - Pass the zip into the function as a parameter
- When the `fetch()` method resolves the second promise it calls a function in the other code block. This isn't going to work well for any other projects that may use this. 
  - Make handleJson  a callback: pass it in as a parameter. 
  - How are you going to handle errors? A second callback could be used to handle errors.
- What other improvements can you make? 
  - Take a look at the JSON returned from openweathermap.org it's pretty confusing. How would you improve on this? Returing a more organized and better labeled Object would be a big improvement. 
  - The open weather map takes a unit as a param maybe we can pass that into the `getWeather()` function.
  - The open weather map API can use a city name or gelocation to get the weather. This could be handled with the single function or with a new function. 
  - While the single function is good would this work better as a class? Imagine initializing the class with the API key, and calling methods to: 
    - get weather by zip
    - get weather by city
    - get weather by geolocation
    - set the unit
    -  etc. 

- Bonus question: Take a look at the `navigator.geolocation.getCurrentPosition()` this is not a lot of trouble but maybe it could be improved on by writing a library. How could you improve the geolocation API. 
