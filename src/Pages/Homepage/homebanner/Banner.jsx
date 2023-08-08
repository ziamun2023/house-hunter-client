import React from 'react';
import banner from "../../../assets/banner2.jpg"
import banner2 from "../../../assets/apartmentsky.jpg"
import banner3 from "../../../assets/apartmentcolor.jpg"
import banner4 from "../../../assets/apartmentsky.jpg"
import { TypeAnimation } from 'react-type-animation';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
import { Fade } from 'hamburger-react';
const Banner = () => {
    return (
        <div data-aos="flip-right"
        data-aos-duration="2000" className=" relative  z-0 grid grid-cols-2 ">

            <div className=' my-auto '>
                <p className='text-[30px] absolute  top-28 mx-10 font2 text-[rgb(60,110,113)] '>
                <TypeAnimation
      sequence={[
        'live the life you want ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'live the life you dream for',
        1000,
        'live the life you desire',
        1000,
        'live the life you feel safe',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    


                </p>
            
              
               
               <p className='lg:w-[850px] w-[400px] z-20 absolute top-[300px] left-5 lg:left-40 h-[60px] bg-white shadow-2xl flex   justify-between'> <p className='font1  text-center text-black text-[20px] my-auto font-thin mx-10'> search apartment</p> <p className='bg-[rgb(60,110,113)] p-4 my-2 mx-2 text-center  text-white'>-search</p> </p>
            
                <p className=' absolute top-[400px] left-5 lg:left-40 h-[60px]  flex  gap-6'> <p className='  text-center text-black text-[20px] px-3 py-1 my-auto font-thin border-2'> Dhaka</p>  <p className='  text-center text-black text-[20px] px-3 py-1 my-auto font-thin border-2'> chittagong</p><p className='  text-center text-black text-[20px] px-3 py-1 my-auto font-thin border-2'> Dinajpur</p> <p className='  text-center text-black text-[20px] px-3 py-1 my-auto font-thin border-2'> shylet</p> <p className='text-[rgb(60,110,113)] my-auto'>-more</p> </p>
              

            </div>
      <div className='ms-36 lg:ms-0 lg:-me-0 -me-36'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  <img className=' object-cover lg:h-[700px] lg:w-[500px] h-[400px] w-[730px]   lg:mx-auto ' src={banner2} alt="Banner" /></SwiperSlide>
        <SwiperSlide>  <img className=' object-cover lg:h-[700px] lg:w-[500px] h-[400px] w-[730px]   lg:mx-auto ' src={banner3} alt="Banner" /></SwiperSlide>
        <SwiperSlide>  <img className=' object-cover lg:h-[700px] lg:w-[500px] h-[400px] w-[730px]   lg:mx-auto ' src={banner2} alt="Banner" /></SwiperSlide>
      
      </Swiper>
    
      </div>
        
      </div>
    );
};


export default Banner;