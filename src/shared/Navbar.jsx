import React, { useContext, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/Bs';
import { MdOutlinePeopleAlt } from 'react-icons/Md';
import Hamburger from 'hamburger-react'
import { Fade, Slide } from 'react-awesome-reveal';

import userPhoto from '../assets/user.png'
import admin from '../assets/admin.png'
import owner from '../assets/owner.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
// import { Spin as Hamburger } from 'hamburger-react'
const Navbar = () => {
    const logOut=()=>{
        localStorage.clear();
       window.location.reload()

    }
    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)

const {user}=useContext(AuthContext)
const exist=user?.email
// console.log(user.role)
    return (
        <div className='flex justify-between  '>

            {/* Logo */}
            <div>
           <p className='font-semibold text-[20px]'>     House Hunter</p>
            </div>
                  {/* menu */}

        
            <div className='hidden lg:block my-2 bg-white  '>
             <div className='flex gap-9 primaryText1 font-medium'>
             <Link to='/'>    <p>Home</p></Link>
             <Link to='/showall'>   <p>Listing</p></Link>
                <p>Blog</p>
                <p>Contact us</p>
                {user?.role==='Owner'? <Link to='/OwnerDashBoard/OwnerProfile'>   <p>Dashboard</p></Link> : ""}
                {user?.role==='Renter'? <Link to='/RenterDashboard'>   <p>Dashboard</p></Link> : ""}
             </div>




            </div>
{/* SIgnup sign in  and add new property*/}
            <div className='flex gap-7'>
          
             
                {
                user?.role==="Owner" &&      <Link to='/OwnerDashBoard/addnewProperty'>   <div className=' flex'>
                <div className='my-auto'><BsFillPlusCircleFill className='colorTheme '/></div> <p className='primaryText1 font-medium'>Add a new property</p>
             
          
              </div> </Link>
               }
               <div className='hidden lg:block'>
            {exist? <p onClick={logOut} className='bg-indigo-700 font-bold text-[19px] text-white m-2 px-2 cursor-pointer rounded-md'>Log out</p>:    <div className='flex me-10'>
                    {/* <p className='my-auto'><MdOutlinePeopleAlt size={20}/></p> */}
             <p className='text-gray-700   font-medium' >     <Hamburger size={30}  toggled={isOpen2} toggle={setOpen2} />  </p>
           
                </div>}
               </div>
              <div className='lg:hidden block'>
              <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            
              </div>
            {/* <Link to='/signUpasRent'>  <div className={`h-[400px] bg-indigo-600 shadow-xl rounded-2xl z-20 hidden lg:block  w-[130px] absolute ${isOpen2===true?' right-0 duration-700 top-[80px]':' right-0   -top-[120px] duration-500'} `}>
              <p className='text-center text-2xl font-bold text-white mt-10'>  Already Have an Account</p>
              <p className='text-center text-2xl font-bold text-white mt-10'>  Sign up as Renter</p>
              <p className='text-center text-2xl font-bold text-white mt-10'>  Sign up as House Owner</p>
              <p className='text-center text-2xl font-bold text-white mt-10'>  Admin Log in</p>
              </div></Link> */}
           
      
              <div className={`h-[900px] z-30 w-[340px]  absolute ${isOpen===true?'left-0 duration-300':' -left-[400px] duration-300 '} `}>


<div className='grid gap-5 ms-10'>


                <div>
                <div className='text-[20px] bg-black gap-9 primaryText1 font-medium'>
         <Link to='/'>    <p>Home</p></Link>
             <Link to='/showall'>   <p>Listing</p></Link>
                <p>Blog</p>
                <p>Contact us</p>


                {user?.role==='Owner'? <Link to='/OwnerDashBoard/OwnerProfile'>   <p>Dashboard</p></Link> : ""}
                {user?.role==='Renter'? <Link to='/RenterDashboard/MyBooking'>   <p>Dashboard</p></Link> : ""}
              
        <Link to='/signUpasRent'>  <p>sign up as Renter</p></Link>
                <p>Sing up as House Owner</p>
                <p>Log in</p>

             </div>
                </div>
             
</div>
              </div>

          
              <div className={`h-[600px] bg-black  bg-opacity-75 z-20 hidden lg:block  w-full rounded-r-2xl  absolute ${isOpen2===true?'-left-[39px] duration-700 top-[48px]':' -left-full top-[48px] duration-700 '} `}>


<div className='text-[15px] mt-[160px]  justify-items-center grid grid-cols-3 primaryText1 font-medium'>
    
    <Link to='/signUpasRent'>   <div className='grid justify-items-center w-[250px] bg-opacity-90   shadow-2xl hover:bg-indigo-100 bg-white  hover:text-white tracking-wider duration-500 text-black   mt-10 rounded-xl'>
        <img className='w-[90px] ' src={userPhoto} alt="" />
    <p className='text-2xl text-gray-800 px-10 py-4   text-center'>  <Fade direction='up'>sign up as  Renter</Fade></p>
    
        </div></Link>
<Link to='/signupOwner'>   <div className=' grid justify-items-center w-[250px] bg-opacity-90   shadow-2xl hover:bg-indigo-100 bg-white hover:text-white tracking-wider  duration-500 text-black  mt-10 rounded-xl'>
    <img className='w-[90px] ' src={owner} alt="" />
    <p className='text-2xl text-gray-800 px-10 py-4   text-center'>  <Fade direction='up'>  sign up as House owner</Fade></p>
    
    </div></Link>

<div className=' grid justify-items-center w-[250px] bg-opacity-90   shadow-2xl hover:bg-indigo-100 bg-white  hover:text-white tracking-wider duration-500 text-black  mt-10 rounded-xl'>
<img className='w-[90px] ' src={admin} alt="" />
<p className='text-2xl text-gray-800 px-10 py-4   text-center'>  <Fade  direction='up'>  Admin Log in</Fade></p>

</div>
<Link to='/login'>
<div className='grid justify-items-center bg-opacity-90    hover:bg-indigo-100 bg-white col-span-3  hover:text-white tracking-wider   duration-500 text-black w-[200px] h-[100px] mt-10 rounded-xl'>
<p className='text-2xl text-gray-800 px-10 py-4  mt-[30px] text-center'>  <Fade  direction='up'>  Log in</Fade></p>
</div></Link>

    
</div>



    
</div>
        
        </div>
    );
};

export default Navbar;