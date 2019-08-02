import React from "react";
import "./moviesCarousel.scss";
import MovieDescription from "../MovieDescription/movieDescription";
import MovieCard from "../MovieCard/movieCard";

const MoviesCarousel = props => {
  return (
    <div className="carousel">
      <div className="carousel__title">
        <h1>{props.sectionTitle}</h1>
      </div>
      <div className="carousel__moviesCards"  ref={(el) => props.refCarouselElem(el)}>
        {props.currentPage !== 1 ? (
          <div className="carousel__moviesCards__scrollPrev">
            <span className="carousel__moviesCards__scrollPrev__span" onClick={() => props.searchNextPage(props.currentPage - 1)}>
              &lt;
            </span>
          </div>
        ) : null}
        {props.movies.map(movie => {
          return (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          );
        })}
        <div className="carousel__moviesCards__scrollNext">
          <span className="carousel__moviesCards__scrollNext__span" onClick={() => props.searchNextPage(props.currentPage + 1)}>
            &gt;
          </span>
        </div>
      </div>
      {props.selectedMovie ? (
        <MovieDescription
          movie={props.selectedMovie}
          setSelectedMovie={props.setSelectedMovie}
        />
      ) : null}
    </div>
  );
};

export default MoviesCarousel;
