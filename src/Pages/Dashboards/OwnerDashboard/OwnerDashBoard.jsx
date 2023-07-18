import React from 'react';
import { Outlet } from 'react-router-dom';

const OwnerDashBoard = () => {
   
    return (
        <div className='grid lg:grid-cols-5  grid-cols-1 '>
            <div className='lg:col-span-1  lg:h-[760px]  bg-gray-600'>

<div className='flex lg:flex-col gap-4  justify-center'>

 <Link to='/OwnerDashBoard/addnewProperty'>
 <div className='rounded-md bg-white shadow-xl  lg:mx-10 py-5 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Add property</p>
    </div></Link>
    Myproperty
   <Link to='OwnerDashBoard/Myproperty'>
   <div className='rounded-md bg-white shadow-xl  lg:mx-10 py-5 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>All my property</p>
    </div>
   </Link>
    <div className='rounded-md bg-white shadow-xl  lg:mx-10 py-5 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Total renter</p>
    </div>
</div>
            </div>
            <div className='lg:col-span-4'>
<Outlet/>
            </div>
        </div>
    );
};

export default OwnerDashBoard;