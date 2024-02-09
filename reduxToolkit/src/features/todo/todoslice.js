import { createSlice,nanoid } from "@reduxjs/toolkit"; //nanoid generate unique id create slice is method to create slice 
const initialState ={
    todos:[{
        id:1,
        text:'hello world'
    }]
}
//to create slice we need 3things
//1.name 
//2.initialstate
//3.reducers
    export const todoSlice = createSlice({
        name:'todo',
        initialState,
        reducers:{
            addTodo:(state,action)=>{
                //state  we have updated state value in store
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            },
            removeTodo:(state,action)=>{
               state.todos =  state.todos.filter((todo)=>todo.id !==action.payload)

            },
            updateTodo:(state,action)=>{
                
            }
        }
    })
    export const {addTodo,removeTodo} = todoSlice.actions
    export default todoSlice.reducer 