import React from "react";
import { shallow } from "enzyme";
import { Movies } from "../movies";

describe("Movies Component", () => {
  let wrapper;
  let mock_props = {};
  const subject = props => shallow(<Movies {...mock_props} />);

  beforeEach(() => {
    mock_props = {
      groupedResults: {
        movie: [
          {
            Actors:
              "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
            Awards: "Nominated for 1 Oscar. Another 14 wins & 60 nominations.",
            BoxOffice: "$147,065,544",
            Country: "USA",
            DVD: "11 Nov 2014",
            Director: "Dean DeBlois",
            Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
            Language: "English",
            Metascore: "76",
            Plot:
              "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
            Production: "20th Century Fox",
            Rated: "PG",
            // Ratings: [{Source: "Internet Movie Database", Value: "7.8/10"}, {Source: "Rotten Tomatoes", Value: "92%"},…]
            Released: "13 Jun 2014",
            Response: "True",
            Runtime: "102 min",
            Title: "How to Train Your Dragon 2",
            Type: "movie",
            Website: "http://www.howtotrainyourdragon.com",
            Writer:
              "Dean DeBlois, Cressida Cowell (based upon the 'How to Train Your Dragon' book series by)",
            Year: "2014",
            imdbID: "tt1646971",
            imdbRating: "7.8",
            imdbVotes: "280,753"
          }
        ],
        series: [
          {
            Actors:
              "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
            Awards: "Nominated for 1 Oscar. Another 14 wins & 60 nominations.",
            BoxOffice: "$147,065,544",
            Country: "USA",
            DVD: "11 Nov 2014",
            Director: "Dean DeBlois",
            Genre: "Animation, Action, Adventure, Comedy, Family, Fantasy",
            Language: "English",
            Metascore: "76",
            Plot:
              "When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg",
            Production: "20th Century Fox",
            Rated: "PG",
            // Ratings: [{Source: "Internet Movie Database", Value: "7.8/10"}, {Source: "Rotten Tomatoes", Value: "92%"},…]
            Released: "13 Jun 2014",
            Response: "True",
            Runtime: "102 min",
            Title: "How to Train Your Dragon 2",
            Type: "movie",
            Website: "http://www.howtotrainyourdragon.com",
            Writer:
              "Dean DeBlois, Cressida Cowell (based upon the 'How to Train Your Dragon' book series by)",
            Year: "2014",
            imdbID: "tt1646971",
            imdbRating: "7.8",
            imdbVotes: "280,753"
          }
        ]
      }
    };
  });

  it("renders without crashing", () => {
    shallow(<Movies {...mock_props} />);
  });

  it("groupedResults.movie have values", () => {
    mock_props.groupedResults.series = null;
    wrapper = subject(mock_props);
    let eventsCount = wrapper.find("MoviesCarouselContainer").length;
    expect(eventsCount).toBe(1);
  });

  it("groupedResults.series have values", () => {
    mock_props.groupedResults.movie = null;
    wrapper = subject(mock_props);
    let eventsCount = wrapper.find("MoviesCarouselContainer").length;
    expect(eventsCount).toBe(1);
  });
});
