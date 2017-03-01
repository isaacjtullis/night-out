import React from 'react';

const Movie = (props) => {
  let movieDetails = '';
  let showMovieDetails = props => {
    if(props.selected){
      movieDetails =
        <div className="col-md-8" onClick={props.handleClick}>
          <h4>{props.overview}</h4>
          <p>Rating:</p>
        </div>;
    }
    return movieDetails;
  }
  return(
    <div className="row">
      <div className="test" id={props.id} onClick={props.handleClick}><h1>{props.title}</h1></div>
        <div className="movie-description">
          {showMovieDetails(props)}
        </div>
    </div>
  )
}

export default Movie;
