import React, { FormEvent, useEffect, useRef } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo";
import gif from "./lottie/winning.gif";
function App() {
  const todosJson = localStorage.getItem("todos");
  const localStorageItem: Todo[] =
    todosJson != null ? JSON.parse(todosJson) : [];
  const [todos, setTodos] = React.useState<Todo[]>(localStorageItem); //if items in local storage, get them, otherwise []
  const [elementToUpdate, setElementToUpdate] = React.useState<string>("");
  const [id, setId] = React.useState(""); //Get the id of the element being edited
  const [updating, setUpdating] = React.useState<boolean>(false);

  //ref
  const inputRef = useRef<HTMLInputElement>(null);

  //update local storage
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const container = React.useRef(null);

  //functions

  //DELETE THE TODO
  const handleDelete = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setElementToUpdate("");
    setUpdating(false);
  };

  //COMPELTE FUNCTIONALITY
  const handleComplete = (id: string): void => {
    const updatedTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo; //need to return something to form an array
    });
    setTodos(updatedTodos);
  };

  //UPDATE THE VALUE OF THE TEXT INPUT WHILE EDITING
  const handleUpdate = (id: string): void => {
    setUpdating(true);
    const elementToUpdate: Todo = todos.filter((todo) => todo.id === id)[0];
    setElementToUpdate(elementToUpdate.text);
    setId(elementToUpdate.id);
    inputRef.current?.focus();
  };

  //EDIT FUNCTIONALITY
  const editButton = (e: FormEvent): void => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = elementToUpdate;
      }
      return todo;
    });
    setTodos(newTodos);
    setUpdating(false);
  };

  return (
    <div className="app">
      <AddTodo //ADD TODO COMPONENT
        updateValue={elementToUpdate}
        todos={todos}
        setTodos={setTodos}
        setElementToUpdate={setElementToUpdate}
        updating={updating}
        editButton={editButton}
        inputRef={inputRef}
      />

      <section>
        <>
          {todos.filter((todo) => todo.completed === false).length == 0 && (
            <>
              {" "}
              <h5>Yoohu, winning! Nothing left to do!</h5>
              <div className="imgDiv">
                {" "}
                <img src={gif} className="gif" alt="champion cup" />{" "}
              </div>{" "}
            </>
          )}
        </>
      </section>
      <TodoList //TODOLIST COMPONENT
        items={todos.filter((todo) => todo.completed !== true)}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleUpdate={handleUpdate}
      />
      <section>
        <h1 className="completed">Completed</h1>
        {todos.filter((todo) => todo.completed === true).length == 0 && (
          <h4>You have not completed anything so far</h4>
        )}
        <TodoList
          items={todos.filter((todo) => todo.completed === true)}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleUpdate={handleUpdate}
        />
      </section>
    </div>
  );
}

export default App;
