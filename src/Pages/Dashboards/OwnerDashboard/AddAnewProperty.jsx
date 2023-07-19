import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import JSAlert from 'js-alert'
import { AuthContext } from '../../../AuthProvider';
import { Slide } from 'react-awesome-reveal';
const AddAnewProperty = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
     setSelectedOption(e.target.value);
   };
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    console.log(startDate)
const {user}=useContext(AuthContext)

    const addNewProperty=(e)=>{
        e.preventDefault()
        const form=e.target 
        const ownername=form.ownername.value
        const Email=form.Email.value
        const name=form.name.value
        const address=form.address.value
        const city=selectedOption
       
        const bedrooms=form.bedrooms.value
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
            JSAlert.alert("Succesfuly added new apartment");
           }
        })



        
    }





    return (
        <Slide direction='up'>
            <p className=' text-center text-5xl text-black'>Add property</p>
            <div>
                <form onSubmit={addNewProperty} className='grid justify-items-center lg:grid-cols-3 gap-4' action="">
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> ownername</p>
    <input type="text" value={user?.name} className='w-[300px] rounded-md shadow-md border-2 bg-white' name='ownername'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Owner Email</p>
    <input type="text" value={user?.email} className='w-[300px] rounded-md shadow-md border-2 bg-white' name='Email'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Name</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='name'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> address</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='address'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> city,</p>
 
    <select className='w-[300px] rounded-md shadow-md border-2 bg-white' value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select product Category</option>
          <option value="dhaka">Dhaka</option>
          <option value="chittagong">Chittagong</option>
          <option value="khulna">Khulna</option>
          <option value="gazipu">Gazipur</option>
          <option value="mymensingh">Mymensingh </option>
          <option value="cumilla">Cumilla </option>
          <option value="barisal">Barisal </option>
          <option value="sylhet">Sylhet </option>
          <option value="narayanganj">Narayanganj </option>
         
        </select>
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> bedrooms</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='bedrooms'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Bathroom</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='Bathroom'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'>  room size</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='roomsize'  />
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'>  picture,</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='picture'  />
    
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
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='rent'  /> 
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Number</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='number'  /> 
    
</div>
                <div>
    <p className='text-gray-600 text-[20px] font-semibold'> Description</p>
    <input type="text" className='w-[300px] rounded-md shadow-md border-2 bg-white' name='Description'  /> 
    
</div>
                <div>
   
    <input type="submit" value='submit'  /> 
    
</div>


                </form>
            </div>
            
        </Slide>
    );
};

export default AddAnewProperty;