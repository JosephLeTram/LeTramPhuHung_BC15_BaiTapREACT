import React from "react";
const stateDefault = {
  Component: () => {
    return <p>Nội dung default</p>;
  },

  onSubmit: () => {
    console.log("Submit Default");
  },
};

export const ModalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "OPEN_FORM_DANG_NHAP": {
      state.Component = action.Component;
      state.onSubmit = action.onSubmit;
      return { ...state };
    }
    case "OPEN_FORM_DANG_KY": {
      state.Component = action.Component;
      state.onSubmit = action.onSubmit;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
