import React from 'react'
import banner1 from "../assets/2150871313.jpg";
import banner2 from "../assets/44796.jpg";
import banner3 from "../assets/44804.jpg";
import banner4 from "../assets/10609.jpg";
import banner5 from "../assets/26936.jpg";
const BannerSection = () => {
  return (
    <div className='px-10 py-10'>
      <div className='flex flex-row gap-5 text-white'>
        <div className='basis-1/2 w-full h-[500px] bg-cover bg-no-repeat px-4 py-32  rounded-sm' style={{backgroundImage:`url(${banner1})`}}>
        <h2 className='opacity-60 py-4 font-semibold '>crazy deals</h2>
        <h1 className='font-bold text-5xl'>buy 1 get 1 free </h1>
        <h2 className='opacity-90 py-4 font-semibold '>the best classic dress is on sale at stora</h2>
        <button className='p-2 bg-[#B70000] rounded-md'>Learn More</button>
        </div>
        <div className='basis-1/2 w-full h-[500px] bg-cover bg-no-repeat py-32 px-4 rounded-sm'  style={{backgroundImage:`url(${banner2})`}}>
        <h2 className='opacity-60 py-4 font-semibold '>summer/spring</h2>
        <h1 className='font-bold text-5xl'>upcomming season</h1>
        <h2 className='opacity-90 py-4 font-semibold '>the best classic dress is on sale at stora</h2>
        <button className='p-2 bg-[#CFA17D] rounded-md'>Learn More</button>
        </div>
      </div>
      <div className='flex flex-row gap-6 my-10'>
      <div className='basis-1/3 w-full h-[300px] bg-cover bg-no-repeat px-4 py-24 rounded-sm' style={{backgroundImage:`url(${banner3})`}}>
      <h1 className='font-bold text-4xl text-white uppercase'>Seasonal sale </h1>
      <h2 className='opacity-90 py-4  text-[#B70000] font-bold text-3xl'>Winter collection - 50% off</h2>
      </div>
      <div className='basis-1/3 w-full h-[300px] bg-cover bg-no-repeat px-4 py-24 rounded-sm' style={{backgroundImage:`url(${banner4})`}}>
      <h1 className='font-bold text-4xl text-white uppercase'>New Footware collection </h1>
      <h2 className='opacity-90 py-4  text-[#B70000] font-bold text-3xl'>Spring / Summer 2024</h2>
      </div>
      <div className='basis-1/3 w-full h-[300px] bg-cover bg-no-repeat px-4 py-24 rounded-sm' style={{backgroundImage:`url(${banner5})`}}>
      <h1 className='font-bold text-4xl text-white uppercase'>T-shirt </h1>
      <h2 className='opacity-90 py-4  text-[#B70000] font-bold text-3xl'>New Trendy</h2>
      </div>
      </div>
    </div>
  )
}

export default BannerSection
