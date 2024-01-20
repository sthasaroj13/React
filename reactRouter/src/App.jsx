import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1 className=' bg-slate-400 text-xl'>React Router</h1>
    </>
  )
}

export default App
