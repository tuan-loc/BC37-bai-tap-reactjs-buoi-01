import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <p className="card-img-title">500x325</p>
        </div>
        <div className="card-text">
          <h1 className="card-title"></h1>
          <p></p>
        </div>
      </div>
    );
  }
}
