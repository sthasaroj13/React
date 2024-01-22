import UserContextProvider from "./Context/UserContextProvider"
import userContext from "./Context/UserContext"
import Login from "./Component/Login"
import Profile from "./Component/Profile"




function App() {
  

  return (
  <UserContextProvider>
  <h1 >Context API</h1>
  <Login/>
  <Profile/>

  </UserContextProvider>
  )
}

export default App
