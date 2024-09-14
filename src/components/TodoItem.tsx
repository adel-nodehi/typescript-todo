import React from "react";
import { Todo } from "../types/todo.model";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
