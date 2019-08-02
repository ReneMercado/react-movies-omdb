import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../movies";
import * as actionTypes from "../../actions/actionTypes";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Movies Actions", () => {
  let initialState = {
    movies: [],
    loading: false
  };

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("should return set movies action", () => {
    let movies = [{ title: "Movie Test 1" }, { title: "Movie Test 2" }];
    let expectedAction = {
      type: actionTypes.SET_MOVIES,
      payload: movies
    };

    expect(expectedAction).toEqual(actions.setMovies(movies));
  });

  it("should search movies", () => {
    let movieDescriptonRes = {
      Actors: "Jay Baruchel, Cate Blanchett, Gerard Butler, Craig Ferguson",
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
    };

    moxios.stubRequest("https://www.omdbapi.com/?s=how&apikey=652d51ce", {
      status: 200,
      response: {
        Response: "True",
        Search: [
          {
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
            Title: "How to Train Your Dragon",
            Type: "movie",
            Year: "2010",
            imdbID: "tt0892769"
          }
        ]
      }
    });

    moxios.stubRequest("https://www.omdbapi.com/?i=tt0892769&apikey=652d51ce", {
      status: 200,
      response: movieDescriptonRes
    });

    const expectedActions = [
      { type: actionTypes.SET_MOVIES, payload: movieDescriptonRes }
    ];

    const store = mockStore({
      game: {
        movies: [],
        loading: false
      }
    });

    return store.dispatch(actions.searchMovies("how")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
