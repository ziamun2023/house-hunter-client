import React from 'react';

const ResuableTitle = ({title,subtitle}) => {
    return (
        <div className='grid justify-items-center'>
        <div className='font-bold  text-center text-4xl text-gray-700'>{title}</div>
          <div className='flex gap-9 mt-4'>
          <p className='h-2 rounded-2xl text-center  bg-indigo-500 w-10'></p>
            <p className='h-2 rounded-2xl bg-indigo-500 w-20'></p>
           
          </div>
          <p className='text-gray-400 text-center my-6 text-[19px]'>{subtitle}</p>
          
        </div>
    );
};

export default ResuableTitle;