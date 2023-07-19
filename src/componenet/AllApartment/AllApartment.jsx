import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import ResuableTitle from '../ReusableTitle/ResuableTitle';

import { GrLocation } from 'react-icons/Gr';
import { LuBedDouble } from 'react-icons/Lu';
import { FaShower } from 'react-icons/Fa';
import { FaRegBuilding } from 'react-icons/Fa';
import { BsSuitHeart } from 'react-icons/Bs';
// import { BiHeart } from 'react-icons/Bi';
import { BsCashCoin } from 'react-icons/Bs';
import { Link } from 'react-router-dom';
const AllApartment = () => {


    
    const {user}=useContext(AuthContext)
    const {data: products =[], refetch}=useQuery(['Property'],async()=>{
        const res=await fetch(`http://localhost:5000/allProperty`)
        return res.json()
      })

      

    return (
        <div className='mt-20 lg:mx-20'>
          <ResuableTitle title={'All popular Apartments'} subtitle={"Find Your Best choice"}></ResuableTitle>

          <div className='grid gap-10 lg:grid-cols-3'>
          {
products.slice(0,6).map(c=><div className='rounded-xl relative bg-white shadow-lg' key={c._id}>
    <div>
        <img className='w-[500px] h-[270px] object-cover ' src={c.picture} alt="" />
    </div>
    <div className='ms-5'>
        <p className='text-[25px] text-gray-800 font-bold tracking-wider '>{c.name}</p>
    <div className='flex'>
    <GrLocation size={20} className='text-indigo-600 '/>   <p className='text-[13px] text-gray-400 font-medium tracking-wider '>{c.address}</p>
    </div>
    </div>
    <div className='mx-12 grid grid-cols-3 py-4 px-6 my-3 bg-[rgb(247,246,255)] '>
        <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-indigo-600 me-2'/> </div> <div className='text-gray-900'>      {c.bedrooms}</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-indigo-600 me-2'/> </div><div className='text-gray-900' > {c.Bathroom}
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-indigo-600 me-2'/></div>   <div className='text-gray-900'>
        {c.roomsize}
       </div>
        </p>

     
    </div>
    <div className='mx-2 flex justify-around my-5'>
        <p className='text-gray-600'><b>Listed on:</b>{c?.date}</p>
        <p className='text-gray-600'><b>Owner :</b>{c?.ownername}</p>
        <p className='text-gray-600'><b>View details </b></p>
    </div>
    <div className='bg-indigo-400 w-20 h-13 flex text-gray-800 font-semibold top-2 left-2 rounded-xl  absolute'>
<div>     <BsCashCoin className='pt-2' size={24}/>  </div> <div className=''> 
{c.rent}
</div>
         
    </div>
    <div className='hover:bg-indigo-400 w-10 h-10 flex text-gray-800 font-semibold top-2 right-2 rounded-full  absolute'>
    <BsSuitHeart className='text-gray-800 p-1' size={50}/>  
         
    </div>

</div>)
            }
          </div>
         <Link to='/showall'> <p className='text-center'>show all</p></Link>
         
        </div>
    );
};

export default AllApartment;