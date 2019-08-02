import React from "react";
import { shallow } from "enzyme";
import { MoviesContainer } from "../moviesContainer";
import configureMockStore from "redux-mock-store";

describe("MoviesContainer Component", () => {
  const mockStore = configureMockStore();
  let wrapper;
  let mock_props = {};
  let groupedResults = {};
  let movies = [];
  let series = [];
  let initialState = {
    movies: [],
    series: []
  };
  let store = mockStore(initialState);

  const subject = props =>
    shallow(<MoviesContainer {...props} store={store} />);

  beforeEach(() => {
    initialState = {
      movies: {
        movies: []
      }
    };
    store = mockStore(initialState);

    groupedResults = {
      movie: [
        {
          Actors: "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
          Director: "Dean DeBlois",
          Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
          Plot:
            "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
          Runtime: "102 min",
          Title: "How to Train Your Dragon 2",
          Type: "movie"
        }
      ],
      series: [
        {
          Actors: "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
          Director: "Dean DeBlois",
          Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
          Plot:
            "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
          Runtime: "102 min",
          Title: "How to Train Your Dragon 2",
          Type: "series"
        }
      ]
    };

    movies = [
      {
        Actors: "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
        Director: "Dean DeBlois",
        Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
        Plot:
          "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
        Runtime: "102 min",
        Title: "How to Train Your Dragon 2",
        Type: "movie"
      }
    ];

    series = [
      {
        Actors: "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
        Director: "Dean DeBlois",
        Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
        Plot:
          "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
        Runtime: "102 min",
        Title: "How to Train Your Dragon 2",
        Type: "series"
      }
    ];

    mock_props = {
      movies: []
    };
  });

  it("renders without crashing", () => {
    shallow(<MoviesContainer {...mock_props} />);
  });

  it("componentWillReceiveProps doesn't receive new props", () => {
    wrapper = subject(mock_props);
    wrapper.instance().componentWillReceiveProps(mock_props);
    expect(wrapper.instance().groupedResults).toMatchObject({
      movie: null,
      series: null
    });
  });

  it("componentWillReceiveProps receive new props and group them", () => {
    wrapper = subject(mock_props);
    mock_props.movies = movies;
    mock_props.series = series;
    wrapper.instance().componentWillReceiveProps(mock_props);
    expect(wrapper.instance().groupedResults).toMatchObject(groupedResults);
  });
});
