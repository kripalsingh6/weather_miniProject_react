
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("");
    let [error, setError]=useState(false);
     
     const API_URL= "https://api.openweathermap.org/data/2.5/weather"
     const API_KEY= "c5273b43b86f0d6460eb743fdc3fb213";

     let getWeatherInfo = async ()=>{
        try {
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse = await response.json();
     let result = {
        city : city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,

     }
     console.log( result);
     return result;
     }
     catch (error) {
            throw error;
        }
     }

    let handleChange= (event)=>{
        setCity(event.target.value);
        
    };

    let handleSubmit= async (event)=>{
        try{
              event.preventDefault();
        console.log(city);
        setCity("")
       let newInfo=await getWeatherInfo();
       updateInfo(newInfo);
        }
        catch(error){
               setError(true);
        }
      
    }
    return (
    <div className='searchBox'>
        <h3 style={{color:"black"}}>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/> <br></br><br></br>
             <Button variant="contained" type= "submit" >Search</Button>
             {error && <p style={{color:"red"}}>No such place exist!</p>}
        </form>
    </div>
    )
}