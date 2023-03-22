let cityInput = document.querySelector("#city-input");
let searchForm = document.querySelector("#city-input-box");
let leftSection = document.querySelector(".left")
let rightSection = document.querySelector(".right")
let currCity = document.querySelector(".city")
let currCountry = document.querySelector(".country")
let wStatus = document.querySelector(".weather-status")
let wIcon = document.querySelector(".icon-with-weather")
let cityOutput = document.querySelector(".city-output")
let tempRature = document.querySelector(".tempra-ture")
let humiDity = document.querySelector(".humi-dity")
let visiBility = document.querySelector(".visi-bility")
let wSpeed = document.querySelector(".w-speed")
let tempRatureTop = document.querySelector(".temprature")


// Event Listener for city weather search

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = cityInput.value;
    renderWeatherData(city);
    cityInput.value = "";
    setInterval(timeDateSet, 1000);
})


    let currTime = "";
    let currDate = "";
    let lati = "";
    let long = "";

// function for render weather data
function renderWeatherData(city) {
    let appKey = "ce946b4bc58f5c8cac8f58f62a31ed59"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data.name)
            lati = data.coord.lat;
            long = data.coord.lon;

            let whetherImg = "./images/haze.png";
            if (data.weather[0].main == "Thunderstorm") {
                whetherImg = "./images/thunder.png"
            }
            else if (data.weather[0].main == "Clouds") {
                whetherImg = "./images/cloudy.png"
            }
            else if (data.weather[0].main == "Rain") {
                whetherImg = "./images/rain.png"
            }
            else if (data.weather[0].main == "Clear") {
                whetherImg = "./images/clear.png"
            }
            else if (data.weather[0].main == "Snow") {
                whetherImg = "./images/snow.png"
            }
            else if (data.weather[0].main == "Mist") {
                whetherImg = "./images/mist.png"
            }            
            else if (data.weather[0].main == "Smoke") {
                whetherImg = "./images/smoke.png"
            }

            currCity.textContent = data.name;
            cityOutput.textContent = data.name;
            currCountry.textContent = data.sys.country;
            wIcon.firstElementChild.src = `${whetherImg}`;
            wStatus.textContent = data.weather[0].main;
            tempRature.innerHTML = `${Math.floor(data.main.temp)}<sup>o</sup>c</span>`
            tempRatureTop.innerHTML = `${Math.floor(data.main.temp)}<sup>o</sup>c</span>`
            humiDity.textContent = data.main.humidity;
            visiBility.textContent = `${data.visibility / 1000}Km`;
            wSpeed.textContent = `${Math.floor(data.wind.speed * 3600 / 1000)}Km/h`
        })
    }
    
    // function for update Real Time And Date
    function timeDateSet() {
        // specific Time for specific place
        
        let date = new Date();
        let utcMin = date.getTimezoneOffset() + 30;
        let utcHour = utcMin / 60;
        let timeZoneOffset = Math.round(long / 15);
        
        let localTime = new Date(date.getTime() + (utcHour + timeZoneOffset) * 60 * 60 * 1000)
        currTime = localTime.toLocaleTimeString();
        currDate = localTime.toDateString();
        document.querySelector(".current-time").innerText = currTime;
        document.querySelector(".current-date").innerText = currDate;            
    }

      


