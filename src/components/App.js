import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import MainContainer from "./Container";
import hogs from "../porkers_data";

class App extends Component {
  render() {
    // console.log('App', this.props)
    return (
      <div className="App">
        <Nav />
        <MainContainer piggy={hogs} />
      </div>
    );
  }
}

export default App;
