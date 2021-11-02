import React, { Component } from "react";

// Cách 1: import style from CSS ÁP DỤNG CHO TOÀN DỰ ÁN
import "./StyleDemo.css";

// Cách 2:
import style from "./StyleDemo.module.css";

export default class Style extends Component {
  render() {
    return (
      <div className="container">
        <p className="color-red"> Cách 1 Demo CSS</p>
        <p className={style["color-green"]}>Cách 2 sử dụng bracket notation</p>
        <p className={style.colorGreen}>Cách 2 sử dụng dot notation</p>
        <p className={`${style.colorGreen} ${style.fontBold}`}>Green Bold</p>

        <p
          style={{
            backgroundColor: "black",
            color: "green",
            fontWeight: "bold",
          }}
        >
          Cách 3
        </p>
      </div>
    );
  }
}
