import { DAT_GHE, HUY_GHE } from "../types/BTDatVeTypes";

const stateDefault = {
  danhSachGheDangDat: [],
};

export const BTDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        // Ghế đang đặt đã có trong mảng =? remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // Ghế đăng đặt chưa có => thêm vào
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      // Cập nhật lại state => giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        // Ghế đang đặt đã có trong mảng =? remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      // Cập nhật lại state => giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
