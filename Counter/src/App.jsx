import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewCom from './NewCom'

function App() {
  
 let [counter,setCounter] = useState(0)

   let addValue =()=>{
let count = counter+1
if(count>20){
alert('you can not add further ')
return;
}
setCounter(count)

  }
  let subValue =()=>{
    let Sub = counter-1
    if (Sub<=0) {
      alert('you cannot go less than one')
      return
      
    }
    setCounter(Sub)
  }

  return (
    <>
    <NewCom/>
      <h1>Counter:{counter}</h1>
      <button onClick={addValue}>Add Counter:{counter} </button>  <br /> <br />
      <button onClick={subValue}>Decrease Counter:{counter}</button>
    </>
  )
}

export default App
