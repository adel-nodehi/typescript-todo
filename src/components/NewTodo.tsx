import React from "react";
import Input from "./Input";
import Button from "./Button";

const NewTodo: React.FC = () => {
  return (
    <form className="todo-form">
      <Input className="todo-input" placeHolder="Add a todo" />
      <Button
        type="submit"
        className="todo-button"
        onClick={() => console.log("ADD todo")}
      >
        Add
      </Button>
    </form>
  );
};

export default NewTodo;
