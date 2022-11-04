export const listReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      const newItem = {
        id: state.length + 1,
        title: payload,
      };
      return [...state, newItem];
    case "DEL":
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
};
