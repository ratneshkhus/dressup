import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './componants/Footer/Footer.jsx'
import Navbar from './componants/navbar/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Navbar />
        <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
