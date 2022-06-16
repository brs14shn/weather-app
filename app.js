const search=document.querySelector("button");

const input=document.querySelector("input")


const containerDiv=document.querySelector(".container");



const getWeatherInfo=()=>{

    const key="346b0899c9b7d0f52312e560ac10f74e"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`



}
search.addEventListener("click",getWeatherInfo);