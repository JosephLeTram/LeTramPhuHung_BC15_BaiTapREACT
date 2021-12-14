import axios from "axios";
import { KEY_TOKEN_CYBERSOFT, TOKEN_CYBERSOFT } from "../../util/setting";

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

export const layThongTinLichChieuPhim = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
        headers: {
          [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT,
        },
      });
      console.log("result", result);
      //Sau khi lấy được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_CHI_TIET_PHIM_LICH_CHIEU",
        data: result.data.content,
      });
    } catch (err) {
      console.log("erorr", err.response?.data);
    }
  };
};
