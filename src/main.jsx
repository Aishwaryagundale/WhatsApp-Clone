import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User from '../POC/useEffect/User.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
    {/*<User></User>*/}
  </BrowserRouter>
)