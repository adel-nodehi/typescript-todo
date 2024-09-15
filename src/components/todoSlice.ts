import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo.model";

type initialStateType = Todo[];

const initialState: initialStateType = [
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

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: crypto.randomUUID(),
        text: action.payload,
        isCompleted: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: () => {
      console.log("edit");
    },
    toggleCompleteTodo: (state, action: PayloadAction<string>) => {
      const selectedTodo = state.find((todo) => todo.id === action.payload);

      if (!selectedTodo) return;

      selectedTodo.isCompleted = !selectedTodo.isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleCompleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
