export default async function getForecastConditionsArray(data){
    try{
        const dayConditions = [];
        await data.forecast.forecastday.forEach(day =>
            dayConditions.push(day.day.condition.text));

        return dayConditions;
    }catch(err){
        console.log(err);
        return null;
    }
}
