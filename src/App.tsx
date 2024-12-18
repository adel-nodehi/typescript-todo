import { Provider } from "react-redux";
import { store } from "./store";

import Title from "./components/Title";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <Title>Todo List</Title>

        <NewTodo />

        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
