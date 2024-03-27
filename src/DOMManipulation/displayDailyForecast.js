export default async function displayDailyForecast(conditionsArray){
    const followingDaysElement = document.querySelector("#followingDays");
    followingDaysElement.textContent = "";
    conditionsArray.slice(1).forEach(day => {
        // Create forecast card and children
        const forecastCard = document.createElement("div");
        const forecastType = document.createElement("span");
        // Add classes and ID's
        forecastCard.classList.add("forecastCard");
        // Manipulte elements
        forecastType.textContent = `${day}`;
        forecastCard.appendChild(forecastType);
        followingDaysElement.appendChild(forecastCard);
    });

}