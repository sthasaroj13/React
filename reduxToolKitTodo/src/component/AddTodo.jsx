import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/Todo/TodoSlice'

function AddTodo() {
  const [input,setInput]= useState('')
  const Dispatch = useDispatch()
  const addTodoHandler =(e)=>{
    e.preventDefault()
     Dispatch( addTodo(input))
     setInput('')
    //  console.log(s);
  }
  return (
    <>
    <form action="" onSubmit={addTodoHandler}>
        <input type="text"
        
        
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
<button type='submit' className=' bg-orange-300 ml-4  mt-3 p-2'
>AddHere</button>
    </form>
      
    </>
  )
}

export default AddTodo
