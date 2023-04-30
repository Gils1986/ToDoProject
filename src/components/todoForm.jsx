import { useState } from "react";

export const ToDoForm = ({ onSubmit = () => {} }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(null);
  };
  const handleSubmit = () => {
    if (input.length < 2) {
      setError("Input is required for at least two characters");
      return;
    }
    onSubmit(input);
    setInput("");
  };
  return (
    <div className="todo-form">
      <div className="input-group mb-4">
        <span className="input-group-text">I need to:</span>
        <input
          value={input}
          onInput={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="text"
          className="form-control"
          placeholder="Buy milk"
        />
        <button onClick={handleSubmit} className="btn btn-success">
          Add to list
        </button>
      </div>
      {error ? <div className="text-danger">{error}</div> : null}
    </div>
  );
};

export default ToDoForm;
