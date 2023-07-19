import React from 'react';
import ResuableTitle from '../ReusableTitle/ResuableTitle';
import CountUp from 'react-countup';

const Cities = () => {
    return (
        <div className='h-[300px] bg-indigo-800'>

<div>
    <div>

    </div>
    <div  className=''>
    <CountUp  start={0} end={12000} delay={3}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
           
    </div>
</div>


            
        </div>
    );
};

export default Cities;