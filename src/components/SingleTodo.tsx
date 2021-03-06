import React from "react";
import { Todo } from "../models/todo";

interface Props {
  items: Todo[];
  handleDelete(text: string): void;
  handleComplete(id: string): void;
  handleUpdate(id: string): void;
}

const SingleTodo: React.FC<Props> = ({
  items,
  handleComplete,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li className={`${item.completed ? "completed" : ""}`} key={item.id}>
          <div className="text">{item.text} </div>
          <div className="icons">
            <span onClick={() => handleDelete(item.id)}>
              <i className="fas fa-trash-alt"></i>
            </span>
            <span onClick={() => handleComplete(item.id)}>
              <i className="fas fa-check-circle"></i>
            </span>
            <span onClick={() => handleUpdate(item.id)}>
              <i className="fas fa-edit"></i>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SingleTodo;
