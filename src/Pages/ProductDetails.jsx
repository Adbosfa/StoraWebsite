import React ,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { addToCart } from '../store/cartSlice';
import { useDispatch} from 'react-redux';
const ProductDetails = () => {
  const dispatch=useDispatch();
  const {id,brandName, title, price, imgUrl, description, diffItems } = useParams();
  const navigate=useNavigate();
  const decodedImgUrl = decodeURIComponent(imgUrl);
  const decodedDiffItems = decodeURIComponent(diffItems).split(',');
  const [selectedImage, setSelectedImage] = useState(decodedImgUrl);
  const [numItem, setNumItem]=useState(1);
  const [size,setSize]=useState("sm");
  
  // Function to handle image click and update the state
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const handleNumChange=(e)=>{
    const num=e.target.value;
    setNumItem(num);
  }
const data={
    id:id,
    brandName:brandName,
    title:title,
    price:price,
    selectedImage:selectedImage,
    diffItems:diffItems,
    size:size,
    numItem:numItem,
  }
  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product data
    dispatch(addToCart(data));
  }; 

  return (
    <div className='py-32 px-24 text-black  '>
    <div className='flex flex-row gap-10 pb-16'>
      <div >
          <div className='bg-[#F6F3F3] p-4 w-full rounded-lg'>
            {/* Display the selected image in the first div */}
        {selectedImage && (
          <img src={selectedImage} alt='Selected' className='w-80 h-96 rounded-lg' />
        )}
          </div>
          <div className='flex flex-row gap-4 mt-5'>
            {decodedDiffItems.map((item, index) => (
            <img key={index} src={item} alt={`Item ${index + 1}`} className='w-14 h-14 rounded-lg'  onClick={() => handleImageClick(item) }/>
          ))}
          </div>
      
      </div>
      <div className='py-5'>
        <p className='text-lg pb-5 text-[#B70000]'>{brandName}</p>
        <h1 className='font-bold text-xl pb-5'>{title}</h1>
        <h2 className='font-bold text-2xl px-3 pb-5'>$ {price}</h2>
        <div className='flex flex-row gap-5 py-4'>
        <input type="radio" id="small" name="size" value="sm" checked={size === "sm"} onChange={()=>setSize("sm")} />
        <label htmlFor="small">Small</label>
  
        <input type="radio" id="medium" name="size" value="md" checked={size === "md"} onChange={()=>setSize("md")} />
        <label htmlFor="medium">Medium</label>
  
        <input type="radio" id="large" name="size" value="lg" checked={size === "lg"} onChange={()=>setSize("lg")}  />
        <label htmlFor="large">Large</label>
  
        <input type="radio" id="extraLarge" name="size" value="xl" checked={size === "xl"} onChange={()=>setSize("xl")}  />
        <label htmlFor="extraLarge">Extra Large</label>
  
        {/* Add more radio buttons for other sizes if needed */}
      </div>
       <div className='py-3'>
       <label htmlFor="number-of-items" className='mr-2'>How Many Items ? </label>
          <input id="number-of-items" type='number' value={numItem} onChange={handleNumChange} max="5" min="1" className='border border-[#B70000] p-2 w-16 rounded-lg'/>
          <button className='bg-[#B70000] text-white p-3 ml-4 rounded-lg' onClick={()=>{handleAddToCart();navigate("/")}}>
          Add to cart 
         </button>
       </div>
        <h1 className='font-bold text-lg pb-2'>Product Details</h1>
        <div className='w-[700px]'>{description}{description}{description}</div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails;
