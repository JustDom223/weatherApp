import displayWeatherSVG from "./displayWeatherSVG";


// Create a Object with all of the time and temps for the day as Key/Value pairs
async function createTimeTempObjectArray(data){
    try{
        const dayTimelineObject = {};
        await data.forecast.forecastday[0].hour.forEach((hour, index) => {
            if(index % 2 === 0) {
                const time = hour.time.slice(-5);
                dayTimelineObject[time] = {
                    temperature: hour.temp_c,
                    condition: hour.condition.text,
                };
            }
        });
        return dayTimelineObject;
    }catch(err){
        console.log(err);
        return null;
    }
}

export default async function displayCurrrentDayConditionTimeline(data){
    try{
        const timeTempObject = await createTimeTempObjectArray(data);
        const dailyTimeLineElement = document.querySelector("#dailyTimeline");
        dailyTimeLineElement.textContent = "";

        Object.entries(timeTempObject).forEach(async([key, value]) => {
            const hourlyContainer = document.createElement("div");
            const hourlyTimeTemp = document.createElement("p");
            const conditionSVG = await displayWeatherSVG(value.condition);
            hourlyTimeTemp.classList.add("timeline");

            hourlyContainer.id = "hourlyTimelineContainer";
            hourlyTimeTemp.textContent = `${key} - ${value.temperature}°C`;
            conditionSVG.classList.add("conditionSVG");

            hourlyContainer.appendChild(hourlyTimeTemp);
            hourlyContainer.appendChild(conditionSVG);

            dailyTimeLineElement.appendChild(hourlyContainer);
        });
    }catch(err){
        console.log(err);
    }
}
