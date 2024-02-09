import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'

function App() {
  const[showForm ,setShowForm]=useState(false)
  const handleClick=(e)=>{
setShowForm(!showForm)
  }

  return (
    <>
      
      <h1>UseEffect</h1>

      <div>please enter your name :
        <button onClick={handleClick}>Add name</button>
      </div> <br />
      {showForm && <Name/>}
    </>
  )
}

export default App
