// Create a Object with all of the time and temps for the day as Key/Value pairs
async function createTimeTempObjectArray(data){
    try{
        const dayTimelineObject = {};
        await data.forecast.forecastday[0].hour.forEach((hour, index) => {
            if(index % 2 === 0) {
                const time = hour.time.slice(-5);
                dayTimelineObject[time] = hour.temp_c;
            }
        });
        return dayTimelineObject;
    }catch(err){
        console.log(err);
        return null;
    }
}

export default async function displayCurrrentDayTimeline(data){
    try{
        const timeTempObject = await createTimeTempObjectArray(data);
        const dailyTimeLineElement = document.querySelector("#dailyTimeline");
        dailyTimeLineElement.textContent = "";

        Object.entries(timeTempObject).forEach(([key, value]) => {
            const hourlyTimeTemp = document.createElement("span");
            hourlyTimeTemp.classList.add("timeline");

            hourlyTimeTemp.textContent = `${key} - ${value}°C`;
            dailyTimeLineElement.appendChild(hourlyTimeTemp);
        });
    }catch(err){
        console.log(err);
    }

}
