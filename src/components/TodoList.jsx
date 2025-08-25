import React from "react";
import Todo from "./todo";
function Todolist({ todos, onremoveTodo, onUpdateTodo }) {
  return (
    <div style={{ width: "100%", marginTop: "40px" }}>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onremoveTodo={onremoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}
export default Todolist;
