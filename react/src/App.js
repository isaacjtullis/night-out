import React, {Component} from 'react';
import MovieList from './MovieList.js';
import NewLocationForm from './NewLocationForm';
//import api from './test/api.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weather: [],
      movies: [],
      areaCode: 64137
    }
    this.handleNewZipCode = this.handleNewZipCode.bind(this)
    this.handleZipCode = this.handleZipCode.bind(this)
  }

  getMoviePosts(zipCode){
    fetch(`http://api.wunderground.com/api/ecd7b751c9680ed1/forecast/q/CA/${this.state.city}.json`)
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
        debugger
      })
      .catch(error=> console.error(`error in fetching data: ${error.message}`));
  }

  componentWillMount(){
    this.getWeatherPosts()
  }
  handleNewZipCode(event){
    let newZipCode = event.target.value
    this.setState({ areaCode: newZipCode})
  }

  handleZipCode(event){
    event.preventDefault()
    this.getWeatherPosts(this.state.areaCode)
  }

  render(){
    console.log(this.state.areaCode)
    return(
    <div>
      <NewLocationForm handleNewZipCode={this.handleNewZipCode} handleZipCode={this.handleZipCode}/>
      <MovieList movies={this.state.movies} />
    </div>
    )
  }
}

export default App;
