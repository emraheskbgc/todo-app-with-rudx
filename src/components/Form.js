import React, { useState } from "react";
import { addTodo } from "../redux/todos/todosSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    dispatch(addTodo({ title }));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default Form;
