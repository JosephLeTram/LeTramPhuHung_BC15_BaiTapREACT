import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyFrame = `@keyframes randomItem${Date.now()} {
      0%{top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;

    return (
      <div className="text-center player">
        <style>{keyFrame}</style>
        <div
          className="decision"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <img
            className="mt-2"
            style={{
              transform: "rotate(180deg)",
              animation: `randomItem${Date.now()} 0.5s`,
              position: "absolute",
              left: "20%",
            }}
            width={50}
            height={50}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./img/oanTuTiImage/playerComputer.png"
          alt="player.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.gameOanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
