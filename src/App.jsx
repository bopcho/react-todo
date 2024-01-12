import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: Date.now(), text: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
      {todos.map((todo) => (
  <li key={todo.id}>
    {todo.text}
    <button onClick={() => handleDelete(todo.id)}>Delete</button>
  </li>
))}
      </ul>
    </>
  );
}
