import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 移除 basename="/john-portfolio" */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)