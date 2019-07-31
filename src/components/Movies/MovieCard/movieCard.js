import React, { Component } from "react";
import "./movieCard.scss";

import notFound from "../../../assets/images/movie_not_found.png";

class MovieCard extends Component {
  render() {
    return (
      <div className="movieCard">
        <div className="movieCard__title">{this.props.movie.Title}</div>
        <img
          className="movieCard__poster"
          src={
            this.props.movie.Poster !== "N/A"
              ? this.props.movie.Poster
              : notFound
          }
        />
      </div>
    );
  }
}

export default MovieCard;
