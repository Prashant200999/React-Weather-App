import React from 'react';


function Card1(props) {
  const iconUrl = `http://openweathermap.org/img/wn/${props.icon}.png`;
  const cardImage ={
    Thunderstorm:"https://cdn.pixabay.com/photo/2016/10/25/12/28/thunderstorm-1768742_640.jpg",
    Clear: 'https://as1.ftcdn.net/v2/jpg/01/77/28/86/1000_F_177288615_lAQyv5Im46fmPD7GWa9R5i1kmxXVM6ey.jpg',
    Clouds:'https://www.shutterstock.com/image-photo/storm-clouds-gather-over-road-600nw-2254809053.jpg',
    Rain:"https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg",
    Snow:"https://i.natgeofe.com/n/b07965f4-db84-42bf-acfa-0df9d0040d5b/GettyImages-1241028054.jpg",
    Drizzle:"https://cdn.windy.app/site-storage/posts/October2023/nature-grass-snow-fog-mist-morning-41797-pxhere.com.jpg",
    Mist:"https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png",
    Smoke:"https://i.tribune.com.pk/media/images/1282292-fog-1483383408/1282292-fog-1483383408.jpg",
    Haze:"https://media.wired.com/photos/65e860922a01e579ac0d29f2/4:3/w_1704,h_1278,c_limit/london-heatwave.jpg",
    Dust:"https://windy.app//storage/posts/August2022/unnamed1.jpg",
    Fog:"https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png",
    Sand:"https://windy.app//storage/posts/August2022/unnamed1.jpg",
    Tornado:"https://i.natgeofe.com/k/daefd947-45c5-4447-be12-9b513482c145/tornado-forming-og_16x9.jpg?w=1200"
  }

  const weatherImages = cardImage[props.type] || "https://as1.ftcdn.net/v2/jpg/01/77/28/86/1000_F_177288615_lAQyv5Im46fmPD7GWa9R5i1kmxXVM6ey.jpg";
  const textColor = props.type === "Snow"  ? "text-dark" : "text-light";
  const textShadow = props.type === "Snow"  ? "fontShadow2" : "fontShadow1";
  
  return (

    <div className={`card ${textColor}`} >
    <img src={weatherImages} className="card-img imgHeight" alt="..."/>

    <div className="card-img-overlay row">
      <div className='col mx-3 mx-sm-2'>
      <h1 className={`card-title fontSize1  ${textShadow} `}>{props.city} <sub>{props.country}</sub> </h1>
      <p className={`card-text h3 py-1 fontSize2 ${textShadow}` }>{props.temperature}&deg;C</p>
      <p className={`card-text h3 py-1 fontSize2 ${textShadow}` }>{props.type}   <img src={iconUrl} alt={props.symbol} className='card-img-top' style={{width:'50px',height:'50px' }} /></p>
      <p className={`card-text h4 py-1 fontSize2 ${textShadow}` }>Lat:{props.coordLat}<br/>Lon:{props.coordLon}</p>
      <p className={`card-text h4 py-1 fontSize2 ${textShadow}` }>Humidity: {props.humidity} g/kg</p>
      <p className={`card-text h4 py-1 fontSize2 ${textShadow}` }>Feel Like: {props.feel_like}&deg;C</p>
      </div>
      <div className='col'>
      <p className={`card-text h3 fontSize1 ">{p ${textShadow}`}>{props.desc}</p>
      <p className={`card-text h4 py-1 fontSize2 ${textShadow}` }>Date: {props.currentDate}</p>

      
      <p className={`card-text h5 py-1 fontSize2 ${textShadow}` }>Sunrise: {props.sunrise}</p>
      <p className={`card-text h5 py-1 fontSize2 ${textShadow}` }>Sunset: {props.sunset}</p>
      <p className={`card-text h5 py-1 fontSize2 ${textShadow}` }>Wind Speed: {props.windSpeed} km/h</p>
      <p className={`card-text h5 py-1 fontSize2 ${textShadow}` }>Visibility: {props.visibility} km</p>
      </div>
      </div>
  </div>
  )
}


export default Card1