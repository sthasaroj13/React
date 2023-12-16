import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'
function App() {
  // i collect the variable by using usedsate hook
  const [length,setLength] = useState(8)
  const [numallowed,setnumAllowed]=useState(false)
  const [charallowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("")
//useref hook
const passwordref =useRef(null)
//i generate a password generator  by using  usecallback hook in this hook i 
// create a varibale where we can stored as a cache memory
  const PasswordGenerator =useCallback(()=>{
    let pass =''
    let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz'
// i apply condition in the str which allow you to select only number and charcters
    if(numallowed){
      str +='0123456789'
    }
      if(charallowed){
        str +='@#$%^&*(){}?/><'

      }
      //i apply the for loop where i can run   a random value  of str
      for(let i=1; i<= length;i++){
        let char = Math.floor(Math.random() *str.length+1)
        pass += str.charAt(char) // i append  pass and char which generate 
        // the more than one value
      }
      setPassword(pass) // i setpassword  because state is update in setpassword
  },[length,numallowed,charallowed,setPassword]) //this is dependency


 const copypasswordtoclipboard = useCallback(()=>{
  passwordref.current?.select() //this will select the all clipboard passord 
  passwordref.current?.setSelectionRange(0,20) // this will select the  only selected ranges 

  window.navigator.clipboard.writeText(password)// this code will copy 
 },[password])

//useEffect hook is use because  when page is load then password will call
useEffect( () =>{
  PasswordGenerator()
},[length,numallowed,charallowed,PasswordGenerator])

  return (
    <>
    <p className='text-white flex justify-center'>this  is password generator app which may help you on your social media password</p>
   <div className=' w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-20 text-orange-500 bg-gray-700 '>
   <h1 className=' text-white text-center'>PasswordGenerator</h1>
    <div className=' flex shadow rounded-lg overflow-x-hidden mb-4'>


      <input type="text"
      value={password}
      className=' outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordref}
      />
      <button id='bttn'
      onClick={copypasswordtoclipboard}
      className=' outline-none bg-blue-400 text-white px-3 '>copy</button>
    </div>
<div className=' flex text-sm gap-x-2'>
  <div className=' flex items-center gap-x-1'>
<input type="range"
min={6}
max={100}
value={length}
className=' cursor-pointer'
onChange={(e)=> {setLength(e.target.value)}}
/>
<label>Length:{length}</label>

  </div>
  <div className=' flex items-center gap-x-1'>
  <input type="checkbox"
defaultChecked={numallowed}
id='numberInput'
onChange={()=> {setnumAllowed((prev)=>!prev)}}
/>
<label>Numbers</label>
  </div>
  <div className=' flex items-center gap-x-1'>
  <input type="checkbox"
defaultChecked={charallowed}
id='charInput'
onChange={()=> {setcharAllowed((prev)=>!prev)}}
/>
<label>Characters</label>
  </div>
  

</div>


   </div>
    
    
    
    </>
  )
}

export default App
