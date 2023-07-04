import "./style.css";
//import { getWeather } from "./weather";
import { getWeather  , ICON_MAP } from "http://localhost:1430/iconMap.js";
//import { ICON_MAP } from "./iconMap";

getWeather(48.80 , 16.64 , Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather)
.catch(e => {
    console.error(e);
    alert("Error while getting weather from the server");
});

function renderWeather({ current, daily, hourly }) {
    renderCurrentWeather(current);
    //renderDailyWeather(daily);
    //renderHourlyWeather(hourly);
    document.body.classList.remove("blurred");
    renderDailyWeather(daily);
}

function setValue(selector, value, { parent = document} = {}) {
    parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconCode) {
    return `./public/icons/${ICON_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[data-current-icon]");

function renderCurrentWeather(current) {
    currentIcon.src = getIconUrl(current.iconCode);
    setValue("current-temp" , current.currentTemp);
    setValue("current-high" , current.highTemp);
    setValue("current-low" , current.lowTemp);
    setValue("current-fl-high" , current.highFeelsLike);
    setValue("current-fl-low" , current.lowFeelsLike);
    setValue("current-wind" , current.windSpeed);
    setValue("current-precip" , current.precip);
}

const dailySection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.getElementById("day-card-template");
function renderDailyWeather(daily) {
    dailySection.innerHTML = "";
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true);
        setValue("temp" , day.maxTemp, { parent: element });
        setValue("date" , day.timestamp, { parent: element });
    });
}