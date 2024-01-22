import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
  if (!user) 
  {
    return <p>please login</p>
  }
  
  return  <p>Welcome to your Profile {user.username}</p>
  
}

export default Profile
