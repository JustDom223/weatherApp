export default async function getCurrentDayForecast(data){
    try{
        const forecastdays = await data.current;
        const dayConditions = [];
        forecastdays.forEach(day =>
            dayConditions.push(day.day.condition.text));

        return dayConditions;
    }catch(err){
        console.log(err);
        return null;
    }
}

function 