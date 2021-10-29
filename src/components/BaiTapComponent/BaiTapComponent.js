import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import HeaderComponent from "./HeaderComponent";
import Navigation from "./Navigation";

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div className="container">
        Bài tập
        <HeaderComponent />
        <div className="row ">
          <div className="col-4 pr-0">
            <Navigation />
          </div>
          <div className="col-8  pl-0">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
