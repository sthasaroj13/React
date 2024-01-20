import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
//    const [data,setData] =useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/hiteshchoudhary')
//         .then(response=>response.json())
//         .then(data=> setData(data))
//     },[])

  return (
    <div className=' bg-orange-400 text-white text-3xl p-4 flex gap-9 rounded-2xl'>
      <img src={data.avatar_url} alt="" className=' rounded-full cursor-pointer' />
      <div>
      <h1 className=' mt-10'>User Name :{data.name}</h1>
      <h1 className=' mt-10'> User Followers :{data.followers}</h1>
      <h1 className=' mt-10'> User Location :{data.location}</h1>
      </div>
     
    </div>
  )
}

export default Github
// this is more optimize way to fetch 
export const GithubLoader =  async ()=>{

    const response = await  fetch('https://api.github.com/users/hiteshchoudhary')

return response.json()
}
