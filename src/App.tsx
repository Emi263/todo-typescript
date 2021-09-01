import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Todo } from "./models/todo";
function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const handleDelete = (text: string): void => {
    setTodos(todos.filter((todo) => todo.text != text));
  };

  return (
    <div className="App">
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList items={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
