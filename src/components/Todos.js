import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Todos = () => {
  const { lists } = useContext(DataContext);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {lists.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
