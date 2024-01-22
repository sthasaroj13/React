
 
 import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

//  import React from "react";
//   import UserContext from "./UserContext";

//   const UserContextProvider =({childern})=>{
//     const[user,setUser] = useState(null)
//     return(
// <UserContext.Provider value={{user,setUser}}>
// {childern}

// </UserContext.Provider>

//     )
//   }
//   export default UserContextProvider