import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 text-center">
            <div className="mt-5" style={{ cursor: "pointer" }}>
              <span className="display-4 text-white p-5 bg-danger">Tài</span>
            </div>
          </div>
          <div className="col-4 text-center">
            <img
              src="https://picsum.photos/50"
              alt="..."
              width={50}
              height={50}
            />
            <img
              src="https://picsum.photos/50"
              alt="..."
              width={50}
              height={50}
            />
            <img
              src="https://picsum.photos/50"
              alt="..."
              width={50}
              height={50}
            />
          </div>
          <div className="col-4 text-center">
            <div className="mt-5" style={{ cursor: "pointer" }}>
              <span className="display-4 text-white p-5 bg-success">Xỉu</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
