import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import { Todo } from "../models/todo";

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  updateValue: string;
  setElementToUpdate: (el: string) => void;
  editButton: (e: ChangeEvent<HTMLFormElement>) => void;
  updating: boolean;
}

const AddTodo: FC<Props> = ({
  todos,
  setTodos,
  updateValue,
  setElementToUpdate,
  updating,
  editButton,
}) => {
  const [input, setInput] = useState<string>("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    !updating ? setInput(e.target.value) : setElementToUpdate(e.target.value);
  };

  const handleEvent = (e: FormEvent) => {
    e.preventDefault();
    const newTask: Todo = {
      id: `${input}${Math.random() * 1000}`,
      text: input,
      completed: false,
    };

    if (input.length === 0) {
      return;
    } else {
      setTodos([newTask, ...todos]);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={updating ? editButton : handleEvent}>
        <input
          type="text"
          onChange={handleInput}
          value={!updating ? input : updateValue}
        />
        <button type="submit">{!updating ? "Add todo" : "Update"} </button>
      </form>
    </div>
  );
};

export default AddTodo;
