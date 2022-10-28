import React, { Component } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Header from "./Header";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Content />
      </div>
    );
  }
}
