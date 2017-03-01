import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      selectedMovie: null,
      search: '',
      moviesShowing: false
    };

    this.handleClick = this.handleClick.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.displaySwitch = this.displaySwitch.bind(this)
  }

  handleClick(id){
    let movieID = id
    if(id === this.state.selectedMovie){
      this.setState({
        selectedMovie: null
      })
    } else {
      this.setState({
        selectedMovie: movieID
      })
    }
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)})
  }
  displaySwitch(){
    if(this.state.moviesShowing === false){
      this.setState({moviesShowing: true})
    } else {
      this.setState({moviesShowing: false})
    }
  }
  render(){
    let filteredMovies = this.props.movies.filter((movie)=>{
      return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    });
    let displayText = ''
    let switchDisplay = 'hide'
    if(this.props.movies.length !== 0){
      displayText = <div onClick={this.displaySwitch}>Show Movies</div>
      if(this.state.moviesShowing === false){
        switchDisplay = "display"
      } else {
        switchDisplay = "hide"
      }
    }
    let searchTextDescription = "Search Here!"
    let showtimes
    let theatre
    let ratings
    let movies = filteredMovies.map(movie=>{
      showtimes = movie.showtimes
      ratings = movie.ratings
      let onMovieClick = () => this.handleClick(movie.rootId);
      let selected;
      if(movie.rootId === this.state.selectedMovie){
        selected = true
      }
      showtimes.map(showtime=>{
        theatre = showtime.theatre.name
      })
      return(
        <Movie
          key={movie.rootId}
          title={movie.title}
          overview={movie.shortDescription}
          selected={selected}
          handleClick={onMovieClick}
          theatre={theatre}
          ratings={ratings}
        />
      )
    })
    return(
      <div className="row">
        <div className="search-feature">
          <h1>{displayText}</h1>
          <div className={switchDisplay}>
            <input
              type="text"
              placeholder="search for movie!"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          <div className="movies">
              {movies}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MovieList;
