import React, { createContext, useState } from "react";

export const DataContext = createContext();

const initialState = [
  {
    id: 1,
    title: "this is title one",
  },
];

export const DataProvider = (props) => {
  const [lists, setLists] = useState(initialState);
  const add = (title) => {
    const newItem = {
      id: lists.length + 1,
      title,
    };
    const newList = [...lists, newItem];
    setLists(newList);
  };

  return (
    <DataContext.Provider value={{ lists, add }}>
      {props.children}
    </DataContext.Provider>
  );
};
