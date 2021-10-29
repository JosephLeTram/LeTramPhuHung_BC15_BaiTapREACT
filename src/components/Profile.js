import React, { Component } from "react";

export default class Profile extends Component {
  // Phương thức render là phương thức trả về giao diện của component này
  render() {
    return (
      <div>
        <div className="w-25">
          <div className="card text-left">
            <img className="card-img-top" src="https://i.pravatar.cc/300" alt />
            <div className="card-body">
              <h4 className="card-title">Sĩ đẹp trai</h4>
              <p className="card-text">Body</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
