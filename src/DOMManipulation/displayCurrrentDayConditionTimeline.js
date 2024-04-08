import displayWeatherSVG from "./displayWeatherSVG";


// Create a Object with all of the time and temps for the day as Key/Value pairs
async function createTimeTempObjectArray(data, tempC){
    try{
        const dayTimelineObject = {};
        await data.forecast.forecastday[0].hour.forEach((hour, index) => {
            if(index % 2 === 0) {
                const time = hour.time.slice(-5);
                if (tempC){
                    dayTimelineObject[time] = {
                        temperature: hour.temp_c,
                        condition: hour.condition.text,
                    };}else{
                    dayTimelineObject[time] = {
                        temperature: hour.temp_f,
                        condition: hour.condition.text,

                    };     
                }
            }
        });
        return dayTimelineObject;
    }catch(err){
        console.log(err);
        return null;
    }
}

export default async function displayCurrrentDayConditionTimeline(data, tempC){
    try{
        const timeTempObject = await createTimeTempObjectArray(data, tempC);
        const dailyTimeLineElement = document.querySelector("#dailyTimeline");
        dailyTimeLineElement.textContent = "";
        Object.entries(timeTempObject).forEach(async([key, value]) => {
            const hourlyContainer = document.createElement("div");
            const hourlyTimeTemp = document.createElement("p");
            const conditionSVG = await displayWeatherSVG(value.condition);
            hourlyTimeTemp.classList.add("timeline");

            hourlyContainer.id = "hourlyTimelineContainer";
            if(tempC){
                hourlyTimeTemp.textContent = `${key} - ${value.temperature}°C`;
                
            }else{
                hourlyTimeTemp.textContent = `${key} - ${value.temperature}°F`;
                
            }
            conditionSVG.classList.add("conditionSVG");

            hourlyContainer.appendChild(conditionSVG);
            hourlyContainer.appendChild(hourlyTimeTemp);

            dailyTimeLineElement.appendChild(hourlyContainer);
        });
    }catch(err){
        console.log(err);
    }
}
