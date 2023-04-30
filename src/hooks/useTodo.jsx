import { useState } from "react";
import { v4 as generatedId } from "uuid";

export function useTodo() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  localStorage.setItem("todos", JSON.stringify(todos));

  const handleAdd = (newTitle) => {
    let newTodo = {
      id: generatedId(),
      title: newTitle,
      isComplete: false,
      createdAt: new Date().toLocaleDateString("he-IL"),
    };
    setTodos([...todos, newTodo]);
  };

  const handleIsCompleteChange = (id, newIsComplete) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: newIsComplete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemove = (idToRemove) => {
    let newTodos = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(newTodos);
  };

  function handleRemoveAll() {
    setTodos([]);
  }

  function handleEditTodo(idEditTodo, newTitle) {
    let newTodos = todos.map((todo) => {
      if (todo.id === idEditTodo) {
        return {
          ...todo,
          title: newTitle,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return {
    todos,
    handleAdd,
    handleIsCompleteChange,
    handleRemove,
    handleRemoveAll,
    handleEditTodo,
  };
}
