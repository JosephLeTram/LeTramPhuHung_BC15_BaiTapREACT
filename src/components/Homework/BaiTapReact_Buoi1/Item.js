import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className="bi bi-collection"></i>
          </div>
          <h2 className="fs-4 fw-bold">Fresh new layout</h2>
          <p className="mb-0">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </div>
        <div className="card-footer">
          <button className="text-white bg-primary p-3">Find out More!</button>
        </div>
      </div>
    );
  }
}
