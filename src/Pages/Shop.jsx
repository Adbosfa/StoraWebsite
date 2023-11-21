import React ,{useEffect} from 'react'
import ShopHeader from '../components/ShopHeader'
import productImage from "../assets/th.jpeg"
import { fetchProducts } from '../store/ProductSlice';
import { useSelector,useDispatch } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Shop = () => {
  const dispatch=useDispatch();
  const {items}=useSelector((state)=>state.products);
 useEffect(()=>{
   dispatch(fetchProducts())
 }
 
 ,[dispatch])
  return (
    <div className="bg-[#F6F3F3] h-[1300px]" >
      <ShopHeader/>
    <div className='h-screen pt-5 mb-20 '>
    <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="h-[110%]"
      >
      {items.map((item) => (
        
         <SwiperSlide key={item.id} className=" h-full  bg-white p-4  rounded-xl shadow-lg cursor-pointer hover:text-[#B70000]">
         <Link to={`/productDetails/${encodeURIComponent(item.id)}/${encodeURIComponent(item.brandName)}/${encodeURIComponent(item.title)}/${encodeURIComponent(item.price)}/${encodeURIComponent(item.imgUrl)}/${encodeURIComponent(item.description)}/${encodeURIComponent(item.diffItems.join(','))}`}>
           <img src={item.imgUrl} className='px-28 rounded-xl'/>
          <div className='opacity-50 pt-2'>{item.brandName}</div>
          <h1 className='font-bold pt-1 px-12 '>{item.title}</h1>
          <svg width="70" height="70" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.989 0L1.24 0.979L0 1.333L0.777 2.293L0.759 3.492L1.989 3.106L3.219 3.492L3.201 2.292L3.98 1.332L2.739 0.978L1.989 0ZM7.996 0.00799942L7.25 0.983999L6.013 1.337L6.788 2.293L6.77 3.488L7.996 3.103L9.222 3.488L9.204 2.293L9.979 1.337L8.742 0.983999L7.996 0.00799942ZM14.007 0L13.258 0.979L12.018 1.333L12.795 2.293L12.777 3.492L14.007 3.106L15.237 3.492L15.219 2.293L15.998 1.333L14.757 0.979L14.007 0ZM20.015 0.00799942L19.269 0.983999L18.032 1.337L18.807 2.293L18.789 3.488L20.015 3.103L21.241 3.488L21.223 2.293L21.998 1.337L20.761 0.983999L20.015 0.00799942ZM26 0.00799942L25.254 0.983999L24.017 1.337L24.792 2.293L24.774 3.488L26 3.103L27.226 3.488L27.208 2.293L27.983 1.337L26.746 0.983999L26 0.00799942Z" fill="#F8B84E"/>
          </svg>
          <div className='flex flex-row gap-[70%]'>
            <h1 className='font-bold text-lg'>$ {item.price}</h1>
            <div className='rounded-full bg-[#F2E9E9] w-10 h-10 px-3 py-3'>
            <svg width="16" height="16"  viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 16C6.20333 16 5.91332 16.088 5.66664 16.2528C5.41997 16.4176 5.22771 16.6519 5.11418 16.926C5.00065 17.2001 4.97094 17.5017 5.02882 17.7926C5.0867 18.0836 5.22956 18.3509 5.43934 18.5607C5.64912 18.7704 5.91639 18.9133 6.20736 18.9712C6.49834 19.0291 6.79994 18.9993 7.07403 18.8858C7.34811 18.7723 7.58238 18.58 7.7472 18.3334C7.91203 18.0867 8 17.7967 8 17.5C8 17.1022 7.84196 16.7206 7.56066 16.4393C7.27936 16.158 6.89782 16 6.5 16ZM17 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H13.4912C14.1426 10.9979 14.7758 10.7847 15.2959 10.3925C15.816 10.0002 16.195 9.44998 16.376 8.82422L17.9614 3.2749C18.004 3.12607 18.0114 2.9694 17.9831 2.81722C17.9548 2.66505 17.8915 2.52152 17.7983 2.39793C17.7051 2.27435 17.5845 2.17408 17.446 2.10503C17.3075 2.03598 17.1548 2.00003 17 2H4.73907C4.53206 1.41736 4.15044 0.91271 3.64622 0.554814C3.14201 0.196918 2.53971 0.00318075 1.92139 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.92139C2.13847 2.00076 2.34947 2.07182 2.52279 2.20253C2.6961 2.33325 2.82242 2.51659 2.88281 2.7251L3.03833 3.26984L3.03857 3.2749L4.6792 9.01709C3.91576 9.09922 3.21287 9.47094 2.71527 10.0557C2.21766 10.6405 1.96321 11.3938 2.00433 12.1606C2.04544 12.9273 2.37898 13.6491 2.93626 14.1773C3.49355 14.7055 4.23216 15 5 15H17C17.2652 15 17.5196 14.8946 17.7071 14.7071C17.8946 14.5196 18 14.2652 18 14C18 13.7348 17.8946 13.4804 17.7071 13.2929C17.5196 13.1054 17.2652 13 17 13ZM15.6743 4L14.4531 8.27441C14.3928 8.4831 14.2664 8.6666 14.093 8.79742C13.9196 8.92824 13.7084 8.99932 13.4912 9H6.75439L6.49945 8.10779L5.32642 4H15.6743ZM14.5 16C14.2033 16 13.9133 16.088 13.6666 16.2528C13.42 16.4176 13.2277 16.6519 13.1142 16.926C13.0006 17.2001 12.9709 17.5017 13.0288 17.7926C13.0867 18.0836 13.2296 18.3509 13.4393 18.5607C13.6491 18.7704 13.9164 18.9133 14.2074 18.9712C14.4983 19.0291 14.7999 18.9993 15.074 18.8858C15.3481 18.7723 15.5824 18.58 15.7472 18.3334C15.912 18.0867 16 17.7967 16 17.5C16 17.1022 15.842 16.7206 15.5607 16.4393C15.2794 16.158 14.8978 16 14.5 16Z" fill="#B70000"/>
            </svg>
            
            </div>
          </div>  
           </Link>
        </SwiperSlide>
     
      ))}
  
     
      </Swiper>
    </div>
 
    </div>
  )
}

export default Shop
