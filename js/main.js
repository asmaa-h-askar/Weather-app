let currentObj = {};
let locationObj = {};
let forecastObj = {};
let todayWeather = document.querySelector('.today-weather');
let nextWeather1 = document.querySelector('.next-weather1');
let nextWeather2 = document.querySelector('.next-weather2');
let searchInput = document.querySelector('.searchinput');
let findbtn = document.querySelector('.findbtn');

getWeather('cairo');

async function searchWeather(cityname){
    let searchResponse = await fetch(`https://api.weatherapi.com/v1/search.json?key=b653af48d4c744d2bfa173849212709&q='${cityname}'`);
    let searchResponseBody = await searchResponse.json();

    //console.log(searchResponseBody);
}

//searchWeather("cairo");

async function getWeather(cityname){
    let myresponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b653af48d4c744d2bfa173849212709&q=${cityname}&days=3`);
    let responseBody = await myresponse.json();
    currentObj = responseBody.current;
    locationObj = responseBody.location;
    forecastObj = responseBody.forecast;

    displayCurrentDay();
    displaySecDay();
    displayThirdDay();
    //console.log(responseBody);
}

//getWeather("cairo");

function displayCurrentDay(){
    let x;
    if(currentObj.condition.text == "Partly cloudy"){
        x = 'images/partlycloudy.png';
    }else if(currentObj.condition.text == "Sunny"){
        x = 'images/sunny.png';
    }else if(currentObj.condition.text == "Mist"){
        x = 'images/Mist.png';
    }else if(currentObj.condition.text == "Clear"){
        x = 'images/clear.png';
    }else if(currentObj.condition.text =="Patchy rain possible"){
        x = 'images/patchy.png';
    }else if(currentObj.condition.text == "Moderate rain"){
        x = 'images/rain.png';
    }else if(currentObj.condition.text == "Heavy rain"){
        x = 'images/heavyrain.png';
    }
    

    let day1 = '';
    day1 = `
    <div class="w-header text-center pt-2 pb-2">
        <div class="day">${forecastObj.forecastday[0].date}</div>
    </div>
    <div class="w-content pt-4 pb-3 ps-2 pe-2">
        <div class="location">${locationObj.name}</div>
        <div class="degree">
            <div class="number">${currentObj.feelslike_c}<sup>o</sup>C</div>
            <div class="icon">
                <img src="${x}">
            </div>
        </div>
        <div class="custom">${currentObj.condition.text}</div>
        <span class="me-2"><img src="images/icons/icon-umberella.png">${forecastObj.forecastday[0].day.daily_chance_of_rain}%</span>
        <span class="me-2"><img src="images/icons/icon-wind.png">${currentObj.wind_kph}</span>
        <span class="me-2"><img src="images/icons/icon-compass.png">${currentObj.wind_dir}</span>
    </div>`

    todayWeather.innerHTML = day1;
}

function displaySecDay(){
    let x;
    if(forecastObj.forecastday[1].day.condition.text == "Partly cloudy"){
        x = 'images/partlycloudy.png';
    }else if(forecastObj.forecastday[1].day.condition.text == "Sunny"){
        x = 'images/sunny.png';
    }else if(forecastObj.forecastday[1].day.condition.text == "Mist"){
        x = 'images/Mist.png';
    }else if(forecastObj.forecastday[1].day.condition.text == "Clear"){
        x = 'images/clear.png';
    }else if(forecastObj.forecastday[1].day.condition.text =="Patchy rain possible"){
        x = 'images/patchy.png';
    }else if(forecastObj.forecastday[1].day.condition.text == "Moderate rain"){
        x = 'images/rain.png';
    }else if(forecastObj.forecastday[1].day.condition.text == "Heavy rain"){
        x = 'images/heavyrain.png';
    }

    let day2 = '';
    day2 = `
    <div class="w-header p-2" style="background: rgba(0, 0, 0,0.4);">
        <div class="day">${forecastObj.forecastday[1].date}</div>
    </div>
    <div class="w-content pt-4 pb-3 ps-2 pe-2 h-100" style="background: rgba(0, 0, 0,0.2);">
        <div class="icon">
            <img src="${x}">
        </div>
        <div class="degree">${forecastObj.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
        <small>${forecastObj.forecastday[1].day.mintemp_c}<sup>o</sup></small>
        <div class="custom">${forecastObj.forecastday[1].day.condition.text}</div>
    </div>`

    nextWeather1.innerHTML = day2;
}

function displayThirdDay(){
    let x;
    if(forecastObj.forecastday[2].day.condition.text == "Partly cloudy"){
        x = 'images/partlycloudy.png';
    }else if(forecastObj.forecastday[2].day.condition.text == "Sunny"){
        x = 'images/sunny.png';
    }else if(forecastObj.forecastday[2].day.condition.text == "Mist"){
        x = 'images/Mist.png';
    }else if(forecastObj.forecastday[2].day.condition.text == "Clear"){
        x = 'images/clear.png';
    }else if(forecastObj.forecastday[2].day.condition.text =="Patchy rain possible"){
        x = 'images/patchy.png';
    }else if(forecastObj.forecastday[2].day.condition.text == "Moderate rain"){
        x = 'images/rain.png';
    }else if(forecastObj.forecastday[2].day.condition.text == "Heavy rain"){
        x = 'images/heavyrain.png';
    }


    let day3 = '';
    day3 = `
    <div class="w-header p-2">
        <div class="day">${forecastObj.forecastday[2].date}</div>
    </div>
    <div class="w-content pt-4 pb-3 ps-2 pe-2 h-100">
        <div class="icon">
            <img src="${x}">
        </div>
        <div class="degree">${forecastObj.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
        <small>${forecastObj.forecastday[2].day.mintemp_c}<sup>o</sup></small>
        <div class="custom">${forecastObj.forecastday[2].day.condition.text}</div>
    </div>`

    nextWeather2.innerHTML = day3;
}

searchInput.addEventListener('keyup' , ()=>{
    searchWeather(searchInput.value);
    getWeather(searchInput.value);
});

findbtn.addEventListener('click' , () =>{
    if(searchInput.value == ''){
        getWeather('cairo');
    }else{
        getWeather(searchInput.value);
    }
})