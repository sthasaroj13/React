import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import {Outlet} from 'react-router-dom'
// outlet is import to make a  webpage dynamic  this outlet helps to change the outlet parts  means middle parts 
// but the header and footer will be same 
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
