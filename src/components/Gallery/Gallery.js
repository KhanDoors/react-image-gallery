import React, { Component } from "react";
import "./gallery.scss";
import Painting from "../Painting/Painting";
import { galleryData } from "../galleryData";

class Gallery extends Component {
  state = {
    gallery: galleryData
  };

  removePainting = id => {
    const { gallery } = this.state;
    const sortedGallery = gallery.filter(painting => painting.id !== id);
    this.setState({
      gallery: sortedGallery
    });
  };

  render() {
    const { gallery } = this.state;

    return (
      <section className="paintinglist">
        {gallery.map(painting => {
          return (
            <Painting
              key={painting.id}
              painting={painting}
              removePainting={this.removePainting}
            />
          );
        })}
      </section>
    );
  }
}

export default Gallery;
