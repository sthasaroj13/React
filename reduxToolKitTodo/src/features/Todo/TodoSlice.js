import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState ={
    todos:[
        {
        id:1,
        text:'hello saroj'
        }
    ]
}
 export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:((state,action)=>{
            const todo={id:nanoid(),
            text:action.payload
            }
            state.todos.push(todo)
        }),
        removeTodo :((state , action)=>{
         state.todos = state.todos.filter((val)=>val.id !==action.payload)
        }),
        updateTodo:((state,action)=>{
            const{id,newTxt} = action.payload
            const todoUpdate = state.todos.find((val)=>val.id == id)
            if(todoUpdate){
                todoUpdate.text= newTxt
            }
        })
    }


 })
 export  const {addTodo,removeTodo,updateTodo} = todoSlice.actions
 export default todoSlice.reducer