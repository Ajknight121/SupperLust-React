import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SiteContext from './Domain/SiteContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteContext>
      <App />
    </SiteContext>
  </React.StrictMode>,
)
