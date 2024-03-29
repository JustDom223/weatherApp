import displayCurrrentDayForecast from "./DOMManipulation/displayCurrentDayForecast";
import displayCurrrentDayTimeline from "./DOMManipulation/displayCurrentDayTimeline";
import displayDailyForecast from "./DOMManipulation/displayDailyForecast";
import updateSearch from "./DOMManipulation/updateSearch";
import "./styles/main.css";
import getForecastConditionsArray from "./weatherAPIFunctions/getForecastConditionsArray";
import getWeather from "./weatherAPIFunctions/getWeather";

const weatherAPI = "711063798872415aa7b221239241003";
// const  giphyAPI = "ED9FuiTtRxtrUzJCFdwQ5IyzTYEJoZQY";
const numberOfDaysForecasted = 3;




document.addEventListener("DOMContentLoaded", async ()=> {
    const updateButtonElement = document.querySelector("#weatherUpdate");

    updateButtonElement.addEventListener("click", async () => {
        const newSearch = updateSearch();
        const weatherData = await getWeather(weatherAPI, newSearch, numberOfDaysForecasted);
        console.log(weatherData);
        const conditionsArray = await getForecastConditionsArray(weatherData);
        displayCurrrentDayForecast(weatherData);
        displayDailyForecast(conditionsArray);
        displayCurrrentDayTimeline(weatherData);

    });
});


