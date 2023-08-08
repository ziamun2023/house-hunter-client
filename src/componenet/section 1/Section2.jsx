import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { ImOffice } from 'react-icons/Im';
import { ImHome } from 'react-icons/Im';
import { GiPostOffice } from 'react-icons/Gi';
import { GiVillage } from 'react-icons/Gi';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import ResuableTitle from '../ReusableTitle/ResuableTitle';
const Section2 = () => {
    return (
        <div className='h-[400px] lg:w-[1200px]  lg:px-10 mt-20 grid grid-cols-1 rounded-r-xl lg:grid-cols-2 bg-[rgb(60,110,113)]'>
            <div className=' mt-6'>
              <p className='text-white text-[40px] font-semibold'>Explore By property</p>
             
           <div className='flex gap-10 mt-6'>
           <p className='bg-red-600 h-2 w-10 rounded-lg font-semibold'></p>
           <p className='bg-red-600 h-2 w-14 rounded-lg font-semibold'></p>
           </div>
           <p className='text-gray-200 text-[20px] mt-5'>Experience Hassle-Free Renting: Your Gateway to Quality Homes</p>

            </div>
            <div className='  my-auto'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide >
            <div className='bg-white  justify-items-center  h-[140px] lg:h-[300px] grid rounded-lg' >
           
               <div> 
               <ImOffice className='lg:mt-20 mt-10  text-black' size={70}/>
               </div>
              <div>
              <p className='text-black font-semibold text-center'>Appartment</p>
                <p className='text-gray-400'>25 properties</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-white  justify-items-center  h-[140px] lg:h-[300px] grid rounded-lg'>
          

          <div>
          <ImHome className='lg:mt-20 mt-10  text-black' size={70}/>
          </div>
              <div>
              <p className='text-black font-semibold text-center'>House</p>
                <p className='text-gray-400'>40 properties</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-white  justify-items-center  h-[140px] lg:h-[300px] grid rounded-lg'>
          
             <div>
             <GiPostOffice className='lg:mt-20 mt-10  text-black' size={70}/>
             </div>
             <div>
             <p className='text-black font-semibold text-center'>Office</p>
                <p className='text-gray-400'>40 properties</p>
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-white  justify-items-center  h-[140px] lg:h-[300px] grid rounded-lg'>
           
            <div>
            <GiVillage className='lg:mt-20 mt-10  text-black' size={70}/>
            </div>
              <div>
              <p className='text-black font-semibold text-center'>Villa</p>
                <p className='text-gray-400'>40 properties</p>
              </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
            </div>
        </div>
    );
};

export default Section2;