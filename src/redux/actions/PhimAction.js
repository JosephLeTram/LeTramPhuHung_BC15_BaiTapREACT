import axios from "axios";

export const getApiPhimAction = (dispatch) => {
  let promise = axios({
    url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET",
  });

  promise.then((result) => {
    dispatch({
      type: "GET_API_PHIM",
      data: result.data.content,
    });
  });
};
