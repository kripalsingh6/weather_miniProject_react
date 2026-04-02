
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
export default function SearchBox(){
    let [city, setCity]= useState("");
     
     const API_URL= "https://api.openweathermap.org/data/2.5/weather"
     const API_KEY= "c5273b43b86f0d6460eb743fdc3fb213";

     let getWeatherInfo = async ()=>{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse = await response.json();
     console.log(jsonResponse);
     let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,

     }
     console.log( result);
     }

    let handleChange= (event)=>{
        setCity(event.target.value);
        
    };

    let handleSubmit= (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("")
        getWeatherInfo();
    }
    return (
    <div className='searchBox'>
        <h3 style={{color:"black"}}>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/> <br></br><br></br>
             <Button variant="contained" type= "submit" >Search</Button>
        </form>
    </div>
    )
}