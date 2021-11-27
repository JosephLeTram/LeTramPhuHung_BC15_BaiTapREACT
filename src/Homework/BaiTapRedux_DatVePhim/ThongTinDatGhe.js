import React, { Component } from "react";
import { connect } from "react-redux";

import { huyGheAction } from "../../redux/actions/BTDatVeAction";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-5">
        <button className="gheDuocChon mt-2"></button>
        <span className="ml-3" style={{ fontSize: "25px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon mt-2"></button>
        <span className="ml-3" style={{ fontSize: "25px" }}>
          Ghế đang đặt
        </span>
        <br />
        <button className="ghe mt-2" style={{ marginLeft: "0" }}></button>
        <span className="ml-3" style={{ fontSize: "25px" }}>
          Ghế chưa đặt
          <br />
        </span>

        <div className="mt-3">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "24px" }}>
                <th>Số Ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td></td>
                <td>Tổng Tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
