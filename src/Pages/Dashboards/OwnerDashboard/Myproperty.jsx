import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider';
import { useQuery } from '@tanstack/react-query';

import { Link, useNavigate } from 'react-router-dom';

import { Slide } from 'react-awesome-reveal';
import JSAlert from 'js-alert';
const Myproperty = () => {

const navigate=useNavigate()
   

        
    







    const {user}=useContext(AuthContext)
    const {data: products =[], refetch}=useQuery(['Property'],async()=>{
        const res=await fetch(`http://localhost:5000/allProperty/${user?.email}`,
        {
            headers:{
           
              authorization: `bearer ${localStorage.getItem('access-token')}`
            },
          })
        return res.json()
      })

      

      const handleDelete = id =>  {
        JSAlert.confirm("Are you sure you want to delete this file?").then(function(result) {

    if (result)
    fetch(`http://localhost:5000/deleteProperty/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {

            if(data.acknowledged){
                refetch()
                JSAlert.alert("File deleted!");
            }
    })
    else{
        navigate('/OwnerDashBoard/Myproperty')

    }
           
        

  

});

      }



    return (
        <Slide direction='up'>
            <p className='text-5xl text-black text-center'>All Property</p>
       <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th className='text-black text-[12px]'>#</th> 
        <th className='text-black text-[12px]'>Name</th> 
        <th className='text-black text-[12px]'>Size</th> 
        <th className='text-black text-[12px]'>Rooms</th> 
        <th className='text-black text-[12px]'>bathroom</th> 
        <th className='text-black text-[12px]'>rent</th> 
        <th className='text-black text-[12px]'>address</th> 
        <th className='text-black text-[12px]'>Edit</th>
        <th className='text-black text-[12px]'>Delete</th>
      </tr>
    </thead> 
    <tbody>
     {products.map((item,index)=> <tr key={item.id}>
        <th>{index+1}</th> 
        <td className='text-black'>{item?.name}</td> 
        <td className='text-black'>{item?.roomsize}</td> 
        <td className='text-black'>{item?.bedrooms}</td> 
        <td className='text-black'>{item?.Bathroom}</td> 
   
        <td className='text-black'>{item?.rent}</td> 
        <td className='text-black'>{item?.address}</td> 
      <Link to={`/OwnerDashBoard/edit/${item?._id}`}>  <td className='text-black'><p> edit</p></td> </Link>
        <td className='text-black'><p onClick={()=>handleDelete(item?._id)}>Delete</p></td> 
      
      </tr>)}
    <div>

    

    </div>
  

  
    
     
   
    
  
 
    </tbody> 

  </table>
</div>
        </Slide>
    );
};

export default Myproperty;