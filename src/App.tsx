import React, { ChangeEvent, FormEvent } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";
function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [elementToUpdate, setElementToUpdate] = React.useState<string>("");
  const [id, setId] = React.useState(""); //Get the id of the element being edited
  const [updating, setUpdating] = React.useState<boolean>(false);
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

  const handleUpdate = (id: string): void => {
    setUpdating(true);
    const elementToUpdate: Todo = todos.filter((todo) => todo.id == id)[0];
    setElementToUpdate(elementToUpdate.text);
    setId(elementToUpdate.id);
  };

  const editButton = (e: FormEvent): void => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.text = elementToUpdate;
      }
      return todo;
    });
    setTodos(newTodos);
    setUpdating(false);
  };

  return (
    <div className="App">
      <AddTodo
        updateValue={elementToUpdate}
        todos={todos}
        setTodos={setTodos}
        setElementToUpdate={setElementToUpdate}
        updating={updating}
        editButton={editButton}
      />
      <TodoList
        items={todos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
