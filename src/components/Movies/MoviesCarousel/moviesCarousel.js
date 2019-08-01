import React from "react";
import "./moviesCarousel.scss";
import MovieDescription from "../MovieDescription/movieDescription";
import MovieCard from "../MovieCard/movieCard";

const MoviesCarousel = (props) => {
    console.log("[MovieCarousel PROPS]: ", props)
    return (<div className="carousel">
        <div className="carousel__title"> <h1>{props.sectionTitle}</h1></div>
        <div className="carousel__moviesCards">
            {props.movies.map(movie => {
                return <MovieCard key={movie.imdbID} movie={movie} setSelectedMovie={props.setSelectedMovie} />;
            })}
        </div>
        {props.selectedMovie ? <MovieDescription movie={props.selectedMovie} setSelectedMovie={props.setSelectedMovie}></MovieDescription> : null}
    </div>
    );
}

export default MoviesCarousel;

