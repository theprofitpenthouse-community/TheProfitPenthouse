import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FoundingInvitePage from './FoundingInvitePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FoundingInvitePage />
  </StrictMode>,
)
