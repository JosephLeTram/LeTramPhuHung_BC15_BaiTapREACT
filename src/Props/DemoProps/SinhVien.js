import React, { Component } from "react";

export default class SinhVien extends Component {
  render() {
    let { sinhVien } = this.props;

    return (
      <div>
        <ul>
          <li>Mã Sinh Viên: {sinhVien.maSV}</li>
          <li>Họ Tên:{sinhVien.hoTen}</li>
          <li>Năm Sinh: {sinhVien.namSinh}</li>
        </ul>
      </div>
    );
  }
}
