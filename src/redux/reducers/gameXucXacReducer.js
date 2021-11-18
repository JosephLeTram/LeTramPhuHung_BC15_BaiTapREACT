const stateDefault = {
  banChon: "Tài",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./diceImage/1.png", diem: 1 },
    { hinhAnh: "./diceImage/2.png", diem: 2 },
    { hinhAnh: "./diceImage/3.png", diem: 3 },
  ],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }

    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      // Random ra số ngẫu nhiên
      for (let i = 0; i < 3; i++) {
        //Random
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //  Từ số ngẫu nhiên tạo ra object xúc xắc ngẫu nhiên
        let xucXacNgauNhien = {
          hinhAnh: `./diceImage/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };

        // Mỗi lần random => đưa xúc xắc ngãu nghiên vào mảng
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      // cập nhật lại state redux
      state.mangXucXac = mangXucXacNgauNhien;

      //Cập nhật số bàn chơi
      state.tongSoBanChoi += 1;

      // Tính tổng điểm xúc xắc
      //   let tongDiem =
      //     state.mangXucXac[0].diem +
      //     state.mangXucXac[1].diem +
      //     state.mangXucXac[2].diem;

      let tongDiem = state.mangXucXac.reduce((diem, xucXac, index) => {
        return (diem += xucXac.diem);
      }, 0);
      //    Xét điều kiện tổng điểm và kết quả đặt cược
      if (tongDiem > 10 && state.banChon === "Tài") {
        state.soBanThang += 1;
      } else if (tongDiem <= 10 && state.banChon === "Xỉu") {
        state.soBanThang += 1;
      }
      console.log("Tổng điểm", tongDiem);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
