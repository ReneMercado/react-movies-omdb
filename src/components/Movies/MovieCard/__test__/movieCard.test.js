import React from "react";
import { shallow } from "enzyme";
import MovieCard from "../movieCard";

describe("MovieCard Component", () => {
  let wrapper;
  let mock_props = {};
  const subject = props => shallow(<MovieCard {...props} />);

  beforeEach(() => {
    mock_props = {
      movie: {
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
        Title: "How to Train Your Dragon 2"
      },
      setSelectedMovie: jest.fn()
    };
  });

  it("renders without crashing", () => {
    shallow(<MovieCard {...mock_props} />);
  });

  it("setSelectedMovie is called when movieCard clicked", () => {
    wrapper = subject(mock_props);
    wrapper.find(".movieCard").simulate("click");
    expect(mock_props.setSelectedMovie).toHaveBeenCalled();
  });

  it("image source when movie has Poster", () => {
    wrapper = subject(mock_props);
    let imageSource = wrapper.find(".movieCard__poster").prop("src");
    expect(imageSource).toBe(
      "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg"
    );
  });

  it("image source when movie has not Poster", () => {
    mock_props.movie.Poster = "N/A";
    wrapper = subject(mock_props);
    let imageSource = wrapper.find(".movieCard__poster").prop("src");
    expect(imageSource).toBe("movie_not_found.png");
  });
});
