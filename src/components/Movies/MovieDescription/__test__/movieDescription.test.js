import React from "react";
import { shallow } from "enzyme";
import MovieDescription from "../movieDescription";

describe("MovieDescription Component", () => {
  let wrapper;
  let mock_props = {};
  const subject = props => shallow(<MovieDescription {...props} />);

  beforeEach(() => {
    mock_props = {
      movie: {
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
      },
      setSelectedMovie: jest.fn()
    };
  });

  it("renders without crashing", () => {
    shallow(<MovieDescription {...mock_props} />);
  });

  it("setSelectedMovie is called when close clicked", () => {
    wrapper = subject(mock_props);
    wrapper.find(".description__header__close").simulate("click");
    expect(mock_props.setSelectedMovie).toHaveBeenCalled();
  });

  it("movie ratings has values", () => {
    wrapper = subject(mock_props);
    let ratingsLength = wrapper.find(".description__content__ratings__rating")
      .length;
    expect(ratingsLength).toBe(2);
  });

  it("movie ratings has no values", () => {
    mock_props.movie.Ratings = null;
    wrapper = subject(mock_props);
    let ratingsLength = wrapper.find(".description__content__ratings__rating")
      .length;
    expect(ratingsLength).toBe(0);
  });

  it("image source when movie has Poster", () => {
    wrapper = subject(mock_props);
    let imageSource = wrapper.find(".description__content__poster").prop("src");
    expect(imageSource).toBe(
      "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg"
    );
  });

  it("image source when movie has not Poster", () => {
    mock_props.movie.Poster = "N/A";
    wrapper = subject(mock_props);
    let imageSource = wrapper.find(".description__content__poster").prop("src");
    expect(imageSource).toBe("movie_not_found.png");
  });
});
