import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <p className="card-img-title">500x325</p>
        </div>
        <div className="card-text">
          <h1 className="card-title">Card title</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore est
            id blanditiis
          </p>
        </div>
        <div className="card-footer">
          <button className="btn">Find Out More!</button>
        </div>
      </div>
    );
  }
}
