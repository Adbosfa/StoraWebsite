import React from 'react'
import landing2 from "../assets/2150871313.jpg"
const RepairServices = () => {
  return (
    <div className='text-center px-10 py-16 text-[#F2E9E9] bg-cover ' style={{backgroundImage:`url(${landing2})`}}>
      <h2>Repair Services</h2>
      <h1 className='font-bold text-4xl py-3'>Up to <h1 className='text-[#B70000] font-bold text-4xl py-3'>70% Off</h1>- All T-shirt & Accessories</h1>
      <button className='text center text-black animate-bounce bg-[#F2E9E9] rounded-lg p-3 my-10 font-semibold'>Explore More</button>
    </div>
  )
}

export default RepairServices;
