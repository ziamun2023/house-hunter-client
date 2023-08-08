import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import ResuableTitle from '../ReusableTitle/ResuableTitle';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { GrLocation } from 'react-icons/Gr';
import { LuBedDouble } from 'react-icons/Lu';
import { FaShower } from 'react-icons/Fa';
import { FaRegBuilding } from 'react-icons/Fa';
import { BsSuitHeart } from 'react-icons/Bs';
// import { BiHeart } from 'react-icons/Bi';
import { BsCashCoin } from 'react-icons/Bs';
import { Link, useNavigate } from 'react-router-dom';
import JSAlert from 'js-alert';
import { Fade, Slide } from 'react-awesome-reveal';
const AllApartment = () => {
    const navigate=useNavigate()
    const [data,setData]=useState([])
    
    const {user}=useContext(AuthContext)
    const {data: products =[], }=useQuery(['Property'],async()=>{
        const res=await fetch(`https://hunter-server-six.vercel.app/allProperty`)
        return res.json()
      })
      useEffect(()=>{
        fetch('https://hunter-server-six.vercel.app/allProperty')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    
const {data: items =[], refetch}=useQuery(['booking'],async()=>{
    const res=await fetch(`https://hunter-server-six.vercel.app/favs/${user?.email}`,
    {
        headers:{
       
          authorization: `bearer ${localStorage.getItem('access-token')}`
        },
      })
    return res.json()
  })

 


      const handleAddtoCart=(id)=>{
 
        const item=data.find(c=>c._id===id)
        const Bookedby=user?.email 
        const rentername=user?.name
        const  {Email,ownername,name,address,city,bedrooms,Bathroom,roomsize,picture,start,Enddata,rent,number,Description}=item
        const cartitem={Bookedby,rentername,Email,ownername,name,address,city,bedrooms,Bathroom,roomsize,picture,start,Enddata,rent,number,Description}
         if(user){
          if (items.length <2  ){
              fetch('https://hunter-server-six.vercel.app/carts',{
              
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(cartitem)
              })
              .then(res=>res.json())
              .then((data)=>{
                if(data.insertedId){
                    JSAlert.alert("Succesfuly booked");
                    refetch()
                 
                  
                }
               
              })
                
              }
              else{
                JSAlert.alert("You cant book more than 2 apartment");
                navigate('/RenterDashboard/MyBooking')
              }
              
                
        }
        else{
         navigate('/login')
        }
      }


    

    return (
        <div data-aos="flip-right"
        data-aos-duration="2000" className='mt-20 text-center lg:mx-20'>
      <Slide direction='up'>    <ResuableTitle title={'All popular Apartments'} subtitle={"Find Your Best choice"}></ResuableTitle></Slide>

    
       <div className='grid gap-10 justify-self-center lg:mx-20 ms-20 lg:ms-0 -me-14 lg:-me-0   lg:grid-cols-3'>
          {
products.slice(0,6).map(c=><div className='rounded-xl relative   h-[550px] grid grid-rows-4 group  bg-white shadow-lg' key={c._id}>
    <div className='relative overflow-hidden  h-[270px] '>
        <img className='w-[500px] h-[270px] z-0 object-cover group-hover:scale-110 duration-500  ' src={c.picture} alt="" />
        <p className='bg-black absolute opacity-0 group-hover:opacity-50 duration-500  z-20 top-0 w-full h-[270px]'></p>
    </div>
    
    <div className='ms-5 mt-36'>
        <p className='text-[25px] text-gray-800 font-bold tracking-wider '>{c.name}</p>
    <div className='flex'>
    <GrLocation size={20} className='text-[rgb(60,110,113)] '/>   <p className='text-[13px] text-gray-400 font-medium tracking-wider '>{c.address}</p>
    </div>
    </div>
    <div className='mx-12 mt-28 py-2 group-hover:w-[300px] duration-700 w-[0px] h-10  px-6 my-3 bg-[rgb(204,244,246)] scale-0 group-hover:scale-100'>
       <div className='grid grid-cols-3 duration-700  opacity-0 group-hover:opacity-100'>
       <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-[rgb(60,110,113)] me-2'/> </div> <div className='text-gray-900'>      {c.bedrooms}</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-[rgb(60,110,113)] me-2'/> </div><div className='text-gray-900' > {c.Bathroom}
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-[rgb(60,110,113)] me-2'/></div>   <div className='text-gray-900'>
        {c.roomsize}
       </div>
        </p>
       </div>
       

     
    </div>
    <div className='mx-2 flex justify-around mt-16'>
        <p className='text-gray-600'><b>Listed on:</b>{c?.date}</p>
        <p className='text-gray-600'><b>Owner :</b>{c?.ownername}</p>
        <p className='text-gray-600'><b>View details </b></p>
        {!user &&  <Link to='/login'><p className='text-gray-600'><b>Book  </b></p></Link>}
    </div>
    <div className='bg-[rgb(60,110,113)] w-20 h-13 flex text-gray-200 font-semibold top-2 left-2 absolute'>
<div>     <BsCashCoin className='pt-2' size={24}/>  </div> <div className=''> 
{c.rent}
</div>
         
    </div>

    {   user?.role==="Renter" &&   <div onClick={()=>handleAddtoCart(c?._id)} className='w-10 h-10 flex text-gray-800 font-semibold top-2 right-2 rounded-2xl  absolute'>
        <BsSuitHeart className='text-gray-800 ' size={50}/>  <p className='text-black bg-white rounded-md'>Book </p>
             
        </div>}
   

</div>)
            }
          </div>
  
         <Link to='/showall'> <p className='text-center text-black text-2xl font-bold py-6'>show all</p></Link>
         
        </div>
    );
};

export default AllApartment;