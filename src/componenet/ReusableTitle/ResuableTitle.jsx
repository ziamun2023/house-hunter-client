import React from 'react';

const ResuableTitle = ({title,subtitle}) => {
    return (
        <div className='grid justify-items-center'>
        <div className='  text-center text-2xl lg:ms-0 ms-[140px] text-[20px] lg:text-4xl  text-gray-700 '><p>{title}</p></div>
          <div className='flex gap-9 mt-4'>
          <p className='h-2 rounded-2xl text-center  bg-[rgb(60,110,113)] w-10'></p>
            <p className='h-2 rounded-2xl  bg-[rgb(60,110,113)]  w-20'></p>
           
          </div>
          <p className='text-gray-400 text-center lg:ms-0 ms-20 my-6 text-[19px]'>{subtitle}</p>
          
        </div>
    );
};

export default ResuableTitle;