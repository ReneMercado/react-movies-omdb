import React, { Component } from "react";
import { Movies } from "./movies";

import { connect } from "react-redux";
import { groupBy } from "../../utility";

export class MoviesContainer extends Component {
  render() {
    let groupedResults =
      this.props.movies.length > 0
        ? groupBy(this.props.movies, "Type")
        : { movie: null, series: null };
    return <Movies {...this.props} groupedResults={groupedResults} />;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(mapStateToProps)(MoviesContainer);
