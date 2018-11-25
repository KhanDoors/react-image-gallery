import React, { Component } from "react";
import "./painting.scss";

class Painting extends Component {
  state = {
    showDesc: false
  };

  handleDesc = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
  };

  render() {
    const { id, artist, img, name, info } = this.props.painting;
    const { removePainting } = this.props;
    return (
      <article className="painting">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            className="close-btn"
            onClick={() => {
              removePainting(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="painting-info">
          <h3>{artist}</h3>
          <h4>{name}</h4>
          <h5>
            Description:
            <span onClick={this.handleDesc}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showDesc && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
export default Painting;
