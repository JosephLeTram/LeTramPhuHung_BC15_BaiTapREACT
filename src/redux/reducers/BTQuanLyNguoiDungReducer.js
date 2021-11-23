const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoten: "Nguyên Vẵn A",
      matKhau: "123",
      soDienThoai: "12345667",
      email: "nguyenvana@gmail.com",
      maLoaiNguoiDung: "KhachHang",
    },
    {
      taiKhoan: "nguyenvanb",
      hoten: "Nguyên Vẵn B",
      matKhau: "321",
      soDienThoai: "76543421",
      email: "nguyenvanb@gmail.com",
      maLoaiNguoiDung: "QuanTri",
    },
  ],
};

export const BTQuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_NGUOI_DUNG": {
      state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

      return { ...state };
    }
    default:
      return state;
  }
};
