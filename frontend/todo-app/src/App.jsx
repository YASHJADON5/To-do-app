import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {Todos} from './components/Todos'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]);
  
  fetch("http://localhost:7000/todo")
  .then(async (res)=>{
        const json= await res.json();
       
        setTodos(json.todos);
  })
  return (
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
  </div>
  )
}

export default App
