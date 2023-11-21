import React from 'react'
import headershopimage from "../assets/landingForShoppingCart.jpg"
const ShoppingCartHeader= () => {

      
  return (
    <div className='  py-16  ' >
      <div className='bg-cover w-full h-[300px] py-24 text-center text-white' style={{backgroundImage:`url(${headershopimage})`}}>
        <h1 className='font-bold text-4xl pb-5'>ShoppingCart</h1>
        <p className='font-bold text-2xl text-[#B70000]'>Save more with coupons & up to 70% off!</p>
      </div>
    

    </div>
  )
}

export default ShoppingCartHeader ;
 