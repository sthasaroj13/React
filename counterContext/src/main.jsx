import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import UserCounterProv from './context/Usercounterprov.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCounterProv>

    <App />
    </UserCounterProv>
  </React.StrictMode>,
)
