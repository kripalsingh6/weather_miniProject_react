
import { useState } from "react"
import Info from "./info"
import SearchBox from "./searchBox"
export default function WeatherApp(){
    let [weatherInfo , setWeather] = useState({
         city : "Bhopal",
        feels_like : 26.09,
        humidity:31,
        temp: 25.02,
        tempMax:32.13,
        tempMin: 23.02,

        weather : "cloudy"
    })

    let updateInfo = (newInfo)=>{
        setWeather(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <Info info={weatherInfo}></Info>
        </div>
    )
}