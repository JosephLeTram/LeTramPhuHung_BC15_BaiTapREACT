import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center mt-5">
        <div className="display-4">
          Bạn chọn : <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng :
          <span className="text-danger">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi :
          <span className="text-danger">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="display-4">
          <button
            className="display-4 mt-3 btn btn-success"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    banChon: rootReducer.gameXucXacReducer.banChon,
    soBanThang: rootReducer.gameXucXacReducer.soBanThang,
    tongSoBanChoi: rootReducer.gameXucXacReducer.tongSoBanChoi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      const action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
