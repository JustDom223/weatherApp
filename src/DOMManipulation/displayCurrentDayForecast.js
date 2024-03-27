export default async function displayCurrrentDayForecast(data){
    const dayMainInfoElement = document.querySelector("#dayMainInfo");  
    dayMainInfoElement.textContent = "";

    const currentDayTempElement = document.createElement("span");
    const currentDayFeelsLikeElement = document.createElement("span");
    const tempRangeElement = document.createElement("span");
    const locationElement = document.createElement("span");
    
    const daySunriseSunsetElement = document.createElement("div");
    const daySunriseElement = document.createElement("span");
    const daySunsetElement = document.createElement("span");
    // Adding classes and ID's to elements 
    daySunriseSunsetElement.id = "daySunriseSunset";
    daySunriseElement.classList.add("sun");
    daySunsetElement.classList.add("sun");
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

    daySunriseSunsetElement.appendChild(daySunriseElement);
    daySunriseSunsetElement.appendChild(daySunsetElement);

    dayMainInfoElement.appendChild(currentDayTempElement);
    dayMainInfoElement.appendChild(currentDayFeelsLikeElement);
    dayMainInfoElement.appendChild(tempRangeElement);
    dayMainInfoElement.appendChild(locationElement);
    dayMainInfoElement.appendChild(daySunriseSunsetElement);
}

