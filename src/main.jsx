import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ppt from './Ppt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ppt />
  </StrictMode>,
)
