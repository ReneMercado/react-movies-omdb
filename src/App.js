import React, { Component } from "react";
import "./App.scss";
import Content from "./components/content";
import Navbar from "./components/Navbar/navbarContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;
