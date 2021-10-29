import React, { Component } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

export default class Homework extends Component {
  render() {
    return (
      <div>
        {/* Header - Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-lg-5">
            <Header />
          </div>
        </nav>

        {/* Body */}
        <div className="py-5">
          <div className="container px-lg-5">
            <Body />
          </div>
        </div>

        {/* Footer */}
        <div className="py-5 bg-dark">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
