import React, {Component} from 'react';
//import api from './test/api.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lat: '',
      lon: ''
    }
  }
  getMoviePosts(){
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=306bd1f9dda87b11475c98f9d47e3862&language=en-US`)
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
      })
      .catch(error=> console.error(`error in fetching data: ${error.message}`));
  }
  getWeatherPosts(){
    fetch(`http://api.wunderground.com/api/ecd7b751c9680ed1/geolookup/q/37.776289,-122.395234.json`)
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
      })
      .catch(error=> console.error(`error in fetching data: ${error.message}`));
  }

  componentWillMount(){
    this.getMoviePosts()
    this.getWeatherPosts()
  }

  render(){
    return(
      <div>
        <h1>Hi</h1>
      </div>
    )
  }
}

export default App;
