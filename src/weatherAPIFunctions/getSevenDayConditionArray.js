export default async function getSevenDayConditionsArray(data){
    try{
        const forecastdays = await data.forecast.forecastday;
        const dayConditions = [];
        forecastdays.forEach(day =>
            dayConditions.push(day.day.condition.text));

        return dayConditions;
    }catch(err){
        console.log(err);
        return null;
    }
}