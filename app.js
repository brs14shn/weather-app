
const body=document.querySelector("body");
body.style.backgroundColor="#0c6396"
const search=document.querySelector("button");

const input=document.querySelector("input")


const containerDiv=document.querySelector(".container");



const getWeatherInfo=async ()=>{
    if(containerDiv.innerHTML.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())){
        alert(input.value + " is already exists")
    }

    else{

    const key="346b0899c9b7d0f52312e560ac10f74e"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`


    try{

        const response=await fetch(url);
        console.log(response)
        const weatherInfo=await response.json()
        console.log(weatherInfo);
        const {weather,main,name}=weatherInfo
        containerDiv.innerHTML+=`<p>${name}</p><p>${main.temp.toPrecision(2)}</p><img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/><p>${weather[0].description}</p> `
        input.value="";
    }
    catch(error){
        alert("şehir bulunamadı")

    }
    finally{
        input.value=""
    }

    }

}
search.addEventListener("click",getWeatherInfo);