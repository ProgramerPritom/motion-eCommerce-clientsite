import React, { useEffect, useState } from 'react';
import './Product.css';

const Product = ({product}) => {
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
        <div class="card w-full border shadow">
            <figure><img className='w-full' src={productImage} alt="Shoes" /></figure>
            <div class="product-card-body card-body">
                <h2 class="card-title text-xl font-bold">{name}</h2>
                <p>${sale_price} <span className='regular-price-text text-sm text-slate-400 m-4'>${regular_price}</span></p>
                {
                    stock === 0?
                    <p>Out of Stock</p>:<p>In Stock : <span className='font-bold'>{stock}</span> pics</p>}
                <div class="card-actions">
                {
                    stock === 0?
                    <button class="btn btn-primary" disabled>Stock out</button>
                    :
                    <button class="btn btn-primary btn-outline">Add Cart</button>}
                </div>
            </div>
            </div>
    );
};

export default Product;