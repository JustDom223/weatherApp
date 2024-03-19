export default async function getSevenDayConditionsArray(data){
    try{
        const forecastdays = await data.forecast.forecastday;
        forecastdays.forEach(day =>
            console.log(day.day.condition.text));

        return forecastdays;
    }catch(err){
        console.log(err);
        return null;
    }
}