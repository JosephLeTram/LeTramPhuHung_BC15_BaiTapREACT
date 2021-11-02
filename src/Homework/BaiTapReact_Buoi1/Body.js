import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        {/* Banner */}
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div className="m-4 m-lg-5">
            <Banner />
          </div>
        </div>
        {/* Item */}
        <div className="pt-4">
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <Item />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
