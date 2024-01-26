import React, { useContext } from 'react';
import  UserContext from '../context/Usecounter'

function CountBtn() {
  const userContext= useContext(UserContext); 

  const handleClick = (e) => {
    e.preventDefault();
    if (userContext.count<20) {

      userContext.setCount((pev)=>pev+1)
    }
    // userContext.setCount(userContext.count+1)
    
  };
  const handledec=(e)=>{
    e.preventDefault();
    if (userContext.count>0) {

      userContext.setCount((pev)=>pev-1)
      
    }

  }

  return (
    <div>
   <button onClick={handleClick}>increase</button>    
   <button onClick={handledec}>decrease</button>    
       <p>Count: {userContext.count}</p>
    </div>
  );
}

export default CountBtn;
