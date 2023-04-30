import { useTodo } from "../hooks/useTodo";
import { ToDoForm } from "./todoForm";
import { ToDoList } from "./todoList";

const ToDo = () => {
  const {
    todos,
    handleAdd,
    handleIsCompleteChange,
    handleRemove,
    handleRemoveAll,
    handleEditTodo,
  } = useTodo();

  return (
    <div className="todo-container container">
      <ToDoForm onSubmit={handleAdd} />
      {localStorage.getItem("todos") ? (
        <span>
          <button onClick={handleRemoveAll} className="btn btn-danger mb-1">
            Clear all
          </button>
        </span>
      ) : null}

      <ToDoList
        todos={todos}
        handleRemove={handleRemove}
        onIsCompleteChange={handleIsCompleteChange}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default ToDo;
