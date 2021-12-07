import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getApiPhimAction } from "../../redux/actions/PhimAction";
export default function MiddleWareRedux() {
  const { mangPhim } = useSelector((rootReducer) => rootReducer.PhimReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // // Phải gọi API mới có dữ liệu đưa lên redux
    // let promise = axios({
    //   url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // });
    // promise.then((result) => {
    //   // tạo ra 1 action là 1 object có type và (dât là dữ liệu phim sau khi lấy về từ API)
    // });
    // /*2 loại action
    // 1) action là object {type:'', data}
    // 2) function (dispatch)
    // */
    // const action = {
    //     type: "GET_API_PHIM",
    //     data: result.data.content,
    //   };
    // const action = (dispatch) => {
    //   // Gọi api...
    // };
    // const action = getApiPhimAction;
    // dispatch(getApiPhimAction);
  }, []);

  console.log("mangPhim", mangPhim);

  return (
    <div className="container">
      <h3>Middle Ware Redux</h3>
    </div>
  );
}
