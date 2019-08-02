import React from "react";
import "./movieCard.scss";
import notFound from "../../../assets/images/movie_not_found.png";

const MovieCard = (props) => {
  return (
    <div className="movieCard" onClick={() => props.setSelectedMovie(props.movie)}>
      <div className="movieCard__title">{props.movie.Title}</div>
      <img className="movieCard__poster"
        src={
          props.movie.Poster !== "N/A"
            ? props.movie.Poster
            : notFound
        }
      />
    </div>
  );
}

export default MovieCard;
