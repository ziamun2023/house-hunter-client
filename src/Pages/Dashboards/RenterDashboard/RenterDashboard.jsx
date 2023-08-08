import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider';
import { BsTwitter } from 'react-icons/Bs';
import { BsInstagram } from 'react-icons/Bs';
import { AiOutlineRight } from 'react-icons/Ai';
import { BiLogoFacebook } from 'react-icons/Bi';
import { FaLinkedinIn } from 'react-icons/Fa';
const RenterDashboard = () => {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const logOut=()=>{
        localStorage.clear();
        navigate('/')

    }
   
    return (
        <div className='grid lg:grid-cols-5  grid-cols-1 relative '>
            <div className='lg:col-span-1 border-r-2 sticky top-0 z-20 lg:h-[760px]  rounded-xl lg:m-5 m-2 p-2 '>
          <div >
          <p className='text-white text-center text-2xl'>Renter  Name</p> 
        <div className='flex justify-around'>
   <div>
   <p className='text-gray-900 text-center font-semibold text-3xl'>{user?.name}</p> 
   <p className='text-gray-900 text-center font-semibold my-2 text-[10px]'>{user?.email}</p> 
   </div>
          <p className='lg:text-[19px] w-20 lg:hidden rounded-lg font-semibold text-center bg-black pt-1 '>Log Out</p>
        </div>
          </div>
<div className='flex lg:flex-col   justify-center'>
    

 <Link to='/RenterDashboard/profile'>
 <div className='rounded-md  relative  lg:mx-10 group  text-black px-2  duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Profile</p>
<p className='opacity-0 absolute top-2 right-0 group-hover:opacity-100 duration-300 my-auto'><AiOutlineRight/></p>
    </div></Link>

  
   <Link to='/RenterDashboard/MyBooking'>
   <div className='rounded-md bg-white  lg:mx-10   text-black px-2  duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'> my Bookings</p>
    </div>
   </Link>
   <Link to='/showall'>
   <div className='rounded-md bg-white  lg:mx-10   text-black px-2  duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Book apartment</p>
    </div>
   </Link>
   <Link to='/RenterDashboard/profile'>
   <div className='rounded-md bg-white  lg:mx-10   text-black px-2  duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Address</p>
    </div>
   </Link>
   <Link to='/showall'>
   <div className='rounded-md bg-white  lg:mx-10   text-black px-2  duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Blogs</p>
    </div>
   </Link>
   <Link to='/showall'>
   <div className='rounded-md bg-white  lg:mx-10   text-black px-2  duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] flex gap-4 text-center'>
    <p><BsTwitter/></p>
    <p><BiLogoFacebook/></p>
    <p><FaLinkedinIn/></p>
    <p><BsInstagram/></p>

</p>
    </div>
   </Link>
   
<Link to='/'>    <p className='lg:text-[19px] hidden lg:block  lg:w-2/3 mx-auto rounded-lg mt-2 text-center bg-black  '>Home</p></Link>
<p onClick={logOut} className='lg:text-[19px] hidden lg:block lg:w-2/3 mx-auto rounded-lg mt-2  text-center bg-black  '>Log Out</p>

   
</div>
            </div>
            <div className='lg:col-span-4'>
<Outlet/>
            </div>
        </div>
    );
};

export default RenterDashboard;
