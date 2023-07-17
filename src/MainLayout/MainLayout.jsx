import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
            
        </>
    );
};

export default MainLayout;