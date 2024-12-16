import { Todo } from "../types/todo.model";

export const loadTodos = () => {
  const todos = localStorage.getItem("todo-list");
  return todos === null ? undefined : JSON.parse(todos);
};

export const setTodos = (todos: Todo[]) => {
  localStorage.setItem("todo-list", JSON.stringify(todos));
};
