import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HeaderHome(props) {
  const { userLogin } = useSelector(
    (rootReducer) => rootReducer.QuanLyNguoiDungReducer
  );

  const renderButtonLogin = () => {
    if (userLogin) {
      // Đã đăng nhập
      return (
        <NavLink className="nav-link" to="/">
          {userLogin.taiKhoan}
        </NavLink>
      );
    }
    return (
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    );
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        CYBERSFOT
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">{renderButtonLogin()}</li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/hoc">
              HOC
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hooks
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item text-dark" to="/usestate">
                UseState
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/baitapusestate">
                Bai Tap Use State Chon Xe
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/demouseeffect">
                Demo Use Effect
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/demousememo">
                Demo Use Memo
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/demouseref">
                Demo Use Ref
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/demohookredux">
                Demo Hook Redux
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              API
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item text-dark" to="/democlassapi">
                Demo Class Component API
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/demofuncapi">
                Demo Function Component API
              </NavLink>
              <NavLink className="dropdown-item text-dark" to="/middleware">
                MIddle Ware Redux
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
