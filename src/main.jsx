
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReportPage from './ReportPage.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReportPage />
  </StrictMode>,
)
