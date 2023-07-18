import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import DatePicker from "react-datepicker";
import { Link, useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { Slide } from 'react-awesome-reveal';
import JSAlert from 'js-alert';
const Myproperty = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
const navigate=useNavigate()
    const addNewProperty=(e)=>{
        e.preventDefault()
        const form=e.target 
        const ownername=form.ownername.value
        const Email=form.Email.value
        const name=form.name.value
        const address=form.address.value
        const city=form.city.value
        const bedcount=form.bedrooms.value
        const bedrooms=parseInt(bedcount)
        const Bathroom=parseInt(form.Bathroom.value)
        const roomsize=parseInt(form.roomsize.value)
        const picture=form.picture.value
        const start=startDate
        const Enddata=startDate2
        const rent=parseInt(form.rent.value)
        const number=form.number.value
        const Description=form.Description.value
       const  allInfo={Email,ownername,name,address,city,bedrooms,Bathroom,roomsize,picture,start,Enddata,rent,number,Description}
        console.log(allInfo)
        fetch('http://localhost:5000/postProperty',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(allInfo)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
            JSAlert.alert("Succesfuly account created");
           }
        })
    }


        
    







    const [isOpen, setOpen] = useState(false)
    const {user}=useContext(AuthContext)
    const {data: products =[], refetch}=useQuery(['Property'],async()=>{
        const res=await fetch(`http://localhost:5000/allProperty/${user?.email}`)
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

    <div className={`z-30 absolute ${isOpen? 'left-[500px]' : 'left-0'} `}>
   
            </div>


    </div>
  

  
    
     
   
    
  
 
    </tbody> 

  </table>
</div>
        </Slide>
    );
};

export default Myproperty;