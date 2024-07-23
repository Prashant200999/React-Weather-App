import { useEffect, useState } from 'react';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Navbar from './components/Navbar';

const api ={
  key:"010665cbda592c32a2fc1e1e0dd711de",
  base:"https://api.openweathermap.org/data/2.5/forecast"
};

function App() {
  
    const [forecast, setForecast] = useState({});
    const defaultCity = "Delhi";
 

  useEffect(() => {
    fetch(`${api.base}?q=${defaultCity}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setForecast(result);
      
    });

  }, []);
  console.log(forecast);

  const convertTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'});
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  const dailyForecast = forecast.list ? forecast.list.filter((item,index,self)=>
  index === self.findIndex(t => t.dt_txt.split(" ")[0] === item.dt_txt.split(" ")[0])
).slice(1,6) : [];

  const formatVisibility = (visibility) => {
    return (visibility/1000).toFixed(1);
  }

  const firstCap = (words) => {
    return (words[0].toUpperCase() + words.slice(1));
  }

  return (
    <div className='bg-one'>
  <Navbar title="My Weather App" setForecast={setForecast}  />

<div className='container mxWidth text-center' >

    
    {forecast.list && forecast.list.length > 0 && (
     <>  
    
     <Card1 
    city={forecast.city.name}  
    temperature={forecast.list[0].main ? `${forecast.list[0].main.temp}` : 'N/A'}
    country={forecast.city.country} 
    coordLat={(forecast.city.coord.lat).toFixed(2)}
    coordLon={(forecast.city.coord.lon).toFixed(2)}
    windSpeed={forecast.list[0].wind.speed}
    feel_like={forecast.list[0].main.feels_like}
    humidity={forecast.list[0].main.humidity}
    type={forecast.list[0].weather ? forecast.list[0].weather[0].main : 'N/A'} 
    icon={forecast.list[0].weather[0].icon}
    desc={firstCap(forecast.list[0].weather ? forecast.list[0].weather[0].description : 'N/A')} 
    visibility={formatVisibility(forecast.list[0].visibility)}
  
    sunrise={forecast.city.sunrise ? convertTime(forecast.city.sunrise) : 'N/A'}
    sunset={forecast.city.sunset ? convertTime(forecast.city.sunset) : 'N/A'}
    currentDate = {getCurrentDate()}
/>


<div className='card py-2 bg-two'> <h1> Hourly Forecast</h1>
  <div className='row  g-3  card-body '>
   {forecast.list.slice(0,5).map((item,index) => (
    <div className='col-4 ' key={index}>
    <Card2
   
    temp={`${item.main.temp} `} 
    symbol={item.weather[0].main}
    timeDay={`At ${convertTime(item.dt)}`}
    icon={item.weather[0].icon}
    />
    </div>
   ))}
</div>
</div>


<div className="card py-2 bg-two"> <h1>5 Day's Forecast</h1>
<div className='row g-3  card-body '>
    {dailyForecast.map((item,index)=> (
      <div className='col col-4 ' key={index}>
  <Card2 
  temp={`${item.main.temp} `} 
  symbol={item.weather[0].main}
  timeDay= {`On ${new Date(item.dt * 1000).toLocaleDateString()}`}
  icon={item.weather[0].icon}
  />
   </div>
))}
</div>
</div>
  </>
  )}
    </div>
    </div>
    
  )
}


export default App;
