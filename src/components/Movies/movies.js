import React, { Component } from "react";
import "./movies.scss";
import MoviesCarousel from "./MoviesCarousel/moviesCarouselContainer";
import { connect } from "react-redux";
import { groupBy } from "../../utility"

class Movies extends Component {
  render() {
    const groupedResults = this.props.movies.length > 0 ? groupBy(this.props.movies, "Type") : { movie: null, series: null };
    return (
      <div className="movies">
        {
          groupedResults["movie"] ? <MoviesCarousel sectionTitle={"Movies"} movies={groupedResults["movie"]}></MoviesCarousel> : null
        }
        {
          groupedResults["series"] ? <MoviesCarousel sectionTitle={"Series"} movies={groupedResults["series"]}></MoviesCarousel> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};


export default connect(mapStateToProps)(Movies);
