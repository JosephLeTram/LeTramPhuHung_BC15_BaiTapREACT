import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang, xoa, tangGiamSoLuong } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Hình Ảnh</th>
            <th>Tên Sản Phẩm</th>
            <th>Số lượng</th>
            <th>Thành Tiền</th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((spGH, index) => {
            return (
              <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>
                  <img src={spGH.hinhAnh} alt="" width={50} />
                </td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.giaBan}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => {
                      tangGiamSoLuong(spGH.maSP, 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => {
                      tangGiamSoLuong(spGH.maSP, -1);
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.giaBan * spGH.soLuong}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      xoa(spGH.maSP);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
