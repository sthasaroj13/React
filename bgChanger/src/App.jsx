import { useState } from "react"

function App(){
 const[marks,setMarks]= useState(33)

//  let updateValue=()=>{
//   setMarks("sorry you actual marks is ",20)
// }
 // so you can call usestate  by making function or you can inject function directly in jsx
  
  return (
    <>
    <h1>My total marks is {marks}</h1>
     <button onClick={()=>{setMarks(15)}} >Update</button>
  
    </>
  )
}


export default App
