const weatherApi = {
    key: PUT_YOUR_API_KEY,
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchBox = document.getElementById('input-box');
const temperatureSpan = document.querySelector('.temperature span');

//Event Listner function on key press
searchBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchBox.value);
        getWeatherReport(searchBox.value);
        document.querySelector('.weather-details').style.display = "block";
    }    
});


//Get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


//Show weather report
function showWeatherReport(weather){
	
	let city = document.getElementById('city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;

	let temperature = document.getElementById('temp');
	temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

	let minMaxTemp = document.getElementById('min-max');
	minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

	let weatherType = document.getElementById('weather');
	weatherType.innerText = `${weather.weather[0].main}`;

	let date = document.getElementById('date');
	let todayDate = new Date();
	date.innerText = dateManage(todayDate);

	if(weatherType.textContent == 'Clear' || weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('images/clear.png')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze' || weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/haze.jpg')";
        
    } else if(weatherType.textContent == 'Smoke' || weatherType.textContent == 'Fog') {
        
        document.body.style.backgroundImage = "url('images/fog.jpeg')";
        
    } else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } else if(weatherType.textContent == 'Drizzle') {

        document.body.style.backgroundImage = "url('images/drizzle.jpg')";
        
    }
}


//Date manage

function dateManage(dateArg) {

	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${day}, ${date} ${month} ${year}`;
}
