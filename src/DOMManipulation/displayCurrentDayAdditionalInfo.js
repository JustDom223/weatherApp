export default async function displayCurrentDayAdditionalInfo(data){
    // Get existing elements
    const dayAdditionalInfoElement = document.querySelector("#dayAdditionalInfo");
    dayAdditionalInfoElement.textContent = "";

    // Create child elements
    const uvIndexElement = document.createElement("p");
    const windDirectionElement = document.createElement("p");
    const windSpeedElement = document.createElement("p");
    const precipitationElement = document.createElement("p");
    const humidityElement = document.createElement("p");

    // Add content to children
    uvIndexElement.textContent = `UV Index: ${data.current.uv}`;
    windDirectionElement.textContent = `Wind Direction: ${data.current.wind_dir}`;
    windSpeedElement.textContent = `Wind Speed: ${data.current.wind_kph}km/h`;
    precipitationElement.textContent = `Precipitation: ${data.current.precip_mm}mm`;
    humidityElement.textContent = `Humidity: ${data.current.humidity}%`;

    // Append children
    dayAdditionalInfoElement.appendChild(uvIndexElement);
    dayAdditionalInfoElement.appendChild(windDirectionElement);
    dayAdditionalInfoElement.appendChild(windSpeedElement);
    dayAdditionalInfoElement.appendChild(precipitationElement);
    dayAdditionalInfoElement.appendChild(humidityElement);
}