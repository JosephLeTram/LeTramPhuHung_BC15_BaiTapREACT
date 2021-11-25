import { XOA_NGUOI_DUNG } from "../types/BTQuanlyNguoiDungTypes";
// Khai báo action
export const xoaNguoiDungAction = (taiKhoan) => {
  return {
    type: XOA_NGUOI_DUNG,
    taiKhoan: taiKhoan,
  };
};
