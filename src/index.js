import addKeyEvents from "./DOMManipulation/activateKeyboardEventlisteners";
import createMainChildElements from "./DOMManipulation/createMainChildElements";
import displayCurrentDayAdditionalInfo from "./DOMManipulation/displayCurrentDayAdditionalInfo";
import displayCurrrentDayForecast from "./DOMManipulation/displayCurrentDayForecast";
import displayCurrrentDayConditionTimeline from "./DOMManipulation/displayCurrrentDayConditionTimeline";
import displayDailyForecast from "./DOMManipulation/displayDailyForecast";
import locationErrorNotification from "./DOMManipulation/locationError";
import updateSearch from "./DOMManipulation/updateSearch";
import updateUI from "./DOMManipulation/updateUI";
import "./styles/main.css";
import getWeather from "./weatherAPIFunctions/getWeather";

const weatherAPI = "711063798872415aa7b221239241003";
// const  giphyAPI = "ED9FuiTtRxtrUzJCFdwQ5IyzTYEJoZQY";
const numberOfDaysForecasted = 3;




document.addEventListener("DOMContentLoaded", async ()=> {
    const tempToggleElement = document.querySelector("#tempToggle");
    const tempToggleSwitchElement = document.querySelector("#tempToggleSwitch");
    const updateButtonElement = document.querySelector("#weatherUpdate");
    const mainElement = document.querySelector("main");
    let tempC = true;
    let searchedLocation = "";
    addKeyEvents();

    updateButtonElement.addEventListener("click", async () => {
        mainElement.textContent = "";
        const newSearch = updateSearch();
        try{

            const weatherData = await getWeather(weatherAPI, newSearch, numberOfDaysForecasted);
            searchedLocation = weatherData.location.name;
            console.log(weatherData);
            updateUI(weatherData, tempC);
        }catch(err){
            mainElement.appendChild(locationErrorNotification(err));
        }
        
    });
    
    tempToggleElement.addEventListener("click",async ()=>{
        tempC = !tempC;
        if(searchedLocation !== ""){
            const weatherData = await getWeather(weatherAPI, searchedLocation, numberOfDaysForecasted);
            updateUI(weatherData, tempC);
        }
        tempToggleSwitchElement.classList.toggle("americaFY");
    });


});


