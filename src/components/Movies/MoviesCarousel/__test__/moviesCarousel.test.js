import React from "react";
import { shallow } from "enzyme";
import MoviesCarousel from "../moviesCarousel";

describe("MoviesCarousel Component", () => {
  let wrapper;
  let mock_props = {};
  const subject = props => shallow(<MoviesCarousel {...props} />);

  beforeEach(() => {
    mock_props = {
      sectionTitle: "Movies",
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
      ],
      setSelectedMovie: jest.fn(),
      selectedMovie: null,
      currentPage: 2,
      searchNextPage: jest.fn(),
      refCarouselElem: jest.fn(),
    };
  });

  it("renders without crashing", () => {
    shallow(<MoviesCarousel {...mock_props} />);
  });

  it("movies has values", () => {
    wrapper = subject(mock_props);
    let movieCardsCount = wrapper.find("MovieCard").length;
    expect(movieCardsCount).toBe(1);
  });

  it("selectedMovie has values", () => {
    mock_props.selectedMovie = mock_props.movies[0];
    wrapper = subject(mock_props);
    let movieCardsCount = wrapper.find("MovieDescription").length;
    expect(movieCardsCount).toBe(1);
  });

  it("searchNextPage is called when scroll_span clicked", () => {
    wrapper = subject(mock_props);
    wrapper.find(".carousel__moviesCards__scrollPrev__span").simulate("click");
    expect(mock_props.searchNextPage).toHaveBeenCalled();
  });

  it("searchNextPage is called when scroll_span clicked", () => {
    wrapper = subject(mock_props);
    wrapper.find(".carousel__moviesCards__scrollNext__span").simulate("click");
    expect(mock_props.searchNextPage).toHaveBeenCalled();
  });

  it("scrollBack doesn't exists on currentPage = 1", () => {
    mock_props.currentPage = 1;
    wrapper = subject(mock_props);
    let movieCardsCount = wrapper.find("carousel__moviesCards__scrollPrev").length;
    expect(movieCardsCount).toBe(0);
  });
});
