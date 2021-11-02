import React, { Component } from "react";

export default class Example extends Component {
  // Các bước giải quyêt bài toán React
  /*
        B1: Xây dụng layout hoàn chỉnh
        B2: Phân tích dữ liệu thay đổi (xác định state là gì khi click vào đâu thì giao diện thay đổi) và xác định kiểu dữ liệu lưu trữ
        B3: Xây dụng xử lý thay đổi state

    */
  state = {
    fSize: 16, // Giá trị thay đổi trên giao diện là font chữ => font-size là state
  };

  handleFontSize = (size) => {
    // Thay đổi state = hàm setState
    this.setState({
      fSize: this.state.fSize + size,
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Demo về state</h3>
        <h3>Ví dụ 1: Thay đổi font chữ</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Đoạn văn bản ................................
        </p>

        <button
          className="btn btn-outline-success mr-2"
          onClick={() => {
            this.handleFontSize(1);
          }}
        >
          Tăng font
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            this.handleFontSize(-1);
          }}
        >
          Giảm font
        </button>
      </div>
    );
  }
}
