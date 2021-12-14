// Vùa mở web lên đưa dữ liệu vào redux luôn

let usLogin = null;
if (localStorage.getItem("userLogin")) {
  //Lấy ra
  usLogin = JSON.parse(localStorage.getItem("userLogin"));
}

const stateDefault = {
  userLogin: usLogin,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.userLogin = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
