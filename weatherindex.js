const inputBox    = document.querySelector('.input-box');
const searchBtn   = document.getElementById('searchBtn');
const weather_Img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity    = document.getElementById('humidity');
const wind_speed  = document.getElementById('wind-speed');

async function checkWeather(city){
	const api_key = "008475c5dcd556a5432c4d6ccda06ea0";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	

	const weather_data = await fetch(`${url}`).then(response => response.json());

	if(weather_data.cod === `404`){
		console.log('error')
		return
	}

	temperature.innerHTML  = `${Math.round(weather_data.main.temp - 273.15)}°C`;

	description.innerHTML  = `${weather_data.weather[0].description}`;

	humidity.innerHTML     = `${weather_data.main.humidity}%`;

	wind_speed.innerHTML   = `${weather_data.wind.speed}km/H`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weather_Img.src = "/WeatherApp/Images/cloud 1.png"
			break;

		case 'Clear':
			weather_Img.src = "/WeatherApp/Images/sunclear2.png"
			break;

		case 'Rain':
			weather_Img.src = "/WeatherApp/Images/rainy.webp"
			break;

		case 'Mist':
			weather_Img.src = "/WeatherApp/Images/haze2.png"
			break;

        case 'Haze':
            weather_Img.src = "/WeatherApp/Images/haze2.png"
            break;

		case 'Snow':
			weather_Img.src = "/WeatherApp/Images/snow.png"
			break;

	}
	console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
	checkWeather(inputBox.value)
});