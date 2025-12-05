import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthStates from './Context/AuthStates.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthStates>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthStates>
  </StrictMode>,
)
