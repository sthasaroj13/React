import React,{useState,useContext}  from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username,setUsername]  = useState('') 
    const [userpassword,setUserpassword]  = useState('') 
    const{setUser} =useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,userpassword})
    
        
        

    }
  return (
    <div style={{
      marginLeft:'4rem'
    }}>
      <input type="text"
value={username}
onChange={(e)=>(setUsername(e.target.value))}
      
      placeholder='Username' /> <br /> <br />
      <input type="password"
      value={userpassword}
      onChange={(e)=>(setUserpassword(e.target.value))} 
      
      
      placeholder='password' /> <br /> <br />
       <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
