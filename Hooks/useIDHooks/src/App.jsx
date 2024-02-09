import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './component/Input'
function App() {
  

  return (
    <>
      <Input label='fullname' type='text' name='name'/>
      <Input label='email' type='text'name='name'/>
      <Input label='address' type='text' name='name'/>
   </>
  )
}

export default App
