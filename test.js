var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var value = document.querySelector('.temperature .value');
var shortDesc = document.getElementsByClassName('short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');

async function changeWeatherUI(capitalSearch) {
    let callApi = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=5ea46fdaff948792d7158ab2b5b6fd95`;
    
    let data = await fetch(callApi)
        .then(response => response.json());
        console.log(data);
        city.innerHTML = data.name;
        country.innerHTML = data.sys.country;
        time.innerHTML = new Date().toLocaleString();
        value.innerHTML = Math.round(data.main.temp - 273.15);
        shortDesc.innerHTML = data.weather[0] ? data.weather[0].main : '';
        visibility.innerHTML =  data.visibility + 'm';
        wind.innerHTML = data.wind.speed + 'm/s';
        sun.innerHTML = data.main.humidity + '%';
}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})

changeWeatherUI('hue');