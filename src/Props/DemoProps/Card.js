import React, { Component } from "react";

export default class Card extends Component {
  render() {
    // let name = this.props.hoTen;
    // let tuoi = this.props.tuoi;

    // Cách viết ngắn gọn
    let { hoTen, tuoi } = this.props;

    return (
      <div>
        <div className="card text-white bg-primary w-25">
          <img
            className="card-img-top"
            src="https://i.pravatar.cc/200"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{hoTen}</h4>
            <p className="card-text">{tuoi}</p>
          </div>
        </div>
      </div>
    );
  }
}
