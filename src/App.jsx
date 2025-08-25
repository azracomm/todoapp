import { useState, useEffect } from 'react';
import TodoList from './components/todolist';
import TodoCreate from './components/todocreate';

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos =
      todos.map((todo) => {
        if (todo.id !== newTodo.id) {
          return todo;
        }
        return newTodo;
      })

    setTodos([...updatedTodos]);
  }

  useEffect(() => {
    console.log("Added a new todo:", todos);
  }, [todos]);

  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onremoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
