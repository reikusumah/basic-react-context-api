import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { add } from "../actions/listAction";

const Form = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(DataContext);
  const change = (e) => {
    setText(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={text}
        placeholder="Enter new List..."
        onChange={change}
      />
    </form>
  );
};

export default Form;
