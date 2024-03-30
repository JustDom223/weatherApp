export default async function displayDailyForecast(data){
    const followingDaysElement = document.querySelector("#followingDays");
    followingDaysElement.textContent = "";

    data.forecast.forecastday.slice(1).forEach(day => {
        console.log(day);
        // Create forecast card and children
        const forecastCard = document.createElement("div");
        const forecastType = document.createElement("p");
        // Add classes and ID's
        forecastCard.classList.add("forecastCard");
        // Manipulte elements
        forecastType.textContent = `${day.day.condition.text}`;
        forecastCard.appendChild(forecastType);
        followingDaysElement.appendChild(forecastCard);
    });

}