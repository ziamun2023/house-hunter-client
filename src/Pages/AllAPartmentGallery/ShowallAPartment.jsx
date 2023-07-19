import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';
import InfiniteScroll from 'react-infinite-scroll-component';

import { GrLocation } from 'react-icons/Gr';
import { LuBedDouble } from 'react-icons/Lu';
import { FaShower } from 'react-icons/Fa';
import { FaRegBuilding } from 'react-icons/Fa';
import { BsSuitHeart } from 'react-icons/Bs';
// import { BiHeart } from 'react-icons/Bi';
import { BsCashCoin } from 'react-icons/Bs';
import ResuableTitle from '../../componenet/ReusableTitle/ResuableTitle';
import Pagination from './Pagination';
import JSAlert from 'js-alert';
import { useNavigate } from 'react-router-dom';


const ShowallAPartment = () => {
const [searchTerm,setSearchTerm]=useState("")


    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionbed, setSelectedOptionbed] = useState('');
   
    const {data: productss =[] }=useQuery(['Property'],async()=>{
        const res=await fetch(`https://server-house-hunter.vercel.app/allProperty`)
        return res.json()
      })
    const handleOptionChange = (e) => {
     setSelectedOption(e.target.value);
   };
    const handleOptionChangebed = (e) => {
   
        setSelectedOptionbed(e.target.value);
   };

   console.log(selectedOption)
const navigate=useNavigate()

    const [data,setData]=useState([])
    const [filter2,setFilter2]=useState(productss)
    console.log(data)
    
    const [currentPage,setCurrentPage]=useState(1)
    const [postPerpage,setPostPerpage]=useState(8)
    
    const {user}=useContext(AuthContext)
    // const rentertoCar=user?.role

  

    useEffect(()=>{
        fetch('https://server-house-hunter.vercel.app/allProperty')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

const lastPostIndex=currentPage * postPerpage
const firstPostIndex=lastPostIndex- postPerpage
const currentPost= filter2.slice(firstPostIndex, lastPostIndex)

const filter=()=>{

    const theCity=selectedOption.toLowerCase()
    const theBEd=selectedOptionbed
  

  console.log(theBEd)
  

const filterBycity=data.filter(c=>c?.city===theCity)
const bed=filterBycity.filter(c=>c?.bedrooms===theBEd)

setFilter2(bed)

}

const allApartment=()=>{
    setFilter2(data)
}
console.log(currentPost.length)

const {data: products =[], refetch}=useQuery(['booking'],async()=>{
    const res=await fetch(`https://server-house-hunter.vercel.app/favs/${user?.email}`,
    {
        headers:{
       
          authorization: `bearer ${localStorage.getItem('access-token')}`
        },
      })
    return res.json()
  })

console.log(products.length)

const search =()=>{

    const filter=productss.filter(c?.name.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(filter)

}
{/* <p className='text-center text-5xl text-black font-bold'>No data found</p> */}
// Email,ownername,name,address,city,bedrooms,Bathroom,roomsize,picture,start,Enddata,rent,number,Description

const handleAddtoCart=(id)=>{
 
  const item=data.find(c=>c._id===id)
  const Bookedby=user?.email 
  const rentername=user?.name
  const  {Email,ownername,name,address,city,bedrooms,Bathroom,roomsize,picture,start,Enddata,rent,number,Description}=item
  const cartitem={Bookedby,rentername,Email,ownername,name,address,city,bedrooms,Bathroom,roomsize,picture,start,Enddata,rent,number,Description}
   if(user){
    if (products.length <2  ){
        fetch('https://server-house-hunter.vercel.app/carts',{
        
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
        <div className='mt-20 lg:mx-20'>
        
          <ResuableTitle title={'All popular Apartments'} subtitle={"Find Your Best choice"}></ResuableTitle>
<div>

<select required className='bg-black' value={selectedOptionbed} onChange={handleOptionChangebed}>
          <option className="text-white" value="">Select bedroom</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value='5'>5 </option>
          <option value="6">6 </option>
          <option value="7">7 </option>
          <option value="8">8 </option>
          <option value="9">9 </option>
         
        </select>

<select required className='bg-black mx-2' value={selectedOption} onChange={handleOptionChange}>
          <option className="text-white" value="">Select city</option>
          <option value="dhaka">Dhaka</option>
          <option value="chittagong">Chittagong</option>
          <option value="Khulna">Khulna</option>
          <option value="gazipu">Gazipur</option>
          <option value="mymensingh">Mymensingh </option>
          <option value="cumilla">Cumilla </option>
          <option value="barisal">Barisal </option>
          <option value="sylhet">Sylhet </option>
          <option value="narayanganj">Narayanganj </option>
          <option value="dinajpur">Dinajpur </option>
         
        </select>
        <button className='bg-red-600 py-2 px-2 rounded-lg text-white mx-5' onClick={filter}>Filter</button>
        <button className='text-2xl py-2 px-3 rounded-md bg-indigo-700 text-white font-semibold' onClick={allApartment}>All Apartment</button>
    <input type="text" onChange={(event)=>{
        setSearchTerm(event.target.value)
    }} />
  
    </div>
          <div className='grid mt-5  gap-10 lg:grid-cols-3'>
        
          {currentPost.map(c=><div className='rounded-xl relative bg-white shadow-lg' key={c._id}>
    <div>
        <img className='w-[500px] h-[270px] object-cover ' src={c.picture} alt="" />
    </div>
    <div className='ms-5'>
        <p className='text-[25px] text-gray-800 font-bold tracking-wider '>{c.name}</p>
    <div className='flex'>
    <GrLocation size={20} className='text-indigo-600 '/>   <p className='text-[13px] text-gray-400 font-medium tracking-wider '>{c.address}</p>
    </div>
    </div>
    <div className='mx-12 grid grid-cols-3 py-4 px-6 my-3 bg-[rgb(247,246,255)] '>
        <p className='flex'>
    <div>
    <LuBedDouble size={20} className='text-indigo-600 me-2'/> </div> <div className='text-gray-900'>      {c.bedrooms}</div>
        </p>
        <p  className='flex'>
       <div>   <FaShower size={20} className='text-indigo-600 me-2'/> </div><div className='text-gray-900' > {c.Bathroom}
     
       </div>
        </p>
        <p  className='flex'>
        <div>
        <FaRegBuilding size={20} className='text-indigo-600 me-2'/></div>   <div className='text-gray-900'>
        {c.roomsize}
       </div>
        </p>

     
    </div>
    <div className='mx-2 flex justify-around my-5'>
        <p className='text-gray-600'><b>Listed on:</b>{c?.date}</p>
        <p className='text-gray-600'><b>Owner :</b>{c?.ownername}</p>
        <p className='text-gray-600'><b>View details </b></p>
    </div>
    <div className='bg-indigo-400 w-20 h-13 flex text-gray-800 font-semibold top-2 left-2 rounded-xl  absolute'>
<div>     <BsCashCoin className='pt-2' size={24}/>  </div> <div className=''> 
{c.rent}
</div>
         
    </div>


    <div onClick={()=>handleAddtoCart(c?._id)} className='hover:bg-indigo-400 w-10 h-10 flex text-gray-800 font-semibold top-2 right-2 rounded-full  absolute'>
        <BsSuitHeart className='text-gray-800 p-1' size={50}/>  
             
        </div>


</div>)

            }

          
      

          
          </div>
          <Pagination setCurrentPage={setCurrentPage} filter={filter} totalPost={filter2?.length}  postPerpage={postPerpage}/>
        </div>
    );
};

export default ShowallAPartment;


