import React from 'react';
import banner4 from '../../../assets/banner4.jpg'
import BannerOverlay from '../../../assets/BannerOverlay3.png'
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Slider3 = () => {
    return (
        <div className='  lg:mx-10 mx-4 relative'>
             <img className='lg:h-[600px] h-[400px]  rounded-xl w-full object-cover' src={banner4} alt="" />
            <Slide className='absolute lg:top-0 top-12 right-[160px] lg:right-[100px]' direction='up'><img className='w-[120px] lg:w-[200px] ' src={BannerOverlay} alt="" /></Slide>
            <Slide  className='absolute hidden lg:block top-[230px] left-5 lg:top-[300px] lg:left-[100px]' direction='up'><div className='text-[40px]  font-bold text-left'>
                <p  className='text-white flex tracking-wide '>Discover   <span > <Slide className='colorTheme mx-2'  direction='up'>Affordable</Slide></span> Rentals Near You </p>
               </div>
              </Slide>  
           <Link to='/showall'>   <button className='colorTheme2 py-2 px-2 absolute lg:bottom-[100px] lg:left-[105px] bottom-2 left-4 rounded-lg text-black font-semibold '> Rent A house</button> </Link>
             
        </div>
    );
};

export default Slider3;