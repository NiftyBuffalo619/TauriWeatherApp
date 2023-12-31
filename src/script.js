window.onload = checkWeather();

        async function checkWeather() {
            const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=48.806751&longitude=16.638371&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=Europe%2FBerlin";
            const response = await fetch(apiURL);
            var data = await response.json();
            console.log(data);
            const weatherCode = data.current_weather.weathercode;
            document.querySelector(".weather-icon").src = GetWeatherImage(weatherCode);
            document.querySelector(".temp").innerHTML = Math.round(data.current_weather.temperature) + "°C";
            document.querySelector(".wind").innerHTML = data.current_weather.windspeed + "km/h";
        }

        function GetWeatherImage(weathercode) {
            switch (weathercode) {
                case 0 , 1:
                    return "./images/clear.png";
                break;
                case 2:
                    return "./images/mist.png";
                break;
                case 3:
                    return "./images/clouds.png";
                break;
                case 71, 73, 75, 77, 85, 86:
                    return "./images/snow.png";
                break;
                default:
                    return "./images/clear.png";
                break;
            }
        }