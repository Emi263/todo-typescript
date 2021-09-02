import React, { FC } from "react";
import { Todo } from "../models/todo";
import SingleTodo from "./SingleTodo";
interface Props {
  items: Todo[];
  handleDelete(id: string): void;
  handleComplete(id: string): void;
}

const TodoList: FC<Props> = ({ items, handleDelete, handleComplete }) => {
  //FC: acts like a functional component,
  //in angle brackets <{}> our own props. It adds our props to FC props (children)

  return (
    <div className="Todos">
      <SingleTodo
        items={items}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default TodoList;
