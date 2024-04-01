// Import Functions
import createSVGImg from "../imgs/svgs/imgManipulation/createSVGImg";
// Import SVGS
import sunriseSVG from "../imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-96SYUPFDKA.svg";
import sunsetSVG from "../imgs/svgs/sunriseSunset/reshot-icon-sun-arrow-EL79YXU2AJ.svg";

import sunnySVG from "../imgs/svgs/weather/reshot-icon-sun-S9ZW4T6UGQ.svg";

async function displayWeatherSVG(data){
    try{
        const currentWeather = await data.current.condition.text;
        console.log(currentWeather);
        switch (currentWeather) {
        case "Clear":
        case "Sunny":
            console.log("The sun is out boiii");
            break;
        
        case "Partly cloudy":
        case "Cloudy":
        case "Overcast":
            console.log("Weather condition is cloudy.");
            return createSVGImg(sunnySVG, "weatherSVG", "currentWeatherSVG");

        case "Patchy light drizzle":
        case "Light drizzle":
        case "Moderate drizzle":
        case "Heavy drizzle":
        case "Patchy light rain":
        case "Light rain":
        case "Moderate rain":
        case "Heavy rain":
        case "Light freezing rain":
        case "Moderate or heavy freezing rain":
        case "Patchy light sleet":
        case "Light sleet":
        case "Moderate or heavy sleet":
        case "Patchy light snow with thunder":
        case "Moderate or heavy rain with thunder":
            console.log("Weather condition is rainy.");
            break;
        
        case "Patchy light snow":
        case "Light snow":
        case "Moderate snow":
        case "Heavy snow":
        case "Light sleet showers":
        case "Moderate or heavy sleet showers":
        case "Light snow showers":
        case "Moderate or heavy snow showers":
        case "Light showers of ice pellets":
        case "Moderate or heavy showers of ice pellets":
        case "Moderate or heavy snow with thunder":
            console.log("Weather condition is snowy.");
            break;
      
        case "Mist":
        case "Fog":
        case "Freezing fog":
        case "Patchy fog":
            console.log("Weather condition is foggy.");
            break;
      
        default:
            console.log("Weather condition is not categorized.");
        }
    }catch(err){
        console.log(err);
    }
    
}


export default async function displayCurrrentDayForecast(data){
    const dayMainInfoElement = document.querySelector("#dayMainInfo");  
    dayMainInfoElement.textContent = "";
    const sunriseSVGElement = createSVGImg(sunriseSVG, "sunSVG", "sunRiseSVG");
    const sunsetSVGElement = createSVGImg(sunsetSVG, "sunSVG", "sunSetSVG");

    const currentWeatherSVG = displayWeatherSVG(data);
    console.log(currentWeatherSVG);

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

    // dayMainInfoElement.appendChild(currentWeatherSVG);
    dayMainInfoElement.appendChild(currentDayTempElement);
    dayMainInfoElement.appendChild(currentDayFeelsLikeElement);
    dayMainInfoElement.appendChild(tempRangeElement);
    dayMainInfoElement.appendChild(locationElement);
    dayMainInfoElement.appendChild(daySunriseSunsetElement);
}

