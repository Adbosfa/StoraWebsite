import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' bg-[#B70000] flex flex-row justify-between px-10 py-10'>
      <div className='text-white '>
      <h1 className='font-bold text-xl pb-2'>Sign Up For Newsletters</h1>
      <p className='flex flex-row gap-1 opacity-80'>Get E-mails update about our latest shop and  <p className='text-black font-bold'> special offers.</p></p>
      </div>
      <div className='py-5'>
       <input type="email" placeholder='Please enter your email address.' className='w-[300px] py-2 px-2' />
       <input type="submit" value='Sign Up' className='px-2 bg-[#F05924] text-white py-2 rounded-t-md-md' />
      </div>  
    </div>
  )
}

export default NewsLetter
