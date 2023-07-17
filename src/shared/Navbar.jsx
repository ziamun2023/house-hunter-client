import React, { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/Bs';
import { MdOutlinePeopleAlt } from 'react-icons/Md';
import Hamburger from 'hamburger-react'
// import { Spin as Hamburger } from 'hamburger-react'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)


    return (
        <div className='flex justify-between'>

            {/* Logo */}
            <div>
           <p className='font-semibold text-[20px]'>     House Hunter</p>
            </div>
                  {/* menu */}

        
            <div className='hidden lg:block  '>
             <div className='flex gap-9 primaryText1 font-medium'>
             <p>Home</p>
                <p>Listing</p>
                <p>Blog</p>
                <p>Contact us</p>
             </div>




            </div>
{/* SIgnup sign in  and add new property*/}
            <div className='flex gap-7'>
                <div className=' flex'>
                  <div className='my-auto'><BsFillPlusCircleFill className='colorTheme '/></div>  <p className='primaryText1 font-medium'>Add a new property</p>
                </div>
               <div className='hidden lg:block'>
               <div className='flex me-10'>
                    {/* <p className='my-auto'><MdOutlinePeopleAlt size={20}/></p> */}
             <p className='text-gray-700   font-medium' >      <Hamburger size={30}  toggled={isOpen2} toggle={setOpen2} />    Sign in </p>
                </div>
               </div>
              <div className='lg:hidden block'>
              <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
              <div className={`h-[900px] w-[340px] bg-black absolute ${isOpen===true?'left-0 duration-300':' -left-[400px] duration-300 '} `}>


<div className='grid gap-5 ms-10'>


                <div>
                <div className='text-[20px] gap-9 primaryText1 font-medium'>
             <p>Home</p>
                <p>Listing</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>sign up as Renter</p>
                <p>Sing up as House Owner</p>
                <p>Log in</p>

             </div>
                </div>
             
</div>
              </div>

            </div>
            <div className={`h-[500px]  hidden lg:block w-full rounded-r-2xl  bg-opacity-30 absolute ${isOpen2===true?'left-0 duration-500 top-20':' -left-full top-20 duration-500 '} `}>





         
                <div className='text-[20px]   justify-items-center grid grid-cols-3 gap-9 primaryText1 font-medium'>
          
              <div className='  bg-white text-black  w-full h-[230px] mt-10 rounded-xl'>
          <p className='text-3xl mt-[90px] ms-20'>    sign up as Renter</p>
              </div>
           <div className='  bg-white text-black w-full h-[230px] mt-10 rounded-xl'>
           <p className='text-3xl mt-[90px] ms-20'>    sign up as Renter</p>
           </div>
    <div className='  bg-white text-black w-full h-[230px] mt-10 rounded-xl'>
    <p className='text-3xl mt-[90px] ms-20'>    sign up as Renter</p>
    </div>

          
</div>
              </div>
        
        </div>
    );
};

export default Navbar;