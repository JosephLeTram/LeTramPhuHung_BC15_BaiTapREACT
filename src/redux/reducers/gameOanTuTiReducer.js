const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/oanTuTiImage/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/oanTuTiImage/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/oanTuTiImage/bao.png", datCuoc: true },
  ],

  ketQua: "Bạn Thắng!",

  soBanThang: 0,
  soBanChoi: 0,

  computer: { ma: "bua", hinhAnh: "./img/oanTuTiImage/keo.png" },
};

export const gameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];

      //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyển lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      // setState của mangCuoc => render lại giao diện
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;

      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa Nhau!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Bạn Đã Thua!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "Bạn Thắng !!";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "Bạn Thắng !!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa Nhau!!";
          } else {
            state.ketQua = "Bạn Đã Thua!!";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Bạn Đã Thua!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "Bạn Thắng !!";
          } else {
            state.ketQua = "Hòa Nhau!!";
          }
          break;

        default:
          state.ketQua = "Bạn Thắng !!";
          state.soBanThang += 1;
          break;
      }
      state.soBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
