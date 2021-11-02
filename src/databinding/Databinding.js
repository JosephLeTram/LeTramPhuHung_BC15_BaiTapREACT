import React, { Component } from "react";

export default class Databinding extends Component {
  renderImg = () => {
    return (
      <div>
        <img src="https://picsum.photos/200" alt="..." />
      </div>
    );
  };

  renderCard = () => {
    return (
      <div className="card">
        {this.renderImg()}
        <div className="card-body">
          <p>Họ Tên: Sĩ</p>
          <p>Tuổi: 18</p>
        </div>
      </div>
    );
  };

  render() {
    let title = "Cybersoft";
    let srcImg = "http://i.pravatar.cc/300";
    let sinhVien = {
      maSv: 1,
      tenSV: "Nguyen Van Teo",
      namSinh: "20/12/1999",
      hinhAnh: "https://i.pravatar.cc/200",
    };
    return (
      <div className="container">
        Databinding
        <p>Hiển thị hình ảnh bằng phương pháp binding trong react</p>
        {this.renderImg()}
        <hr />
        {this.renderCard()}
        <p id="txt">{title}</p>
        <hr />
        <img src={srcImg} alt=".." />
        <hr />
        <hr />
        <div className="card w-25">
          <img src={sinhVien.hinhAnh} alt="" />
          <div className="card-body">
            <p>Họ tên: {sinhVien.tenSV} </p>
            <p>Ngày Sinh: {sinhVien.namSinh}</p>
          </div>
        </div>
      </div>
    );
  }
}
