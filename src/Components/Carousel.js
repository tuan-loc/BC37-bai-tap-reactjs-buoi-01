import React, { Component } from "react";
import "./Carousel.css";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="container">
          <div className="carousel-content">
            <h1>A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              eius, a expedita quas voluptas rerum corrupti debitis explicabo
              obcaecati commodi.
            </p>
            <button className="call-to-action">Call to action!</button>
          </div>
        </div>
      </div>
    );
  }
}
