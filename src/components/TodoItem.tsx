import React, { useState } from "react";
import { Todo } from "../types/todo.model";
import Button from "./Button";
import Input from "./Input";
import { useAppDispatch } from "../hooks/storeHook";
import { deleteTodo, editTodo, toggleCompleteTodo } from "./todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.text);

  const dispatch = useAppDispatch();

  function handleSave() {
    if (!editedText) {
      alert("Please fill the editing input.");
      return;
    }

    dispatch(editTodo({ id: todo.id, title: editedText }));

    setIsEditing(false);
  }

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
          autoFocus
        />
      ) : (
        <span>{todo.text}</span>
      )}

      {isEditing ? (
        <Button onClick={handleSave} className="save-button">
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
