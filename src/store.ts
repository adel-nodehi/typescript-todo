import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./components/todoSlice";

import { loadTodos, setTodos } from "./utils/localStorage";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  preloadedState: {
    todo: loadTodos(),
  },
});

store.subscribe(() => {
  const state = store.getState().todo;
  setTodos(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
