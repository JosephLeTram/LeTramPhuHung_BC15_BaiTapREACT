import React, { Component } from "react";
import "./BaiTapGameOanTuTi.css";
import Computer from "./Computer";
import Player from "./Player";
import Results from "./Results";
import { connect } from "react-redux";

class BaiTapGameOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div>
          <div className="row text-center mt-5">
            <div className="col-4">
              <Player />
            </div>
            <div className="col-4">
              <Results />
              <button
                className="btn btn-success p-3 display-4 mt-3"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                Play Game
              </button>
            </div>
            <div className="col-4">
              <Computer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // Khai báo hàm lặp
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count >= 10) {
          // Dùng hàm setInterval lại
          clearInterval(randomComputerItem);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameOanTuTi);
