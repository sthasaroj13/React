import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'



function Login() {
     const{setUser}=useContext(UserContext)
     const[username,setUsername] = useState('')
     const[userpass,setUserpass] = useState('')


     const handleSubmit =(e)=>{
    e.preventDefault()
    setUser({username,userpass})

  

     }
  return (
    <div>
        <input type="text" placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        /> <br /> <br />
        <input type="password" placeholder='Password'
        value={userpass}
        onChange={(e)=>setUserpass(e.target.value)}
        /> <br /> <br />
        
        <button onClick={handleSubmit}>Submit</button>
        
        
      
    </div>
  )
}

export default Login
