import React from "react";

export default function Register(props) {
  return (
    <div className="container">
      <button
        className="btn btn-success my-5"
        onClick={() => {
          props.history.goBack();
        }}
      >
        {"<<<"} Trở về
      </button>
      <h3>Đăng Ký</h3>
    </div>
  );
}
