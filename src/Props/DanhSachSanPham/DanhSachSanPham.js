import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
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

  state = {
    sanPhamChiTiet: {
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
    gioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        hinhAnh: "./phoneImage/vsphone.jpg",
        giaBan: 5700000,
        soLuong: 1,
      },
    ],
  };

  renderSanPham = () => {
    return this.mangDienThoai.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham} hamXemChiTiet={this.xemChiTiet} />
          {/* <div className="card">
            <img src={sanPham.hinhAnh} alt="san pham" height={350} />
            <div className="card-body bg-dark text-white">
              <p>{sanPham.tenSP}</p>
              <p>{sanPham.giaBan}</p>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.xemChiTiet(sanPham);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div> */}
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    // Xử lý thay đổi state: lấy sản phẩm click thay thế cho sanPhamChiTiet ban đầu
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      hinhAnh,
      ram,
      rom,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <div className="text-right">
          <span style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}>
            Giỏ hàng (0)
          </span>
        </div>
        <div>
          <GioHang gioHang={this.state.gioHang} />
        </div>

        <h3 className="text-center display-4"> Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <img src={hinhAnh} alt="" className="w-100" />
          </div>
          <div className="col-8">
            <h3>Thông Số Kĩ Thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ Điều Hành</th>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera Trước</th>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera Sau</th>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <th>Ram</th>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <th>Rom</th>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
