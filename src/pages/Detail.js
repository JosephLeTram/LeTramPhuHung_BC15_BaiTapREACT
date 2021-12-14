import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { layThongTinLichChieuPhim } from "../redux/actions/PhimAction";

export default function Detail(props) {
  // console.log(props.location);
  const { chiTietLichChieuPhim } = useSelector(
    (rootReducer) => rootReducer.PhimReducer
  );
  console.log("Chi Tiet Lich Chieu Phim", chiTietLichChieuPhim);
  const dispatch = useDispatch();
  useEffect(() => {
    //Call API
    let maPhim = props.match.params.maPhim;
    const action = layThongTinLichChieuPhim(maPhim);
    dispatch(action);
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <img
            src={chiTietLichChieuPhim.hinhAnh}
            height={450}
            width={350}
            alt={chiTietLichChieuPhim.hinhAnh}
          />
        </div>
        <div className="col-4">
          <h3 className="display-4 text-success">
            {" "}
            Tên Phim: {chiTietLichChieuPhim.tenPhim}
          </h3>
          <p>{chiTietLichChieuPhim.moTa}</p>
        </div>
      </div>
    </div>
  );
}
