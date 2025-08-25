import "../css/todo.css";
import { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newtodo, setNewTodo] = useState("");
  const ClearInput = () => {
    setNewTodo("");
  };

  function createTodo() {
    if (!newtodo) return;
    const request = {
      id: Math.floor(Math.random() * 33280),
      content: newtodo,
    };
    onCreateTodo(request);
    ClearInput();
  }

  return (
    <div className="todo-create">
      <input
        value={newtodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Write a todo"
      />
      <button onClick={createTodo} className="create-button">
        Create a todo
      </button>
    </div>
  );
}

export default TodoCreate;
