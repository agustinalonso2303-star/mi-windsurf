import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Remove loading indicator once React app loads
document.addEventListener('DOMContentLoaded', () => {
  const loadingElement = document.querySelector('.loading')
  if (loadingElement) {
    loadingElement.style.display = 'none'
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
