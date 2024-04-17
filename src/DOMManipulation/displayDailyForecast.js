import displayWeatherSVG from "./displayWeatherSVG";


export default async function displayDailyForecast(data, tempC){
    const followingDaysElement = document.querySelector("#followingDays");
    followingDaysElement.textContent = "";
    data.forecast.forecastday.slice(1).forEach(async day => {
        // Create forecast card and children
        const forecastCard = document.createElement("div");
        const forecastConditionSVG = await displayWeatherSVG(day.day.condition.text);
        const forecastType = document.createElement("p");
        // Add classes and ID's
        forecastCard.classList.add("forecastCard");
        // Manipulte elements
        forecastType.textContent = `${day.day.condition.text}`;

        forecastCard.appendChild(forecastType);
        forecastCard.appendChild(forecastConditionSVG);
        followingDaysElement.appendChild(forecastCard);
    });

}