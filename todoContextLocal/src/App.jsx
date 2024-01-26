import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-orange-400 flex justify-center text-3xl text-slate-300' >hello TODO</h1>
    </>
  )
}

export default App
