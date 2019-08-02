import React, { Component } from "react";
import "./moviesCarousel.scss";
import MovieCarousel from "./moviesCarousel";

class MoviesCarouselContainer extends Component {
    state = {
        selectedMovie: null
    }

    setSelectedMovie = (movie = null) => {
        this.setState({ selectedMovie: movie });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.movies !== this.props.movies) {
            this.setSelectedMovie();
        }
    }

    render() {
        return (
            <MovieCarousel setSelectedMovie={this.setSelectedMovie} {...this.props}  {...this.state}></MovieCarousel>
        );
    }
}

export default MoviesCarouselContainer;

