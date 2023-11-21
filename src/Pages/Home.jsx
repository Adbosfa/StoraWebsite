import React from 'react'
import Landing from '../components/Landing';
import ServicesProvided from '../components/ServicesProvided';
import Product from '../components/Product';
import RepairServices from '../components/RepairServices';
import NewArrival from '../components/NewArrival';
import BannerSection from '../components/BannerSection';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import About from '../components/About';
import manager from "../assets/manager.jpg"

const Home = () => {
  return (
    <div className='bg-[#F6F3F3] '>
    <Landing/>
    <ServicesProvided/>
    <Product/>
    <RepairServices/>
    <NewArrival/>
    <BannerSection/>
    <div className='flex flex-row '>
      <div className=' rounded-lg pb-32 mx-10 basis-2/3'>
    <h1  id="about" className='font-bold text-3xl pb-5 text-[#B70000] '>Our Location</h1>
    <About/>
    </div>
    <div className='basis-1/3'>
    <h1  id="about" className='font-bold text-3xl pb-5 text-[#B70000]'>Our Team</h1>
    <div className='flex flex-row  gap-2 py-5'>
      <img src={manager} className='rounded-full w-16 h-16'/>
      <div>
        <h1 className='font-bold'>Ahmed Essam</h1>
      <p className='opacity-50'>Senior Marketing Manager</p>
      <p className='opacity-50'>AhmedEssam@yahoo.com</p>
      </div>
    
    </div>
    <div className='flex flex-row  gap-2 py-5'>
    <img src={manager} className='rounded-full w-16 h-16'/>
    <div>
      <h1 className='font-bold'>Ahmed Essam</h1>
    <p className='opacity-50'>Senior Marketing Manager</p>
    <p className='opacity-50'>AhmedEssam@yahoo.com</p>
    </div>
  
  </div>
  <div className='flex flex-row  gap-2 py-5'>
  <img src={manager} className='rounded-full w-16 h-16'/>
  <div>
    <h1 className='font-bold'>Ahmed Essam</h1>
  <p className='opacity-50'>Senior Marketing Manager</p>
  <p className='opacity-50'>AhmedEssam@yahoo.com</p>
  </div>

</div>
    </div>
    </div>
  
    </div>
  )
}

export default Home;
