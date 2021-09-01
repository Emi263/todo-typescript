import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { Todo } from "./models/todo";

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const AddTodo: FC<Props> = ({ todos, setTodos }) => {
  const [input, setInput] = useState<string>("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleEvent = (e: FormEvent) => {
    e.preventDefault();
    const newTask: Todo = {
      id: `${input}${Math.random() * 1000}`,
      text: input,
    };
    setTodos([newTask, ...todos]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleEvent}>
        <input type="text" onChange={handleInput} value={input} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
