import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user} = useContext(UserContext)
   if (!user) {
    return  <p>Login please</p>

   }
   else{
   return <p>Welcome to  your profile  {user.username}</p>
   }
}

export default Profile
