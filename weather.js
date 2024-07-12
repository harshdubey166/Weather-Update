const apikey="338757a6407012e6141f01bb0b592422";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl+ city+ `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    else{

        var data= await response.json();
     // console.log(data);
     


     document.querySelector(".city").innerText= data.name;
     document.querySelector(".temp").innerText= Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerText= data.main.humidity + "%";
     document.querySelector(".wind").innerText= data.wind.speed + " km/h";

     if(data.weather[0].main=="Clouds"){
        weatherIcon.src="/Projects/Weather update/Images/clouds.png";
     }
     else if(data.weather[0].main=="Rain"){
        weatherIcon.src="/Projects/Weather update/Images/rain.png";
     }
     else if(data.weather[0].main=="Mist"){
        weatherIcon.src="/Projects/Weather update/Images/mist.png";
     }
     else if(data.weather[0].main=="Clear"){
        weatherIcon.src="/Projects/Weather update/Images/clear.png";
     }
     else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="/Projects/Weather update/Images/drizzle.png";
     }


     document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display="none";

        
    }


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

});


