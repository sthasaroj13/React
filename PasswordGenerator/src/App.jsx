import { useState,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[length,setLength] =useState(8)
  const[numallowed,setNumallowed] = useState(false)
  const[charallowed,setCharallowed] = useState(false)
  const [password,setPasseword] = useState('')
const passwordGenerator = useCallback(()=>{
  let pass= ''
  let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numallowed) str +='0123456789'
  if(charallowed) str +='!@#$%^&*]()_+}{]['

  for (let i = 1; i < length; i++) {
    let char = Math.floor(Math.random() *str.length +1)
    pass += str.charAt(char)
  }
  setPasseword(pass)
},[length,numallowed,charallowed])
//useref hook
//useRef is use to take reference of any thing in page an manuplate it
let passwoedref = useRef(null)
//callback is use to optimize the  functions 
const clickPas=useCallback(()=>{
  passwoedref.current?.select()
  passwoedref.current?.setSelectionRange(0,6)
window.navigator.clipboard.writeText(password)
},[password])
// useEffect is use to  when page is load useEffect is call
useEffect(()=>{
passwordGenerator()
},[length,numallowed,charallowed,passwordGenerator])

  return (
    <>
      <h1 className=' font-sans'style={{fontSize:'25px', color:'white'}}>Password Generator</h1>
    
    <div className=' w-full max-v-d mx-auto bg-indigo-300 p-4 rounded-xl' >
<input className=' outline-none w-60 py-1 px-3'type="text"
value={password}  placeholder='password' readOnly ref={passwoedref}/> <button onClick={clickPas} className=' bg-sky-700 rounded-lg' style={{color:'white', padding:'2px'}}>Copy</button>

    <div className=' flex gap-5 justify-center'>
      <div>
        <input  type="range" min={6}  max={20}
        value={length} className=' cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>length:{length}</label>
      </div>
      <div >
        <input type="checkbox"
        defaultChecked={numallowed}
        id='numallowed' 
        onChange={()=>{setNumallowed((pev)=>!pev)}}/>
        <label htmlFor="">Numbers</label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={charallowed}
        id='charallowed' 
        onChange={()=>{setCharallowed((pev)=>!pev)}}/>
        <label htmlFor="">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
