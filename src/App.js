import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';
import "./app.css";

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className='wrapper'>
      <div>
        <h1>Todo Application</h1>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
