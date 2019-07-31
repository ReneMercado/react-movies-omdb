import React, { Component } from "react";
import "./movies.scss";
import MovieCard from "./MovieCard/movieCard";
import MovieDescription from "./MovieDescription/movieDescription";
import MoviesCarousel from "./MoviesCarousel/moviesCarousel";
import { connect } from "react-redux";
import { groupBy } from "../../utility"

class Movies extends Component {
  render() {
    const groupedResults = this.props.movies.length > 0 ? groupBy(this.props.movies, "Type") : { movie: [], series: [] };
    return (
      <div className="movies">
        <div className="movies__header">
          <div className="movies__header__title">
            <h1>Movies</h1>
          </div>
          <div className="movies__header__genre-filter">
            <select>
              <option>Genres</option>
            </select>
          </div>
        </div>
        <MoviesCarousel movies={groupedResults["movie"] ? groupedResults["movie"] : []}></MoviesCarousel>
        <h1>Series</h1>
        <MoviesCarousel movies={groupedResults["series"] ? groupedResults["series"] : []}></MoviesCarousel>
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
