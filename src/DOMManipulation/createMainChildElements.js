export default function createMainChildElements(){
    const mainContentElement = document.createElement("div");

    const currentDayCardElement = document.createElement("div");
    const followingDaysCardElement = document.createElement("div");

    const dailyTimelineElement = document.createElement("div");
    const dayMainInfoElement = document.createElement("div");
    const dayAdditionalInfoElement = document.createElement("div");

    mainContentElement.id = "mainContent";

    currentDayCardElement.id = "currentDayCard";
    followingDaysCardElement.id = "followingDays";

    dailyTimelineElement.id = "dailyTimeline";
    dayMainInfoElement.id = "dayMainInfo";
    dayAdditionalInfoElement.id = "dayAdditionalInfo";


    currentDayCardElement.appendChild(dailyTimelineElement);
    currentDayCardElement.appendChild(dayMainInfoElement);
    currentDayCardElement.appendChild(dayAdditionalInfoElement);



    mainContentElement.appendChild(currentDayCardElement);
    mainContentElement.appendChild(followingDaysCardElement);
    return mainContentElement;
}