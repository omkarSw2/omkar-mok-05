import {  ERROR, LOADING, SUCCESS } from "./actionTyes";

const initstate = {
  isLoding: false,
  isError: false,
  data: [],
};

export const reducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case SUCCESS:
      return {
        ...state,
        isLoding: false,
        isError: false,
        data: payload,
      };

    case ERROR:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    default:
      return state;
  }
};
