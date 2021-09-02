import React from "react";
import { Todo } from "../models/todo";

interface Props {
  items: Todo[];
  handleDelete(text: string): void;
  handleComplete(id: string): void;
}

const SingleTodo: React.FC<Props> = ({
  items,
  handleComplete,
  handleDelete,
}) => {
  return (
    <div>
      {items.map((item) => (
        <li className={`${item.completed ? "completed" : ""}`} key={item.id}>
          {item.text}{" "}
          <span onClick={() => handleDelete(item.id)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <span onClick={() => handleComplete(item.id)}>
            <i className="fas fa-check-circle"></i>
          </span>
        </li>
      ))}
    </div>
  );
};

export default SingleTodo;
