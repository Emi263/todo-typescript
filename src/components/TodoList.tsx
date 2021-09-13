import React, { FC } from "react";
import { Todo } from "../models/todo";
import SingleTodo from "./SingleTodo";
interface Props {
  items: Todo[];
  handleDelete(id: string): void;
  handleComplete(id: string): void;
  handleUpdate(id: string): void;
}

const TodoList: FC<Props> = ({
  items,
  handleDelete,
  handleComplete,
  handleUpdate,
}) => {
  return (
    <div className="Todos">
      {items && (
        <SingleTodo
          items={items}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default TodoList;
