import React from "react";
import "./movieDescription.scss";

import closeIcon from "../../../assets/icons/closeIcon.png";



const MovieDescription = (props) => {
    return (
        <div className="description">
            <div className="description__header">
                <div className="description__header__title"><h1>{props.movie.Title}</h1></div>
                <div className="description__header__close" onClick={() => { props.setSelectedMovie() }}>
                    <img className="description__header__close__image" src={closeIcon}></img>
                </div>
            </div>
            <div className="description__content">
                <img
                    className="description__content__poster"
                    src={
                        props.movie.Poster !== "N/A"
                            ? props.movie.Poster
                            : null
                    }
                />
                <div className="description__content__info">
                    <div className="description__content__info__plot">{props.movie.Plot}</div>
                    <div className="description__content__info__director"><span>Director:</span> {props.movie.Director}</div>
                    <div className="description__content__info__genre"><span>Genre:</span> {props.movie.Genre}</div>
                    <div className="description__content__info__runtime"><span>Runtime:</span> {props.movie.Runtime}</div>
                    <div className="description__content__info__actors"><span>Actors:</span> {props.movie.Actors}</div>
                </div>
                <div className="description__content__ratings">
                    {props.movie.Ratings ? props.movie.Ratings.map(raiting => {
                        return (
                            <div key={raiting.Source} className="description__content__ratings__rating">
                                <div className="description__content__ratings__rating__source">{raiting.Source}: </div>
                                <div className="description__content__ratings__rating__value">{raiting.Value}</div>
                            </div>)
                    }) : null}
                </div>
            </div>
        </div>
    );
}

export default MovieDescription;
