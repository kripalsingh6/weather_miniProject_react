
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./info.css";

export default function Info({info}){
    let init_URL = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <h2>Weather Information</h2>
            <div className='cardinfo'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={init_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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