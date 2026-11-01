
import { createRoot } from 'react-dom/client'
import './index.css'
import Routing_App from '../POC/Routing_App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routing_App />
  </BrowserRouter>
)
