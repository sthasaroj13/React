import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoslice'

function AddTodo() {
    const [input,setInput]= useState('')
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
e.preventDefault()
dispatch(addTodo(input))
setInput('')
console.log(setInput);
    }
  return (
    <>
    <div style={{display:'flex'}}>
    <form onSubmit={addTodoHandler}>
        <input type="text" 
        
        placeholder='Enter a todo'
        value={input}
     onChange={(e)=> setInput(e.target.value)}
        />
        <button type='submit'>click</button>
        
        </form>  
    </div>
  
    </>
  )
}

export default AddTodo
