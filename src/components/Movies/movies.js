import React, { Component } from "react";
import "./movies.scss";
import MovieCard from "./MovieCard/movieCard";
import { connect } from "react-redux";

class Movies extends Component {
  render() {
    console.log("[MOVIES]: ", this.props.movies);
    return (
      <div className="movies">
        <div className="movies__header">
          <div className="movies__header__title">
            <h1>MOVIES</h1>
          </div>
          <div className="movies__header__genre-filter">
            <select>
              <option>Generos</option>
            </select>
          </div>
        </div>
        <div className="movies__cards">
          {this.props.movies.map(movie => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     searchMovies: movieName => dispatch(actions.searchMovies(movieName))
//   };
// };

export default connect(mapStateToProps)(Movies);
