import React, { Component } from "react";
import "./content.scss";
import Movies from "./Movies/moviesContainer";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Movies />
      </div>
    );
  }
}

export default Content;
