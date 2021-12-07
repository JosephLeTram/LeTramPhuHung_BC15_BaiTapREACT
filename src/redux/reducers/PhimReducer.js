const stateDefault = {
  mangPhim: [],
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
