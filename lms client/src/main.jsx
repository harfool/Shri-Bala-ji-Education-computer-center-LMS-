import { BrowerRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Toaster} from "react-hot-toast"
createRoot(document.getElementById('root')).render(
  <BrowerRouter>
    <App />
    <Toaster/>
  </BrowerRouter>,
)
