import React, { useState } from 'react';


const api ={
  key:"010665cbda592c32a2fc1e1e0dd711de",
  base:"https://api.openweathermap.org/data/2.5/forecast",
};

function Navbar(props) {
  const [search, setSearch] = useState("");


  
  const searchPressed = (event) => {
    event.preventDefault();
    fetch(`${api.base}?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      props.setForecast(result);
    })
    };

 


  return (
    
    <nav className="navbar bg-primary">
      
    <div className="container-fluid ">
      <a className="navbar-brand" href='/'>{props.title}</a>
      <form className="d-flex" role="search" onSubmit={searchPressed}>
        <input className="form-control me-2" type="text" placeholder="Search City" aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-success" type="submit" >Search</button>
      </form>
       </div>
       
  </nav>
  
  )
}


export default Navbar;