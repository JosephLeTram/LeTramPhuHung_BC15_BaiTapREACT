import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    let { gioHang } = this.props;

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
                      this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => {
                      this.props.tangGiamSoLuong(spGH.maSP, -1);
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
                      this.props.xioGioHang(spGH.maSP);
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

//Viết hàm có kết nối vơi redux
const mapStatetoProps = (rootReducer) => {
  //Muốn lấy state nào từ redux conponent sẽ lấy rootReducer.state đó
  return {
    gioHang: rootReducer.stateGioHang,
  };
};

// Đưa dữ liệu lên redux định nghĩa mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    xioGioHang: (maSPClick) => {
      console.log("maSPCLIck", maSPClick);
      const action = {
        type: "XOA_GIO_HANG",
        maSP: maSPClick,
      };

      // Dùng dispatch để đưa dữ liệu lên reducers
      dispatch(action);
    },

    tangGiamSoLuong: (maSPClick, soLuong) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP: maSPClick,
        soLuong: soLuong,
      };

      dispatch(action);
    },
  };
};

//Sinh ra 1 component có kết nối với redux

export default connect(mapStatetoProps, mapDispatchToProps)(GioHangRedux);
