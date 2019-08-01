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
        <div className="navbar__title">OMDB</div>
        <div className="navbar__search">
          {/* <i className="fa fa-search"></i> */}
          <input className="navbar__search__inputSearch" type="text" onChange={(e) => this.onChangeSearch(e)} placeholder="Search.." name="search2" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: movieName => dispatch(actions.searchMovies(movieName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Navbar);
