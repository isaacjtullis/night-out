import React from 'react';

const CurrentWeather = props =>{
  return(
    <div>
      {props.name}
      {props.temp}
      {props.condition}
    </div>
  )
}

export default CurrentWeather;
