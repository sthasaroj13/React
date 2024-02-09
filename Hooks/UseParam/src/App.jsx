import {BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './pages/Home'
function App() {


  return (
    <>
      <h1>UsePram </h1>
      <Link to='/'> home</Link>
<BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>} />
</Routes>


</BrowserRouter>
      </>
  )
}

export default App
