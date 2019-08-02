import React, { Component } from "react";
import { Movies } from "./movies";

import { connect } from "react-redux";
import { groupBy } from "../../utility";

export class MoviesContainer extends Component {
  groupedResults = { movie: null, series: null };

  componentWillReceiveProps(newProps) {
    if (newProps.movies !== this.props.movies) {
      this.groupedResults =
        newProps.movies.length > 0
          ? groupBy(newProps.movies, "Type")
          : { movie: null, series: null };
    }
  }

  render() {
    return <Movies {...this.props} groupedResults={this.groupedResults} />;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(mapStateToProps)(MoviesContainer);
