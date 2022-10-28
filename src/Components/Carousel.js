import React, { Component } from "react";
import "./Carousel.css";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="container">
          <div className="carousel-content">
            <h1 className="carousel-title">A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              est id blanditiis, cupiditate porro minus praesentium magni ex cum
              quas ipsa mollitia velit, at laudantium fugiat cumque. Eaque,
              nesciunt illum?
            </p>
            <button className="call-to-action">Call to action!</button>
          </div>
        </div>
      </div>
    );
  }
}
