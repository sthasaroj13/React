import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function saroj(){

  return(
    <div>

      <h1>Hello my name is saroj</h1>
    </div>
  )
}
const anotherElement =(
  <a href="https://google.com" traget='_blank'> click me </a>
)
const reactElement = React.createElement(

  'a',
  {href:'https://facebook.com' ,traget:'_blank'},
'click me to open fb'
)
ReactDOM.createRoot(document.getElementById('root')).render(
// anotherElement
// saroj()
    <App />
    // reactElement
  
)
