# weather-api
 
This repo contains some starter code that works with the [Open Weather Map API](https://openweathermap.org). 

Your goal is to work out the challenges listed below. 

Imagine you want to turn the code in index.js into a library that could be used by anyone who wanted to use the OpenWeatherMap API. Currently there are a couple big problems:

- The `getWeather()` function is contained `index.html` to be portable it needs to be in a separate file. This will allow anyone to import it into any project.  
- The API key is contained in the function. To be useful anywhere the API Key needs to come from outside the `getWeather()` function. 
  - Pass the API Key into the function as a parameter
- When the `fetch()` method resolves the second promise it sets the temperature and description on elements in the DOM. If the weather fetching were going to be useful anywhere this part would need to be customized for each project. Use callback here.  
  - `getWeather()` should take a callback as a parameter. 
  - When fetch resolves execute the callback. 
  - You'll need to pass your weather data to the callback as a parameter. 
- How are you going to handle errors? A second callback could be used to handle errors.
  - `getWeather()` should take a second parameter and to handle errors. 
  - Execute this second callback in the catch block. 
  - Pass the error message to the error callback as a parameter.
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
