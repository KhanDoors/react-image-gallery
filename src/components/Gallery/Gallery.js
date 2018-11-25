import React, { Component } from "react";
import "./gallery.scss";
import Painting from "../Painting/Painting";
import { galleryData } from "../galleryData";

class Gallery extends Component {
  state = {
    gallery: galleryData
  };
  render() {
    const { gallery } = this.state;

    return (
      <section className="paintinglist">
        {gallery.map(painting => {
          return <Painting key={painting.id} painting={painting} />;
        })}
      </section>
    );
  }
}

export default Gallery;
