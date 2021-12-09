const stateDefault = {
  mangPhim: [
    {
      maPhim: 1,
      tenPhim: "Movie Name",
      hinhAnh: "https://i.pravatar.cc/250",
      moTa: "Description",
    },
  ],
};

export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_PHIM": {
      state.mangPhim = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
