import createMainChildElements from "./DOMManipulation/createMainChildElements";
import displayCurrentDayAdditionalInfo from "./DOMManipulation/displayCurrentDayAdditionalInfo";
import displayCurrrentDayForecast from "./DOMManipulation/displayCurrentDayForecast";
import displayCurrrentDayConditionTimeline from "./DOMManipulation/displayCurrrentDayConditionTimeline";
import displayDailyForecast from "./DOMManipulation/displayDailyForecast";
import updateSearch from "./DOMManipulation/updateSearch";
import "./styles/main.css";
import getWeather from "./weatherAPIFunctions/getWeather";

const weatherAPI = "711063798872415aa7b221239241003";
// const  giphyAPI = "ED9FuiTtRxtrUzJCFdwQ5IyzTYEJoZQY";
const numberOfDaysForecasted = 3;




document.addEventListener("DOMContentLoaded", async ()=> {
    const updateButtonElement = document.querySelector("#weatherUpdate");
    const mainElement = document.querySelector("main");

    updateButtonElement.addEventListener("click", async () => {
        mainElement.textContent = "";
        const newSearch = updateSearch();
        const weatherData = await getWeather(weatherAPI, newSearch, numberOfDaysForecasted);
        console.log(weatherData);
        mainElement.appendChild(createMainChildElements());
        displayCurrrentDayForecast(weatherData);
        displayDailyForecast(weatherData);
        displayCurrrentDayConditionTimeline(weatherData);
        displayCurrentDayAdditionalInfo(weatherData);

    });
});


