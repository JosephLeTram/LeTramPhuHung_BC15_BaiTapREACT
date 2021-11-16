import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    // console.log("props", this.props);
    let sanPham = this.props.sanPham;

    return (
      <div className="card">
        <img src={sanPham.hinhAnh} alt="san pham" height={350} />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>

          <button
            className="btn btn-primary ml-3"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm Giỏ Hàng
          </button>
        </div>
      </div>
    );
  }
}

//Định nghĩa 1 hàm gửi dữ liệu lên redux

const mapDispatchToProps = (dispatch) => {
  //dispatch là 1 hàm của redux giúp mình đưa dữ liệu từ component lên redux

  return {
    themGioHang: (sanPhamClick) => {
      // console.log("sanPhamClick", sanPhamClick);

      // Gửi dữ liệu lên redux

      //tạo ra spGioHang
      let spGH = { ...sanPhamClick, soLuong: 1 };

      //định nghĩa action
      const action = {
        type: "THEM_GIO_HANG", // thuộc tính bắt buộc (gửi tên)

        spGH: spGH, // thuộc tính thứ 2 là gửi lên redux
      };

      // Dùng hàm dispatch từ redux cung cấp để đưa dữ liệu lên redux (reducer)
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
