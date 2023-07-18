import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import  AuthProvider from './AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <ParallaxProvider>
<AuthProvider>   <RouterProvider router={router} /></AuthProvider>
    </ParallaxProvider>
  

  </React.StrictMode>,
)
