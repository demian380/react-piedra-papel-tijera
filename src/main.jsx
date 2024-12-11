import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ppt from './Ppt.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ppt />
  </StrictMode>,
)
