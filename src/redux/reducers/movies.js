import * as actions from "../actions/actionTypes";

const initialState = {
  movies: [],
  series: [],
  currentSearch: "",
  moviePrevPage: 1,
  movieCurrentPage: 1,
  movieNextPage: 1,
  seriesPrevPage: 1,
  seriesCurrentPage: 1,
  seriesNextPage: 1,
  loading: false
};

const reducerMovies = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.payload
      };
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    case actions.SET_SERIES:
      return {
        ...state,
        series: [...action.payload]
      };
    case actions.SET_MOVIE_NEXT_PAGE:
      return {
        ...state,
        movieNextPage: action.payload
      };
    case actions.SET_MOVIE_PREV_PAGE:
      return {
        ...state,
        moviePrevPage: action.payload
      };
    case actions.SET_MOVIE_CURRENT_PAGE:
      return {
        ...state,
        movieCurrentPage: action.payload
      };
      case actions.SET_SERIE_NEXT_PAGE:
      return {
        ...state,
        seriesNextPage: action.payload
      };
    case actions.SET_SERIE_PREV_PAGE:
      return {
        ...state,
        seriesPrevPage: action.payload
      };
    case actions.SET_SERIE_CURRENT_PAGE:
      return {
        ...state,
        seriesCurrentPage: action.payload
      };
    default:
      return state;
  }
};

export default reducerMovies;
