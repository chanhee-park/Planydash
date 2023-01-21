import './Todo.css';
import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const mockTodos: TodoItem[] = [
  {
    id: 0,
    text: "맛있게 밥 먹기",
    completed: true,
  },
  {
    id: 1,
    text: "편하게 꿀잠 자기",
    completed: false,
  },
];

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(mockTodos);
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleAddTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newTodo) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  }

  function handleDeleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleToggleCompleted(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <form className="new-todo-form" onSubmit={handleAddTodo}>
        <input
          className="new-todo-input"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button className="add-todo-button" type="submit">
          Add Todo
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => handleToggleCompleted(todo.id)}
            />
            <span
              className={`todo-text ${todo.completed &&
                "todo-text__completed"}`}
            >
              {todo.text}
            </span>
            <button
              className="delete-todo-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
