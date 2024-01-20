import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-400 p-2 from-neutral-600 m-4' >hello tailwind</h1>

<Comp cartname=
'shoe Cart' shoename='Golden Nike' />
<Comp cartname='Shoeee Cart' shoename='Expensive Nike'/>
    </>
  )
}

export default App
