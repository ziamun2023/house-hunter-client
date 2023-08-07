import React from 'react';
import { Slide } from 'react-awesome-reveal';
import search from '../../assets/search.gif'
import select from '../../assets/select.png'
import book from '../../assets/booked.png'
import ResuableTitle from '../ReusableTitle/ResuableTitle';
const Section1 = () => {
    return (
        <div className=''> 
           <div className='mt-10 mx-auto'>
     <ResuableTitle title={'How it works'} subtitle={'Follow these three steps to confirm your apartment'}></ResuableTitle>


        <Slide direction='up'>
        <div className='grid gap-10 lg:grid-cols-3 mt-5 justify-items-center'>
            <div className='bg-white lg:w-[400px] w-[300px]  rounded-sm grid justify-items-center  lg:h-[300px] h-[200px] shadow-xl'>
<img src={search} alt="" />
<p className='text-gray-600 font-semibold tracking-wider'>01. Search your apartment</p>
            </div>
            <div className='bg-white lg:w-[400px] w-[300px]  rounded-sm   grid justify-items-center  lg:h-[300px] h-[200px] shadow-xl'>
            <img src={select} alt="" />
            <p className='text-gray-600 font-semibold tracking-wider'>02. Select your Favourite apartment</p>
            </div>
            <div className='bg-white lg:w-[400px] w-[300px]  rounded-sm   grid justify-items-center  lg:h-[300px] h-[200px] shadow-xl'>
            <img src={book} alt="" />
            <p className='text-gray-600 font-semibold tracking-wider'>03.Book your apartment</p>
            </div>
           </div>
        </Slide>
           </div>
            
        </div>
    );
};

export default Section1;