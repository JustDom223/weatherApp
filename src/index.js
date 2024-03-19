import "./styles/main.css";
import getSevenDayConditionsArray from "./weatherAPIFunctions/getSevenDayConditionArray";
import getWeather from "./weatherAPIFunctions/getWeather";

const weatherAPI = "711063798872415aa7b221239241003";
const weatherLocation = "Maastricht";
// const  giphyAPI = "ED9FuiTtRxtrUzJCFdwQ5IyzTYEJoZQY";





document.addEventListener("DOMContentLoaded", async ()=> {
    const weatherData = await getWeather(weatherAPI, weatherLocation);
    const conditionsArray = await getSevenDayConditionsArray(weatherData);
    console.log(conditionsArray);
    // console.log(weatherData);
    // console.log(getSevenDayConditionsArray(weatherData));
});


