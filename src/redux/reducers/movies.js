import * as actions from "../actions/actionTypes";

const initialState = {
  movies: [],
  loading: false
};

const reducerMovies = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducerMovies;
