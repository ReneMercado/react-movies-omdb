import React, { Component } from "react";
import "./navbar.scss";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";

class Navbar extends Component {
  onChangeSearch = event => {
    this.props.searchMovies(event.target.value);
  };
  render() {
    return (
      <div className="navbar">
        <input onChange={(e) => this.onChangeSearch(e)} placeholder="Search Movie" />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     lastPlays: state.game.lastPlays
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: movieName => dispatch(actions.searchMovies(movieName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Navbar);
