import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoslice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  return (
    <>
    <div style={{ marginTop:'2rem'}}>
   
      {todos.map((val) => (
        <div style={{display:"flex", gap:'2rem'}}>
        <li key={val.id}>
          {val.text}
          <button style={{}}
          onClick={(()=> dispatch(removeTodo(val.id)))}>
            X</button>
        </li>
        </div>
        
      ))}
    </div>
      
    </>
  );
}

export default Todos;
