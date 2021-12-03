const stateDefault = {
  arrContent: [
    { name: "Yone", content: "Hello Arcane" },
    { name: "Yassuo", content: "Hello Brother" },
  ],
};

export const FacebookAppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      state.arrContent = [...state.arrContent, action.comment];

      return { ...state };
    }
    default:
      return { ...state };
  }
};
