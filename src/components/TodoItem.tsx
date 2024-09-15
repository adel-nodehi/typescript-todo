import React, { useState } from "react";
import { Todo } from "../types/todo.model";
import Button from "./Button";
import Input from "./Input";
import { useAppDispatch } from "../hooks/storeHook";
import { deleteTodo, toggleCompleteTodo } from "./todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.text);

  const dispatch = useAppDispatch();

  function handleDelete() {
    const isConfirmed = window.confirm(
      `Are you shore want to delete "${todo.text}"?`
    );

    if (!isConfirmed) return;

    dispatch(deleteTodo(todo.id));
  }

  return (
    <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
      {isEditing ? (
        <Input
          className="edit-input"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      {isEditing ? (
        <Button onClick={() => console.log("save")} className="save-button">
          Save
        </Button>
      ) : (
        <>
          <Button
            onClick={() => setIsEditing((cur) => !cur)}
            className="edit-button"
          >
            Edit
          </Button>

          <Button onClick={handleDelete} className="delete-button">
            Delete
          </Button>

          <Button
            onClick={() => dispatch(toggleCompleteTodo(todo.id))}
            className="complete-button"
          >
            Complete
          </Button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
