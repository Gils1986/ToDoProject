import ToDoItem from "./todoItem";

export const ToDoList = ({
  todos = [],
  handleRemove = () => {},
  onIsCompleteChange = () => {},
  handleEditTodo = () => {},
}) => {
  return (
    <div className="todo-list">
      <ul className="list-group">
        {todos
          .sort((a, b) => (a.isComplete ? 1 : -1))
          .map((todo) => {
            return (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isComplete={todo.isComplete}
                createdAt={todo.createdAt}
                onIsCompleteChange={onIsCompleteChange}
                handleRemove={handleRemove}
                handleEditTodo={handleEditTodo}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
