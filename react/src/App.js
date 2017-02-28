import React, {Component} from 'react';
import MovieList from './MovieList.js';
import NewLocationForm from './NewLocationForm.js';
import WeatherList from './WeatherList.js';
import GenderButton from './GenderButton.js';
//import api from './test/api.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weather: [],
      movies: [],
      areaCode: 64137,
      gender: ''
    }
    this.handleNewZipCode = this.handleNewZipCode.bind(this)
    this.handleZipCode = this.handleZipCode.bind(this)
    this.sortWeatherArray = this.sortWeatherArray.bind(this)
    this.handleMaleClick = this.handleMaleClick.bind(this)
    this.handleFemaleclick = this.handleFemaleclick.bind(this)
  }

  getMoviePosts(zipCode){
    fetch(`http://data.tmsapi.com/v1.1/movies/showings?startDate=2017-02-28&zip=${this.state.areaCode}&api_key=pjeqcvh9brrqsvp4x5ph7k8g`)
      .then(res=>{
        if(res.ok){
          return res;
        } else {
          let errorMessage=`${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
        }
      })
      .then(res=>res.json())
      .then(body=>{
        this.setState({movies: body})
      })
      .catch(error=> console.error(`error in fetching data: ${error.message}`));
  }

  getWeatherPosts(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.areaCode},us&appid=47cda588a788affc5b578c565032c6b4`)
      .then(res=>{
        if(res.ok){
          return res;
        } else {
          let errorMessage=`${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
        }
      })
      .then(res=>res.json())
      .then(body=>{
        this.sortWeatherArray(body)
      })
      .catch(error=> console.error(`error in fetching data: ${error.message}`));
  }

  sortWeatherArray(information){
    let newId = information.weather.length
    let temp = information.main.temp_max
    temp = (temp + 50) - 273.15
    let name = information.name
    let conditions = ''
    if(information.weather.length !== 0){
      information.weather.map(condition=>{
        conditions = condition.description
      })
    }
    information.weather
    let currentWeather = {
      id: newId,
      temp: temp,
      name: name,
      condition: conditions
    }
    let weather = [currentWeather]
    this.setState({weather: weather})
  }
  componentWillMount(){
    //this.getWeatherPosts()
    //this.getMoviePosts()
  }
  handleNewZipCode(event){
    let newZipCode = event.target.value
    this.setState({ areaCode: newZipCode})
  }

  handleZipCode(event){
    event.preventDefault()
      this.getWeatherPosts(this.state.areaCode)
      this.getMoviePosts(this.state.areaCode)
  }
  handleFemaleclick(){
    this.setState({gender: "female"})

  }
  handleMaleClick() {
    this.setState({gender: "male"})
  }

  render(){
    return(
    <div>
      <GenderButton
        genderNotice={this.state.gender}
        handleMaleClick={this.handleMaleClick}
        handleFemaleclick={this.handleFemaleclick}
        weather={this.state.weather}
      />
      <NewLocationForm handleNewZipCode={this.handleNewZipCode} handleZipCode={this.handleZipCode}/>
      <MovieList movies={this.state.movies} />
      <WeatherList weatherConditions={this.state.weather}/>
    </div>
    )
  }
}

export default App;
