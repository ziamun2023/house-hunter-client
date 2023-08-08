import React, { useContext, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/Bs';
import { MdOutlinePeopleAlt } from 'react-icons/Md';
import Hamburger from 'hamburger-react'
import { Fade, Slide } from 'react-awesome-reveal';
import icon from "../assets/iconmain.png"
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
        <div className='flex  relative  z-20 my-2 '>

<div className=' mx-2 hidden lg:flex'><img className='w-10 h-10 ' src={icon} alt="" /> <Fade className='text-black  font-semibold my-auto ms-2' direction='right'><p >House hunter</p></Fade></div>

        
            <div className=' scale-80 lg:scale-100 ms-10 duration-500 my-2 bg-white  '>
             <div className='flex duration-500  gap-9 primaryText1 font-medium'>
             <Link to='/'>    <p className=' duration-500  group'>home
                
                <p className='h-[2px] w-[0px] group-hover:w-[47px] duration-200 bg-black'></p>
            
                
                </p>
                
                </Link>
                <Link to='/showall'>    <p className=' duration-500  group'>Listing
                
                <p className='h-[2px] w-[0px] group-hover:w-[47px] duration-200 bg-black'></p>
            
                
                </p>
                
                </Link>
                <Link to='/blog'>    <p className=' duration-500  group'>blog
                
                <p className='h-[2px] w-[0px] group-hover:w-[27px] duration-200 bg-black'></p>
            
                
                </p>
                
                </Link>
                <Link to='/'>    <p className=' duration-500  group'>contact
                
                <p className='h-[2px] w-[0px] group-hover:w-[57px] duration-200 bg-black'></p>
            
                
                </p>
                
                </Link>
            
                {user?.role==='Owner'? <Link to='/OwnerDashBoard/OwnerProfile'>   <p  className=' duration-500  group'>Dashboard
                <p className='h-[2px] w-[0px] group-hover:w-[47px] duration-200 bg-[rgb(60,110,113)]'></p>
            
                  
                  </p></Link> : ""}
                {user?.role==='Renter'? <Link to='/RenterDashboard/profile'>   <p  className=' duration-500  group'>Dashboard
                <p className='h-[2px] w-[0px] group-hover:w-[47px] duration-200 bg-[rgb(60,110,113)]'></p>
            
                  
                  </p></Link> : ""}

                  {
                exist ? <>    <p  onClick={logOut} className=' duration-500  group'>log out
                
                <p className='h-[2px] w-[0px] group-hover:w-[57px] duration-200 bg-black'></p>
            
                
                </p>
                
                </>:   <p className='relative  group'>log in 
                <p className='h-[2px] z-20  w-[0px] group-hover:w-[57px] duration-200 bg-black'></p>
                    
                    <div className="w-[300px] grid    grid-cols-2 group-hover:opacity-100  duration-300 group-hover:h-[300px]  h-0 absolute   z-30  rounded-3xl bg-white shadow-2xl ">
                                  <div className="group-hover:flex  hidden flex-col gap-8 mt-12 mx-auto ">
                                   <Fade direction="up">
                                 <Link to='/signUpasRent'>  <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">sign up as  Renter</p>
                                   </div></Link>
                                 
                                   </Fade>
                                 <Link to='/signupOwner'>  <Fade direction="up">
                                   <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">signupOwner</p></div>
                                   </Fade></Link>
                                   <Fade direction="up">
                                 <Link to='/login'>  <div className="flex group hover:translate-x-4 duration-300 hover:shadow-inner px-2 py-2 rounded-lg  hover:shadow-inherit "><p className="my-auto me-5"></p><p className=" bg-yellow-300 duration-500 h-[2px] group-hover:w-3 w-0 mx-2 my-auto"></p> <p className="my-auto">Log in</p>
                                   </div></Link>
                                 
                                   </Fade>
                                
                                 
                          
                                </div>
                                </div>
                    
                    
                                    </p>
              }
             </div>




            </div>

      
          
           


                
              
     
       
          
             

           

          
          
    
    
   



    



    

        </div>
    );
};

export default Navbar;