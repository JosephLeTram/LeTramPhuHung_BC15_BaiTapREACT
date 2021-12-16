import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiPhimAction } from "../../redux/actions/PhimAction";
import { NavLink } from "react-router-dom";

export default function HomeMobile(props) {
  //props.history: giúp điều hướng URL

  // Lấy mảng phim từ Redux về
  let { mangPhim } = useSelector((rootReducer) => rootReducer.PhimReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dù gọi hàm hay không gọi hàm thì action api cũng phải là function(dispatch) {}
    const action = getApiPhimAction("GP02");

    dispatch(action);
  }, []);

  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="row mt-2" key={index}>
          <div className="col-3">
            <img
              src={phim.hinhAnh}
              alt=""
              height={100}
              className="w-100"
              onError={(e) => {
                e.target.src = "https://i.pravatar.cc/300";
              }}
            />
          </div>
          <div className="col-9">
            <p>{phim.tenPhim}</p>
            <p>
              {phim.moTa.length > 100
                ? phim.moTa.substr(0, 100) + "..."
                : phim.moTa}
            </p>
            <NavLink to={`/detail/${phim.maPhim}`}>Mua Vé</NavLink>
            <br />
            <div className="text-right">
              <button
                className="btn btn-outline-danger ml-3"
                onClick={() => {
                  props.history.push("/detail/" + phim.maPhim);
                }}
              >
                Mua vé
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          // Chuyển hướng trang về trang chủ {prop.history.push()} dùng để chuyển hướng trang trong 1 sự kiện, xử lý khác với NavLink
          props.history.push("/register");
          // Chuyển hướng về trang trước đó
          // props.history.goBack();
        }}
      >
        Register
      </button>
      <h3>Danh Sách Phim</h3>
      <div>{renderPhim()}</div>
    </div>
  );
}
