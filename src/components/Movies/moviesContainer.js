import React, { Component } from "react";
import { Movies } from "./movies";
import * as actions from "../../redux/actions/index";

import { connect } from "react-redux";
// import { groupBy } from "../../utility";

export class MoviesContainer extends Component {
  groupedResults = { movie: null, series: null };

  componentWillReceiveProps(newProps) {
    if (
      newProps.movies !== this.props.movies ||
      newProps.series !== this.props.series
    ) {
      this.groupedResults = {
        movie: newProps.movies.length > 0 ? newProps.movies : null,
        series: newProps.series.length > 0 ? newProps.series : null
      };
    }
  }

  render() {
    return <Movies {...this.props} groupedResults={this.groupedResults} />;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    series: state.movies.series,
    movieCurrentPage: state.movies.movieCurrentPage,
    seriesCurrentPage: state.movies.seriesCurrentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: page => dispatch(actions.searchMovies(page)),
    searchSeries: page => dispatch(actions.searchSeries(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
