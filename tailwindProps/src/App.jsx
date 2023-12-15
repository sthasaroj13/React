import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <h1 className=" bg-green-400 text-black p-4 rounded-xl mb-4">
    Hello world!
  </h1> 
  
<Cards username="Saroj shrestha" btnText="click me" pText="hello my name is saroj shrestha"/>

  
    <Cards username="sachin shrestha" btnText="submit" pText="hello my name is sachin shrestha"/></>

  )
}

export default App
// so from this tailwind and props i lean how to instal tailwinds and  i lean how to apply tailwind css in react 
// in props i handle the props  i lean about how the component is created and how  i can use same component in dublicate ways