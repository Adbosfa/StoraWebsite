import React from 'react'
import landingImage from "../assets/landingPage.png"
import buttonbg from "../assets/buttonbg-removebg-preview.png"
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className='flex flex-row px-10 pt-16  justify-between bg-[#F2E9E9]'>
        <div className='py-[13%]'>
            <div className=' text-[#5B5B5B] font-semibold pb-4'>Trade-in-offer</div>
            <h1 className='text-4xl  font-bold'>Super value deals</h1>
            <h1 className='text-4xl  font-bold text-[#B70000] pb-2'>On all products</h1>
            <p className=' opacity-50 pb-7'>Save more with coupons & up to 70% off!</p>
            <Link to="shop">
                <div style={{ backgroundImage: `url(${buttonbg})`, backgroundSize: 'cover' }} className='w-full h-[60%] text-center font-bold animate-bounce' >
               
                </div>     
            </Link>
            
        </div>
      <img src={landingImage} className='w-[500px] h-[500px] '/>

    
    </div>
  )
}

export default Landing
