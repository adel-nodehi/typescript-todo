import React, { useState } from "react";
import { Todo } from "../types/todo.model";
import Button from "./Button";
import Input from "./Input";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.text);

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

          <Button
            onClick={() => console.log("delete")}
            className="delete-button"
          >
            Delete
          </Button>

          <Button
            onClick={() => console.log("complete")}
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
