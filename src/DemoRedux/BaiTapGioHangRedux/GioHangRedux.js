import React, { Component } from "react";
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log("props", this.props);
    return <div></div>;
  }
}

//Viết hàm có kết nối vơi redux
const mapStatetoProps = (rootReducer) => {
  //Muốn lấy state nào từ redux conponent sẽ lấy rootReducer.state đó
  return {
    gioHang: rootReducer.stateGioHang,
  };
};

//Sinh ra 1 component có kết nối với redux

export default connect(mapStatetoProps)(GioHangRedux);
