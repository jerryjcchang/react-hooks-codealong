import React, { useState, useEffect } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return(
    <div
      className="todo"
      style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      { todo.text }
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');
  const [otherValue, setOtherValue] = useState({name: "Bruno", age: 25})
  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add To-do"/>
    </form>
  )
}

function App() {
  const [attribute, funcToSetAttribute] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...attribute, { text }];
    funcToSetAttribute(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...attribute];
    newTodos[index].isCompleted = true;
    funcToSetAttribute(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...attribute];
    newTodos.splice(index, 1);
    funcToSetAttribute(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {attribute.map((todo, index) =>
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />)}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}



export default App;
