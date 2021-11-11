import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // Nơi chứa toàn bộ state của ứng dụng (Thay vì đặt dưới this.state của component)

  stateGioHang: (state = []) => {
    return state;
  },
});

export const store = createStore(rootReducer);
