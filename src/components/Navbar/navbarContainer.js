import React, { Component } from "react";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";
import NavBar from "./navbar";

class NavbarContainer extends Component {
  onChangeSearch = event => {
    this.props.searchMovies(event.target.value);
  };

  render() {
    return <NavBar {...this.props} onChangeSearch={this.onChangeSearch} />;
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
)(NavbarContainer);
