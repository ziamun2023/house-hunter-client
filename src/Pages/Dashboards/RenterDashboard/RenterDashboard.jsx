import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider';
const RenterDashboard = () => {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const logOut=()=>{
        localStorage.clear();
        navigate('/')

    }
   
    return (
        <div className='grid lg:grid-cols-5  grid-cols-1 relative '>
            <div className='lg:col-span-1 sticky top-0 z-20 lg:h-[760px]  rounded-xl lg:m-5 m-2 p-2 bg-gray-600'>
          <div >
          <p className='text-white text-center text-2xl'>Renter  Name</p> 
        <div className='flex justify-around'>
   <div>
   <p className='text-gray-900 text-center font-semibold text-3xl'>{user?.name}</p> 
   <p className='text-gray-900 text-center font-semibold text-[10px]'>{user?.email}</p> 
   </div>
          <p className='lg:text-[19px] w-20 lg:hidden rounded-lg font-semibold text-center bg-black pt-1 '>Log Out</p>
        </div>
          </div>
<div className='flex lg:flex-col gap-4  justify-center'>
    

 <Link to='/OwnerDashBoard/profile'>
 <div className='rounded-md bg-white shadow-xl  lg:mx-10 lg:py-5 py-2 text-black px-2 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Profile</p>
    </div></Link>
 <Link to='/OwnerDashBoard/addnewProperty'>
 <div className='rounded-md bg-white shadow-xl  lg:mx-10 lg:py-5 py-2 text-black px-2 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Add property</p>
    </div></Link>
  
   <Link to='/OwnerDashBoard/Myproperty'>
   <div className='rounded-md bg-white shadow-xl  lg:mx-10 lg:py-5 py-2 text-black px-2 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>All my property</p>
    </div>
   </Link>
    <div className='rounded-md bg-white shadow-xl  lg:mx-10 lg:py-5 py-2 text-black px-2 hover:bg-indigo-500 duration-500 cursor-pointer my-6'>
<p className='lg:text-[19px] text-center'>Total renter</p>
    </div>
<Link to='/'>    <p className='lg:text-[19px] hidden lg:block  lg:w-2/3 mx-auto rounded-lg text-center bg-black  '>Home</p></Link>
<p onClick={logOut} className='lg:text-[19px] hidden lg:block lg:w-2/3 mx-auto rounded-lg  text-center bg-black  '>Log Out</p>

   
</div>
            </div>
            <div className='lg:col-span-4'>
<Outlet/>
            </div>
        </div>
    );
};

export default RenterDashboard;
