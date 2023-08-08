import React, { useState } from 'react';
import banner from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import rightArror from '../../assets/rightArror.png'
import leftArror from '../../assets/leftArror.png'
import Slider1 from './Slider/Slider1';
import Slider2 from './Slider/Slider2';
import Slider3 from './Slider/Slider3';
import AllApartment from '../../componenet/AllApartment/AllApartment';
import Section1 from '../../componenet/section 1/Section1';
import Section2 from '../../componenet/section 1/Section2';
import Cities from '../../componenet/AllApartment/Cities';
import Banner from './homebanner/Banner';
import Country from '../../componenet/Countrywise/Country';
import { Parallax } from 'react-scroll-parallax';
import SpacialApartment from '../../componenet/AllApartment/SpacialApartment';
import Gallery from '../../componenet/Gallery/Gallery';
import Testimonial from '../../componenet/testinomial/Testimonial';

const Home = () => {
    // const [isittrue,setItistrue]=useState(false)
    // const [show1,setShow1]=useState(1)
   

    // console.log(isittrue)
    // const slide1=()=>{
       
    //   if (show1==1){
    //     setShow1(2)
    //   }
    //   if(show1==2){
    //     setShow1(3)
    //   }
   
    // }
    // const slide2=()=>{
    //     if (show1==3){
    //         setShow1(2)
    //       }
    //       if(show1==2){
    //         setShow1(1)
    //       }  
       
    // }
    

    return (
        <div className='  z-10 '>
           
     
           <Banner/>
           <Section1/>
          
           <Country/>
      
     
           <Section2></Section2>
           <AllApartment/>
           <SpacialApartment/>
           <Gallery/>
           <Testimonial/>
           {/* <Cities/> */}

           
        </div>
    );
};

export default Home