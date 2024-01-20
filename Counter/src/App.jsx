import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewCom from './NewCom'
import Nav from './NavBar'


function App() {
  
 let [counter,setCounter] = useState(0)
 let[user,setuser]=useState('saroj')

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
    <Nav user={user}/>
    <NewCom/>
      <h1>Counter:{counter}</h1>
      <div className="btn">
      <button onClick={addValue}>Add Counter </button>  
      <button onClick={subValue}>Decrease Counter</button>
      </div>
     
    </>
  )
}

export default App
