import React, { Component } from "react";
import blackCarImage from "./CarBasic/products/black-car.jpg";
import redCarImage from "./CarBasic/products/red-car.jpg";
import silverCarImage from "./CarBasic/products/silver-car.jpg";
import steelCarImage from "./CarBasic/products/steel-car.jpg";

/*
        Các bước giải quyết bài toán
        1) Layout gồm có hình ảnh xe (xe đổi màu) và những nút button để khởi tạo event đổi màu
        2) Vì màu xe đang được bị đổi nên img sẽ là state
        3) Xây dựng sự kiện thay đổi state khi click vào button
    */

export default class BaiTapChonXe extends Component {
  state = {
    img: blackCarImage,
  };

  changeColor = (color) => {
    let imgSource;

    // Sử dụng switch case để gán lại giá trị theo nút button
    switch (color) {
      case "red":
        imgSource = redCarImage;
        break;

      case "black":
        imgSource = blackCarImage;
        break;
      case "silver":
        imgSource = silverCarImage;
        break;
      case "steel":
        imgSource = steelCarImage;
        break;

      default:
        imgSource = blackCarImage;
        break;
    }

    //
    this.setState({
      img: imgSource,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Hình ảnh xe</h2>
            <img src={this.state.img} width={200} height={150} alt="hình xe" />
          </div>
          <div className="col-6">
            <h2>Chọn màu xe</h2>
            <button
              onClick={() => this.changeColor("black")}
              className="btn btn-dark mr-2"
            >
              Black
            </button>
            <button
              onClick={() => this.changeColor("red")}
              className="btn btn-danger mr-2"
            >
              Red
            </button>
            <button
              onClick={() => this.changeColor("silver")}
              className="btn btn-light mr-2"
            >
              Silver
            </button>
            <button
              onClick={() => this.changeColor("steel")}
              className="btn btn-secondary"
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
