import React from "react";
import { shallow } from "enzyme";
import MoviesCarouselContainer from "../moviesCarouselContainer";

describe("MoviesCarousel Component", () => {
  let wrapper;
  let mock_props = {};
  const subject = props => shallow(<MoviesCarouselContainer {...props} />);

  beforeEach(() => {
    mock_props = {
      movies: [
        {
          Title: "How to Train Your Dragon 2",
          Actors: "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
          Director: "Dean DeBlois",
          Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
          Plot:
            "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
          Runtime: "102 min",
          Type: "movie",
          imdbID: "tt1646971",
          imdbRating: "7.8",
          imdbVotes: "280,753",
          Ratings: [
            { Source: "Internet Movie Database", Value: "7.8/10" },
            { Source: "Rotten Tomatoes", Value: "92%" }
          ]
        }
      ]
    };
  });

  it("renders without crashing", () => {
    shallow(<MoviesCarouselContainer {...mock_props} />);
  });

  it("setSelectedMovie should set state correctly", () => {
    wrapper = subject(mock_props);
    wrapper.instance().setSelectedMovie(mock_props.movies[0]);
    expect(wrapper.state().selectedMovie).toEqual(mock_props.movies[0]);
  });

  it("componentWillReceiveProps doesn't receive new props", () => {
    wrapper = subject(mock_props);
    const spy = jest.spyOn(wrapper.instance(), 'setSelectedMovie');
    wrapper.instance().componentWillReceiveProps(mock_props);
    expect(spy).not.toHaveBeenCalled();
  });

  it("componentWillReceiveProps receive new props and setSelectedMovie is called", () => {
    wrapper = subject(mock_props);
    mock_props.movies = null;
    wrapper.instance().componentWillReceiveProps(mock_props);
    expect(wrapper.state().selectedMovie).toBe(null);
  });
});
