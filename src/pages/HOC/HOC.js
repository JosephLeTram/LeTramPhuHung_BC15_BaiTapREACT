import React from "react";
import { useState } from "react";
import Login from "../Hooks/Login";
import Register from "../Hooks/Register";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

const ComponentDemo = (props) => {
  return (
    <div className="bg-dark text-white mt-4 display-4">Component Demo</div>
  );
};

export default function HOC(props) {
  const [modalComponent, setModalComponent] = useState(<Register />);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>DEMO HOC</h3>

      {/* Button trigger modal */}

      <button data-toggle="modal" data-target="#modelId" className="mb-5">
        open Modal
      </button>

      <Modal
        title="cybersoft"
        giaoDien={<div>ahihi</div>}
        giaoDienFunction={modalComponent}
      />

      <button
        className="btn btn-outline-success mr-3"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          //   setModalComponent(<Login />);
          dispatch({
            type: "OPEN_FORM_DANG_NHAP",
            Component: Login,
            onsubmit: () => {
              console.log("Dang nhap CLick");
            },
          });
        }}
      >
        Đăng nhập
      </button>
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          //   setModalComponent(<Register />);
          dispatch({
            type: "OPEN_FORM_DANG_KY",
            Component: Register,
            onsubmit: () => {
              console.log("Dang Ky CLick");
            },
          });
        }}
      >
        Đăng Ký
      </button>
    </div>
  );
}
