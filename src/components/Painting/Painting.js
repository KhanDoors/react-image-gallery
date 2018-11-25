import React, { Component } from "react";
import "./painting.scss";

class Painting extends Component {
  render() {
    const { artist, img, name, info } = this.props.painting;
    return (
      <article className="painting">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="painting-info">
          <h3>{artist}</h3>
          <h4>{name}</h4>
          <h5>
            Description:
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}
export default Painting;
