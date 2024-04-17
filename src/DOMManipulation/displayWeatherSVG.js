import createSVGImg from "../imgs/svgs/imgManipulation/createSVGImg";

import sunnySVG from "../imgs/svgs/weather/reshot-icon-sun-S9ZW4T6UGQ.svg";
import lightningCloudSVG from "../imgs/svgs/weather/reshot-icon-electric-clouds-DKLY6EF9H5.svg";
import rainSVG from "../imgs/svgs/weather/reshot-icon-rain-5YXUMGH6ZB.svg";
import cloudsSVG from "../imgs/svgs/weather/reshot-icon-rain-clouds-QTLW32D7FR.svg";
import snowCloudsSVG from "../imgs/svgs/weather/reshot-icon-snow-cloud-TPC7FB3GAV.svg";
import mostlyCloudySVG from "../imgs/svgs/weather/reshot-icon-sun-and-cloud-65PMRJT84G.svg";
import partlyCloudySVG from "../imgs/svgs/weather/reshot-icon-sun-and-cloud-UHYFETRWJ2.svg";
import windySVG from "../imgs/svgs/weather/reshot-icon-wind-ER6Q95XJA7.svg";
import fogSVG from "../imgs/svgs/weather/haze-fog-svgrepo-com.svg";


export default async function displayWeatherSVG(weatherData){
    try{
        const currentWeather = await weatherData.toLowerCase().trim();
        switch (currentWeather) {
        case "clear":
        case "sunny":
            return createSVGImg(sunnySVG, "weatherSVG");
            
        case "partly cloudy":
            return createSVGImg(partlyCloudySVG, "weatherSVG");
            
        case "cloudy":
            return createSVGImg(cloudsSVG, "weatherSVG");
            
        case "overcast":
            return createSVGImg(mostlyCloudySVG, "weatherSVG");
            
        case "thundery outbreaks possible":
        case "patchy light snow with thunder":
        case "patchy light rain with thunder":
        case "moderate or heavy rain with thunder":
        case "thundery outbreaks in nearby":
            return createSVGImg(lightningCloudSVG, "weatherSVG");
            
        case "patchy rain possible":
        case "patchy light drizzle":
        case "patchy rain nearby":
        case "patchy rain shower":
        case "light drizzle":
        case "moderate drizzle":
        case "heavy drizzle":
        case "patchy light rain":
        case "light rain":
        case "light rain shower":
        case "moderate rain":
        case "heavy rain":
        case "light freezing rain":
        case "torrential rain shower":
        case "moderate or heavy rain shower":
        case "moderate or heavy freezing rain":
        case "patchy light sleet":
        case "moderate or heavy sleet":
            return createSVGImg(rainSVG, "weatherSVG");
            
        case "patchy snow possible":
        case "patchy sleet possible":
        case "light sleet":
        case "patchy light snow":
        case "light snow":
        case "moderate snow":
        case "heavy snow":
        case "light sleet showers":
        case "moderate or heavy sleet showers":
        case "light snow showers":
        case "moderate or heavy snow showers":
        case "light showers of ice pellets":
        case "moderate or heavy showers of ice pellets":
        case "moderate or heavy snow with thunder":
        case "patchy freezing drizzle possible":
        case "blizzard":
        case "blowing snow":
            return createSVGImg(snowCloudsSVG, "weatherSVG");
            
        case "mist":
        case "fog":
        case "freezing fog":
        case "patchy fog":
            return createSVGImg(fogSVG, "weatherSVG");
                            
            
            

        default:
            return console.log(`${currentWeather} - Weather condition is not categorized.`);
        }
    } catch(err) {
        console.log(err);
    }
}
