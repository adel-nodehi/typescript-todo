import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo.model";

type initialStateType = Todo[];

const initialState: initialStateType = [];

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
    editTodo: {
      prepare: (payload: { id: string; title: string }) => {
        return {
          payload: {
            id: payload.id,
            title: payload.title,
          },
        };
      },

      reducer: (
        state,
        action: PayloadAction<{ id: string; title: string }>
      ) => {
        const selectedTodo = state.find(
          (todo) => todo.id === action.payload.id
        );

        if (!selectedTodo || selectedTodo.text === action.payload.title) return;

        selectedTodo.text = action.payload.title;
      },
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
