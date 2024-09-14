import React from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = [
    {
      id: "sdsd",
      text: "read something",
      isCompleted: true,
    },
    {
      id: "ssdsd",
      text: "read something",
      isCompleted: false,
    },
  ];

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
