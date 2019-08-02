import reducer from "../movies";
import * as actionTypes from "../../actions/actionTypes";

describe("Movies Reducer", () => {
  let initialState = {
    movies: [],
    loading: false
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      loading: false
    });
  });

  it("should set movies", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_MOVIES,
        payload: [{ title: "Movie Test 1" }, { title: "Movie Test 2" }]
      })
    ).toEqual({
      ...initialState,
      movies: [{ title: "Movie Test 1" }, { title: "Movie Test 2" }]
    });
  });
});
