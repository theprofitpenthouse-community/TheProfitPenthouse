import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoadmapPage from './RoadmapPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoadmapPage />
  </StrictMode>,
)
