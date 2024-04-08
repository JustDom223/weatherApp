export default async function getWeather(API, location, numOfDays) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${location}&days=${numOfDays}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.error("An error occurred while fetching weather data:", err);
        throw err;
    }
}
