import React, { useState, ChangeEvent, FormEvent, FC, useRef } from "react";
import { Todo } from "../models/todo";

interface Props {
  //PROPS OF ADD TODO
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  updateValue: string;
  setElementToUpdate: (el: string) => void;
  editButton: (e: ChangeEvent<HTMLFormElement>) => void;
  updating: boolean;
  inputRef: any;
}

const AddTodo: FC<Props> = ({
  todos,
  setTodos,
  updateValue,
  setElementToUpdate,
  updating,
  editButton,
  inputRef,
}) => {
  const [input, setInput] = useState<string>(""); //VALUE OF INPUT, 2-WAY BINDING
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    !updating ? setInput(e.target.value) : setElementToUpdate(e.target.value);
  };

  //HANDLE SUBMIT EVENT: ADD TODO
  const handleEvent = (e: FormEvent) => {
    e.preventDefault();
    const newTask: Todo = {
      id: `${input}${Math.random() * 1000}`,
      text: input,
      completed: false,
    };

    if (input.length < 2) {
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
          ref={inputRef}
          placeholder="Please insert todo here"
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
