import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-2.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../feature/products/productSlice';

const ProductCard = (props) => {
    const {grid ,data} =props;
    const dispatch = useDispatch();
    console.log(data);
    let location =useLocation();
    const addToWish = (id) =>{
dispatch(addToWishlist(id))
    }
  return (
    <>
   {
  Array.isArray(data) ? (
    data?.map((item, index) => {
      return(
        
        <div 
        key={index}
        className={ ` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link  
        to='/product/:id' 
        className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent' 
            onClick={(e) =>{addToWish(item?._id)}}>
               <img src={wish} alt='wish'/>
            </button>
            </div>
            <div className='product-image'>
                <img src={watch} className="img-fluid" alt='product image'/>
                <img src={watch1}  className="img-fluid" alt='product image'/>
            </div>
            <div className='product-details'>
                <h6 className="brand">{item?.brand}</h6>
                <h5 className='product-title'>
                   {item?.title}
                    </h5>
                    <ReactStars count={5} 
                    size={24} 
                     value={item?.totalrating.toString()} 
                     edit={false}
                     activeColor="#ffd700"/>
                   <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}
                     dangerouslySetInnerHTML={{ __html: item?.description }}>
                   </p>  
                 <p className='price'>${item?.price}</p>   
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-10'>
                <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt='compare'/>
                    </button> 
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt='view'/>
                    </button>  
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt='add-cart'/>
                    </button>  
                
                    
                </div>
            </div>
        </Link>
    </div>
      )
    })
  ) : (
    <p>Data is not an array or is undefined.</p>
  )
}
  

    </>
  )
}

export default ProductCard