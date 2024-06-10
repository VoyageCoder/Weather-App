/*To Do:
    - Polish up the ui
    - Display more than just the temprature of the city
    - See if you can display the full name of the area even if they typed it in.
*/

searchButton = document.getElementById("search-button");
searchButton.onclick = function () {

const api_key = "b26d246649504e089d221d387ebabda5";
const cityName = document.getElementById("city").value;
const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${api_key}`;
const tempDisplay = document.getElementById("temperature");

fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherDescription = data.data[0].weather.description;
        const temperature = data.data[0].temp;
        const humidity = data.data[0].rh;
        const windSpeed = data.data[0].wind_spd;
        const regionName = data.data[0].city_name;
        const uvIndex =  data.data[0].uv;
        const pressure = data.data[0].pres;
        const airQualityIndex = data.data[0].aqi;
        const feelsLike = data.data[0].app_temp;
        tempDisplay.innerHTML = `Weather data for "${regionName}":<br>
        Weather Description: ${weatherDescription}<br>
        Temperature: ${temperature}°C<br>
        Feels Like: ${feelsLike}°C<br>
        UV Index: ${uvIndex}<br> 
        Humidity: ${humidity}%<br>
        Pressure: ${pressure} mb<br>
        Wind Speed: ${windSpeed}m/s<br>
        Air Quality Index: ${airQualityIndex}<br>`
                                    
    })
    .catch(error => {
        console.error(error)
        tempDisplay.textContent = `Couldn't retrieve the temerature for ${cityName}`
    });
};
