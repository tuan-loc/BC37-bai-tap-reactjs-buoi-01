import React, { Component } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <div className="container">
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
        </div>
        <Footer />
      </div>
    );
  }
}
