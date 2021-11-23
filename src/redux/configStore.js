import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { BTQuanLyNguoiDungReducer } from "./reducers/BTQuanLyNguoiDungReducer";

const rootReducer = combineReducers({
  // Nơi chứa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)

  stateGioHang: gioHangReducer,

  gameXucXacReducer,

  BTQuanLyNguoiDungReducer,

  // ....stateBaiTap:
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
