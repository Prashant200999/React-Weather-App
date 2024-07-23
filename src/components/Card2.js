import React from 'react';

function Card2(props) {
    const iconUrl = `http://openweathermap.org/img/wn/${props.icon}.png`
    return (
      
                <div className="row text-center forecastCardHeight">

                    <div className="col m-2 rounded cardShadow bg-three">

                    <p className='pt-4' > {props.timeDay}</p>
                        <img src={iconUrl} 
                        alt={props.symbol} 
                        className='card-img-top' 
                        style={{ width: '50px', height: '50px' }} />

                        <p>{props.symbol}</p>
                        <p>{props.temp}&deg;C</p>
                        
                        
                    </div>


                </div>
     
    )
}

export default Card2