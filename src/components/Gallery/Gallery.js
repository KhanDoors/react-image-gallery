import React, { Component } from "react";
import "./gallery.scss";
import Painting from "../Painting/Painting";

class Gallery extends Component {
  render() {
    return (
      <section className="paintinglist">
        <Painting />
      </section>
    );
  }
}

export default Gallery;
