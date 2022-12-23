import React, { Fragment, useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([
    { name: "Something 1" },
    { name: "Something 2" },
    { name: "Something 3" },
  ])

  const handleTodoAdd = () => {
    setTodos([...todos, { name: todo }])
    setTodo('')
  }

  return (
    <Fragment>
      <label htmlFor='todo-input'>Todo:</label>
      <input id='todo-input' value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handleTodoAdd}>Add</button>

      <div>
        <h1>Todos</h1>
        <hr />
        {todos.map((item, index) => {
          return (
            <h4 key={index}>{item.name}</h4>
          )
        })}
      </div>
    </Fragment>
  )
}

export default Todo