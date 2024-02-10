Redux toolkit ki notes
1. Create Store - single source of truth
it has configureStore
introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload 
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
 dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos)    we  need state  access  then  create 
variable  take values  after that it all Js concept 
in  remove button we have to  create onclick function which takes call back function and in that function  onclick{()=>dispatch(removeTodo(todo.id))}
removeTodo take indivisual id 

Note: Todo's Project basic nai hote xD  