import React from 'react';
import CurrentWeather from './CurrentWeather.js';

class WeatherList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let conditions = this.props.weatherConditions.map(condition=>{
      return(
        <CurrentWeather
          temp = {condition.temp}
          name = {condition.name}
          condition = {condition.condition}
        />
      )
    })

    return(
      <div>{conditions}</div>
    )
  }
}

export default WeatherList;
/*
if(this.props.weatherConditions.length !== 0){
  let storm = this.props.weatherConditions.weather.map(thing=>{
    return(thing.description)
  })
  debugger
  let name = this.props.weatherConditions.name
  let weather = this.props.weatherConditions.main
  let temp = this.props.weatherConditions.main.temp_max
  temp = (temp + 32) - 273.15
}
*/
