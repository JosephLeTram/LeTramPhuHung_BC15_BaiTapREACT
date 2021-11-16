// Giá trị mặc định ban đầu của state
const stateDefault = [];

export const gioHangReducer = (state = [], action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = state;

      // Kiểm tra sp có trong giả hàng hay chưa
      let spGH = gioHang.find((sp) => sp.maSP === action.spGH.maSP);
      if (spGH) {
        spGH.soLuong += 1;
      } else {
        gioHang.push(action.spGH);
      }

      // trả về state mới => giao diện cập nhật
      // Immutable: tính bất biến của Redux
      return [...gioHang]; // Trả về state sau khi xử lý
    }

    case "XOA_GIO_HANG": {
      let gioHangCapNhat = state.filter((sp) => sp.maSP !== action.maSP);
      return [...gioHangCapNhat];
    }

    case "TANG_GIAM_SO_LUONG": {
      let sanPhamGioHang = state.find((sp) => sp.maSP === action.maSP);
      if (sanPhamGioHang) {
        sanPhamGioHang.soLuong += action.soLuong;
        if (sanPhamGioHang.soLuong < 1) {
          sanPhamGioHang.soLuong -= action.soLuong;
          alert("Sản phẩm tối thiểu phải là 1");
        }
      }

      // do dữ liệu trả vè phải là mảng để bên giao diện sử dụng map() để render nên trả về state (mảng) thay vì sanPhamGioHang (object)
      return [...state];
    }
    default:
      return state;
  }
};
