import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import  AuthProvider from './AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<ParallaxProvider>

<AuthProvider>
<QueryClientProvider client={queryClient}>
  
   <RouterProvider router={router} />  
   </QueryClientProvider>


</AuthProvider>

    </ParallaxProvider>


  

  </React.StrictMode>,
)
