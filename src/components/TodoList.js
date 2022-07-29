import React from 'react';

const TodoList = ({todos, deleteTodo}) => {
  if(!todos.length) {
    return(
      <span>
        No Todos!!!
      </span>
    );
  }
  
  return (
    <div className='todo__list'>
      {todos.map(todo => (
        <div key={todo.id} className="todo__item">
          <p>{todo.body}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
