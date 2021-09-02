import React, { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";
function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  //functions
  const handleDelete = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleComplete = (id: string): void => {
    const updatedTodos: Todo[] = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo; //need to return something to form an array
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList
        items={todos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;
