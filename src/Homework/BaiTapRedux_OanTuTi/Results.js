import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    let { ketQua, soBanChoi, soBanThang } = this.props;
    return (
      <div>
        <div className="display-4 text-warning">{ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng: <span className="text-warning">{soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Số bàn chơi: <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.gameOanTuTiReducer.ketQua,
    soBanThang: state.gameOanTuTiReducer.soBanThang,
    soBanChoi: state.gameOanTuTiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(Results);
