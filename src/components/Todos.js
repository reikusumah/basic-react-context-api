import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { del } from "../actions/listAction";

const Todos = () => {
  const { lists, dispatch } = useContext(DataContext);
  const remove = (id) => {
    dispatch(del(id));
  };
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {lists.map((todo) => {
          return (
            <li key={todo.id} style={{ listStyle: "none" }}>
              {todo.title}
              <button
                style={{ marginLeft: 10 }}
                onClick={() => remove(todo.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
