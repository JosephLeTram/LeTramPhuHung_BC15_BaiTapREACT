import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderTongDiem = () => {
    let { mangXucXac, banChon } = this.props;
    let tongDiem = mangXucXac.reduce((diem, xucXac, index) => {
      return (diem += xucXac.diem);
    }, 0);

    let kq = "Thua";
    if (
      (tongDiem > 11 && banChon === "Tài") ||
      (tongDiem <= 11 && banChon === "Xỉu")
    ) {
      kq = "Thắng";
    }

    return `${tongDiem} : ${kq}`;
  };

  render() {
    let { mangXucXac } = this.props;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 text-center">
            <div className="mt-5" style={{ cursor: "pointer" }}>
              <span
                className="display-4 text-white p-5 bg-danger"
                onClick={() => {
                  this.props.datCuoc("Tài");
                }}
              >
                Tài
              </span>
            </div>
          </div>
          <div className="col-4 text-center">
            <img src={mangXucXac[0].hinhAnh} alt="..." width={50} height={50} />
            <img src={mangXucXac[1].hinhAnh} alt="..." width={50} height={50} />
            <img src={mangXucXac[2].hinhAnh} alt="..." width={50} height={50} />
            <div className="mt-2 text-center display-4">
              {this.renderTongDiem()}
            </div>
          </div>

          <div className="col-4 text-center">
            <div
              className="mt-5"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.datCuoc("Xỉu");
              }}
            >
              <span className="display-4 text-white p-5 bg-success">Xỉu</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
    banChon: rootReducer.gameXucXacReducer.banChon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (banChon) => {
      const action = {
        type: "DAT_CUOC",
        banChon,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
