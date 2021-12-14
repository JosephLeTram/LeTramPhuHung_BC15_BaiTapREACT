import axios from "axios";
import { http } from "../../util/setting";
import { history } from "../../App";

export const dangNhapAction = (userLogin) => {
  console.log("Thông tin đăng nhập", userLogin);
  return async (dispatch) => {
    try {
      let result = await http.post("/api/QuanLyNguoiDung/dangnhap", userLogin);

      dispatch({
        type: "DANG_NHAP",
        data: result.data.content,
      });

      // Lưu token vào local storage
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
      localStorage.setItem("accessToken", result.data.content.accessToken);

      console.log("result", result.data.content);
      //Chuyển hướng trang sau khi đăng nhập thành công
      history.push("/home");
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
