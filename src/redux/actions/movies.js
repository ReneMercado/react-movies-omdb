import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const setMovies = movies => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  };
};

export const searchMovies = movieName => {
  return async dispatch => {
    try {
      // dispatch(initLoading());
      let movies = await Axios.get(
        `http://www.omdbapi.com/?s=${movieName}&apikey=652d51ce`
      );

      if (movies.data.Search) {
        Promise.all(
          movies.data.Search.map(async movie => {
            let res = await Axios.get(
              `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=652d51ce`
            );

            return res.data;
          })
        ).then(res => {
          // dispatch(finishLoading());
          return dispatch(setMovies(res));
        });
      }
    } catch (e) {
      // dispatch(finishLoading());
    }
  };
};
