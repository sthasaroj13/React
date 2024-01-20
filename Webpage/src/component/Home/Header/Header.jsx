import React from 'react'
import {Link , NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
    <nav>
    <div>
        <Link> 
        
        <img src="https://www.pexels.com/photo/photographer-with-camera-on-city-street-19583197/" alt="" /></Link>
 </div>
 <ul>
  <li>
  <NavLink
                to='/'
                  className={({isActive}) =>
                    `${isActive?' text-orange-700':' text-gray-700'}block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                 Home
                </NavLink>
  </li>
 </ul>
    </nav>
    </>
      
  )
}

export default Header
