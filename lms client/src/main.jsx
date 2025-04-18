import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Toaster} from "react-hot-toast"
import {Provider} from "react-redux"
import store from './Redux Store/store.js'
createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  </Provider>
)
