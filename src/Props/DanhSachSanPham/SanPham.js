import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let sanPham = this.props.sanPham;
    let xemChiTiet = this.props.hamXemChiTiet;

    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="san pham" height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              //   this.xemChiTiet(sanPham);
              xemChiTiet(sanPham);
            }}
          >
            Xem chi tiết
          </button>
          <button className="btn btn-primary ml-3">Thêm Giỏ Hàng</button>
        </div>
      </div>
    );
  }
}
