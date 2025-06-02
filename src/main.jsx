import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Teclado from './Components/Tests/Teclado'
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
