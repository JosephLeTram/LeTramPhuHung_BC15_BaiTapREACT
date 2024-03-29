import React, { Component } from "react";
import { connect } from "react-redux";
import { xoaNguoiDungAction } from "../redux/actions/BTQuanLyNguoiDungAction";

class TableDanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3>Danh Sách Người Dùng</h3>
        </div>
        <div className="card-body">
          <table className="table text-center">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tài Khoản</th>
                <th>Mật Khẩu</th>
                <th>Họ Tên</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Mã Loại Người Dùng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.mangNguoiDung.map((nguoiDung, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{nguoiDung.taiKhoan}</td>
                    <td>{nguoiDung.matKhau}</td>
                    <td>{nguoiDung.hoTen}</td>
                    <td>{nguoiDung.email}</td>
                    <td>{nguoiDung.soDienThoai}</td>
                    <td>{nguoiDung.maLoaiNguoiDung}</td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-primary mr-1"
                          onClick={() => {
                            const action = {
                              type: "CHINH_SUA_NGUOI_DUNG",
                              nguoiDung: nguoiDung,
                            };
                            this.props.dispatch(action);
                          }}
                        >
                          Chỉnh Sửa
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            // action creator
                            const action = xoaNguoiDungAction(
                              nguoiDung.taiKhoan
                            );
                            // Gửi dữ liệu lên redux
                            this.props.dispatch(action);
                          }}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangNguoiDung: rootReducer.BTQuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(TableDanhSachNguoiDung);
