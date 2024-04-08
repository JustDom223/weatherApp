import createMainChildElements from "./createMainChildElements";
import displayCurrentDayAdditionalInfo from "./displayCurrentDayAdditionalInfo";
import displayCurrrentDayForecast from "./displayCurrentDayForecast";
import displayCurrrentDayConditionTimeline from "./displayCurrrentDayConditionTimeline";
import displayDailyForecast from "./displayDailyForecast";

export default async function updateUI(weatherData, tempC) {
    const mainElement = document.querySelector("main");
    mainElement.textContent = "";
    mainElement.appendChild(createMainChildElements());
    try{   
        await displayCurrrentDayForecast(weatherData, tempC);
        await displayDailyForecast(weatherData);
        await displayCurrrentDayConditionTimeline(weatherData, tempC);
        await displayCurrentDayAdditionalInfo(weatherData);
    }catch(err){
        console.log(err)
    }
}