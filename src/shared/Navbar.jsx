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
        <div className='flex   '>

   

        
            <div className='hidden lg:block my-2 bg-white  '>
             <div className='flex gap-9 primaryText1 font-medium'>
             <Link to='/'>    <p>Home</p></Link>
             <Link to='/showall'>   <p>Listing</p></Link>
                <p>Blog</p>
                <p>Contact us</p>
                <p className='relative group'>log in 
                    
                    <div className="w-[300px] grid   grid-cols-2 group-hover:opacity-100  duration-300 group-hover:h-[300px]  h-0 absolute   z-30  rounded-3xl bg-white shadow-2xl ">
                                  <div className="group-hover:flex  hidden flex-col gap-8 mt-12 mx-auto ">
                                   <Fade direction="up">
                                 <Link to='/signUpasRent'>  <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">sign up as  Renter</p>
                                   </div></Link>
                                 
                                   </Fade>
                                 <Link to='/signupOwner'>  <Fade direction="up">
                                   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">signupOwner</p></div>
                                   </Fade></Link>
                                
                                 
                          
                                </div>
                                </div>
                    
                    
                                    </p>
                {user?.role==='Owner'? <Link to='/OwnerDashBoard/OwnerProfile'>   <p>Dashboard</p></Link> : ""}
                {user?.role==='Renter'? <Link to='/RenterDashboard'>   <p>Dashboard</p></Link> : ""}
             </div>




            </div>

      
          
           


                
              
     
       
          
             

           

          
          
    
    
   



    



    

        </div>
    );
};

export default Navbar;