export default async function getWeather(API,location,numOfDays){
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${location}&days=${numOfDays}`);
        const weatherData = await response.json();
        return weatherData;
    }catch(err){
        console.log(err);
        return null;
    }
}
