import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import ResuableTitle from '../ReusableTitle/ResuableTitle';

const AllApartment = () => {
    
    const {user}=useContext(AuthContext)
    const {data: products =[], refetch}=useQuery(['Property'],async()=>{
        const res=await fetch(`http://localhost:5000/allProperty`)
        return res.json()
      })
      

    return (
        <div className='mt-20'>
          <ResuableTitle title={'All popular Apartments'} subtitle={"Find Your Best choice"}></ResuableTitle>

          <div className='grid lg:grid-cols-3'>
            {

            }
          </div>
        </div>
    );
};

export default AllApartment;