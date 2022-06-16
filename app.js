

const search=document.querySelector("button");

const input=document.querySelector("input")


const containerDiv=document.querySelector(".container");



const getWeatherInfo=async ()=>{

    const key="346b0899c9b7d0f52312e560ac10f74e"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`


    try{

        const response=await fetch(url);
        console.log(response)
        const weatherInfo=await response.json()
        console.log(weatherInfo);
        const {weather,main,name}=weatherInfo
        containerDiv.innerHTML=`${main.temp}${name}${weather[0].description} <img src="http://openweathermap.org/img/wn/10d@2x.png"`
    }
    catch(error){
        console.log(error);

    }



}
search.addEventListener("click",getWeatherInfo);