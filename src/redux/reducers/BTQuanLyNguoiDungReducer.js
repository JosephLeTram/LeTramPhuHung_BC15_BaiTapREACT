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

    case "CAP_NHAT_NGUOI_DUNG": {
      //lấy dữ liệu người dùng trong mảng ra
      let nguoiDung = state.mangNguoiDung.find(
        (nd) => nd.taiKhoan === action.nguoiDung.taiKhoan
      );

      if (nguoiDung) {
        for (let key in action.nguoiDung) {
          nguoiDung[key] = action.nguoiDung[key];
        }
      }

      state.mangNguoiDung = [...state.mangNguoiDung];

      return { ...state };
    }

    default:
      return state;
  }
};
