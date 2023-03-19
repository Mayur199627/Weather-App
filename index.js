let cityInput = document.querySelector("#city-input");
let searchBtn = document.querySelector("#search-btn");
let leftSection = document.querySelector(".left")
let rightSection = document.querySelector(".right")


// function for update Real Time And Date

setInterval(timeDateSet, 1000)
function timeDateSet() {
    document.querySelector(".current-time").innerText = new Date().toLocaleTimeString();
    document.querySelector(".current-date").innerText = new Date().toDateString();
}

// Event Listener for city weather search

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    city = cityInput.value;
    // console.log(city)
    renderWeatherData(city)
})

// function for render weather data
function renderWeatherData(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce946b4bc58f5c8cac8f58f62a31ed59&units=metric`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            leftSection.innerHTML = `<div class="city">${data.name}</div>
        <div class="country">${data.sys.country}</div>
        <div class="current-time">${new Date().toLocaleTimeString()}</div>
        <div class="current-date">${new Date().toDateString()}</div>
        <div class="temprature">${Math.floor(data.main.temp)}<sup>o</sup>c</div>`

            rightSection.innerHTML = `<div class="icon-with-weather">
        <img src="./images/haze.png" alt="haze" height="70" width="70">
        <p class="weather-status">${data.weather[0].main}</p>
    </div>
    <form class="city-input-box">
        <input type="text" placeholder="Search here" id="city-input">
        <button id="search-btn" type="submit"><svg fill="#000000" height="15px" width="15px" version="1.1"
                id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.4 490.4" xml:space="preserve">
                <g>
                    <path
                        d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
               s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
                M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z" />
                </g>
            </svg></button>
    </form>
    <div class="city-output">${data.name} ${data.sys.country}</div>
    <div class="other-details">
        <p>Temprature :&nbsp;<span class="tempra-ture">${Math.floor(data.main.temp)}<sup>o</sup>c</span></p>
        <p>Humidity :&nbsp;<span class="humi-dity">${data.main.humidity}%</span></p>
        <p>Visibility  :&nbsp;<span class="visi-bility">${data.visibility / 1000}Km</span></p>
        <p>Wind Speed :&nbsp;<span class="w-speed">${Math.floor(data.wind.speed * 3600 / 1000)}Km/h</span></p>
    </div>
    `
        })
}


