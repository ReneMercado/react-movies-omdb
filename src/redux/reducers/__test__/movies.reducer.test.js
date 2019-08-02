import reducer from "../movies";
import * as actionTypes from "../../actions/actionTypes";

describe("Movies Reducer", () => {
  let initialState = {
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

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
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

  it("should set series", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_SERIES,
        payload: [{ title: "Serie Test 1" }, { title: "Serie Test 2" }]
      })
    ).toEqual({
      ...initialState,
      series: [{ title: "Serie Test 1" }, { title: "Serie Test 2" }]
    });
  });

  it("should set movies next page", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_MOVIE_NEXT_PAGE,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      movieNextPage: 2
    });
  });

  it("should set movies prev page", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_MOVIE_PREV_PAGE,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      moviePrevPage: 2
    });
  });

  it("should set movies current page", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_MOVIE_CURRENT_PAGE,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      movieCurrentPage: 2
    });
  });

  it("should set serie next page", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_SERIE_NEXT_PAGE,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      seriesNextPage: 2
    });
  });

  it("should set serie prev page", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_SERIE_PREV_PAGE,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      seriesPrevPage: 2
    });
  });

  it("should set serie current page", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_SERIE_CURRENT_PAGE,
        payload: 2
      })
    ).toEqual({
      ...initialState,
      seriesCurrentPage: 2
    });
  });

  it("should set current SEARCH", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_CURRENT_SEARCH,
        payload: "TEST STRING"
      })
    ).toEqual({
      ...initialState,
      currentSearch: "TEST STRING"
    });
  });
});
