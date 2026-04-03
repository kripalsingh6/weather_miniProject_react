
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FlareIcon from '@mui/icons-material/Flare';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./info.css";

export default function Info({info}){
    let init_URL = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_URL="https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let rainy_URL="https://images.unsplash.com/photo-1728118464413-f4733a6008e8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let hot_icon= "";

    return(
        <div className="InfoBox">
            <h2>Weather Information</h2>
            <div className='cardinfo'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rainy_URL : info.temp >15 ? init_URL : cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{info.humidity > 80 ? <ThunderstormIcon></ThunderstormIcon> : info.temp >15 ? <FlareIcon></FlareIcon> : <AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperture = {info.temp}&deg;C </p>
         <p>Humidity = {info.humidity} </p>
         <p>Min_Temp = {info.tempMax}&deg;C </p>
         <p>Max_Temp = {info.tempMin}&deg;C </p>
         <p>The weather can be described as <i>${info.weather} </i>and feels like $ {info.feels_like}&deg; </p>
         
         
        </Typography>
      </CardContent>
    
    </Card>
            </div>
        </div>
    )
}