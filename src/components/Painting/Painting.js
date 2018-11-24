import React, { Component } from "react";
import "./painting.scss";

class Painting extends Component {
  render() {
    return (
      <article className="painting">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/1089147/pexels-photo-1089147.jpeg?auto=compress&cs=tinysrgb&h=350"
            alt="first"
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="painting-info">
          <h3>Artist</h3>
          <h4>title</h4>
          <h5>
            description
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vero
            reprehenderit? Quam et iste ipsa, tenetur, id architecto suscipit
            molestiae velit placeat sed tempora facere praesentium neque. Illo,
            sapiente mollitia.
          </p>
        </div>
      </article>
    );
  }
}
export default Painting;
