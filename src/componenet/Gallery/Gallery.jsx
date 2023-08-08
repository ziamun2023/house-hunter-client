import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BsFillSearchHeartFill } from 'react-icons/Bs'
// ..
AOS.init();
import 'react-tabs/style/react-tabs.css';
import img1 from '../../assets/dinnign15.jpg'
import img2 from '../../assets/dinning1.jpg'
import img3 from '../../assets/dinning2.jpg'
import img4 from '../../assets/dinning4.jpg'
import img5 from '../../assets/dinning8.jpg'
import img6 from '../../assets/livving6.jpg'
import img7 from '../../assets/lviing16.jpg'
import img8 from '../../assets/lviing16.jpg'

import Kitchimg1 from '../../assets/kitchen1.jpg'
import Kitchimg2 from '../../assets/kitchen10.jpg'
import Kitchimg3 from '../../assets/kitchen11.jpg'
import Kitchimg4 from '../../assets/kitchen12.jpg'
import Kitchimg5 from '../../assets/kitchen14.jpg'
import Kitchimg6 from '../../assets/kitchen8.jpg'
import Kitchimg7 from '../../assets/dinning4.jpg'
import Kitchimg8 from '../../assets/dinning8.jpg'
import living1 from '../../assets/living1.jpg'
import living2 from '../../assets/living11.jpg'
import living3 from '../../assets/living2.jpg'
import living4 from '../../assets/living3.jpg'
import living5 from '../../assets/living5.jpg'
import living6 from '../../assets/livving14.jpg'
import living7 from '../../assets/livving6.jpg'
import living8 from '../../assets/lviing16.jpg'
import gard1 from "../../assets/garden1.jpg"
import gard2 from "../../assets/garden6.jpg"
import gard3 from "../../assets/garden7.jpg"
import gard4 from "../../assets/garden10.jpg"
import gard5 from "../../assets/garden11.jpg"
import gard6 from "../../assets/garden14.jpg"
import gard7 from "../../assets/garden9.jpg"
import gard8 from "../../assets/garden1.jpg"
import { Fade } from 'react-awesome-reveal';
const Gallery = () => {
   
    return (
        <div className='mx-20 my-36'>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
  <TabList className="text-center  my-10 text-[20px]  ">
    <Tab> Living room</Tab>
    <Tab> Kitchen </Tab>
    <Tab>Dinning hall </Tab>
    <Tab>Garden  </Tab>
    <Tab>All </Tab>
  </TabList>
 
  
  <TabPanel >
 <div data-aos="fade-up"
data-aos-duration="1000" >
 <div   className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36' >
 <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[290px]   w-[380px] my-5 object-cover' src={living2} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[290px]'>
      <p className='absolute top-0 group-hover:top-28 duration-300 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living3} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
    <div  className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36'>
    <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living4} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px] -mt-28  w-[380px] my-5 object-cover' src={living5} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 -top-28 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living6} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
 </div>
  </TabPanel>
    
  <TabPanel >
 <div data-aos="fade-up"
data-aos-duration="1000" >
 <div   className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36' >
 <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={Kitchimg1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[290px]   w-[380px] my-5 object-cover' src={Kitchimg2} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[290px]'>
      <p className='absolute top-0 group-hover:top-28 duration-300 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={Kitchimg3} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
    <div  className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36'>
    <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={Kitchimg4} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px] -mt-28  w-[380px] my-5 object-cover' src={Kitchimg5} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 -top-28 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={Kitchimg6} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
 </div>
  </TabPanel>
  <TabPanel >
<div data-aos="fade-up"
data-aos-duration="1000" >
<div  className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36' >
<div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={img1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[290px]   w-[380px] my-5 object-cover' src={img2} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[290px]'>
      <p className='absolute top-0 group-hover:top-28 duration-300 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={img3} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
    <div  className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36'>
    <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={img4} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px] -mt-28  w-[380px] my-5 object-cover' src={img5} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 -top-28 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={img6} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
</div>
  </TabPanel>
 

  <TabPanel >
    <div data-aos="fade-up"
data-aos-duration="1000" >
    <div  className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36' >
    <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={gard1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[290px]   w-[380px] my-5 object-cover' src={gard2} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[290px]'>
      <p className='absolute top-0 group-hover:top-28 duration-300 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={gard3} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
    <div   className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36'>
    <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={gard4} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px] -mt-28  w-[380px] my-5 object-cover' src={gard5} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 -top-28w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={gard6} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
    </div>
  </TabPanel>
  <TabPanel>

 <div div data-aos="fade-up"
data-aos-duration="1000" >
 <div  className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36' >
 <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={gard1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[290px]   w-[380px] my-5 object-cover' src={gard1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[290px]'>
      <p className='absolute top-0 group-hover:top-28 duration-300 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living1} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
    <div   className='grid lg:grid-cols-3 justify-items-center lg:-me-0 -me-36'>
    <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living4} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px] -mt-28  w-[380px] my-5 object-cover' src={living6} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 -top-28 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
        <div className='relative group'>
            <img className='h-[450px]   w-[380px] my-5 object-cover' src={living7} alt="" />
       <p className='bg-black absolute opacity-0 duration-500  group-hover:opacity-40 top-5 w-[380px] h-[450px]'>
      <p className='absolute top-0 group-hover:top-52 duration-500 text-white left-40'>  <BsFillSearchHeartFill size={80}/></p>
       </p>
        </div>
    </div>
 </div>

  </TabPanel>
</Tabs>
        </div>
    );
};

export default Gallery;

