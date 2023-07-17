const key = "e06bc1a5c3fa041feb1b8dd1cac31c02";

const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const city = document.getElementById("city");

const getWeather = async () => {
  const cityValue = city.value;
  if (cityValue === 0) {
    result.innerHTML = "<p>Enter a city</p>";
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    try {
        city.value="";
      const response = await fetch(url);
      const apiresult = await response.json();
      console.log(apiresult);
      console.log(apiresult.name);
      console.log(apiresult.weather[0].icon);
      console.log(apiresult.main.temp);
      console.log(apiresult.main.temp_max);
      console.log(apiresult.main.temp_min);
      console.log(apiresult.lat);
      result.innerHTML = `<h4 class="cityname mt-5">${apiresult.name}</h4>
                <h1 class="temp">${apiresult.main.temp}&deg;<sup class="superscript">c</sup></h1>
                <span class="img" ><img src="https://openweathermap.org/img/w/${apiresult.weather[0].icon}.png"></span>
                <h3 class="weather">${apiresult.weather[0].main}&nbsp;${apiresult.main.temp_max}&deg;&sol;${apiresult.main.temp_min}&deg;</h3>
                <h5 class="speed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
              </svg>&nbsp;${apiresult.wind.speed}m/s</h5>`;
    } catch (error) {
      console.error(error);
    }
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
