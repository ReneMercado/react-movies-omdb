import React, { Component } from "react";
import "./moviesCarousel.scss";
import MovieDescription from "../MovieDescription/movieDescription";
import MovieCard from "../MovieCard/movieCard";

class MoviesCarousel extends Component {
    state = {
        selectedMovie: null
    }

    setSelectedMovie = (movie) => {
        this.setState({ selectedMovie: movie });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.movies !== this.props.movies) {
            this.setSelectedMovie(null);
        }
    }

    render() {
        return (
            <div className="carousel">
                <div className="movies__cards">
                    {this.props.movies.map(movie => {
                        return <MovieCard key={movie.imdbID} movie={movie} setSelectedMovie={this.setSelectedMovie} />;
                    })}
                </div>
                {this.state.selectedMovie ? <MovieDescription movie={this.state.selectedMovie}></MovieDescription> : null}
            </div>
        );
    }
}

export default MoviesCarousel;

