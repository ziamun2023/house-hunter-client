import React from 'react'
import ReactDOM from 'react-dom/client'
import { IoLogoWhatsapp } from 'react-icons/Io';

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
  <div className='relative'>
  <RouterProvider router={router} />

  <a href="https://api.whatsapp.com/send?phone=8801861066727&text=Hello%20from%20your%20website!" target="_blank" rel="noopener noreferrer">  <p className='text-green-700 animate-bounce icon-container '><IoLogoWhatsapp size={70}/></p></a>

  
  
  </div>
    


   </QueryClientProvider>


</AuthProvider>

    </ParallaxProvider>


  

  </React.StrictMode>,
)
