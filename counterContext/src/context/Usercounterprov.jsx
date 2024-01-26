import React, { useState } from "react";
import UserContext from "./Usecounter";

function UserCounterProv({ children }) {

  
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={{ count, setCount }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserCounterProv;
