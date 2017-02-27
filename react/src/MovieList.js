import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      selectedMovie: null,
      search: ''
    };

    this.handleClick = this.handleClick.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
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

  render(){
    let filteredMovies = this.props.movies.filter((movie)=>{
      return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    });
    let searchTextDescription = "Search Here!"
    let movies = filteredMovies.map(movie=>{
      let onMovieClick = () => this.handleClick(movie.rootId);
      let selected;
      if(movie.rootId === this.state.selectedMovie){
        selected = true
      }
      return(
        <Movie
          key={movie.rootId}
          title={movie.title}
          overview={movie.shortDescription}
          selected={selected}
          handleClick={onMovieClick}
          //rating={movie.ratings[0].code}
        />
      )
    })
    return(
      <div className="Row">
        <div className="search-feature">
          <h3>{searchTextDescription}</h3>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        {movies}
      </div>
    )
  }
}

export default MovieList;
