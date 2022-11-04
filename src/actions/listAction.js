export const add = (text) => {
  return {
    type: "ADD",
    payload: text,
  };
};

export const del = (id) => {
  return {
    type: "DEL",
    payload: id,
  };
};
