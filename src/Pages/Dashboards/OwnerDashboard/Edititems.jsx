import  { useState } from 'react';
import React, { useContext,  } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import JSAlert from 'js-alert'
import { AuthContext } from '../../../AuthProvider';
import { Slide } from 'react-awesome-reveal';
import { useNavigate, useParams } from 'react-router-dom';

const Edititems = () => {
    const id =useParams()
const navigate=useNavigate()
    console.log(id.email)
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());


    
const handleUpdate=(e)=>{
    e.preventDefault()
    const form=e.target 
    // const ownername=form.ownername.value
    // const Email=form.Email.value
    // const name=form.name.value
    // const address=form.address.value
    // const city=form.city.value
    // const bedcount=form.bedrooms.value
    // const bedrooms=parseInt(bedcount)
    // const Bathroom=parseInt(form.Bathroom.value)
    const roomsize=parseInt(form.roomsize.value)
    // const picture=form.picture.value
    const start=startDate
    const Enddata=startDate2
    const rent=parseInt(form.rent.value)
    const number=form.number.value
    const Description=form.Description.value
   const  allInfo={roomsize,start,Enddata,rent,number,Description}

    console.log(allInfo)



    // fetch(`http://localhost:5000/update/${id}`,{
    //     method: "PUT",
    //     headers: {'Content-Type':'application/json'},
    //     body : JSON.stringify(allInfo)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //     if(data.modifiedCount>0){
         
    //         navigate('/mytoys')
          
    //        }
        
    // })

    fetch(`http://localhost:5000/update/${id.email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allInfo),
      })
        .then(res => res.json())
        .then(result => {
        if(result.modifiedCount){
            JSAlert.alert("Succesfuly Document updated");
        navigate('/OwnerDashBoard/Myproperty')
        }
        
        })
    
}


 






const {user}=useContext(AuthContext)
   

        

    return (
        <div>
       

  
<Slide direction='up'>
<div>
            <p className=' text-center text-5xl text-black'>Edit property </p>
            <div>
                <form onSubmit={handleUpdate} className='grid justify-items-center lg:grid-cols-3 gap-4' action="">
              
              
            
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'>  room size</p>
    <input type="text" required className='w-[300px] rounded-md shadow-md border-2 bg-white' name='roomsize'  />
    
</div>
                
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Availability data From</p>
   <p className='w-[300px] rounded-md shadow-md border-2 bg-white'> <DatePicker
      
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    /></p>
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Availability data To</p>
  
    <p  className='w-[300px] rounded-md shadow-md border-2 bg-white'>
    <DatePicker
      
      selected={startDate2}
      onChange={(date) => setStartDate2(date)}
    />
    </p>
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Rent</p>
    <input type="text" required className='w-[300px] rounded-md shadow-md border-2 bg-white' name='rent'  /> 
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Number</p>
    <input type="text" required className='w-[300px] rounded-md shadow-md border-2 bg-white' name='number'  /> 
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Description</p>
    <input type="text" required className='w-[300px] rounded-md shadow-md border-2 bg-white' name='Description'  /> 
    
</div>
                <div>
   
    <input type="submit" value='submit'  /> 
    
</div>


                </form>
            </div>
            
        </div>
</Slide>
    </div>
    );
};

export default Edititems;