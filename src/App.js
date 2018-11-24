import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Gallery />
      </div>
    );
  }
}

export default App;
