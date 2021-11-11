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

  // State tại đâu thì hàm xử lý setState sẽ được đặt tại đó
  themGioHang = (sanPhamClick) => {
    // console.log(sanPhamClick);

    // tạo ra sp giỏ hàng
    let spGH = { ...sanPhamClick, soLuong: 1 };

    // console.log("spGH", spGH);

    // Lấy state giỏ hàng ra thêm sản phẩm này vào

    let gioHangCapNhat = this.state.gioHang;

    // Kiểm tra sản phẩn đó đã có trong giở hàng hay chưa
    let sanPhamGioHang = gioHangCapNhat.find((sp) => sp.maSP === spGH.maSP);

    //Nếu sản phẩm đã có trong giở hàng rồi
    if (sanPhamGioHang) {
      sanPhamGioHang.soLuong += 1;
    } else {
      gioHangCapNhat.push(spGH);
    }

    // setState giỏ hàng

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Xóa giở hàng
  xoaSanPham = (maSPClick) => {
    // console.log(maSPClick);

    // // Xử lý xóa
    // // Tìm ra vị trí sản phẩm đó trong mảng
    // let index = this.state.gioHang.findIndex((sp) => sp.maSP === maSPClick);
    // if (index !== -1) {
    //   // Xử lý xóa dựa vào index
    //   this.state.gioHang.splice(index, 1);
    // }

    let gioHangCapNhat = this.state.gioHang.filter(
      (sp) => sp.maSP !== maSPClick
    );

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //tăng giảm số lượng
  tangGiamSoLuong = (sanPham, soLuong) => {
    // +1 là tăng -1 là giam
    let sanPhamGioHang = this.state.gioHang.find((sp) => sp.maSP === sanPham);
    if (sanPhamGioHang) {
      sanPhamGioHang.soLuong += soLuong;
      if (sanPhamGioHang.soLuong < 1) {
        sanPhamGioHang.soLuong -= soLuong;
        alert("Sản phẩm tối thiểu là 1");
      }
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  renderSanPham = () => {
    return this.mangDienThoai.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham
            themGioHang={this.themGioHang}
            sanPham={sanPham}
            hamXemChiTiet={this.xemChiTiet}
          />
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
          <GioHang
            gioHang={this.state.gioHang}
            xoa={this.xoaSanPham}
            tangGiamSoLuong={this.tangGiamSoLuong}
          />
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
