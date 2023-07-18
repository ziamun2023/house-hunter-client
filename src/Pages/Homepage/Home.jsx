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
const Home = () => {
    const [isittrue,setItistrue]=useState(false)
    const [show1,setShow1]=useState(1)
   

    console.log(isittrue)
    const slide1=()=>{
       
      if (show1==1){
        setShow1(2)
      }
      if(show1==2){
        setShow1(3)
      }
   
    }
    const slide2=()=>{
        if (show1==3){
            setShow1(2)
          }
          if(show1==2){
            setShow1(1)
          }  
       
    }
    

    return (
        <div className=' relative z-10 '>
       {show1 ==1?     <Slider3/> :""}
          {show1 ==2?   <Slider2/>:''}
       {show1 ==3?    <Slider1/> :''}
            
           <div className='flex gap-6 absolute -bottom-10 right-0'>
            <div onClick={slide2}>
<img className='w-[40px] hover:bg-slate-100 rounded-full p-2' src={leftArror} alt="" />
            </div>
            <div onClick={slide1}>
<img className='w-[40px] hover:bg-slate-100 rounded-full p-2' src={rightArror} alt="" />
            </div>


           </div>
           
        </div>
    );
};

export default Home