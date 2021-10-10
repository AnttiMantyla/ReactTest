import React, { useState } from 'react';
import TodoTable from './TodoTable';
import './App.css';

function App() {

  const [todo, setTodo] = useState({description: '', date: ''});

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }


  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }


  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged}/>
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;