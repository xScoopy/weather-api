# weather-api
 
This repo contains some starter code that works with the [Open Weather Map API](https://openweathermap.org). 

Your goal is to work out the challenges listed below. 

## Weather Lib

Imagine you want to turn the code in index.js into a library that could be used by anyone who wanted to use the OpenWeatherMap API. Currently there are a couple big problems:

### Challenge 1

The `getWeather()` function is contained `index.html` to be portable it needs to be in a separate file. This will allow anyone to import it into any project.  

The API key is contained in the function. To be useful anywhere the API Key needs to come from outside the `getWeather()` function. 

**Pass the API Key into the function as a parameter.**

### Challenge 2

When the `fetch()` method resolves the second promise it sets the temperature and description on elements in the DOM. If the weather fetching were going to be useful anywhere this part would need to be customized for each project. Use callback here.

- `getWeather()` should take a callback as a parameter. 
- When fetch resolves execute the callback. 
- You'll need to pass your weather data to the callback as a parameter.

The goal of this challenge is to use a call back to handle the weather data in your developer code. The library code should take in the callback as a parameter to the `getWeather()` function and call it when the data is loaded. 

### Challenge 3

How are you going to handle errors? A second callback could be used to handle errors.

- `getWeather()` should take a second parameter and to handle errors. 
- Execute this second callback in the catch block. 
- Pass the error message to the error callback as a parameter.

The goal this time is to add a second callback that will handle errors. 

### Challenge 4

At this point you are getting an idea of how callbacks work. You're probably also getting an idea of where callbacks can be awkward. Promise is an object that was invented to replace callbacks. 

The goal of this challenge is to refactor the `getWeather()` function to return a Promise isnstead of using a callback. 

### Challenge 5

If you haven't already the goal of this section is to use `async` and `await`. 

Refactor your code to use `async` and `await`. Making the `getWeather()` function an `async` function like this `async function getWeather() { ... }` will make it return a Promise. From the outside the code should still work the same as it did before.

### Challenge 6

What other improvements can you make?

- Take a look at the JSON returned from openweathermap.org it's pretty confusing. How would you improve on this? Returing a more organized and better labeled Object would be a big improvement. 
  - Define a better JSON format for the weather data and pass this to your success callback.

The goal here is improve on the existing system. A good place to start is the JSON data that is returned from the API. 

Feel free to make any other improvements you might think of. 

### Challenge 7

The open weather map API takes unit as a param maybe we can pass that into the `getWeather()` function.

- Add a parameter that takes unit. This should be a string: 'metric' or 'imperial'. 

The goal is to add a parameter to the `getWeather()` function that takes the unit. 

### Challenge 8

The open weather map API can use a city name or gelocation to get the weather. This could be handled with the single function or with a new function. 
  
- While the single function is good would this work better as a class? Imagine initializing the class with the API key, and calling methods to: 
  - get weather by zip
  - get weather by city
  - get weather by geolocation
  - set the unit
  -  etc. 

The goal of this challenge it expand the existing system to accept the zip, city name, or geolocation to fetch the weather. You can solve this by creating new functions, by passing new parameters to the existing function. 

### Stretch Challenges

Bonus question: Take a look at the `navigator.geolocation.getCurrentPosition()` this is not a lot of trouble but maybe it could be improved on by writing a library. How could you improve the geolocation API. 
  
- Make a small library to help using geolocation. 
- Use your geolocation library with your weather library.

## OOP Weather

This set of challenges takes the ideas from the previous challenge with the goal of creating an Class that creates a Weather Object can retrieve weather data. 

Using a function covers some most of the use of requesting and returning weather data. Sometimes you'll need something more. Using a class will allow you to create a persistent data structure with the ability to hold it's own configuration. 

### Challenge 1

The goal of this challenge is to create a class that will make an object that can get the weather data. Imagine the class is Called Weather and it works in this way. 

```JS
const w = new Weather('yourapikey')
w.getWeather('zipcode').then( ... )
```

The difference here is that line makes a new **Object**. You'll use the methods and properties of the object to configure and fetch the weather. 

Properties might be values that your object holds for configuration. 

```JS 
w.apikey = '1234567890'
w.zip = '94010'
w.units = 'metric'
// or 
w.useMetric = true
```

Your object will also have methods that execute the code that fetches the weather. 

```js 
w.getWeatherForZip('94010')
w.getWeatherForCity('San Francisco')
w.getWeatherForLocation()
```

This could be expanded into many other methods. If configuration information like: zip, city, or apikey are already set and held in a property on the object these don't need to be passed here. 

How this all fits together is up to you. 

Here is a starting point: 

```js 
class Weather {
  constructor(apikey) {
    this.apikey = apikey
  }
}
```

Your goal is to define a class that will get the weather data. Define the properties of that class. 

### Challenge 2

Your class needs methods. Write a method that will load the weather data. You can handle this however you think is best. 

Here is a rough idea: 

```js 
class Weather {
  constructor(apikey) {
    this.apikey = apikey
  }

  getWeather() {
    fetch()
    ...
  }
}
```

`getWeather()` now a method of the class can use either a callback or a promise, It's up to you. 

The configuration of API Key should be stored by the class. This way future calls to the method won't need it. 

The zip code could be passed into the method as a parameter or set as a property of the class. It's up to you! In the first case you need to supply it with each call, in the second you only need to supply it once but you'll need to set it again when you want weather from a new location.

### Challenge 3

The current weather data from OpenWeatherMap can provide weather for: 

- city name
- city id
- geo coordinates
- zip code

You should support all of these. An easy way would be to create a method for each. The API can handle each of these type of requests with different query vars. 

- `weatherForCity()`
- `weatherForId()`
- `weatherForGeo()`
- `weatherForZip()`

It would be good to use a helper method to handle fetching data. The methods above would put the URL together and pass it to the helper. 

### Challenge 4

The weather changes through out the day. It might be good to have a method that provides us with periodic updates. 

The goal of this challenge is write a method that will do that. This method should take a call back. Alternatively you could use an event listener. 

The method should also take a number of milliseconds which will set the time between updates. 
