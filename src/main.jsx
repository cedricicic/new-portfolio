import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/index.css';
import './components/css/header.css';
import './components/css/dock.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
