import { useContext } from "react"
import userContext from "./context/Usecounter"

import CountBtn from "./component/CountBtn"

import Usercounterprov from "./context/Usercounterprov"
function App() {

const counterState = useContext(userContext)
console.log(counterState);
console.log( 'context ' ,counterState);
  return (
<>
<h1>Counter context 
  {counterState.count}
</h1>
<CountBtn/>
</>


  )
}

export default App
