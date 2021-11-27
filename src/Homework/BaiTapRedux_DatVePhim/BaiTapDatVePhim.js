import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapDatVePhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/datVePhimImage/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
        className="bookingMovie"
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="text-light mt-3">Màn Hình</div>
                <div className="d-flex flex-column justify-content-center  mt-1">
                  <div className="screen align-self-center"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div className="text-light mt-2" style={{ fontSize: "40px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
