import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// SWC Provider
import SWRProvider from './services/provider/SWRProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRProvider><App /></SWRProvider>
  </React.StrictMode>,
)
