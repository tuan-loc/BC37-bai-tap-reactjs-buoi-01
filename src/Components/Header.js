import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-brand">Start Bootstrap</div>
            <div className="navbar-nav">
              <a href="#" className="nav-link active">
                Home
              </a>
              <a href="#" className="nav-link">
                About
              </a>
              <a href="#" className="nav-link">
                Services
              </a>
              <a href="#" className="nav-link">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
