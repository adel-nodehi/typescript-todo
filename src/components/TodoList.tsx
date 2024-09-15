import React from "react";
import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks/storeHook";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todo);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
