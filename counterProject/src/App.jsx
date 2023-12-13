import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter] =useState(0)
// let counter =15;
const addvalue =()=>{
//  counter= counter +1;
if(counter>=22){
  setCounter(counter)

}
else{

  setCounter(counter+1)
}
}
const subValue=()=>{
  if(counter<=0){
    setCounter(counter)


  }
  else{
    setCounter(counter-1)
  }
}
  return (
    <>
    <h1>counter Project</h1>
    <h2>Counter value:{counter}</h2>

    <button
    onClick={addvalue}>Add value</button> &nbsp; &nbsp;
    <button onClick={subValue}> Decrese value</button>
    </>
  )
}

export default App
//this is the hooking in react which  i apply by using onclick funtion in button and then  i create the arrow function  after that i use userstate()
//by the way userstate is  alwys in arry so i make a array variable then after  i set  the value in  setcounter() in arrow function
