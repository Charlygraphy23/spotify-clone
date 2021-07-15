/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { GET_HEADER_COLOR } from "./action.types";

let initialState = {
  headerColor: "transparent",
};

export default (state = initialState, action) => {
  const { headerColor } = action;
  switch (action.type) {
    case GET_HEADER_COLOR:
      return {
        ...state,
        headerColor,
      };

    default:
      return state;
  }
};
