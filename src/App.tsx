import Title from "./components/Title";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="todo-app">
      <Title>Todo List</Title>

      <NewTodo />

      <TodoList />
    </div>
  );
};

export default App;
