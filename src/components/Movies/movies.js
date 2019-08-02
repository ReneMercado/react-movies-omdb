import React from "react";
import "./movies.scss";
import MoviesCarousel from "./MoviesCarousel/moviesCarouselContainer";

export const Movies = props => {
  return (
    <div className="movies">
      {props.groupedResults["movie"] ? (
        <MoviesCarousel
          sectionTitle={"Movies"}
          movies={props.groupedResults["movie"]}
          currentPage={props.movieCurrentPage}
          searchNextPage={props.searchMovies}
        />
      ) : null}
      {props.groupedResults["series"] ? (
        <MoviesCarousel
          sectionTitle={"Series"}
          movies={props.groupedResults["series"]}
          currentPage={props.seriesCurrentPage}
          searchNextPage={props.searchSeries}
        />
      ) : null}
    </div>
  );
};

export default Movies;
