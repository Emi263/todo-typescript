import React, { FC } from "react";
import { Todo } from "./models/todo";

interface Props {
  items: Todo[];
  handleDelete(text: string): void;
}

const TodoList: FC<Props> = ({ items, handleDelete }) => {
  //FC: acts like a functional component,
  //in angle brackets <{}> our own props. It adds our props to FC props (children)

  return (
    <div className="Todos">
      {items.map((item) => (
        <li key={item.id}>
          {item.text} <span onClick={() => handleDelete(item.text)}>X</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
