import React, { useState } from "react";

export default function BaiTapUseState(props) {
  let [color, setColor] = useState("./img/carImage/black-car.jpg");
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Hình ảnh xe</h2>
          <img src={color} alt="..." width={250} height={150} />
        </div>
        <div className="col-6">
          <h2>Chọn Màu Xe</h2>
          <button
            className="btn btn-dark mr-2"
            onClick={() => {
              setColor("./img/carImage/black-car.jpg");
            }}
          >
            Black
          </button>
          <button
            className="btn btn-danger mr-2"
            onClick={() => {
              setColor("./img/carImage/red-car.jpg");
            }}
          >
            Red
          </button>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => {
              setColor("./img/carImage/steel-car.jpg");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}
