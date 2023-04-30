import { useState } from "react";

export const ToDoItem = ({
  id,
  title,
  isComplete,
  createdAt,
  onIsCompleteChange = () => {},
  handleRemove = () => {},
  handleEditTodo = () => {},
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isEdited, setIsEdited] = useState(false);

  let classes = ["list-group-item"];
  if (isComplete) {
    classes = [...classes, "text-decoration-line-through", "text-muted"];
  }
  classes = classes.join(" ");

  function submitEdit() {
    setIsEdited(false);
    handleEditTodo(id, newTitle);
  }

  return (
    <li className={classes}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={isComplete}
        onChange={(e) => onIsCompleteChange(id, e.target.checked)}
      />
      {!isEdited ? (
        <span onClick={() => setIsEdited(true)}>{title}</span>
      ) : (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? submitEdit : null)}
        />
      )}

      <span> ({createdAt})</span>
      {!isEdited ? (
        <>
          <button
            onClick={() => handleRemove(id)}
            className="btn btn-danger float-end"
          >
            <i className="bi bi-trash-fill"></i>
          </button>
          <button
            onClick={() => setIsEdited(true)}
            className="btn btn-outline-success float-end me-1"
          >
            <i className="bi bi-pencil-square"></i>
          </button>{" "}
        </>
      ) : (
        <button
          onClick={submitEdit}
          className="btn btn-outline-success float-end me-1"
        >
          <i className="bi bi-check2-square"></i>
        </button>
      )}
    </li>
  );
};

export default ToDoItem;
