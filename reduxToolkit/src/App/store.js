import {configureStore} from'@reduxjs/toolkit'
import todoReducer from '../features/todo/todoslice'
export const store = configureStore({
    reducer:todoReducer // we have to always introduce reducer   because store updating value never take all 
    
})