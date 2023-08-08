
import React, { useRef, useState } from 'react';
import contr1 from "../../assets/country1.jpg"
import contr2 from "../../assets/country2.jpg"
import contr3 from "../../assets/country3.jpg"
import contr4 from "../../assets/country4.jpg"
import contr5 from "../../assets/country5.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
const Country = () => {
    return (
        <div data-aos="flip-left"
        data-aos-duration="3000" className='grid lg:grid-cols-2 my-36 justify-items-center'>
        <div className='lg:mx-20'>
            <p className='color1 hover:scale-110 lg:mx-20 ms-20 lg:ms-0 duration-500 text-[50px] font2'>Sunny Haven Apartments</p>
            <p className='text-black font3 lg:mx-20 ms-10 lg:ms-0 -me-36 lg:-me-0'>Bask in the Sunlight at Our Prime Location
Discover Your Oasis of Comfort and Serenity
Unparalleled Views and Endless Sunshine Await
Experience Luxury Living with Nature's Embrace
Indulge in a Vibrant Lifestyle in Every Season
Your Ideal Sunny Retreat Awaits You</p>

        </div>
        <div className=' lg:mx-20 ms-20 lg:ms-0 -me-28 lg:-me-0'>
        {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <Marquee className='  rounded-md   duration-300 ' speed={20}>

    <div  className='relative overflow-hidden  hover:opacity-40 mx-2'>
    <img className='w-[200px]   rounded-md hover:scale-110 duration-700 z-0  h-[400px] object-cover' src={contr1} alt="" />
    <p className='absolute bottom-10 left-16 text-[30px]  z-20 text-white font1'>New work</p>
    </div>
       <div  className='relative overflow-hidden  hover:opacity-40 mx-2' >
       <img className='w-[200px]   rounded-md hover:scale-110 duration-700 z-0  h-[400px] object-cover' src={contr2} alt="" />
       <p className='absolute bottom-10 left-16 text-[30px]  z-20 text-white font1'>London</p>
       </div>
     <div  className='relative overflow-hidden  hover:opacity-40 mx-2'>
     <img className='w-[200px]   rounded-md hover:scale-110 duration-700 z-0  h-[400px] object-cover' src={contr3} alt="" />
     <p className='absolute bottom-10 left-16 text-[30px]  z-20 text-white font1'>Nepal</p>
     </div>
      <div  className='relative overflow-hidden  hover:opacity-40 mx-2'>
      <img className='w-[200px]   rounded-md hover:scale-110 duration-700 z-0  h-[400px] object-cover' src={contr4} alt="" />
      <p className='absolute bottom-10 left-16 text-[30px]  z-20 text-white font1'>Australia</p>
      </div>
<div className='relative overflow-hidden  hover:opacity-40 mx-2'>
<img className='w-[200px]   rounded-md hover:scale-110 duration-700 z-0  h-[400px] object-cover' src={contr5} alt="" />
<p className='absolute bottom-10 left-16 text-[30px]  z-20 text-white font1'>Dhaka</p>
</div>
      </Marquee>

        </div>
            
        </div>
    );
};

export default Country;