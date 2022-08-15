import React, { useEffect, useState } from 'react';
import CartMordal from '../CartMordal/CartMordal';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setProducts(data.data);
        })
    },[]);
    const handleCart = (product) =>{
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        
    }
    
    return (
        <div className='all-product'>
            <div className='Mordal-container'>
                <CartMordal  cart={cart}></CartMordal>
            </div>
            <div className="products-text flex justify-between p-3">
                <h3 className='text-4xl text-yellow-800 font-bold'>New Arrival</h3>
                <button id='banner-btn' className="btn btn-outline btn-success">See All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    products.slice(0,6).map(product=><Product key={product.id} product={product} handleCart={handleCart} ></Product>)
                }
            </div>
            
            

           

        </div>
    );
};

export default Products;