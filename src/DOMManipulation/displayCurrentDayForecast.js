// Import Functions
import createSVGImg from "../imgs/svgs/imgManipulation/createSVGImg";
import displayWeatherSVG from "./displayWeatherSVG";
// Import SVGS
import sunriseSVG from "../imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-96SYUPFDKA.svg";
import sunsetSVG from "../imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-EL79YXU2AJ.svg";



export default async function displayCurrrentDayForecast(data){
    const dayMainInfoElement = document.querySelector("#dayMainInfo");  
    dayMainInfoElement.textContent = "";
    const sunriseSVGElement = createSVGImg(sunriseSVG, "sunSVG", "sunRiseSVG");
    const sunsetSVGElement = createSVGImg(sunsetSVG, "sunSVG", "sunSetSVG");

    const currentWeatherSVG = await displayWeatherSVG(data.current.condition.text);

    const currentDayTempElement = document.createElement("p");
    const currentDayFeelsLikeElement = document.createElement("p");
    const tempRangeElement = document.createElement("p");
    const locationElement = document.createElement("p");
    
    const daySunriseSunsetElement = document.createElement("div");
    const daySunriseContainerElement= document.createElement("div");
    const daySunsetContainerElement= document.createElement("div");
    const daySunriseElement = document.createElement("p");
    const daySunsetElement = document.createElement("p");
    // Adding classes and ID's to elements 
    daySunriseSunsetElement.id = "daySunriseSunset";
    daySunriseContainerElement.classList.add("sun");
    daySunsetContainerElement.classList.add("sun");
    // Adding element contents
    const tempC = true;

    if(tempC){
        currentDayTempElement.textContent = `Current temp: ${data.current.temp_c}`;
        currentDayFeelsLikeElement.textContent = `Feels like: ${data.current.feelslike_c}`;
        tempRangeElement.textContent = `Today's range: ${data.forecast.forecastday[0].day.mintemp_c} - ${data.forecast.forecastday[0].day.maxtemp_c}`;
    }else{
        currentDayTempElement.textContent = `Current temp: ${data.current.temp_f}`;
        currentDayFeelsLikeElement.textContent = `Feels like: ${data.current.feelslike_f}`;
        tempRangeElement.textContent = `Today's range: ${data.forecast.forecastday[0].day.mintemp_f} - ${data.forecast.forecastday[0].day.maxtemp_f}`;
        
    }
    
    locationElement.textContent = `${data.location.name} - ${data.location.region}`;

    daySunriseElement.textContent = `Sunrise: ${data.forecast.forecastday[0].astro.sunrise}`;
    daySunsetElement.textContent = `Sunset: ${data.forecast.forecastday[0].astro.sunset}`;

    daySunriseContainerElement.appendChild(sunriseSVGElement);
    daySunriseContainerElement.appendChild(daySunriseElement);
    
    daySunsetContainerElement.appendChild(sunsetSVGElement);
    daySunsetContainerElement.appendChild(daySunsetElement);


    daySunriseSunsetElement.appendChild(daySunriseContainerElement);
    daySunriseSunsetElement.appendChild(daySunsetContainerElement);

    dayMainInfoElement.appendChild(currentWeatherSVG);
    dayMainInfoElement.appendChild(currentDayTempElement);
    dayMainInfoElement.appendChild(currentDayFeelsLikeElement);
    dayMainInfoElement.appendChild(tempRangeElement);
    dayMainInfoElement.appendChild(locationElement);
    dayMainInfoElement.appendChild(daySunriseSunsetElement);
}

