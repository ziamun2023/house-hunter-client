import React from 'react';
import img from "../../assets/kitchen10.jpg"
import { BsFillPersonFill } from 'react-icons/Bs';
import mini1  from '../../assets/living5.jpg';
import mini2  from '../../assets/apartmentd3.jpg';
import imgwrite  from '../../assets/user.png';
import mini3  from '../../assets/apartmentd6.jpg';
import mini4  from '../../assets/apartmentsky.jpg';
import { BsTwitter } from 'react-icons/Bs';
import { BsInstagram } from 'react-icons/Bs';
import { AiOutlineRight } from 'react-icons/Ai';
import { BiLogoFacebook } from 'react-icons/Bi';
import { FaLinkedinIn } from 'react-icons/Fa';
import mini5  from '../../assets/livving14.jpg';
import { AiOutlineComment } from 'react-icons/Ai';
import { AiOutlineSearch } from 'react-icons/Ai';
import {SlCalender} from 'react-icons/Sl';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Blogs = () => {
    return (
        <div
        data-aos="fade-up"
data-aos-duration="3000" className='grid lg:grid-cols-3 justify-items-center'>

                {/* section1 */}
                {/* section1 */}
                <div className='group col-span-2 lg:mx-28 '>
            
                  <div className='w-[700px] rounded-3xl h-[500px] overflow-hidden'>
                  <img className='w-[700px] h-[500px] object-cover group-hover:scale-125 rounded-3xl duration-1000' src={img} alt="" />
                    </div>  
                    {/* <img className='w-[700px] h-[500px] object-cover group-hover:scale-125 duration-1000' src={img} alt="" /> */}
               
                <div>
                    <p className='text-3xl my-4 text-black font3'>APARTMENTS DESIGNED BY THE LEADING INTERIOR EXPERTS</p>
         
                    <p className='text-[15px] flex gap-8'>
                        <div className='flex'>
            
                            <p className='text-[rgb(60,110,113)]'><BsFillPersonFill/></p>
                      
                            <p>Feb 18, 2023</p>
                            <p>Feb 18, 2023</p>

                        
                        </div>
                     
                    
                        <div className='flex'>
                            <p className='text-[rgb(60,110,113)]' ><    SlCalender/></p>
                   
                            <p>Feb 18, 2023</p>

                            SlCalender
                        </div>
                    
                        <div className='flex'>
                            <p className='text-[rgb(60,110,113)]'><AiOutlineComment/></p>
                           
                            <p>128 comments</p>

                        
                        </div>


                    </p>

                    <p className=''>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est

Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>


<p className='text-3xl text-black my-10 font3'>APARTMENTS DESIGNED BY THE LEADING INTERIOR EXPERTS</p>


<p className=''>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est

Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>


<div className='border-t-2 my-5 flex gap-10 justify-between border-b-2 border-gray-600 h-28'>
    <div className='my-auto gap-3 flex'>
        <p className='font-bold'><p className='font2 my-auto  text-gray-900'>post tags:</p></p> <p className='border-2 border-gray-500 px-4 py-2'>rent</p><p className='border-2 border-gray-500 px-4 py-2'>flat</p><p className='border-2 border-gray-500 px-4 py-2'>house</p>
    </div>
    <div className='my-auto '>
    <p className='font2 my-auto  text-gray-900'> social share:</p><p className='lg:text-[19px] flex gap-4 text-center'>
    <p><BsTwitter/></p>
    <p><BiLogoFacebook/></p>
    <p><FaLinkedinIn/></p>
    <p><BsInstagram/></p>

</p>
    </div>

</div>

<div className=' bg-[rgb(249,250,241) mt-20 flex gap-7 rounded-2xl w-[500px] h-[200px]'>
    <div className='w-[400px] overflow-hidden my-auto'><img  className='w-[400px] overflow-hidden' src={imgwrite} alt="" /></div>
    <div>
    <p className='text-[15px] text-[rgb(60,110,113)] '>Written by</p>
        <p className='text-[20px] text-gray-500  font1 font-semibold'>Jamshed</p>
        <p className='font-serif text-[20px] text-gray-500'>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis repellat architecto quis, laudantium quas delectus veritatis dolores ducimus, saepe ab, accusantium animi!


        </p>
     


    </div>

</div>

<p className='text-2xl'>3 comments</p>


<p className='text-2xl font2'>Leave a comment</p>
<p className='my-2'>your email address will be published</p>
<div className='grid my-4 gap-6'>
    <div className='flex gap-6'>
        <p  ><input className='border-2 border-gray-700 h-10 w-[230px] text-black   bg-white' type="text"  placeholder='Enter name'/></p>
        <p ><input className='border-2 border-gray-700 h-10  w-[230px]  text-black  bg-white' placeholder='Enter email' type="text" /></p>


    </div>
    <p ><input className='border-2 border-gray-700 h-10 w-[500px] text-black  bg-white' placeholder='Topic' type="text" /></p>
    <p><input  className='border-2 border-gray-700 h-40 w-[500px] text-black  bg-white' placeholder='Leave a reply' type="text" /></p>
    <p  ><input className='border-2 border-gray-700 h-10 w-[230px]  text-center text-black   bg-white' type="text" placeholder='Submit' /></p>



</div>
                </div>


 
 

            </div>
            <div >  
            <div className=' col-span-1 flex relative group'>
            <p> <input className='h-10 duration-150 w-[400px] bg-white border-2 flex border-gray-600' type="text" /></p><p className='group-hover:scale-110 absolute top-0 right-36'><AiOutlineSearch size={40}/></p>
            </div>
            <div className='text-start'>
                <p className='text-3xl font-thin font1 text-gray-600'>categories</p>
                <p className='hover:text-black text-gray-500'>Arhitecture</p>
                <p className='hover:text-black text-gray-500'>Real state</p>
                <p className='hover:text-black text-gray-500'>House</p>
                <p className='hover:text-black text-gray-500'>Property</p>
                <p className='hover:text-black text-gray-500'>Residence</p>
            </div>
            <div className='text-start'>
                <p className='text-3xl font-sans mt-20 font1 text-gray-600'>Popular post </p>
                <p className='hover:text-black text-gray-500 flex overflow-hidden mt-10 '><p  className='w-20 rounded-3xl h-20 object-cover' ><img className='w-20 h-20 rounded-xl object-cover' src={mini2} alt="" /></p>
                <div>
                <p className='text-black font-semibold tracking-tight mx-10'>This is a new apartment where i have made an extra section for the.... read more</p>
                    <p className='text-gray-400 mx-10'>APRIL 3, 2022</p>
                </div>
                
                 <p>
                   
                    
                    </p></p>
                    <p className='hover:text-black text-gray-500 flex overflow-hidden mt-10 '><p  className='w-20 rounded-3xl h-20 object-cover' ><img className='w-20 h-20 rounded-xl object-cover' src={mini3} alt="" /></p>
                <div>
                <p className='text-black font-semibold tracking-tight mx-10'>This is a new apartment where i have made an extra section for the.... read more</p>
                    <p className='text-gray-400 mx-10'>APRIL 3, 2022</p>
                </div>
                
                 <p>
                   
                    
                    </p></p>
                    <p className='hover:text-black text-gray-500 flex overflow-hidden mt-10 '><p  className='w-20 rounded-3xl h-20 object-cover' ><img className='w-20 h-20 rounded-xl object-cover' src={mini4} alt="" /></p>
                <div>
                <p className='text-black font-semibold tracking-tight mx-10'>This is a new apartment where i have made an extra section for the.... read more</p>
                    <p className='text-gray-400 mx-10'>APRIL 3, 2022</p>
                </div>
                
                 <p>
                   
                    
                    </p></p>
                    <p className='hover:text-black text-gray-500 flex overflow-hidden mt-10 '><p  className='w-20 rounded-3xl h-20 object-cover' ><img className='w-20 h-20 rounded-xl object-cover' src={mini5} alt="" /></p>
                <div>
                <p className='text-black font-semibold tracking-tight mx-10'>This is a new apartment where i have made an extra section for the.... read more</p>
                    <p className='text-gray-400 mx-10'>APRIL 3, 2022</p>
                </div>
                
                 <p>
                   
                    
                    </p></p>
               
            </div>
            

            </div>

            
        </div>
    );
};

export default Blogs;