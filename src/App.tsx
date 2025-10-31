import TodoCreate from "./components/todoCreate/TodoCreate";
import TodoList from "./components/todoList/TodoList";

const App = () => {
  return (
    <div className="app">
      <TodoCreate />
      <TodoList />
    </div>
  );
};

export default App;
