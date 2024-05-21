import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BrandContextProvider from './contextApi/BrandContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrandContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </BrandContextProvider>
  ,
)
