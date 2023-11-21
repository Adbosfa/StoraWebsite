import React, { useState ,useEffect } from 'react'
import cartSlice from '../store/cartSlice'
import { removeFromCart } from '../store/cartSlice';
import ShoppingCartHeader from "../components/ShoppingCartHeader";
import { useSelector ,useDispatch} from 'react-redux'
const ShoppingCart = () => {

  const items = useSelector((state) => state.cartSlice.items);
  const [sizeState, setSizeState] = useState({});
  const [numItemState, setNumItemState] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const dispatch = useDispatch();
  
  const handleImageClick = (itemId, imageUrl) => {
    // Update the selected image state for the specific item
    setSelectedImage((prevImages) => ({
      ...prevImages,
      [itemId]: imageUrl,
    }));
  };
  const handleSize = (e, itemId) => {
    const newSize = e.target.value;

    // Update the size state for the specific item
    setSizeState((prevSizeState) => ({
      ...prevSizeState,
      [itemId]: newSize,
    }));
  };
  const handleNumItem = (e, itemId) => {
    const newNum = e.target.value;

    // Update the size state for the specific item
    setNumItemState((prevSizeState) => ({
      ...prevSizeState,
      [itemId]: newNum,
    }));
  };
  const handleDelete = (itemId) => {
    // Dispatch the removeFromCart action with the itemId
    dispatch(removeFromCart(itemId));
  };

  
  const total = () => {
    let sumSubTotal = 0;
  
    items.forEach((el) => {
      sumSubTotal += el.price * (numItemState[el.id] || el.numItem);
    });
  
    console.log(sumSubTotal);
    return sumSubTotal;
  };
  useEffect(() => {
    console.log(sizeState);
    console.log(numItemState);
    console.log(selectedImage);
  }, [sizeState,numItemState,selectedImage]); // Log the size whenever it changes

  return (
    <div >
    <ShoppingCartHeader/>
    <div className="py-32 px-10">
    <table className='w-full'>
      <thead className='border-y-2 '>
       <tr className=' font-bold '>
       <td className='py-2' >REMOVE</td>
       <td>IMAGE</td>
       <td>COLORS</td>
       <td>PRODUCT</td>
       <td>SIZE</td>
       <td>PRICE</td>
       <td>QUANTITY</td>
       <td>SUBTOTAL</td>
       </tr>
      </thead>
      <tbody className='w-full  '>
     
    {
      items.map((item) =>(
        <tr key={item.id} className=' font-bold border-b-2 h-16'>
        <td className='p-2'>   <button onClick={() => handleDelete(item.id)}>
                  <svg width="16" height="16" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0629883 3.16382L3.2268 0L32.063 28.8362L28.8992 32L0.0629883 3.16382Z" fill="#D0001A" />
                    <path d="M0 28.8453L28.8362 0.00900269L32 3.173L3.16381 32.009L0 28.8453Z" fill="#D0001A" />
                  </svg>
                </button>
        </td>
        <td className='px-5 '>{item.selectedImage && (<img src={selectedImage[item.id]?selectedImage[item.id]:item.selectedImage} className='w-9 h-10'/>
        )}</td>
     
        <td className='flex flex-row gap-2 py-5'>
          {Array.isArray(item.diffItems)
            ? item.diffItems.map((el, idx) => (
                <div key={idx} className='w-[10%]'>
                  <img src={el} alt={`Image ${idx}`}  className='w-10 h-10 cursor-pointer'   onClick={() => handleImageClick(item.id, el)}/>
                </div>
              ))
            : typeof item.diffItems === 'string' && item.diffItems.trim() !== ''
            ? item.diffItems.split(',').map((el, idx) => (
                <div key={idx} className='w-[10%] '>
                  <img src={el} alt={`Image ${idx}`} className='w-10 h-10 cursor-pointer'  onClick={() => handleImageClick(item.id, el) }/>
                </div>
              ))
            : null}
        </td>  
        <td>{item.title}</td>
        <td>
        <select
          id="dropdown"
          name="dropdown"
          value={sizeState[item.id] || item.size}
          onChange={(e) => handleSize(e, item.id)}
        >
      
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
        </select>
        </td>
        <td>$ {item.price}</td>
        <td>
        <select
        id="dropdown"
        name="dropdown"
        value={numItemState[item.id] || item.numItem}
        onChange={(e) => handleNumItem(e, item.id)}
      >
    
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
        </td>
        <td>${item.price * (numItemState[item.id]||item.numItem)}</td>
        </tr>
      ))
    }
    </tbody>
    </table>
    <div className='flex flex-row gap-56'>
      <div className='py-10'>
        <h1 className='text-2xl font-bold py-10'>Apply Coupon</h1>
        <input type='text' placeholder='Enter promocode' className='p-2 border mr-2'/><input type="submit" value="Apply" className='bg-[#B70000] text-white font-bold text-center p-2 rounded-md'/>
      </div>
      <div className='py-10'>
      <h1 className='text-2xl font-bold py-10'>Cart Total</h1>
      <div className='flex flex-row justify-between font-bold opacity-50 gap-96'>
        <h2>Cost SubTotal</h2>
        <h2>${total()} </h2>
      </div>
      <div className='flex flex-row justify-between font-bold opacity-50 gap-96 py-5'>
      <h2>Shipping</h2>
      <h2>free </h2>
    </div>
    <div className='flex flex-row justify-between  gap-96 text-2xl font-bold py-5'>
    <h2>Total</h2>
    <h2>$ {total()} </h2>
  </div>
    <button className='mt-2 p-4 bg-[#B70000] text-white rounded-md font-bold '>Proceed To Checkout</button>
      </div>
    </div>
    </div>
    </div>
  )
}
export default ShoppingCart
