import React, { FormEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useAppDispatch } from "../hooks/storeHook";
import { addTodo } from "./todoSlice";
import { Todo } from "../types/todo.model";

const NewTodo: React.FC = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!title) {
      alert("Please fill the input.");
      return;
    }

    dispatch(addTodo(title));

    setTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
        placeHolder="Add a todo"
        autoFocus
      />
      <Button type="submit" className="todo-button">
        Add
      </Button>
    </form>
  );
};

export default NewTodo;
