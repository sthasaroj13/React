
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const[Color,setColor]=useState('yellow')

  return (
    <>
    <div className=' w-full h-screen ' style={{backgroundColor:Color}}>

      <h1 className=' bg-blue-300 flex justify-center p-3 font-bold '  style={{fontSize:'30px'}}>Background Changer</h1> 
      <div className='w-45 rounded-xl p-3 flex gap-4 justify-center' style={{backgroundColor:'white', marginTop:'2rem'}}>
        <button onClick={()=>setColor('red')} className=' rounded-xl w-20' style={{backgroundColor:'red',padding:'5px',fontSize:'20px',color:'white'}} >RED</button>
        <button onClick={()=>setColor('green')} className=' rounded-xl w-20' style={{backgroundColor:'green',padding:'5px',fontSize:'20px',color:'white'}} >Green</button>
        <button onClick={()=>setColor('yellow')} className=' rounded-xl w-20' style={{backgroundColor:'yellow',padding:'5px',fontSize:'20px',color:'white'}} >Yellow</button>
        <button onClick={()=>setColor('blue')} className=' rounded-xl w-20' style={{backgroundColor:'blue',padding:'5px',fontSize:'20px',color:'white'}} >Blue</button>
      </div>
    </div>
    </>
  )
}

export default App
