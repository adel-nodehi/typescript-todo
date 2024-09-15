import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/todo.model";

type initialStateType = Todo[];

const initialState: initialStateType = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: () => {
      console.log("add");
    },
    deleteTodo: () => {
      console.log("delete");
    },
    editTodo: () => {
      console.log("edit");
    },
    toggleCompleteTodo: () => {
      console.log("toggleComplete");
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleCompleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
