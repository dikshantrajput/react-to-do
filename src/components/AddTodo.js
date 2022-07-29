import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTodo = ({addTodo}) => {
  const [content, setContent] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();

    if(!content) {
      alert("Enter text")

      return;
    }

    const todo = {
      id: nanoid(),
      body: content
    };

    addTodo(todo);
    setContent('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder='Learning React' value={content} onChange={(e) => setContent(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
}

export default AddTodo;
