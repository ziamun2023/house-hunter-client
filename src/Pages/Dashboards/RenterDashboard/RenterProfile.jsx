import React, { useContext } from 'react';
import { BsFillPersonFill } from 'react-icons/Bs';
import { BsFillBrightnessHighFill } from 'react-icons/Bs';
import { IoIosAnalytics } from 'react-icons/Io';
import { SiGoogleanalytics } from 'react-icons/Si';
import { TbPresentationAnalytics } from 'react-icons/Tb';
import { TbDeviceAnalytics } from 'react-icons/Tb';
import { GrAnalytics } from 'react-icons/Gr';
import { AuthContext } from '../../../AuthProvider';
import { Fade } from 'react-awesome-reveal';

const RenterProfile = () => {
    const {user}=useContext(AuthContext)
    return (
      <div data-aos="flip-up"
      data-aos-duration="2000" >
          <div className='mt-10 grid lg:grid-cols-3 mx-20'>
            <div className='w-[300px] col-span-1 bg-slate-200 shadow-md h-[300px]'>
<BsFillPersonFill size={300}/>
            </div>
            <div className='col-span-2'>
            <p className='text-2xl font-bold text-gray-700'>Name</p>
        <p className=' text-black'>{user?.name}</p>
    <div className='flex'>
    <p className='font-bold text-gray-700'>Email</p>  <p className=' text-black'>{user?.email}</p>
    </div>
      
 <div className='w-full h-[2px] bg-black'>

 </div>
            </div>
   
    </div>

    <div className='grid  mt-10 lg:grid-cols-3'>
        <div className='h-[200px] gap-6 flex rounded-md shadow-md w-[400px]'>

  <div>
  <p className='mt-10 ms-5'>       <GrAnalytics size={100}/></p>
  </div>
  <div className='mt-10'>
    <p className='text-gray-500 '>Total Booking: </p>
    <p className='text-gray-500 '>Average spent: </p>
    <p className='text-gray-500 '>Yearly cost: </p>
    <p className='text-gray-500 '>Total Booking: </p>
  </div>
  <BsFillBrightnessHighFill className=' animate-spin duration-75 animate-pulse' size={40}/>

        </div>
        <div className='h-[200px] gap-6 flex rounded-md shadow-md w-[400px]'>

<div>
<p className='mt-10 ms-5'>       <TbDeviceAnalytics color='black'  size={100}/></p>
</div>
<div className='mt-10'>
  <p className='text-gray-500 '>Total Booking: </p>
  <p className='text-gray-500 '>Average spent: </p>
  <p className='text-gray-500 '>Yearly cost: </p>
  <p className='text-gray-500 '>Total Booking: </p>
</div>
<TbPresentationAnalytics className='  duration-75 animate-pulse' size={40}/>

      </div>
      <div className='h-[200px] gap-6 flex rounded-md shadow-md w-[400px]'>

<div>
<p className='mt-10 ms-5'>       <IoIosAnalytics color='black' size={100}/></p>
</div>
<div className='mt-10'>
  <p className='text-gray-500 '>Total Booking: </p>
  <p className='text-gray-500 '>Average spent: </p>
  <p className='text-gray-500 '>Yearly cost: </p>
  <p className='text-gray-500 '>Total Booking: </p>
</div>
<SiGoogleanalytics className=' duration-75 animate-pulse' size={40}/>

      </div>

    </div>
      </div>
    );
};

export default RenterProfile;