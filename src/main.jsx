import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/MainRoute.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import 'react-tooltip/dist/react-tooltip.css'
import '@smastrom/react-rating/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
      
  </React.StrictMode>,
)
