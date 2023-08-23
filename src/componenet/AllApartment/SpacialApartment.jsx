import React from 'react';
import img1 from "../../assets/apartmentd2.jpg"
import img2 from "../../assets/apartmentd4.jpg"
import { GrLocation } from 'react-icons/Gr';
import { LuBedDouble } from 'react-icons/Lu';
import { FaShower } from 'react-icons/Fa';
import { FaRegBuilding } from 'react-icons/Fa';
import { BsSuitHeart } from 'react-icons/Bs';
import image1 from "../../assets/apartmentd6.jpg"
import image2 from "../../assets/apartmentd1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const SpacialApartment = () => {
    return (
      <div className='-me-28 ms-6 lg:ms-0 lg:-me-0'>
         <div data-aos="flip-up"
        data-aos-duration="2000"
         className='grid lg:grid-cols-2  justify-items-center lg:mx-[300px]'>
            <div>
              <div className='ms-10'>
              <p className='text-[rgb(52,86,115)] font-semibold  text-4xl'>Special property</p>
              <p className='text-[rgb(52,86,115)] font-semibold py-10 my-3  '>
              Find Your Sanctuary in Every Corner
Where Comfort Meets Convenience
Unlock the Door to Exceptional Rentals
Your Next Home Journey Starts Here
              </p>
              <p className='bg-[rgb(52,86,115)]  my-6 h-10 w-20 text-center text-white'>
                Properties

              </p>
                
              </div>
              <div className='relative w-[380px] h-[460px] overflow-hidden group'>
                <img className='w-[380px] h-[460px] overflow-hidden group-hover:scale-125  duration-700' src={img1} alt="" />
                <div className='w-[260px] px-3 h-[110px]  bg-white absolute bottom-0'>
                    <p className=' text-[rgb(52,86,115)] mt-5  text-[15px]'  >Traditional 4 room apartment</p>
                    <div >
                    <div className='text-[13px] mt-5   group-hover:scale-100'>
       <div className='grid grid-cols-3  '>
       <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-gray-400 me-2'/> </div> <div className='text-gray-900'>     4</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-gray-400 me-2'/> </div><div className='text-gray-900' > 5
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-gray-400 me-2'/></div>   <div className='text-gray-900'>
        2400
       </div>
        </p>
       </div>
       

     
    </div>
                    </div>
                </div>
              </div>
            </div>
            <div>
            <div className='relative overflow-hidden group '>
                <img className='w-[340px] h-[430px] overflow-hidden ] group-hover:scale-125  duration-700' src={img2} alt="" />
                <div className='w-[260px] px-3 h-[110px]  bg-white absolute bottom-0'>
                    <p className=' text-[rgb(52,86,115)] mt-5  text-[15px]'  >Traditional 4 room apartment</p>
                    <div >
                    <div className='text-[13px] mt-5   group-hover:scale-100'>
       <div className='grid grid-cols-3  '>
       <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-gray-400 me-2'/> </div> <div className='text-gray-900'>     4</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-gray-400 me-2'/> </div><div className='text-gray-900' > 5
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-gray-400 me-2'/></div>   <div className='text-gray-900'>
        2400
       </div>
        </p>
       </div>
       

     
    </div>
                    </div>
                </div>
              </div>


            </div>
            
        </div>
        <div data-aos="flip-up"
        data-aos-duration="3000"
         className='grid lg:grid-cols-2 mt-20     justify-items-center lg:mx-[300px]'>
            <div>
              <div className='ms-10'>
              <p className='text-[rgb(52,86,115)] font-semibold  text-4xl'>Special property</p>
              <p className='text-[rgb(52,86,115)] font-semibold py-10 my-3  '>
              Find Your Sanctuary in Every Corner
Where Comfort Meets Convenience
Unlock the Door to Exceptional Rentals
Your Next Home Journey Starts Here
              </p>
              <p className='bg-[rgb(52,86,115)]  my-6 h-10 w-20 text-center text-white'>
                Properties

              </p>
                
              </div>
              <div className='relative  overflow-hidden group '>
                <img  className='w-[380px] h-[460px] overflow-hidden group-hover:scale-125  duration-700' src={img1} alt="" />
                <div className='w-[260px] px-3 h-[110px]  bg-white absolute bottom-0'>
                    <p className=' text-[rgb(52,86,115)] mt-5  text-[15px]'  >Traditional 4 room apartment</p>
                    <div >
                    <div className='text-[13px] mt-5   group-hover:scale-100'>
       <div className='grid grid-cols-3  '>
       <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-gray-400 me-2'/> </div> <div className='text-gray-900'>     4</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-gray-400 me-2'/> </div><div className='text-gray-900' > 5
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-gray-400 me-2'/></div>   <div className='text-gray-900'>
        2400
       </div>
        </p>
       </div>
       

     
    </div>
                    </div>
                </div>
              </div>
            </div>
            <div>
            <div className='relative   overflow-hidden group '>
                <img  className='w-[340px] h-[430px] overflow-hidden group-hover:scale-125  duration-700' src={img2} alt="" />
                <div className='w-[260px] px-3 h-[110px]  bg-white absolute bottom-0'>
                    <p className=' text-[rgb(52,86,115)] mt-5  text-[15px]'  >Traditional 4 room apartment</p>
                    <div >
                    <div className='text-[13px] mt-5   group-hover:scale-100'>
       <div className='grid grid-cols-3  '>
       <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-gray-400 me-2'/> </div> <div className='text-gray-900'>     4</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-gray-400 me-2'/> </div><div className='text-gray-900' > 5
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-gray-400 me-2'/></div>   <div className='text-gray-900'>
        2400
       </div>
        </p>
       </div>
       

     
    </div>
                    </div>
                </div>
              </div>


            </div>
            
        </div>
        <div className='grid lg:grid-cols-2'>
         <div className='relative'>
         <div className=''>
      <img className='w-[490px] h-[390px] object-cover'  src={image1} alt="" />
      </div>
      <div className='absolute bg-white  -bottom-20 left-[300px]'>
      <img  className='w-[360px]  h-[360px] pt-5 ps-5 object-cover'  src={image2} alt="" />
      </div>
         </div>
         <div className='me-10'>
              <p className='text-[rgb(52,86,115)] font-semibold  text-4xl'>Special property</p>
              <p className='text-[rgb(52,86,115)] font-semibold py-10 my-3  '>
              Find Your Sanctuary in Every Corner
Where Comfort Meets Convenience
Unlock the Door to Exceptional Rentals
Your Next Home Journey Starts Here
              </p>
              <p className='bg-[rgb(52,86,115)]  my-6 h-10 w-20 text-center text-white'>
                Properties

              </p>
                
              </div>
        </div>
       </div>
    );
};

export default SpacialApartment;