export const GET_HEADER_COLOR = "GET_HEADER_COLOR";

export const setHeaderColor = (headerColor) => {
  return {
    type: GET_HEADER_COLOR,
    headerColor,
  };
};
