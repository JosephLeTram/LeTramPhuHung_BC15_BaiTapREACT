import { XOA_NGUOI_DUNG } from "../types/BTQuanlyNguoiDungTypes";

const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyên Vẵn A",
      matKhau: "123",
      soDienThoai: "12345667",
      email: "nguyenvana@gmail.com",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      hoTen: "Nguyên Vẵn B",
      matKhau: "321",
      soDienThoai: "76543421",
      email: "nguyenvanb@gmail.com",
      maLoaiNguoiDung: "QuanTri",
    },
  ],

  nguoiDungChinhSua: {
    taiKhoan: "",
    hoTen: "",
    matKhau: "",
    soDienThoai: "",
    email: "",
    maLoaiNguoiDung: "",
  },
};

export const BTQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

      return { ...state };
    }

    case XOA_NGUOI_DUNG: {
      state.mangNguoiDung = [
        ...state.mangNguoiDung.filter(
          (nguoiDung) => nguoiDung.taiKhoan !== action.taiKhoan
        ),
      ];

      return { ...state };
    }

    case "CHINH_SUA_NGUOI_DUNG": {
      state.nguoiDungChinhSua = action.nguoiDung;
      return { ...state };
    }

    default:
      return state;
  }
};
