import React, { Component } from "react";
import Card from "./Card";

export default class Content extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    );
  }
}
