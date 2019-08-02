import React, { Component } from "react";
import "./moviesCarousel.scss";
import MovieCarousel from "./moviesCarousel";

class MoviesCarouselContainer extends Component {
  carouselRef = React.createRef();

  state = {
    selectedMovie: null
  };

  setSelectedMovie = (movie = null) => {
    this.setState({ selectedMovie: movie });
  };

  componentWillReceiveProps(newProps) {
    if (newProps.movies !== this.props.movies) {
      this.setSelectedMovie();
      this.carouselRef.scrollLeft -= this.carouselRef.scrollWidth;
    }
  }

  render() {
    return (
      <MovieCarousel
        refCarouselElem={el => {
          this.carouselRef = el;
        }}
        setSelectedMovie={this.setSelectedMovie}
        {...this.props}
        {...this.state}
      />
    );
  }
}

export default MoviesCarouselContainer;
