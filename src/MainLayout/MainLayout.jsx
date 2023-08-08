import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Loading from './Loading';
import { IoLogoWhatsapp } from 'react-icons/Io';
const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading delay (remove this in your actual implementation)
        const loadingTimer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        // Clean up the timer on component unmount
        return () => clearTimeout(loadingTimer);
      }, []);
    return (
        <div className=''>
        <Navbar/>
        {isLoading ? <Loading /> : <Outlet/>}
    

       
        <Footer/>
            
        </div>
    );
};

export default MainLayout;