import "./styles/main.css";

console.log("test");



const weatherAPI = "711063798872415aa7b221239241003";
const weatherLocation = "Maastricht";
const  giphyAPI = "ED9FuiTtRxtrUzJCFdwQ5IyzTYEJoZQY";


async function getWeather(API,location){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${location}&days=7`);
    const weatherData = await response.json();
    return weatherData;
 

}



document.addEventListener("DOMContentLoaded", ()=> {
    console.log(getWeather(weatherAPI, weatherLocation));
});


