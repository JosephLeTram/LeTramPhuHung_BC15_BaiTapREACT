import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";

export default class BaiTapGioHangRedux extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./phoneImage/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./phoneImage/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./phoneImage/applephone.jpg",
    },
  ];

  renderSanPham = () => {
    return this.mangDienThoai.map((sp, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sp} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Bài Tập Giỏ Hàng Redux</h3>
        <GioHangRedux />

        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
