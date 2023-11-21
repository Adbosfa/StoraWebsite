import React from 'react'
import pic1 from "../assets/Free shipping-pana.svg";
import pic2 from "../assets/Order ahead-pana.svg";
import pic3 from "../assets/save time-pana.svg";
import pic4 from "../assets/Shop giveaway-pana.svg";
import pic5 from "../assets/Self confidence-pana.svg";
import pic6 from "../assets/Service 24_7-pana.svg";
const ServicesProvided = () => {
  return (
    <div className='flex flex-row px-10 gap-20  py-10'>
      <div className="text-center bg-white px-2 py-2 shadow-lg rounded-lg">
        <img src={pic1} className='w-32 h-32'/>
        <h1 className='text-[#B70000] font-bold'>Free Shipping</h1>
      </div>
      <div className="text-center bg-white px-2 py-2 shadow-lg rounded-lg">
      <img src={pic2} className='w-32 h-32'/>
      <h1 className='text-[#B70000] font-bold'>Online Order</h1>
      </div>
      <div className="text-center bg-white px-2 py-2 shadow-lg rounded-lg">
    <img src={pic3} className='w-32 h-32'/>
    <h1 className='text-[#B70000] font-bold'>Save Time</h1>
      </div>
      <div className="text-center bg-white px-2 py-2 shadow-lg rounded-lg">
        <img src={pic4} className='w-32 h-32'/>
        <h1 className='text-[#B70000] font-bold'>Promotions</h1>
      </div>
      <div className="text-center bg-white px-2 py-2 shadow-lg rounded-lg">
      <img src={pic5} className='w-32 h-32'/>
      <h1 className='text-[#B70000] font-bold'>Happy Sell</h1>
      </div>
      <div className="text-center bg-white px-2 py-2 shadow-lg rounded-lg">
    <img src={pic6} className='w-32 h-32'/>
    <h1 className='text-[#B70000] font-bold'>24/7 support</h1>
      </div>
    </div>
  )
}

export default ServicesProvided;
