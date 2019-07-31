import React, { Component } from "react";
import "./movieDescription.scss";


class MovieDescription extends Component {
    render() {
        return (
            <div className="description">
                <div className="description__title"><h1>{this.props.movie.Title}</h1></div>
                <div className="description__content">
                    <img
                        className="description__content__poster"
                        src={
                            this.props.movie.Poster !== "N/A"
                                ? this.props.movie.Poster
                                : null
                        }
                    />
                    <div className="description__content__info">
                        <div className="description__content__info__plot">{this.props.movie.Plot}</div>
                        <div className="description__content__info__director"><span>Director:</span> {this.props.movie.Director}</div>
                        <div className="description__content__info__genre"><span>Genre:</span> {this.props.movie.Genre}</div>
                        <div className="description__content__info__runtime"><span>Runtime:</span> {this.props.movie.Runtime}</div>
                        <div className="description__content__info__actors"><span>Actors:</span> {this.props.movie.Actors}</div>
                    </div>
                    <div className="description__content__ratings">
                        {this.props.movie.Ratings ? this.props.movie.Ratings.map(raiting => {
                            return (
                                <div className="description__content__ratings__rating">
                                    <div className="description__content__ratings__rating__source">{raiting.Source}: </div>
                                    <div className="description__content__ratings__rating__value">{raiting.Value}</div>
                                </div>)
                        }) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDescription;
