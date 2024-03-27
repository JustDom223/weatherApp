export default async function displayCurrrentDayForecast(data){
    const dayMainInfoElement = document.querySelector("#dayMainInfo");
    dayMainInfoElement.textContent = "";

    const currentDayTempElement = document.createElement("span");
    const currentDayFeelsLikeElement = document.createElement('span')
    const tempRangeElement = document.createElement("span");
    const locationElement = document.createElement('span')



    currentDayTempElement.textContent = `Current temp: ${data.current.temp_c}`;
    currentDayFeelsLikeElement.textContent = `Feels like: ${data.current.feelslike_c}`
    tempRangeElement.textContent = `Today's range: ${data.forecast.forecastday[0].day.mintemp_c} - ${data.forecast.forecastday[0].day.maxtemp_c}`;
    locationElement.textContent = `${data.location.name}`


    dayMainInfoElement.appendChild(currentDayTempElement);
    dayMainInfoElement.appendChild(currentDayFeelsLikeElement)
    dayMainInfoElement.appendChild(tempRangeElement);
    dayMainInfoElement.appendChild(locationElement)

}

