import { useState } from 'react'

import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className=' bg-pink-400'>redux toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
