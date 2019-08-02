import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const setCurrentSearch = searchWords => {
  return {
    type: actionTypes.SET_CURRENT_SEARCH,
    payload: searchWords
  };
};

export const setMovieNextPage = page => {
  return {
    type: actionTypes.SET_MOVIE_NEXT_PAGE,
    payload: page
  };
};

export const setMoviePrevPage = page => {
  return {
    type: actionTypes.SET_MOVIE_PREV_PAGE,
    payload: page
  };
};

export const setMovieCurrentPage = page => {
  return {
    type: actionTypes.SET_MOVIE_CURRENT_PAGE,
    payload: page
  };
};

export const setSerieNextPage = page => {
  return {
    type: actionTypes.SET_SERIE_NEXT_PAGE,
    payload: page
  };
};

export const setSeriePrevPage = page => {
  return {
    type: actionTypes.SET_SERIE_PREV_PAGE,
    payload: page
  };
};

export const setSerieCurrentPage = page => {
  return {
    type: actionTypes.SET_SERIE_CURRENT_PAGE,
    payload: page
  };
};

export const setMovies = movies => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  };
};

export const setSeries = series => {
  return {
    type: actionTypes.SET_SERIES,
    payload: series
  };
};

export const searchMovies = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      // dispatch(initLoading());
      let state = getState();
      let movieName = state.movies.currentSearch;

      let movies = await Axios.get(
        `https://www.omdbapi.com/?s=${movieName}&page=${page}&type=movie&apikey=652d51ce`
      );

      if (movies.data.Search) {
        dispatch(setMovieNextPage(page + 1));
        dispatch(setMoviePrevPage(page - 1));
        dispatch(setMovieCurrentPage(page));

        Promise.all(
          movies.data.Search.map(async movie => {
            let res = await Axios.get(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=652d51ce`
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

export const searchSeries = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      // dispatch(initLoading());
      let state = getState();
      let seriesName = state.movies.currentSearch;

      let series = await Axios.get(
        `https://www.omdbapi.com/?s=${seriesName}&page=${page}&type=series&apikey=652d51ce`
      );

      if (series.data.Search) {
        dispatch(setSerieNextPage(page + 1));
        dispatch(setSeriePrevPage(page - 1));
        dispatch(setSerieCurrentPage(page));
        Promise.all(
          series.data.Search.map(async serie => {
            let res = await Axios.get(
              `https://www.omdbapi.com/?i=${serie.imdbID}&apikey=652d51ce`
            );

            return res.data;
          })
        ).then(res => {
          // dispatch(finishLoading());
          return dispatch(setSeries(res));
        });
      }
    } catch (e) {
      // dispatch(finishLoading());
    }
  };
};
