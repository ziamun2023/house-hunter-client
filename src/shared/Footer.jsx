import React from 'react';
import { BsTwitter } from 'react-icons/Bs';
import { BsInstagram } from 'react-icons/Bs';
import { AiFillMessage } from 'react-icons/Ai';
import { BiLogoFacebook } from 'react-icons/Bi';
import { FaLinkedinIn } from 'react-icons/Fa';
import { MdOutlineBusiness } from 'react-icons/Md';
import { FaSuitcase } from 'react-icons/Fa';
import { MdOutlineTravelExplore } from 'react-icons/Md';
import icon from "../assets/iconmain.png"
import { MdCardTravel } from 'react-icons/Md';
const Footer = () => {
    return (
        <div className='bg-black grid lg:grid-cols-4 h-[220px]'>
    <div className='my-auto grid justify-items-start '>
      
    <p className='text-center'> <b>Address </b>:thirty Three street  </p>
      <p className='text-center'>  <b>District</b> : Dhaka </p>
      <p className='text-center'>  <b>Mobile</b> : 01648795485 </p>
      <p className='text-center'>  Al rights reserver</p>
      <div className='flex my-5 gap-3'>
      <p><BsTwitter/></p>
    <p><BiLogoFacebook/></p>
    <p><FaLinkedinIn/></p>
    <p><BsInstagram/></p>
      </div>
    </div>
    <div className='my-auto grid justify-items-start '>
      
    <p className='text-center'>  <b>Company</b> </p>
      <p className='text-center flex'>  <p className='my-auto'><span><MdOutlineBusiness/></span> </p><p>Housing solution</p></p>
      <p className='text-center flex'>  <p className='my-auto'><span><FaSuitcase/></span> </p><p>Travel partner</p></p>
      <p className='text-center flex'>  <p className='my-auto'><span><MdOutlineTravelExplore/></span> </p><p>World tour</p></p>
      <p className='text-center flex'>  <p className='my-auto'><span><MdCardTravel/></span> </p><p>Apartment purchase</p></p>
     
    </div>
    <div className='my-auto grid justify-items-start '>
      
    <p className='text-center'>  <b>Company</b> </p>
      <p className='text-center flex'>  <p className='my-auto'><span><MdOutlineBusiness/></span> </p><p>Contact</p></p>
      <p className='text-center flex border-2 border-white h-10 w-[270px] bg-white text-black my-2'> email </p>
      <p className='text-center flex'>  <p className='my-auto'><span><AiFillMessage/></span> </p><p>Live chat</p></p>
      <p className='text-center flex'>  <p className='my-auto'><span><MdCardTravel/></span> </p><p>Apartment purchase</p></p>
     
    </div>
    <div className='my-auto'>
      
<img className='w-40 h-40' src={icon} alt="" />
     <p>All rights reserved</p>
    </div>
        </div>
    );
};

export default Footer;