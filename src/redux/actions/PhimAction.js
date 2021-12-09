import axios from "axios";

// closure function

export const getApiPhimAction = (maNhom = "GP01") => {
  return (dispatch) => {
    let promise = axios({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
      method: "GET",
    });

    promise.then((result) => {
      dispatch({
        type: "GET_API_PHIM",
        data: result.data.content,
      });
    });
  };
};
