import React, { useEffect, useState } from 'react';
import CartMordal from '../CartMordal/CartMordal';
import './Product.css';

const Product = ({product,handleCart}) => {
    const {id,name,regular_price,sale_price,stock,image} = product;
    const productImage = `https://idbdev.com/motion2/public/images/${image}`;
    // const [productImage,setProductImage]= useState('');
    // useEffect(()=>{
    //     fetch(`https://idbdev.com/motion2/public/images/${image}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setProductImage(data);
    //     })
    // },[image])
    return (
        <div>
            {/* Product */}
            <div className="card w-full border shadow">
            <figure><img className='w-full' src={productImage} alt="Shoes" /></figure>
            <div className="product-card-body card-body">
                <h2 className="card-title text-xl font-bold">{name}</h2>
                <p>${sale_price} <span className='regular-price-text text-sm text-slate-400 m-4'>${regular_price}</span></p>
                {
                    stock === 0?
                    <p>Out of Stock</p>:<p>In Stock : <span className='font-bold'>{stock}</span> pics</p>}
                <div className="card-actions">
                {
                    stock === 0?
                    <button className="btn btn-primary" disabled>Stock out</button>
                    :
                    <button id='banner22-btn' className="btn btn-primary btn-outline" >
                        <label for="Cart-drawer" onClick={()=>handleCart(product)} className="">ADD CART</label>
                        </button>}
                </div>
            </div>
            </div>



        </div>
    );
};

export default Product;