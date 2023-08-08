import React, { useContext } from 'react';
import Banner from '../../assets/signupRenterBanner.jpg'
import swal from 'sweetalert2';
import { Slide } from 'react-awesome-reveal';
import decor from '../../assets/homedecor.png'
import decor2 from '../../assets/homedecor2.png'
import { Link, useNavigate } from 'react-router-dom';
import JSAlert from 'js-alert'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { AuthContext } from '../../AuthProvider';
const SignUpRenter = () => {
  const refresh=()=>{
    window.location.reload();
}

const navigate=useNavigate()

  const {user}=useContext(AuthContext)
  console.log(user)
  const handleSUbmit=(event)=>{
    event.preventDefault()
    const name =event.target.name.value
    const email=event.target.email.value
    const password=event.target.password.value
    const role='Renter'
  
    // const formdata= new FormData() 
    const info={name,email,password,role}

    


    fetch(`https://hunter-server-six.vercel.app/users`,{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      if(result){
        
        JSAlert.alert("Succesfuly your account created");
        const itemJSON = JSON.stringify(info);
          localStorage.setItem('ownerInfo', itemJSON);
          localStorage.setItem('access-token', result.token)
          navigate('/RenterDashboard')
          refresh()
    console.log(result)
       }
       else {
        localStorage.removeItem('access-token')
    
       }
    }
       )

  

  }
    return (
        <div data-aos="flip-up"
        data-aos-duration="3000" className='grid lg:grid-cols-2  grid-cols-1 '>
            <div>
<img className='w-[600px] h-[800px] hidden lg:block'  src={Banner} alt="" />
<div className='hidden lg:block absolute top-20'> 
<p className=' text-3xl text-white'>
    Get the best property within your <span className='bg-black  rounded-md px-2'>budget</span>
</p>
<Slide delay={20} direction='left'><p className='text-4xl  text-white mt-5'><span className=' text-[80px] font-bold'>Find</span> Your Best Apartment</p></Slide>
</div>
            </div>
            <div className='lg:-ms-[240px]'>
<Link to='/'>            <p className='bg-[rgb(60,110,113)] shadow-lg rounded-xl  py-2 text-white px-2 right-0 top-5 absolute'>Go Home</p></Link>
         
<p className='text-[40px] text-gray-800  text-center my-10'>Sign Up As Renter</p>
<div className='text-center mx-auto  rounded-xl lg:w-[400px] h-[400px] lg:h-[500px] shadow-xl mt-20 '>
<form onSubmit={handleSUbmit} >
          <div className=''>
            <div>
            <p className='text-gray-400 text-[18px] py-3'>Your name</p>
              <input
                type='text'
                name='name'
                placeholder='Enter Your Name Here'
                className='border-2  bg-white  py-2 px-3 '
              />
            </div>
         
            <div>
            <p className='text-gray-400 text-[18px] py-3'>Your email</p>
              <input
                type='email'
                name='email'
            
                required
                placeholder='Enter Your Email Here'
                className='border-2  bg-white  py-2 px-3 '
              />
            </div>
   
            <div>
            <p className='text-gray-400 text-[18px] py-3'>Set password</p>
           
              <input
                type='password'
                name='password'
                required
                placeholder='*******'
                className='border-2  bg-white  py-2 px-3 '
              />
            </div>
          </div>

          <div>
          
        <input type="submit" className='border-2  mt-5 bg-white  py-2 px-20 shadow-lg' value='Submit' />
       
          </div>
        </form>
        <div className='lg:my-10'>
<Link to='/login'><p className='text-black'>Already have an account? log in </p></Link>
</div>
        

</div>


            </div>
        </div>
    );
};

export default SignUpRenter;