# weather-api
 
This repo contains some starter code that works with the [Open Weather Map API](https://openweathermap.org). 

Your goal is to work out the challenges listed below. 

## Learning Objectives 

- Implement callbacks to handle asynchromnous actions 
- Use functions to create callbacks
- Design functions and Objects that implement callbacks
- Use Promise to handle asynchronous actions
- Use aysnc and await to handle Promises
- Describe Promise it use and function

## Weather Lib

Take a look at index.html. Open this page in a web browser. Read the code contained in the script tag. Before you begin the challenges below you must understand how the starting project works.

- Talk about discuss the code with another student
- Describe what is happening in the starter code
- Make a small change to the code to test your understanding or 

Imagine you want to turn the code in index.js into a library that could be used by anyone who wanted to use the OpenWeatherMap API in any project they might create. Currently there are a couple big problems. 

You are going to adress each of the problems listed below. Check with the instructor as you solve each problem to review your work. 

The challenges below do not go straight to the best possible solution. Instead they work through the problem in steps solving each and refactoring along the way. 

### Challenge 1

The `getWeather()` function is contained `index.html` to be portable it needs to be in a separate file. This will allow anyone to import it into any project.

The API key is contained in the function. To be useful anywhere the API Key needs to come from outside the `getWeather()` function. 

**Pass the API Key into the function as a parameter.**

- Move `getWeather()` to a separate file. 
- Add a parameter to `getWeather(apiKey)` that accepts the api key as string. 

### Challenge 2

When the call to `fetch()` resolves the second promise it sets the temperature and description on elements in the DOM. For this code to be useful in any project code that is specific to this HTML references needs to be removed from `getWeather()` and be handled by a callback. 

- `getWeather()` should take a callback as a parameter.
- In the `getWeather()` function execute the callback when fetch resolves the weather data api request.  
- Pass the weather data to the callback function as an argument.

The goal of this challenge is to use a call back to handle the weather data in your developer code.  

### Challenge 3

How are you going to handle errors? A second callback could be used to handle errors.

- `getWeather()` should take a second parameter that will be a callback to handle errors. 
- Execute this second callback in the catch block of your api call.
- Pass the error message to the error callback as an argument.

The goal this time is to add a second callback that will handle errors. 

### Challenge 4

At this point you are getting an idea of how callbacks work. You're probably also getting an idea of where callbacks can be awkward. A `Promise` is an object that was invented to simplify and streamline asynchronous code.  

The goal of this challenge is to refactor the `getWeather()` function to return a Promise instead of using a callback. 

- Refactor your `getWeather(apikey)` function to return a Promise.

### Challenge 5

The `async` and `await` keywords are used with Promise to streamline your code. 

The `async` key word is used in front of a function for example: 

```JS
async function getWeather() { ... }
// or 
const getWeather = async () => { ... }
```

A function marked with `async` returns a Promise, even if the code inside the doesn't explicity return a Promise. 

The `await` key word can only be used in `async` functions. Use `await` on any line of code with a Promise to wait for that Promise to resolve. For example: 

```JS
async function getWeather() {
  const res = await  fetch(...) // waits here until the promise resolves
  const json = await res.json() // waits here until the promise resolves
  return json // returns json wrapped in a Promise
}
```

The goal of this section is to use `async` and `await`.

Refactor your code to use `async` and `await`. Making the `getWeather()` function an `async` function. Use the `await` keyword in your function to handle any promises. 

Outside of `getWeather()` at the line where you invoke the function you'll need to handle the promise that it now returns. 

### Challenge 6

What other improvements can you make?

- Take a look at the JSON returned from openweathermap.org it's pretty confusing. How would you improve on this? Returing a more organized and better labeled Object would be a big improvement.
- Define a better JSON format for the weather data and pass this to your success callback or return this from your async function. 

The goal here is to improve on the existing system. A good place to start is the JSON data that is returned from the API.

Feel free to make any other improvements you might think of. 

### Challenge 7

The open weather map API takes unit as a param maybe we can pass that into the `getWeather()` function.

- Add a parameter that takes unit. This should be a string: 'metric' or 'imperial'. 

The goal is to add a parameter to the `getWeather(url, unit)` function that takes the unit.

### Challenge 8

The OpenWeatherMap API provides a few different API options that fetch the weather for zip codes, city names, and geolocation. Your code would be more useful if it supported these options. 

You'll either need to create a separate function for each, or use a parameter to idenitfy which method you are using to get the data.
  
- While the single function is good would this work better as a class? Imagine initializing the class with the API key, and calling methods to: 
  - get weather by zip - `getWeatherByZip(zip, unit)`
  - get weather by city - `getWeatherByCity(city, unit)`
  - get weather by geolocation - `getWeatherByGeo(coords, unit)`

The goal of this challenge it expand the existing system to accept the zip, city name, or geolocation to fetch the weather. You can solve this by creating new functions, by passing new parameters to the existing function.

To solve this problem you'll need to look at the [OpenWeatherMap api docs](https://openweathermap.org/current).  

Here is a list of the URLs OpenWeatherMap uses: 

- By city name
  - api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  - api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
  - api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
- By city ID
  - api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
- By geocoordinates
  - api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
- By zip code 
  - api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

These all begin with:

- api.openweathermap.org/data/2.5/weather?

You can use this to your coding advantage by storing this portion of the url in variable and assembling the rest of the url based on which method is called. 

## OOP Weather

This set of challenges takes the ideas from the previous challenge with the goal of creating an Class that creates a Weather Object can retrieve weather data. 

Why create a class? If you needed to get weather for more than one location it might be good to create an instance of an object to handle the weather for each location. Picture a web site or app that that managed the weather for a list of locations. 

Using a function covers some most of the use of requesting and returning weather data. Sometimes you'll need something more. Using a class will allow you to create a persistent data structure with the ability to hold it's own configuration.

### Challenge 1

The goal of this challenge is to create a class that will make an object that can get the weather data. Imagine the class is Called Weather and it works in this way.

```JS
const w = new Weather('yourapikey')
w.getWeather('zipcode').then( ... )
```

The difference here is that line 1 makes a new **Object**. You'll use the methods and properties of the object to configure and fetch the weather. 

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
