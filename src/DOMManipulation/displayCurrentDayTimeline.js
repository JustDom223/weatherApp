export default async function displayCurrrentDayTimeline(data){
    try{
        const dayTimelineArray = [];
        await data.forecast.forecastday[0].hour.forEach((hour, index) => {
            if(index % 3 ===0) {
                console.log(hour.time);
                dayTimelineArray.push(hour.temp_c);
            }
        });
        console.log(dayTimelineArray)
        return dayTimelineArray;
    }catch(err){
        console.log(err);
        return null;
    }
}



// forecast.forecastday[0].hour[0].temp_c
