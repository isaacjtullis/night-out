import React from 'react';

const CurrentWeather = props =>{
  return(
    <div className="current-weather">
      <h3>You are close to: {props.name}</h3>
      <p>It is: <strong>{props.temp}</strong> degrees</p>
      <p>Current Conditons: <strong>{props.condition}</strong></p>
    </div>
  )
}

export default CurrentWeather;
