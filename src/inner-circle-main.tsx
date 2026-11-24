import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InnerCirclePage from './InnerCirclePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InnerCirclePage />
  </StrictMode>,
)
