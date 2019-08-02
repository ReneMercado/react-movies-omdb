import React, { Component } from "react";
import * as actions from "../../redux/actions/index";
import { connect } from "react-redux";
import NavBar from "./navbar";

class NavbarContainer extends Component {
  onChangeSearch = event => {
    this.props.setCurrentSearch(event.target.value);
    this.props.searchMovies();
    this.props.searchSeries();
  };

  render() {
    return <NavBar {...this.props} onChangeSearch={this.onChangeSearch} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: () => dispatch(actions.searchMovies()),
    searchSeries: () => dispatch(actions.searchSeries()),
    setCurrentSearch: searchString => dispatch(actions.setCurrentSearch(searchString)),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NavbarContainer);
